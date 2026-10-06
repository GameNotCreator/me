import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Hedi Fourati - web and app developer, founder, and EPFL Computer Science student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(path.join(process.cwd(), "public", "photo.jpg"));
  const portraitUrl = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", padding: "64px", background: "#faf4ee", color: "#24201e", alignItems: "center", gap: "56px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", fontSize: 23, letterSpacing: 3, marginBottom: 28 }}>PORTFOLIO</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginBottom: 24 }}>Hedi Fourati</div>
        <div style={{ display: "flex", fontSize: 32, lineHeight: 1.3 }}>Web &amp; app developer · Founder</div>
        <div style={{ display: "flex", fontSize: 25, color: "#62554e", marginTop: 18 }}>EPFL Computer Science student</div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 44 }}>thehnh.tech</div>
      </div>
      <img src={portraitUrl} alt="" width={300} height={321} style={{ borderRadius: 18 }} />
    </div>,
    size,
  );
}
