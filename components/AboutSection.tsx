"use client";

import { Location } from "@/data/locations";
import { GOLD } from "@/lib/carousel";

const PIN_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);
const PHONE_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.61 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.6a16 16 0 006.29 6.29l.96-.96a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const MAIL_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function AboutSection({ locations }: { locations: Location[] }) {
  return (
    <section style={{ background: "#0d0d0d", padding: "80px 0 72px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <p className="font-cormorant uppercase font-light"
          style={{ fontSize: "11px", letterSpacing: "0.4em", color: GOLD, marginBottom: "14px" }}>
          OUR LOCATIONS
        </p>
        <h2 className="font-cormorant text-white uppercase font-light"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "0.15em", lineHeight: 1.1 }}>
          About Yātrā Spa
        </h2>
        <div style={{ width: "48px", height: "1px", background: GOLD, margin: "20px auto 0" }} />
      </div>

      {/* 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {locations.map((location, index) => (
          <div
            key={location.id}
            style={{
              padding: "0 40px",
              borderLeft: index > 0 ? `1px solid ${GOLD}33` : "none",
              display: "flex", flexDirection: "column", gap: "20px",
            }}
          >
            {/* Location name */}
            <div>
              <p className="font-cormorant text-white uppercase font-light"
                style={{ fontSize: "22px", letterSpacing: "0.18em", lineHeight: 1.2, marginBottom: "6px" }}>
                {location.name}
              </p>
              <div style={{ width: "28px", height: "1px", background: `${GOLD}99` }} />
            </div>

            {/* About text */}
            <p className="font-inter text-white/50 font-light"
              style={{ fontSize: "13px", lineHeight: 1.75, letterSpacing: "0.02em" }}>
              A sanctuary of refined luxury in the heart of London. YĀTRĀ SPA offers an immersive
              wellness journey blending ancient Eastern rituals with contemporary treatments.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ color: GOLD, marginTop: "1px", flexShrink: 0 }}>{PIN_ICON}</span>
                <p className="font-inter text-white/55 font-light"
                  style={{ fontSize: "12px", lineHeight: 1.6, letterSpacing: "0.03em" }}>
                  {location.address}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: GOLD, flexShrink: 0 }}>{PHONE_ICON}</span>
                <a href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="font-inter font-light transition-colors duration-200 hover:text-[#C9A84C] text-white/55"
                  style={{ fontSize: "12px", letterSpacing: "0.05em", textDecoration: "none" }}>
                  {location.phone}
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: GOLD, flexShrink: 0 }}>{MAIL_ICON}</span>
                <a href={`mailto:${location.email}`}
                  className="font-inter font-light transition-colors duration-200 hover:text-[#C9A84C] text-white/55"
                  style={{ fontSize: "12px", letterSpacing: "0.03em", textDecoration: "none" }}>
                  {location.email}
                </a>
              </div>
            </div>

            {/* Book button — hover via Tailwind */}
            <a href={location.bookUrl}
              className="font-inter font-medium uppercase transition-all duration-200 hover:bg-[#C9A84C] hover:text-black/90 self-start"
              style={{
                marginTop: "8px", padding: "10px 24px", borderRadius: "10px",
                fontSize: "12px", letterSpacing: "0.08em",
                border: `1px solid ${GOLD}80`, color: GOLD,
                textDecoration: "none", display: "inline-block",
              }}>
              Book Now
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ maxWidth: "1100px", margin: "64px auto 0", padding: "0 32px" }}>
        <div style={{ height: "1px", background: `${GOLD}26` }} />
        <p className="font-inter text-white/20 font-light uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.15em", textAlign: "center", marginTop: "24px" }}>
          © {new Date().getFullYear()} YĀTRĀ SPA · London
        </p>
      </div>
    </section>
  );
}
