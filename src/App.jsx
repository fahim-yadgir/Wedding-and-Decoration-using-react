import { useState, useLayoutEffect } from "react";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Wedding from "./pages/Wedding";
import Decoration from "./pages/Decoration";

function App() {
  const [activeType, setActiveType] = useState("wedding");
  const [activeMenu, setActiveMenu] = useState("home");

  // =========================================================
  // FORCE PAGE TO TOP
  // =========================================================
  const goToTop = () => {
    // Disable smooth scrolling temporarily
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // =========================================================
  // WHEN WEDDING / DECORATION CHANGES
  // =========================================================
  useLayoutEffect(() => {
    goToTop();
  }, [activeType]);

  // =========================================================
  // SWITCH WEDDING / DECORATION
  // =========================================================
  const handleTypeChange = (type) => {
    // Immediately go to top
    goToTop();

    // Change page
    setActiveType(type);

    // Reset menu
    setActiveMenu("home");

    // Force top again after React renders the new page
    requestAnimationFrame(() => {
      goToTop();
    });
  };

  // =========================================================
  // SIDEBAR MENU
  // =========================================================
  const handleMenuChange = (menu) => {
    setActiveMenu(menu);

    const section = document.getElementById(menu);

    if (section) {
      // Direct jump - NO SMOOTH SCROLL
      section.scrollIntoView({
        behavior: "auto",
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
