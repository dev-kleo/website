/* eslint-disable @next/next/no-img-element -- static SVGs, nothing to optimize */
// Decorative (alt=""): the "Dey Intelligence" text always sits next to it.
export function BrandMark({ size = 28, dark = false }: { size?: number; dark?: boolean }) {
  const img = (src: string, cls: string) => <img className={cls} src={src} alt="" width={size} height={size} />;
  return dark ? img("/mark-dark.svg", "brand-mark") : <>{img("/mark.svg", "brand-mark brand-mark-light")}{img("/mark-dark.svg", "brand-mark brand-mark-dark")}</>;
}
