#!/bin/bash
# Script upload video testimoni ke Backendless File Storage

APP_ID="B19F51F1-260E-4E0F-9441-99C1FC08FCA0"
API_KEY="80E839A6-433C-46EC-BF7D-1C1598A913EC"
BASE_URL="https://api.backendless.com/${APP_ID}/${API_KEY}/files/testimoni"
VIDEO_DIR="public/Testimoni"

videos=(
  "ADS MBAK DWI (MARET) (1).mp4"
  "ANDROMEDA GIANTAMA (1).mp4"
  "DOUHA KONSTRUKSI (MBAK KHULUT) (1).mp4"
  "MBAK SOVIA KETANON TULUNGAGUNG (1).mp4"
  "PAK SUGENG (1).mp4"
  "snaptik_7573184715692199189_v3.mp4"
)

echo "====================================="
echo " Upload Video ke Backendless"
echo "====================================="

for video in "${videos[@]}"; do
  filepath="$VIDEO_DIR/$video"

  if [ ! -f "$filepath" ]; then
    echo "⚠️  File tidak ditemukan: $filepath"
    continue
  fi

  # Encode nama file untuk URL (ganti spasi dengan %20)
  encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$video'))")
  upload_url="${BASE_URL}/${encoded}?overwrite=true"

  echo ""
  echo "▶ Upload: $video"
  
  response=$(curl -s -o /dev/null -w "%{http_code}" \
    -X POST \
    -H "Content-Type: video/mp4" \
    --data-binary "@$filepath" \
    "$upload_url")

  if [ "$response" = "200" ] || [ "$response" = "201" ]; then
    echo "  ✅ Berhasil! URL: ${BASE_URL}/${encoded}"
  else
    echo "  ❌ Gagal (HTTP $response)"
  fi
done

echo ""
echo "====================================="
echo " Upload Selesai!"
echo "====================================="
