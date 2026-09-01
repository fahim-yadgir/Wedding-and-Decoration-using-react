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
  };

  return (
    <div className="min-h-screen">

      <TopBar
        activeType={activeType}
        setActiveType={handleTypeChange}
      />

      <SideBar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <main className="ml-[76px] pt-16 min-h-screen">

        {activeType === "wedding" ? (
          <Wedding activeMenu={activeMenu} />
        ) : (
          <Decoration activeMenu={activeMenu} />
        )}

      </main>

    </div>
  );
}

export default App;