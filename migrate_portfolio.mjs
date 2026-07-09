import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://cedvjeavpobgkqlwfiyp.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_5uep-66FZ50TH4lGv_9B_g_jMiYQ8-G"
);

const rawData = `
Nama Proyek: Desain Rumah Tropical Limasan Mas Fahrian Lokasi: Durenan, Kab. Trenggalek, Jawa Timur Jumlah Lantai: 1 Lantai Tahun Desain: 2026 Durasi Pengerjaan: 1 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783584888440_Jul_9__2026__03_14_32_PM.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783584908817_Enscape_2025-12-26-21-11-19.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783584910272_Enscape_2025-12-25-14-30-32.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783584917090_Enscape_2025-12-26-11-52-20.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783584919233_Enscape_2025-12-26-12-09-40.png
DESAIN RUMAH TROPICAL LIMASAN
0133DD99-1275-4884-9BE3-93C71C06BD9D
07/09/2026 15:14:54
07/09/2026 15:15:23
Nama Proyek: Renovasi Rumah Tinggal Drg. Sovia Lokasi: Ketanon, Kab. Tulungagung, Jawa Timur Jumlah Lantai: 1 Lantai Tahun Pembangunan: 2026 Durasi Pengerjaan: 1 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783581355051_sovia_1.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783581443769_sovia_2.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783581686761_sovia_5.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783581693538_sovia_4.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783581696180_sovia_3.png
RENOVASI CARPORT, FASAD DAN TERAS
1EBFB470-1312-4976-BFAE-43F504E25D2E
07/09/2026 14:15:59
07/09/2026 14:21:40
Nama Proyek: Desain Rumah Modern Tropical House Mbak Haning Lokasi: Durenan, Kab. Trenggalek, Jawa Timur Jumlah Lantai: 1 Lantai Tahun Desain: 2026 Durasi Pengerjaan: 1 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583794588_Enscape_2026-06-20-18-56-21.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583848082_Enscape_2026-06-20-18-57-27.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583880489_Enscape_2026-06-26-14-50-02.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583889492_Enscape_2026-06-26-14-53-22.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583894363_Enscape_2026-06-23-13-17-49.png
DESAIN RUMAH MODERN TROPICAL HOUSE
3DF1AD21-E277-419A-8D82-08CC7AAE0BDE
07/09/2026 14:57:08
07/09/2026 14:58:30
Nama Proyek: Desain Klinik Modern Teracotta Konsep Lokasi: Jepun, Kab. Tulungagung, Jawa Timur Jumlah Lantai: 1 Lantai Tahun Desain: 2026 Durasi Pengerjaan: 1 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582411103_andro_1.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582433847_andro_5.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582434739_andro_4.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582435408_andro_3.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582436025_andro_2.png
DESAIN KLINIK MODERN TERACOTTA KONSEP
3E5A0638-0C1F-401D-B287-C6139572A86F
07/09/2026 14:33:18
07/09/2026 14:33:59
Nama Proyek: Desain Renovasi Carport, Fasad dan Teras Lokasi: Ketanon, Kab. Tulungagung, Jawa Timur Jumlah Lantai: 1 Lantai Tahun Pembangunan: 2026 Durasi Pengerjaan: 1 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1780628198849_new_1.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1780628206448_new_2.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1780628231954_new_3.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1780628251129_new_4.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783581127705_Enscape_2026-04-01-13-49-53.png
PROYEK DESAIN RENOVASI CARPORT, FASAD DAN TERAS
3FC806CC-FFA0-4D40-AEA4-9F402D22F422
06/05/2026 09:57:51
07/09/2026 14:12:30
Nama Proyek: Desain Rumah Classic Khulut Fitaloka Lokasi: Rejotangan, Kab. Tulungagung, Jawa Timur Jumlah Lantai: 1 Lantai Tahun Desain: 2026 Durasi Pengerjaan: 1 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583386268_REV_3_RT.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583413631_ruang_keluargga_1.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583433205_REV_2_KMR_3.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583443698_Enscape_2026-04-17-21-01-06.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783583450247_3.png
DESAIN RUMAH CLASSIC
73023359-86AB-4230-9619-840C1749A238
07/09/2026 14:51:04
Nama Proyek: Rumah Tinggal Pak Sugeng Tipe Rumah: Tipe 82 Lokasi: Ketanon, Kab. Tulungagung, Jawa Timur Luas Bangunan: 82 m² Luas Tanah: 88 m² Jumlah Lantai: 2 Lantai Tahun Pembangunan: 2025 Durasi Pengerjaan: 7 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580691260_WhatsApp_Image_2026-07-09_at_13.19.14.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580728427_WhatsApp_Image_2026-07-09_at_13.19.13.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580728835_WhatsApp_Image_2026-07-09_at_13.19.14__2_.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580729484_WhatsApp_Image_2026-07-09_at_13.19.16.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580729925_WhatsApp_Image_2026-07-09_at_13.19.17.jpeg
RUMAH MODERN TROPIS LIMASAN
A6EE868F-EEF3-449F-B207-F4FA6080CB01
07/09/2026 14:04:55
07/09/2026 14:05:32
Nama Proyek: Rumah Tinggal Mas Anang Sugiarto Tipe Rumah: Tipe 115 Lokasi: Ngunut, Kab. Tulungagung, Jawa Timur Luas Bangunan: 115 m² Luas Tanah: 90 m² Jumlah Lantai: 2 Lantai Tahun Pembangunan: 2024 Durasi Pengerjaan: 8 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580417068_WhatsApp_Image_2026-07-09_at_13.49.34.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580469588_WhatsApp_Image_2026-07-09_at_13.49.43__1_.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580470026_WhatsApp_Image_2026-07-09_at_13.49.43.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580471316_WhatsApp_Image_2026-07-09_at_13.49.48__1_.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580472828_WhatsApp_Image_2026-07-09_at_13.49.52.jpeg
RUMAH CLASSIC MODERN
A909DE3F-07FD-4748-93A9-4919DFBE9692
07/09/2026 13:56:46
07/09/2026 14:01:16
Nama Proyek: Rumah Tinggal Drg. Siti Shohabiyah Tipe Rumah: Tipe 81 Lokasi: Ketanon, Kab. Tulungagung, Jawa Timur Luas Bangunan: 81 m² Luas Tanah: 103 m² Jumlah Lantai: 2 Lantai Tahun Pembangunan: 2021 Durasi Pengerjaan: 7 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783579379322_WhatsApp_Image_2026-07-09_at_13.12.29__1_.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783579380823_WhatsApp_Image_2026-07-09_at_13.12.29.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783579381250_WhatsApp_Image_2026-07-09_at_13.12.30__1_.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783579381651_WhatsApp_Image_2026-07-09_at_13.12.31__1_.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783581018930_WhatsApp_Image_2026-07-09_at_13.12.32.jpeg
RUMAH ISLAMIC CONCEPT
AB4D2123-1702-4037-8452-A4B514463F30
07/09/2026 13:43:05
07/09/2026 14:10:22
Nama Proyek: Desain Modern Tiny House Mbak Dwi Sulistyoningsih Lokasi: Rejoagung, Kab. Tulungagung, Jawa Timur Jumlah Lantai: 1 Lantai Tahun Desain: 2026 Durasi Pengerjaan: 1 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582845846_3.jpg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582867701_6_1_.jpg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582869748_2__1___1__1_.jpg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582871974_Enscape_2026-02-07-14-13-53.png
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783582874443_Enscape_2026-02-07-10-38-15.png
DESAIN MODERN TINY HOUSE
B91F0E07-E91D-424E-887C-1912268D416E
07/09/2026 14:40:52
07/09/2026 14:41:21
Nama Proyek: Rumah Tinggal Mas Anton Triwododo Tipe Rumah: Tipe 83 Lokasi: Ketanon, Kab. Tulungagung, Jawa Timur Luas Bangunan: 83 m² Luas Tanah: 96 m² Jumlah Lantai: 2 Lantai Tahun Pembangunan: 2024 Durasi Pengerjaan: 7 Bulan
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580930394_WhatsApp_Image_2026-07-09_at_13.17.16.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580963449_WhatsApp_Image_2026-07-09_at_13.16.02__1_.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580967377_WhatsApp_Image_2026-07-09_at_13.16.02__2_.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580967993_WhatsApp_Image_2026-07-09_at_13.16.02.jpeg
https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/portfolio/1783580968880_WhatsApp_Image_2026-07-09_at_13.17.19.jpeg
RUMAH SCANDINAVIAN
EBD3DDB1-3C64-4BC4-8F99-5F6CF31D4E7E
07/09/2026 14:08:54
07/09/2026 14:09:32
`;

