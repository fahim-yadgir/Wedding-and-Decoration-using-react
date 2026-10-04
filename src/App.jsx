import { useState } from "react";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Wedding from "./pages/Wedding";
import Decoration from "./pages/Decoration";

function App() {
  const [activeType, setActiveType] = useState("wedding");
  const [activeMenu, setActiveMenu] = useState("home");

  // =========================================================
  // SWITCH BETWEEN WEDDING AND DECORATION
  // =========================================================
  const handleTypeChange = (type) => {
    setActiveType(type);

    // Reset sidebar menu to Home
    setActiveMenu("home");

    // Start the selected page from the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  // =========================================================
  // HANDLE SIDEBAR MENU
  // =========================================================
  const handleMenuChange = (menu) => {
    setActiveMenu(menu);

    const section = document.getElementById(menu);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          TOP BAR
      ===================================================== */}
      <TopBar
        activeType={activeType}
        setActiveType={handleTypeChange}
      />

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <SideBar
        activeMenu={activeMenu}
        setActiveMenu={handleMenuChange}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="min-h-screen w-full">
        {activeType === "wedding" ? (
          <Wedding setActiveMenu={setActiveMenu} />
        ) : (
          <Decoration setActiveMenu={setActiveMenu} />
        )}
      </main>

    </div>
  );
}

export default App;