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
      {/* ==================== MENU BUTTON ==================== */}
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
            border-white/25
            bg-black/20
            text-white
            shadow-[0_10px_35px_rgba(0,0,0,0.3)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-105
            hover:bg-black/30
          "
        >
          <Menu size={21} strokeWidth={1.8} />
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
            bg-black/20
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
          bg-[#160c14]/75
          shadow-[0_25px_70px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
          backdrop-saturate-150
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
            shadow-[0_8px_25px_rgba(0,0,0,0.3)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-105
            hover:bg-white/20
          "
        >
          <X size={20} strokeWidth={1.8} />
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
            bg-[#b96782]/25
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
                      ? "bg-[#b96782]/85 text-white shadow-[0_8px_25px_rgba(185,103,130,0.35)]"
                      : "text-white/55 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon size={19} strokeWidth={1.7} />

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

      {/* ==================== WHATSAPP FLOATING BUTTON ==================== */}
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
          {/* WhatsApp Icon */}
          <svg
            viewBox="0 0 32 32"
            className="
              h-7
              w-7
              transition-transform
              duration-300
              group-hover:scale-110
            "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3.5C9.1 3.5 3.5 9.1 3.5 16c0 2.2.6 4.3 1.7 6.1L3.5 28.5l6.6-1.7c1.8 1 3.8 1.5 5.9 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 3.5 16 3.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M11.2 9.8c.3-.4.7-.5 1.1-.2l1.8 1.3c.4.3.5.8.2 1.2l-.8 1.1c.9 1.7 2.2 3 3.9 3.9l1.1-.8c.4-.3.9-.2 1.2.2l1.3 1.8c.3.4.2.9-.2 1.2l-.8.6c-.6.5-1.4.7-2.1.4-2.2-.8-4.2-2.1-5.8-3.7-1.6-1.6-2.9-3.6-3.7-5.8-.3-.7-.1-1.5.4-2.1l.4-.9Z"
              fill="currentColor"
            />
          </svg>

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