async function parseAndMigrate() {
  const lines = rawData.split("\n").map(l => l.trim()).filter(l => l);
  const projects = [];
  
  let currentProject = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith("Nama Proyek:")) {
      if (currentProject) projects.push(currentProject);
      currentProject = {
        description: line,
        images: [],
        title: "",
        objectId: "",
        created: "",
        updated: ""
      };
    } else if (line.startsWith("http")) {
      if (currentProject) currentProject.images.push(line);
    } else if (currentProject && !currentProject.title) {
      currentProject.title = line;
    } else if (currentProject && !currentProject.objectId) {
      currentProject.objectId = line;
    } else if (currentProject && !currentProject.created) {
      currentProject.created = line;
    } else if (currentProject && !currentProject.updated) {
      currentProject.updated = line;
    }
  }
  
  if (currentProject) projects.push(currentProject);

  console.log(`Ditemukan ${projects.length} proyek untuk dimigrasi.\n`);

  for (const project of projects) {
    console.log(`➡️ Migrasi Proyek: ${project.title}`);
    const newImageUrls = [];
    
    for (const oldUrl of project.images) {
      const fileName = oldUrl.split("/").pop();
      console.log(`   📥 Mendownload: ${fileName}`);
      
      try {
        const response = await fetch(oldUrl);
        if (!response.ok) {
          console.error(`   ❌ Gagal download ${fileName}: ${response.statusText}`);
          continue;
        }
        
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        console.log(`   📤 Mengupload ke Supabase...`);
        const { data, error } = await supabase.storage
          .from("portfolio")
          .upload(`migrated_${fileName}`, buffer, {
            contentType: oldUrl.endsWith(".png") ? "image/png" : "image/jpeg",
            upsert: true,
          });
          
        if (error) {
          console.error(`   ❌ Gagal upload ${fileName}: ${error.message}`);
        } else {
          const { data: urlData } = supabase.storage
            .from("portfolio")
            .getPublicUrl(data.path);
          newImageUrls.push(urlData.publicUrl);
        }
      } catch (err) {
         console.error(`   ❌ Error saat proses ${fileName}: ${err.message}`);
      }
    }
    
    // Insert to Supabase DB
    const body = {
      title: project.title,
      description: project.description,
      image1: newImageUrls[0] || null,
      image2: newImageUrls[1] || null,
      image3: newImageUrls[2] || null,
      image4: newImageUrls[3] || null,
      image5: newImageUrls[4] || null,
    };
    
    console.log(`   💾 Menyimpan ke database...`);
    const { error: dbError } = await supabase.from("portfolio").insert([body]);
    
    if (dbError) {
      console.error(`   ❌ Gagal menyimpan ${project.title}: ${dbError.message}`);
    } else {
      console.log(`   ✅ Sukses migrasi ${project.title}!\n`);
    }
  }
  
  console.log("🎉 PROSES MIGRASI SELESAI!");
}

parseAndMigrate().catch(console.error);
