"use server";

import { supabase } from "../../lib/supabase";
import { revalidatePath } from "next/cache";

export interface Project {
  objectId: string;
  title: string;
  description: string;
  images: string[];
  created: number;
}

// Helper: ekstrak array gambar dari kolom image1..image5
function extractImages(item: any): string[] {
  const images: string[] = [];
  for (let i = 1; i <= 5; i++) {
    const url = item[`image${i}`];
    if (url && typeof url === "string" && url.trim() !== "") {
      images.push(url.trim());
    }
  }
  return images;
}

// Mapping row Supabase → format Project yang dipakai di seluruh app
function mapRow(item: any): Project {
  return {
    objectId: item.id,
    title: item.title,
    description: item.description,
    images: extractImages(item),
    created: new Date(item.created_at).getTime(),
  };
}

export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);

    if (error) {
      console.error("Error fetching projects:", error.message);
      return [];
    }

    return (data || []).map(mapRow);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProjectById(objectId: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .eq("id", objectId)
      .single();

    if (error || !data) return null;
    return mapRow(data);
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

// Simpan proyek baru — gambar disimpan di kolom terpisah image1..image5
export async function saveProject({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: string[];
}) {
  try {
    const body: Record<string, string | null> = { title, description };
    for (let i = 1; i <= 5; i++) {
      body[`image${i}`] = images[i - 1] ?? null;
    }

    const { error } = await supabase.from("portfolio").insert([body]);

    if (error) {
      console.error("DB Save Error:", error.message);
      return { error: `Gagal menyimpan data: ${error.message}` };
    }

    revalidatePath("/admin/portfolio");
    revalidatePath("/portfolio");
    return { success: true };
  } catch (error) {
    console.error("saveProject Error:", error);
    return { error: "Terjadi kesalahan pada server." };
  }
}

export async function updateProject(
  objectId: string,
  {
    title,
    description,
    images,
  }: { title: string; description: string; images: string[] }
) {
  try {
    const body: Record<string, string | null> = { title, description };
    for (let i = 1; i <= 5; i++) {
      body[`image${i}`] = images[i - 1] ?? null;
    }

    const { error } = await supabase
      .from("portfolio")
      .update(body)
      .eq("id", objectId);

    if (error) {
      console.error("DB Update Error:", error.message);
      return { error: `Gagal memperbarui data: ${error.message}` };
    }

    revalidatePath("/admin/portfolio");
    revalidatePath("/portfolio");
    revalidatePath(`/portfolio/${objectId}`);
    return { success: true };
  } catch (error) {
    console.error("updateProject Error:", error);
    return { error: "Terjadi kesalahan pada server." };
  }
}

export async function deleteProject(objectId: string, images: string[]) {
  try {
    const { error } = await supabase
      .from("portfolio")
      .delete()
      .eq("id", objectId);

    if (error) {
      return { error: "Gagal menghapus data dari database." };
    }

    // Hapus file dari Supabase Storage
    const filePaths: string[] = [];
    for (const imageUrl of images) {
      // URL format: https://xxx.supabase.co/storage/v1/object/public/portfolio/FILENAME
      const match = imageUrl.match(/\/object\/public\/portfolio\/(.+)$/);
      if (match) {
        filePaths.push(match[1]);
      }
    }

    if (filePaths.length > 0) {
      await supabase.storage.from("portfolio").remove(filePaths);
    }

    revalidatePath("/admin/portfolio");
    revalidatePath("/portfolio");
    return { success: true };
  } catch (error) {
    console.error("Delete Project Error:", error);
    return { error: "Terjadi kesalahan pada server." };
  }
}
