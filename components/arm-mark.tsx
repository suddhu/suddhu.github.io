export function ArmMark() {
  return (
    <svg
      className="arm-mark h-6 w-6 text-black sm:h-7 sm:w-7 dark:text-zinc-100"
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <rect x="0" y="30" width="32" height="2" />
        <rect x="0" y="24" width="8" height="6" />
      </g>
      <rect
        className="pad-near fill-[#0047FF] dark:fill-[#3B82F6]"
        x="15"
        y="26"
        width="4"
        height="4"
      />
      <rect
        className="pad-far fill-[#0047FF] dark:fill-[#3B82F6]"
        x="23"
        y="26"
        width="4"
        height="4"
        opacity="0"
      />
      <g className="sh" fill="currentColor">
        <rect x="2" y="12" width="4" height="12" />
        <rect x="2" y="22" width="4" height="4" />
        <g className="el">
          <rect x="4" y="10" width="10" height="4" />
          <rect x="2" y="10" width="4" height="4" />
          <g className="wr">
            <rect x="10" y="12" width="8" height="2" />
            <rect
              className="blk fill-[#0047FF] dark:fill-[#3B82F6]"
              x="12"
              y="14"
              width="4"
              height="4"
              opacity="0"
            />
            <rect className="fl" x="9" y="14" width="2" height="4" />
            <rect className="fr" x="17" y="14" width="2" height="4" />
          </g>
        </g>
      </g>
    </svg>
  )
}
