#!/usr/bin/env python3
"""Convert one image (HEIC/JPG/PNG) to a web-sized JPG or PNG.

Usage: convert-image.py <input> <output> <max_long_edge>

Requires: pip install pillow pillow-heif
"""
import sys
from PIL import Image, ImageOps
from pillow_heif import register_heif_opener

register_heif_opener()

src, dst, max_edge = sys.argv[1], sys.argv[2], int(sys.argv[3])

im = Image.open(src)
im = ImageOps.exif_transpose(im)  # bake in iPhone rotation
im.thumbnail((max_edge, max_edge), Image.LANCZOS)

if dst.lower().endswith(".png"):
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA")
    im.save(dst, "PNG", optimize=True)
else:
    if im.mode != "RGB":
        im = im.convert("RGB")
    im.save(dst, "JPEG", quality=82, optimize=True, progressive=True, subsampling=2)

print(f"{im.size[0]}x{im.size[1]}", end="")
