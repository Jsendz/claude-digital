import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function sanityFetch<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "placeholder") {
    console.warn("[Sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Content will be empty until configured.");
    return null;
  }
  try {
    return await client.fetch<T>(query, params ?? {}, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("[Sanity] Fetch error:", err);
    return null;
  }
}
