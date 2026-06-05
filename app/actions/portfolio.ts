"use server";

import { BACKENDLESS_URL } from "../../lib/backendless";
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
  // Fallback ke format lama jika tidak ada image1..image5
  if (images.length === 0) {
    if (Array.isArray(item.images)) {
      return item.images;
    } else if (typeof item.images === "string" && item.images) {
      try { return JSON.parse(item.images); } catch { return [item.images]; }
    } else if (item.imageUrl) {
      return [item.imageUrl];
    }
  }
  return images;
}

export async function getProjects(): Promise<Project[]> {
  try {
    let allProjects: any[] = [];
    let offset = 0;
    const pageSize = 100;

    while (allProjects.length < 1000) {
      const res = await fetch(`${BACKENDLESS_URL}/data/Portfolio?sortBy=created%20desc&pageSize=${pageSize}&offset=${offset}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        const errorText = await res.text();
        if (errorText.includes('"code":1009') || errorText.includes("Table not found")) break;
        console.error("Failed to fetch projects", errorText);
        break;
      }

      const data = await res.json();
      allProjects = allProjects.concat(data);

      if (data.length < pageSize) break;
      offset += pageSize;
    }

    return allProjects.slice(0, 1000).map((item: any) => ({
      ...item,
      images: extractImages(item),
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProjectById(objectId: string): Promise<Project | null> {
  try {
    const res = await fetch(`${BACKENDLESS_URL}/data/Portfolio/${objectId}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;

    const item = await res.json();
    return {
      ...item,
      images: extractImages(item),
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

// Simpan proyek baru — gambar disimpan di kolom terpisah image1..image5
// agar kompatibel dengan tipe STRING default Backendless (max 500 chars per kolom)
export async function saveProject({ title, description, images }: { title: string; description: string; images: string[] }) {
  try {
    const body: Record<string, string> = { title, description };
    images.slice(0, 5).forEach((url, i) => {
      body[`image${i + 1}`] = url;
    });

    const dbRes = await fetch(`${BACKENDLESS_URL}/data/Portfolio`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!dbRes.ok) {
      const errBody = await dbRes.text();
      console.error("DB Save Error:", errBody);
      return { error: `Gagal menyimpan data: ${errBody}` };
    }

    revalidatePath("/admin/portfolio");
    revalidatePath("/portfolio");
    return { success: true };
  } catch (error) {
    console.error("saveProject Error:", error);
    return { error: "Terjadi kesalahan pada server." };
  }
}

export async function updateProject(objectId: string, { title, description, images }: { title: string; description: string; images: string[] }) {
  try {
    const body: Record<string, string | null> = { title, description };
    // Set image1..image5 dari array gambar baru
    for (let i = 1; i <= 5; i++) {
      body[`image${i}`] = images[i - 1] ?? null;
    }

    const dbRes = await fetch(`${BACKENDLESS_URL}/data/Portfolio/${objectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!dbRes.ok) {
      const errBody = await dbRes.text();
      console.error("DB Update Error:", errBody);
      return { error: `Gagal memperbarui data: ${errBody}` };
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
    const dbRes = await fetch(`${BACKENDLESS_URL}/data/Portfolio/${objectId}`, {
      method: "DELETE",
    });

    if (!dbRes.ok) {
      return { error: "Gagal menghapus data dari database." };
    }

    // Hapus file dari Storage
    for (const imageUrl of images) {
      const urlParts = imageUrl.split("/files/");
      if (urlParts.length === 2) {
        const filePath = urlParts[1];
        await fetch(`${BACKENDLESS_URL}/files/${filePath}`, { method: "DELETE" });
      }
    }

    revalidatePath("/admin/portfolio");
    revalidatePath("/portfolio");
    return { success: true };
  } catch (error) {
    console.error("Delete Project Error:", error);
    return { error: "Terjadi kesalahan pada server." };
  }
}
