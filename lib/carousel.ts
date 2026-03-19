export const GOLD = "#C9A84C";

export function getCarouselTransform(offset: number, step: number): string {
  const tx = `calc(-50% + ${offset * step}vw)`;
  const scale = offset === 0 ? 1 : 0.82;
  return `translateX(${tx}) scale(${scale})`;
}
