// YĀTRĀ Brand Book — colour tokens
export const BLUE      = "#324354";   // deep blue accent — "calm of the water"
export const TERRA     = "#A23E29";   // terracotta accent
export const CHARCOAL  = "#3B3A3B";   // near-black for text
export const BEIGE     = "#D1C7BF";   // warm beige divider
export const CREAM     = "#E2E1DF";   // primary background
export const OFF_WHITE = "#EFF0F1";   // secondary background

/** @deprecated use named brand tokens above */
export const GOLD = TERRA;

export function getCarouselTransform(offset: number, step: number): string {
  const tx = `calc(-50% + ${offset * step}vw)`;
  const scale = offset === 0 ? 1 : 0.82;
  return `translateX(${tx}) scale(${scale})`;
}
