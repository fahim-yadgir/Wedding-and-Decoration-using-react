function TopBar({ activeType, setActiveType }) {
  return (
    <>
      <style>{`
        @keyframes topBarAppear {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .topbar-switch {
          animation: topBarAppear 0.8s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .topbar-switch {
            animation: none !important;
          }
        }
      `}</style>

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-[70]
          pointer-events-none
        "
      >
        <div
          className="
            topbar-switch
            pointer-events-auto
            absolute
            left-1/2
            top-4
            -translate-x-1/2
          "
        >
          <div
            className="
              flex
              items-center
              gap-1
              rounded-full
              border
              border-white/20
              bg-black/20
              p-1
              shadow-[0_10px_35px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
            "
          >
            {/* Wedding */}
            <button
              type="button"
              onClick={() => setActiveType("wedding")}
              className={`
                rounded-full
                px-6
                py-2.5
                text-[10px]
                font-medium
                tracking-[0.2em]
                transition-all
                duration-500
                ${
                  activeType === "wedding"
                    ? `
                      bg-[#c77a92]
                      text-white
                      shadow-[0_5px_20px_rgba(199,122,146,0.35)]
                    `
                    : `
                      text-white/65
                      hover:bg-white/10
                      hover:text-white
                    `
                }
              `}
            >
              WEDDING
            </button>

            {/* Decoration */}
            <button
              type="button"
              onClick={() => setActiveType("decoration")}
              className={`
                rounded-full
                px-6
                py-2.5
                text-[10px]
                font-medium
                tracking-[0.2em]
                transition-all
                duration-500
                ${
                  activeType === "decoration"
                    ? `
                      bg-[#c77a92]
                      text-white
                      shadow-[0_5px_20px_rgba(199,122,146,0.35)]
                    `
                    : `
                      text-white/65
                      hover:bg-white/10
                      hover:text-white
                    `
                }
              `}
            >
              DECORATION
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default TopBar;