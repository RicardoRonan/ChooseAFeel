import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ColourPal",
    short_name: "ColourPal",
    description:
      "Design and customize accessible website templates with live color and font controls.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6750A4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}




