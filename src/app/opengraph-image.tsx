import { ImageResponse } from "next/og";

export const alt = "Faiz Muhammad — AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background: "#f8faf7",
          color: "#26372f",
          border: "16px solid #e9f0e9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <span>FAIZ.</span>
          <span style={{ color: "#4d6b59", fontSize: 20, fontWeight: 500 }}>
            AI ENGINEERING · SOFTWARE DEVELOPMENT
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Building useful things with</span>
            <span style={{ color: "#4d6b59" }}>AI and code.</span>
          </div>
          <div style={{ fontSize: 28, color: "#51665b", maxWidth: 860 }}>
            Faiz Muhammad — Applied AI, RAG systems, LangGraph agents, and
            FastAPI backends.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#51665b",
            borderTop: "2px solid #dfe8df",
            paddingTop: 24,
          }}
        >
          <span>github.com/Faiz-l</span>
          <span>faiz.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
