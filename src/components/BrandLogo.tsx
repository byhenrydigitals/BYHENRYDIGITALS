interface BrandLogoProps {
  compact?: boolean;
}

/**
 * Temporary BHD brand mark built in Black, White, and Gold.
 * Replace this component's markup with your official SVG/PNG logo asset when ready.
 */
export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0">
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md border border-[#d4af37]/50 bg-[#141414] font-display text-[11px] sm:text-xs font-bold tracking-wider text-[#eab308]"
      >
        BHD
      </span>
      {!compact && (
        <span className="font-display text-[12.5px] min-[375px]:text-[13.5px] sm:text-[15px] font-bold tracking-tight text-[#f5f5f4]">
          BYHENRYDIGITALS
        </span>
      )}
    </span>
  );
}
