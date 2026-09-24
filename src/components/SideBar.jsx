import {
  Home,
  UserRound,
  Images,
  Sparkles,
  Package,
  Video,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

function SideBar({ activeMenu, setActiveMenu }) {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleMenuClick = (id) => {
    setActiveMenu(id);
    setIsOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* ==================== HAMBURGER BUTTON ==================== */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          className="
            fixed
            left-5
            top-20
            z-[100]
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/20
            bg-[#301925]
            text-white
            shadow-[0_10px_35px_rgba(0,0,0,0.35)]
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#3d2130]
            hover:shadow-[0_12px_35px_rgba(48,25,37,0.5)]
          "
        >
          <Menu
            size={22}
            strokeWidth={1.8}
            className="text-white"
          />
        </button>
      )}

      {/* ==================== BACKDROP ==================== */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed
            inset-0
            z-[80]
            bg-black/30
            backdrop-blur-[3px]
          "
        />
      )}

      {/* ==================== SIDEBAR ==================== */}
      <aside
        className={`
          fixed
          left-4
          top-20
          z-[90]
          w-[78px]
          rounded-[26px]
          border
          border-white/15
          bg-[#301925]/95
          shadow-[0_25px_70px_rgba(0,0,0,0.5)]
          backdrop-blur-2xl
          transition-all
          duration-500
          ease-out
          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-[130%] opacity-0"
          }
        `}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
          className="
            absolute
            right-2
            top-2
            z-[110]
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/20
            bg-white/10
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-white/20
          "
        >
          <X
            size={20}
            strokeWidth={1.8}
            className="text-white"
          />
        </button>

        {/* Sidebar Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -top-8
            left-1/2
            h-20
            w-20
            -translate-x-1/2
            rounded-full
            bg-[#b96782]/30
            blur-3xl
          "
        />

        {/* Navigation */}
        <nav
          className="
            relative
            flex
            w-full
            flex-col
            items-center
            gap-1
            px-2
            pb-5
            pt-14
          "
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activeMenu === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleMenuClick(item.id)}
                className={`
                  relative
                  flex
                  w-[62px]
                  flex-col
                  items-center
                  gap-1
                  rounded-xl
                  py-2.5
                  transition-all
                  duration-300
                  ${
                    active
                      ? `
                        bg-[#b96782]
                        text-white
                        shadow-[0_8px_25px_rgba(185,103,130,0.4)]
                      `
                      : `
                        text-white/65
                        hover:bg-white/10
                        hover:text-white
                      `
                  }
                `}
              >
                <Icon
                  size={19}
                  strokeWidth={1.7}
                />

                <span className="text-[9px]">
                  {item.label}
                </span>

                {active && (
                  <span
                    className="
                      absolute
                      -right-1
                      top-1/2
                      h-6
                      w-1
                      -translate-y-1/2
                      rounded-full
                      bg-[#f1d09b]
                    "
                  />
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ==================== WHATSAPP BUTTON ==================== */}
      <div
        className="
          fixed
          bottom-5
          left-5
          z-[100]
        "
      >
        <button
          type="button"
          onClick={handleWhatsApp}
          aria-label="Contact us on WhatsApp"
          className="
            group
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-[0_8px_25px_rgba(37,211,102,0.35)]
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_12px_30px_rgba(37,211,102,0.45)]
          "
        >
          <FaWhatsapp
            size={30}
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          {/* Hover Label */}
          <span
            className="
              pointer-events-none
              absolute
              left-[68px]
              whitespace-nowrap
              rounded-lg
              bg-[#301925]
              px-3
              py-2
              text-xs
              font-medium
              text-white
              opacity-0
              shadow-lg
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:opacity-100
            "
          >
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </>
  );
}

export default SideBar;