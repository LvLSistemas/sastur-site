import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Site-wide branded Open Graph / Twitter image, generated on demand. */
export default async function OgImage() {
  const iconData = await readFile(
    join(process.cwd(), "public/brand/icone-brancao.png")
  );
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0f2846 0%, #135aa3 55%, #1670c7 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={84} height={84} alt="sastur" />
          <span style={{ fontSize: 46, fontWeight: 700, letterSpacing: -1 }}>
            sastur
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            O CRM feito para agências de viagens venderem mais
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#bcdcf7" }}>
            Organize clientes · Acompanhe oportunidades · Venda mais viagens
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 26,
            color: "#9fc8ef",
          }}
        >
          <div
            style={{
              background: "#2cd4b4",
              color: "#0a336a",
              padding: "8px 20px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            Teste grátis
          </div>
          sastur.com.br
        </div>
      </div>
    ),
    { ...size }
  );
}
