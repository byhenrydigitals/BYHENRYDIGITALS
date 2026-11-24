interface BrandLogoProps {
  compact?: boolean;
}

/**
 * Official BHD brand mark built in Obsidian, Warm Ivory, and Gold.
 */
export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0">
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md border border-[#eab308]/45 bg-[#121620] font-display text-[11px] sm:text-xs font-bold tracking-wider text-[#eab308]"
      >
        BHD
      </span>
      {!compact && (
        <span className="font-display text-[12px] min-[375px]:text-[13.5px] sm:text-[15px] font-bold tracking-tight text-[#f5f4f0]">
          BYHENRYDIGITALS
        </span>
      )}
    </span>
  );
}
