#!/bin/bash
# Script kompresi video testimoni
# Target: kurangi ukuran ~75% dengan kualitas tetap bagus untuk web

INPUT_DIR="public/testimoni"
OUTPUT_DIR="public/testimoni"

# Daftar semua file mp4 di folder testimoni
videos=(
  "ADS MBAK DWI (MARET) (1).mp4"
  "ANDROMEDA GIANTAMA (1).mp4"
  "DOUHA KONSTRUKSI (MBAK KHULUT) (1).mp4"
  "MBAK SOVIA KETANON TULUNGAGUNG (1).mp4"
  "PAK SUGENG (1).mp4"
  "snaptik_7573184715692199189_v3.mp4"
)

echo "====================================="
echo " Kompresi Video Testimoni Douha"
echo "====================================="

total_before=0
total_after=0

for video in "${videos[@]}"; do
  input="$INPUT_DIR/$video"
  # Buat nama temp dulu, lalu replace
  tmp_output="$INPUT_DIR/_compressed_$video"

  if [ ! -f "$input" ]; then
    echo "⚠️  File tidak ditemukan: $input"
    continue
  fi

  size_before=$(du -k "$input" | cut -f1)
  total_before=$((total_before + size_before))

  echo ""
  echo "▶ Kompres: $video"
  echo "  Ukuran sebelum: ${size_before} KB"

  # Kompresi:
  # -vcodec libx264 : codec H.264 (kompatibel semua browser)
  # -crf 28         : kualitas (18=lossless, 28=bagus & kecil, 51=buruk)
  # -preset fast    : kecepatan encode
  # -vf scale=720:-2: resize lebar jadi 720px (portrait video)
  # -acodec aac     : audio codec web-friendly
  # -b:a 96k        : bitrate audio (cukup untuk percakapan)
  # -movflags +faststart : video langsung bisa diplay sebelum full download!
  ffmpeg -i "$input" \
    -vcodec libx264 \
    -crf 28 \
    -preset fast \
    -vf "scale='min(720,iw)':-2" \
    -acodec aac \
    -b:a 96k \
    -movflags +faststart \
    -y "$tmp_output" 2>/dev/null

  if [ $? -eq 0 ]; then
    size_after=$(du -k "$tmp_output" | cut -f1)
    total_after=$((total_after + size_after))
    reduction=$(( (size_before - size_after) * 100 / size_before ))

    # Replace file asli dengan yang sudah dikompres
    mv "$tmp_output" "$input"
    echo "  Ukuran sesudah: ${size_after} KB"
    echo "  ✅ Hemat: ${reduction}%"
  else
    echo "  ❌ Gagal kompres, file asli tetap dipertahankan"
    rm -f "$tmp_output"
  fi
done

echo ""
echo "====================================="
echo " RINGKASAN"
echo "====================================="
echo " Total sebelum : $((total_before / 1024)) MB"
echo " Total sesudah : $((total_after / 1024)) MB"
echo " Total hemat   : $(( (total_before - total_after) / 1024 )) MB"
echo "====================================="
echo ""
echo "✅ Selesai! Silakan commit & push ke GitHub."
