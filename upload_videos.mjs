import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APP_ID = "B19F51F1-260E-4E0F-9441-99C1FC08FCA0";
const API_KEY = "80E839A6-433C-46EC-BF7D-1C1598A913EC";
const BASE_URL = `https://api.backendless.com/${APP_ID}/${API_KEY}/files/testimoni`;
const VIDEO_DIR = path.join(__dirname, "public/Testimoni");

const videos = [
  "ADS MBAK DWI (MARET) (1).mp4",
  "ANDROMEDA GIANTAMA (1).mp4",
  "DOUHA KONSTRUKSI (MBAK KHULUT) (1).mp4",
  "MBAK SOVIA KETANON TULUNGAGUNG (1).mp4",
  "PAK SUGENG (1).mp4",
  "snaptik_7573184715692199189_v3.mp4",
];

async function uploadVideo(filename) {
  const filepath = path.join(VIDEO_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.log(`⚠️  File tidak ditemukan: ${filepath}`);
    return null;
  }

  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  const uploadUrl = `${BASE_URL}/${safeName}?overwrite=true`;

  console.log(`\n▶ Upload: ${filename}`);
  console.log(`  → ${uploadUrl}`);

  const fileBuffer = fs.readFileSync(filepath);

  // Gunakan FormData & Blob built-in Node.js 18+
  const fd = new FormData();
  fd.append("file", new Blob([fileBuffer], { type: "video/mp4" }), safeName);

  const res = await fetch(uploadUrl, { method: "POST", body: fd });
  const text = await res.text();

  if (!res.ok) {
    console.log(`  ❌ Gagal (HTTP ${res.status}): ${text}`);
    return null;
  }

  let data;
  try { data = JSON.parse(text); } catch {
    console.log(`  ❌ Response bukan JSON: ${text}`);
    return null;
  }

  const fileURL = data.fileURL || `${BASE_URL}/${safeName}`;
  console.log(`  ✅ Berhasil!`);
  return { original: filename, safeName, url: fileURL };
}

async function main() {
  console.log("=====================================");
  console.log(" Upload Video Testimoni ke Backendless");
  console.log("=====================================");

  const results = [];
  for (const video of videos) {
    const result = await uploadVideo(video);
    if (result) results.push(result);
  }

  console.log("\n=====================================");
  console.log(` Hasil: ${results.length}/${videos.length} berhasil`);
  console.log("=====================================");

  if (results.length > 0) {
    console.log("\n📋 Salin URL berikut ke TestimonialSection.tsx:\n");
    console.log("const videos = [");
    for (const r of results) {
      console.log(`  "${r.url}", // ${r.original}`);
    }
    console.log("];");
  }
}

main().catch(console.error);
