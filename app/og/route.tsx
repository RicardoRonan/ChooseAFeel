import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const template = searchParams.get("template");

  const templateName = template
    ? template
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6750A4",
          backgroundImage:
            "linear-gradient(135deg, #6750A4 0%, #03DAC6 50%, #FF6B6B 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            maxWidth: "1000px",
            margin: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #6750A4 0%, #03DAC6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
            }}
          >
            ChooseAFeel
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#374151",
              textAlign: "center",
              marginBottom: templateName ? "16px" : "0",
              lineHeight: "1.4",
            }}
          >
            Design and export accessible website themes, instantly.
          </p>
          {templateName && (
            <p
              style={{
                fontSize: "24px",
                color: "#6B7280",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              {templateName} Template
            </p>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}



