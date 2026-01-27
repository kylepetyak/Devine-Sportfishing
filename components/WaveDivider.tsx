export default function WaveDivider({
  fill = '#0f2744',
  flip = false,
  className = '',
}: {
  fill?: string
  flip?: boolean
  className?: string
}) {
  return (
    <div
      className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg
        className="w-[200%] h-24 animate-wave"
        viewBox="0 0 2880 128"
        preserveAspectRatio="none"
      >
        <path
          fill={fill}
          d="M0,64 C360,128 720,0 1080,64 C1440,128 1800,0 2160,64 C2520,128 2880,0 2880,64 L2880,128 L0,128 Z"
        />
      </svg>
    </div>
  )
}
