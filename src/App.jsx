import { useState } from "react";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Wedding from "./pages/Wedding";
import Decoration from "./pages/Decoration";

function App() {
  const [activeType, setActiveType] = useState("wedding");
  const [activeMenu, setActiveMenu] = useState("home");

  const handleTypeChange = (type) => {
    setActiveType(type);
    setActiveMenu("home");

    setTimeout(() => {
      document.getElementById("home")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);

    document.getElementById(menu)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen">
      <TopBar
        activeType={activeType}
        setActiveType={handleTypeChange}
      />

      <SideBar
        activeMenu={activeMenu}
        setActiveMenu={handleMenuChange}
      />

      <main className="ml-[76px] pt-16 min-h-screen">
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

