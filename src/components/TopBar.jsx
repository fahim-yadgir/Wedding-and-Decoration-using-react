function TopBar({ activeType, setActiveType }) {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-[70]
        h-16
        border-b
        border-white/10
        bg-black/20
        backdrop-blur-xl
        backdrop-saturate-150
      "
    >
      <div className="h-full flex items-center justify-center">
        <div
          className="
            flex
            items-center
            gap-1
            rounded-2xl
            border
            border-white/15
            bg-white/10
            p-1
            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            backdrop-blur-2xl
          "
        >
          <button
            type="button"
            onClick={() => setActiveType("wedding")}
            className={`
              rounded-xl
              px-7
              py-2.5
              text-[10px]
              tracking-[0.22em]
              transition-all
              duration-300
              ${
                activeType === "wedding"
                  ? "bg-[#b96782]/90 text-white shadow-[0_5px_20px_rgba(185,103,130,0.35)]"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            WEDDING
          </button>

          <button
            type="button"
            onClick={() => setActiveType("decoration")}
            className={`
              rounded-xl
              px-7
              py-2.5
              text-[10px]
              tracking-[0.22em]
              transition-all
              duration-300
              ${
                activeType === "decoration"
                  ? "bg-[#b96782]/90 text-white shadow-[0_5px_20px_rgba(185,103,130,0.35)]"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            DECORATION
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopBar;