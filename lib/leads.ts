/**
 * Lead submission shared by the contact form and the paid-ads landing form.
 *
 * Leads POST as JSON to the GoHighLevel inbound webhook configured in
 * NEXT_PUBLIC_GHL_WEBHOOK_URL. Attribution captured on landing
 * (UTM params, gclid, fbclid) rides along with every submission.
 */

export const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL ?? ''

export const isLeadWebhookConfigured = () => /^https?:\/\//.test(GHL_WEBHOOK_URL)

export interface Attribution {
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  utm_content?: string | null
  utm_term?: string | null
  gclid?: string | null
  fbclid?: string | null
  landing_page?: string | null
  referrer?: string | null
}

const ATTRIBUTION_KEY = 'utm_data'

/** Read attribution from the current URL, falling back to what an earlier page stored. */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {}

  let stored: Attribution = {}
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || '{}')
  } catch {
    stored = {}
  }

  const params = new URLSearchParams(window.location.search)
  const fromUrl: Attribution = {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_content: params.get('utm_content'),
    utm_term: params.get('utm_term'),
    gclid: params.get('gclid'),
    fbclid: params.get('fbclid'),
  }

  const hasUrlData = Object.values(fromUrl).some(Boolean)
  const merged: Attribution = hasUrlData
    ? { ...stored, ...fromUrl, landing_page: window.location.pathname, referrer: document.referrer || null }
    : { landing_page: window.location.pathname, referrer: document.referrer || null, ...stored }

  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(merged))
  } catch {
    /* storage unavailable, nothing to persist */
  }
  return merged
}

export class LeadSubmitError extends Error {}

/**
 * Submit a lead. Throws LeadSubmitError when the webhook is not configured
 * or the request fails, so callers can show a real error instead of a fake success.
 */
export async function submitLead(payload: Record<string, unknown>): Promise<void> {
  if (!isLeadWebhookConfigured()) {
    throw new LeadSubmitError('Lead webhook is not configured (NEXT_PUBLIC_GHL_WEBHOOK_URL)')
  }

  const res = await fetch(GHL_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      page_url: typeof window !== 'undefined' ? window.location.href : undefined,
      submitted_at: new Date().toISOString(),
    }),
  })

  if (!res.ok) {
    throw new LeadSubmitError(`Lead webhook responded ${res.status}`)
  }
}
