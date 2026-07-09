// Script upload video testimoni ke Supabase Storage
// Jalankan: node upload_testimoni.mjs

import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, statSync } from "fs";
import { join, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const SUPABASE_URL = "https://cedvjeavpobgkqlwfiyp.supabase.co";
const SUPABASE_KEY = "sb_publishable_5uep-66FZ50TH4lGv_9B_g_jMiYQ8-G";
const BUCKET = "testimoni";
const VIDEO_DIR = join(__dirname, "public", "Testimoni");
// ─────────────────────────────────────────────────────────────────────────────

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function uploadVideo(filePath) {
  const filename = basename(filePath);
  // Nama file aman untuk storage (tanpa spasi)
  const safeFilename = filename.replace(/\s+/g, "_");

  console.log(`\n📤 Uploading: ${filename}`);
  const fileSize = (statSync(filePath).size / (1024 * 1024)).toFixed(2);
  console.log(`   Size: ${fileSize} MB`);

  const fileBuffer = readFileSync(filePath);

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(safeFilename, fileBuffer, {
      contentType: "video/mp4",
      upsert: true,
    });

  if (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }

  const { data: urlData } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(data.path);

  console.log(`   ✅ URL: ${urlData.publicUrl}`);
  return { filename, safeFilename, url: urlData.publicUrl };
}

async function main() {
  console.log("🚀 Upload Video Testimoni ke Supabase Storage");
  console.log("=".repeat(60));

  // Ambil semua file .mp4
  const files = readdirSync(VIDEO_DIR)
    .filter((f) => f.toLowerCase().endsWith(".mp4"))
    .map((f) => join(VIDEO_DIR, f));

  if (files.length === 0) {
    console.error("❌ Tidak ada file .mp4 di folder public/Testimoni/");
    process.exit(1);
  }

  console.log(`\n📁 Ditemukan ${files.length} video untuk diupload`);

  const results = [];
  for (const file of files) {
    const result = await uploadVideo(file);
    if (result) results.push(result);
  }

  console.log("\n" + "=".repeat(60));
  console.log("✅ UPLOAD SELESAI!\n");
  console.log("📋 Salin array URL berikut ke TestimonialSection.tsx:\n");
  console.log("const videos = [");
  results.forEach((r) => {
    console.log(`  "${r.url}",`);
  });
  console.log("];\n");

  if (results.length < files.length) {
    console.warn(
      `⚠️  ${files.length - results.length} file gagal diupload. Cek error di atas.`
    );
  }
}

main().catch(console.error);
