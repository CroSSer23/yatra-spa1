"use client";

import { Location } from "@/data/locations";
import { BLUE, BEIGE, CHARCOAL, OFF_WHITE } from "@/lib/carousel";

const PIN_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const PHONE_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.61 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.6a16 16 0 006.29 6.29l.96-.96a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const MAIL_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function AboutSection({ locations }: { locations: Location[] }) {
  return (
    // Brand Book primary palette: OFF_WHITE background, CHARCOAL text
    <section
      id="locations"
      style={{
        background: OFF_WHITE,
        padding: "72px 0 64px",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        {/* "OUR LOCATIONS" — Brand Book deep blue label */}
        <p
          className="font-nunito uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.4em", color: BLUE, marginBottom: "14px", fontWeight: 400 }}
        >
          Our Locations
        </p>
        {/* "ABOUT YĀTRĀ SPA" — Gotu primary font, charcoal */}
        <h2
          className="font-gotu uppercase"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "0.18em", lineHeight: 1.1, color: CHARCOAL }}
        >
          About Yātrā Spa
        </h2>
        {/* Brand beige divider */}
        <div style={{ width: "48px", height: "1px", background: BEIGE, margin: "20px auto 0" }} />
      </div>

      {/* 3 columns on desktop / stacked on mobile */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}
      >
        {locations.map((location, index) => (
          <div
            key={location.id}
            className={`flex flex-col gap-5 py-10 px-2 md:px-10 md:py-0 ${
              index > 0 ? "border-t md:border-t-0 md:border-l" : ""
            }`}
            style={index > 0 ? { borderColor: `${BEIGE}80` } : undefined}
          >
            {/* Location name + spa type */}
            <div>
              <p
                className="font-nunito uppercase whitespace-nowrap"
                style={{ fontSize: "11px", letterSpacing: "0.35em", color: BLUE, marginBottom: "8px", fontWeight: 400 }}
              >
                {location.spaType}
              </p>
              <p
                className="font-gotu uppercase whitespace-nowrap"
                style={{ fontSize: "20px", letterSpacing: "0.12em", lineHeight: 1.2, color: CHARCOAL, marginBottom: "8px" }}
              >
                {location.name}
              </p>
              <div style={{ width: "28px", height: "1px", background: BEIGE }} />
            </div>

            {/* Description */}
            <p
              className="font-nunito"
              style={{ fontSize: "13px", lineHeight: 1.8, letterSpacing: "0.01em", color: `${CHARCOAL}99`, fontWeight: 300 }}
            >
              A sanctuary of refined luxury in the heart of London. YĀTRĀ SPA offers an immersive
              wellness journey blending ancient Eastern rituals with contemporary treatments.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ color: BLUE, marginTop: "1px", flexShrink: 0 }}>{PIN_ICON}</span>
                <p className="font-nunito" style={{ fontSize: "12px", lineHeight: 1.65, letterSpacing: "0.02em", color: `${CHARCOAL}AA`, fontWeight: 300 }}>
                  {location.address}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: BLUE, flexShrink: 0 }}>{PHONE_ICON}</span>
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="font-nunito transition-colors duration-200 hover:text-yatra-terra"
                  style={{ fontSize: "12px", letterSpacing: "0.04em", textDecoration: "none", color: `${CHARCOAL}AA`, fontWeight: 300 }}
                >
                  {location.phone}
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: BLUE, flexShrink: 0 }}>{MAIL_ICON}</span>
                <a
                  href={`mailto:${location.email}`}
                  className="font-nunito transition-colors duration-200 hover:text-yatra-terra"
                  style={{ fontSize: "12px", letterSpacing: "0.02em", textDecoration: "none", color: `${CHARCOAL}AA`, fontWeight: 300 }}
                >
                  {location.email}
                </a>
              </div>
            </div>

            {/* Book Now — deep blue, mt-auto pushes to same baseline in all columns */}
            <a
              href={location.bookUrl}
              className="font-nunito uppercase transition-all duration-200 self-start mt-auto"
              style={{
                padding: "11px 26px",
                borderRadius: "10px",
                fontSize: "11px",
                letterSpacing: "0.1em",
                fontWeight: 500,
                background: "transparent",
                border: `1.5px solid ${BLUE}`,
                color: BLUE,
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = BLUE;
                e.currentTarget.style.color = OFF_WHITE;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = BLUE;
              }}
            >
              Book Now
            </a>
          </div>
        ))}
      </div>

      {/* Footer — brand beige divider + charcoal text */}
      <div style={{ maxWidth: "1100px", margin: "60px auto 0", padding: "0 32px" }}>
        <div style={{ height: "1px", background: `${BEIGE}60` }} />
        <p
          className="font-nunito uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.2em", textAlign: "center", marginTop: "24px", color: `${CHARCOAL}55`, fontWeight: 300 }}
        >
          YĀTRĀ Spa by Montcalm · © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
