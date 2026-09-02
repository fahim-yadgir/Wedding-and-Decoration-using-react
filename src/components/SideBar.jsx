import {
  Home,
  UserRound,
  Images,
  Sparkles,
  Package,
  Video,
  MessageCircle,
  Phone,
} from "lucide-react";

function SideBar({ activeMenu, setActiveMenu }) {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: UserRound },
    { id: "gallery", label: "Gallery", icon: Images },
    { id: "services", label: "Services", icon: Sparkles },
    { id: "packages", label: "Packages", icon: Package },
    { id: "videos", label: "Videos", icon: Video },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "91XXXXXXXXXX";

    const message =
      "Hello, I am interested in your wedding and decoration services.";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <aside className="fixed left-0 top-16 bottom-0 z-40 w-[76px] bg-[#160c14] border-r border-[#3d2635] flex flex-col items-center">
      
      <nav className="flex-1 w-full py-5 flex flex-col items-center gap-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = activeMenu === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveMenu(item.id)}
              className={`w-[62px] py-2.5 rounded-lg flex flex-col items-center gap-1 transition-all duration-300 ${
                active
                  ? "bg-[#b96782] text-white shadow-lg"
                  : "text-gray-400 hover:bg-[#2a1924] hover:text-white"
              }`}
            >
              <Icon size={19} strokeWidth={1.7} />

              <span className="text-[9px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={handleWhatsApp}
        className="mb-6 w-[62px] py-3 rounded-lg bg-[#25D366] text-white flex flex-col items-center gap-1 hover:scale-105 transition-transform"
      >
        <MessageCircle size={20} />

        <span className="text-[8px] font-medium">
          WhatsApp
        </span>
      </button>
    </aside>
  );
}

export default SideBar;
