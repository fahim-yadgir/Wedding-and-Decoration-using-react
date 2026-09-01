function TopBar({ activeType, setActiveType }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#160c14] border-b border-[#3d2635]">
      <div className="h-full flex items-center justify-center">
        <div className="flex items-center bg-[#241521] rounded-xl p-1 border border-[#4a3040]">
          
          <button
            onClick={() => setActiveType("wedding")}
            className={`px-7 py-3 rounded-lg text-xs tracking-[0.18em] transition-all duration-300 ${
              activeType === "wedding"
                ? "bg-[#b96782] text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
          >
            WEDDING
          </button>

          <button
            onClick={() => setActiveType("decoration")}
            className={`px-7 py-3 rounded-lg text-xs tracking-[0.18em] transition-all duration-300 ${
              activeType === "decoration"
                ? "bg-[#b96782] text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
          >
            DECORATION
          </button>

        </div>
      </div>
    </header>
  );
}

export default TopBar;