#!/usr/bin/env bash
# Renders the cover and the 3D mockup (needs Google Chrome, cwebp and ImageMagick).
#   design/cover.html   → design/cover.png + src/assets/book-cover.webp  (flat front cover)
#   design/mockup.html  → src/assets/book-mockup.webp                    (3D book, transparent)
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP="$(mktemp -d)"
shot() { "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --default-background-color=00000000 --allow-file-access-from-files --virtual-time-budget=5000 \
  --window-size="$1" --screenshot="$2" "file://$PWD/$3" 2>/dev/null; }

shot 1500,1850 "$TMP/cover.png" design/cover.html
cp "$TMP/cover.png" design/cover.png
cwebp -quiet -q 90 design/cover.png -o src/assets/book-cover.webp

shot 1300,1400 "$TMP/mockup.png" design/mockup.html
magick "$TMP/mockup.png" -trim +repage -bordercolor none -border 24 "$TMP/mockup-trim.png"
cwebp -quiet -q 90 -alpha_q 100 "$TMP/mockup-trim.png" -o src/assets/book-mockup.webp

rm -rf "$TMP"
echo "Wrote design/cover.png, src/assets/book-cover.webp and src/assets/book-mockup.webp"
