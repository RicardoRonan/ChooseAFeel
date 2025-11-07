/**
 * Generate canonical URL for a given path
 * @param path - The path to generate canonical URL for (e.g., "/", "/features")
 * @returns The full canonical URL
 */
export function canonicalFor(path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return new URL(path, base).toString();
}



