import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Camera,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Video,
  Users,
  Clock,
  CalendarDays,
  Send,
  Flower2,
  Palette,
  Sun,

} from "lucide-react";

import ImageLightbox from "../components/ImageLightbox";

function Decoration({ setActiveMenu }) {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    "/images/decoration-1.webp",
    "/images/decoration-2.webp",
    "/images/decoration-3.webp",
    "/images/decoration-4.webp",
    "/images/decoration-5.webp",
    "/images/decoration-6.webp",
  ];

  const services = [
    {
      icon: Flower2,
      title: "Stage Decoration",
      text: "Beautiful stage designs with flowers, fabrics and elegant decorative elements.",
    },
    {
      icon: Palette,
      title: "Theme Decoration",
      text: "Customized themes designed around your wedding style, colours and preferences.",
    },
    {
      icon: Sparkles,
      title: "Venue Decoration",
      text: "Transform the complete venue with beautiful decorations and elegant details.",
    },
    {
      icon: Sun,
      title: "Lighting Design",
      text: "Create the perfect atmosphere with beautiful and carefully planned lighting.",
    },
  ];

  const packages = [
    {
      name: "Classic",
      price: "₹20,000",
      features: [
        "Basic Stage Decoration",
        "Flower Decoration",
        "Basic Lighting",
        "Entrance Decoration",
      ],
    },
    {
      name: "Premium",
      price: "₹40,000",
      popular: true,
      features: [
        "Premium Stage Decoration",
        "Fresh Flower Decoration",
        "Premium Lighting",
        "Entrance Decoration",
        "Venue Styling",
      ],
    },
    {
      name: "Luxury",
      price: "₹70,000",
      features: [
        "Luxury Stage Setup",
        "Premium Flower Decoration",
        "Complete Venue Decoration",
        "Special Lighting",
        "Customized Theme",
      ],
    },
  ];

  /* =====================================================
     WHATSAPP
  ===================================================== */

  const handleWhatsApp = () => {
    const phoneNumber = "91XXXXXXXXXX";

    const message =
      "Hello, I am interested in your wedding decoration services.";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  /* =====================================================
     ACTIVE SIDEBAR SECTION
     ===================================================== */

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "gallery",
      "services",
      "packages",
      "videos",
      "contact",
    ];

    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      });

      setActiveMenu(currentSection);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [setActiveMenu]);

  return (
    <>
      <style>{`
        @keyframes decorationFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes decorationSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes decorationSlideRight {
          from {
            opacity: 0;
            transform: translateX(35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-up {
          animation: decorationFadeUp 0.8s ease-out both;
        }

        .animate-slide-left {
          animation: decorationSlideLeft 0.8s ease-out both;
        }

        .animate-slide-right {
          animation: decorationSlideRight 0.8s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .animate-slide-left,
          .animate-slide-right {
            animation: none;
          }
        }
      `}</style>

      <div className="min-h-screen w-full overflow-x-hidden bg-[#f8f3ef] text-[#301925]">

        {/* =====================================================
            HOME / HERO
        ===================================================== */}

        <section
          id="home"
          className="
            scroll-section
            relative
            min-h-[calc(100vh-64px)]
            overflow-hidden
            bg-[#24131f]
          "
        >
          <img
            src="/images/decoration-hero.webp"
            alt="Wedding decoration"
            fetchPriority="high"
            decoding="async"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[62%_center]
              sm:object-[58%_center]
              md:object-[60%_center]
              lg:object-[64%_center]
              xl:object-[62%_center]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/75
              via-black/45
              to-black/20
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#170d15]/80
              via-transparent
              to-transparent
            "
          />

          <div
            className="
              relative
              z-10
              flex
              min-h-[calc(100svh-64px)]
              items-end
              px-5
              pb-12
              sm:px-8
              sm:pb-16
              lg:items-center
              lg:px-16
              lg:pb-0
              xl:px-24
            "
          >
            <div className="max-w-xl animate-fade-up">

              <p
                className="
                  mb-4
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-[#e6bd85]
                  sm:text-xs
                "
              >
                Wedding Decoration
              </p>

              <h1
                className="
                  font-serif
                  text-4xl
                  leading-[1.05]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Beautiful.
                <br />

                <span className="text-[#e6bd85]">
                  Elegant.
                </span>

                <br />

                Unforgettable.
              </h1>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-px w-12 bg-[#d4ad72]" />

                <Heart
                  size={13}
                  className="text-[#e6bd85]"
                  fill="currentColor"
                />

                <div className="h-px w-12 bg-[#d4ad72]" />
              </div>

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-gray-200
                  sm:text-base
                "
              >
                Transform your wedding venue into a
                beautiful celebration filled with flowers,
                lights, colours and unforgettable details.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#e6bd85]
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-[#2b1722]
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#f0cc9b]
                  "
                >
                  Plan Your Decoration

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("gallery")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/50
                    px-6
                    py-3.5
                    text-sm
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  View Gallery
                </button>

              </div>
            </div>
          </div>

          <div
            className="
              absolute
              bottom-5
              left-1/2
              z-20
              -translate-x-1/2
              animate-bounce
              text-white/70
            "
          >
            <ChevronDown size={20} />
          </div>
        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="
            scroll-section
            relative
            min-h-screen
            bg-[#f8f3ef]
            px-5
            py-20
            sm:px-8
            lg:flex
            lg:items-center
            lg:px-16
            xl:px-24
          "
        >
          <div className="mx-auto w-full max-w-7xl">

            <div
              className="
                grid
                items-center
                gap-10
                lg:grid-cols-2
                lg:gap-16
              "
            >

              <div className="animate-slide-left">

                <div className="relative">

                  <div
                    className="
                      absolute
                      -left-3
                      -top-3
                      h-full
                      w-full
                      rounded-2xl
                      border
                      border-[#c9a66b]/40
                    "
                  />

                  <img
                    src="/images/decoration-about.webp"
                    alt="Wedding decoration setup"
                    loading="lazy"
                    decoding="async"
                    className="
                      relative
                      h-[360px]
                      w-full
                      rounded-2xl
                      object-cover
                      shadow-xl
                      sm:h-[450px]
                      lg:h-[540px]
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      rounded-xl
                      bg-[#301925]/90
                      px-5
                      py-4
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    <p className="font-serif text-lg">
                      Beautiful Spaces
                    </p>

                    <p className="text-xs text-[#e6bd85]">
                      Designed With Love
                    </p>
                  </div>

                </div>
              </div>


              <div className="animate-slide-right">

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-[#9d526e]
                  "
                >
                  About Us
                </p>

                <h2
                  className="
                    mt-3
                    font-serif
                    text-4xl
                    leading-tight
                    text-[#301925]
                    sm:text-5xl
                  "
                >
                  We Create
                  <br />

                  <span className="text-[#9d526e]">
                    Beautiful Spaces
                  </span>
                </h2>

                <div className="my-6 flex items-center gap-3">

                  <div className="h-px w-12 bg-[#c9a66b]" />

                  <Heart
                    size={14}
                    className="text-[#c9a66b]"
                    fill="currentColor"
                  />

                  <div className="h-px w-12 bg-[#c9a66b]" />

                </div>

                <p
                  className="
                    text-sm
                    leading-7
                    text-[#5f5058]
                    sm:text-base
                  "
                >
                  We believe that every celebration deserves
                  a beautiful setting. Our decoration team
                  creates elegant and memorable environments
                  for weddings and special occasions.
                </p>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-[#75676e]
                    sm:text-base
                  "
                >
                  From stage decoration and flowers to
                  lighting and complete venue styling, we
                  take care of every visual detail.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">

                  <div
                    className="
                      rounded-xl
                      border
                      border-[#dfd2ca]
                      bg-white/60
                      p-4
                    "
                  >
                    <p className="font-serif text-2xl text-[#9d526e]">
                      100+
                    </p>

                    <p className="mt-1 text-xs text-[#75676e]">
                      Events Decorated
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-[#dfd2ca]
                      bg-white/60
                      p-4
                    "
                  >
                    <p className="font-serif text-2xl text-[#9d526e]">
                      5+
                    </p>

                    <p className="mt-1 text-xs text-[#75676e]">
                      Years Experience
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#8f4662]
                    px-6
                    py-3.5
                    text-sm
                    text-white
                    transition-all
                    hover:-translate-y-1
                    hover:bg-[#a45673]
                  "
                >
                  Know More
                  <ArrowRight size={16} />
                </button>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            GALLERY
        ===================================================== */}

        <section
          id="gallery"
          className="
            scroll-section
            min-h-screen
            bg-[#fffaf7]
            px-5
            py-20
            sm:px-8
            lg:px-16
            xl:px-24
          "
        >
          <div className="mx-auto max-w-7xl">

            <div className="text-center animate-fade-up">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-[#9d526e]
                "
              >
                Our Work
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-4xl
                  text-[#301925]
                  sm:text-5xl
                "
              >
                Decoration Gallery
              </h2>

              <div className="my-5 flex items-center justify-center gap-3">

                <div className="h-px w-12 bg-[#c9a66b]" />

                <Heart
                  size={14}
                  className="text-[#c9a66b]"
                  fill="currentColor"
                />

                <div className="h-px w-12 bg-[#c9a66b]" />

              </div>

              <p
                className="
                  mx-auto
                  max-w-lg
                  text-sm
                  leading-6
                  text-[#75676e]
                "
              >
                Explore some of our beautiful wedding
                decoration setups and creative designs.
              </p>

            </div>

            <div
              className="
                mt-10
                columns-2
                gap-3
                sm:columns-3
                lg:gap-5
              "
            >
              {galleryImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className="
                    group
                    mb-3
                    block
                    w-full
                    break-inside-avoid
                    overflow-hidden
                    rounded-xl
                    lg:mb-5
                  "
                >
                  <img
                    src={image}
                    alt={`Decoration setup ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="
                      block
                      h-auto
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </button>
              ))}
            </div>

          </div>
        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="services"
          className="
            scroll-section
            min-h-screen
            bg-[#f5eee9]
            px-5
            py-20
            sm:px-8
            lg:px-16
            xl:px-24
          "
        >
          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-[#9d526e]
                "
              >
                What We Offer
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-4xl
                  text-[#301925]
                  sm:text-5xl
                "
              >
                Decoration Services
              </h2>

              <div className="my-5 flex items-center justify-center gap-3">

                <div className="h-px w-12 bg-[#c9a66b]" />

                <Heart
                  size={14}
                  className="text-[#c9a66b]"
                  fill="currentColor"
                />

                <div className="h-px w-12 bg-[#c9a66b]" />

              </div>

            </div>

            <div
              className="
                mt-10
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="
                      group
                      rounded-2xl
                      border
                      border-[#dfd2ca]
                      bg-white
                      p-6
                      text-center
                      shadow-sm
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-xl
                    "
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >

                    <div
                      className="
                        mx-auto
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-[#f5e5e9]
                        transition
                        group-hover:bg-[#8f4662]
                      "
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.6}
                        className="
                          text-[#9d526e]
                          transition
                          group-hover:text-white
                        "
                      />
                    </div>

                    <h3 className="mt-5 font-serif text-xl text-[#301925]">
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-[#75676e]
                      "
                    >
                      {service.text}
                    </p>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-medium
                        text-[#9d526e]
                      "
                    >
                      Enquire Now
                      <ArrowRight size={14} />
                    </button>

                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* =====================================================
            PACKAGES
        ===================================================== */}

        <section
          id="packages"
          className="
            scroll-section
            min-h-screen
            bg-[#291622]
            px-5
            py-20
            text-white
            sm:px-8
            lg:px-16
            xl:px-24
          "
        >
          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-[#e6bd85]
                "
              >
                Packages
              </p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Decoration Packages
              </h2>

              <div className="my-5 flex items-center justify-center gap-3">

                <div className="h-px w-12 bg-[#c9a66b]" />

                <Heart
                  size={14}
                  className="text-[#e6bd85]"
                  fill="currentColor"
                />

                <div className="h-px w-12 bg-[#c9a66b]" />

              </div>

              <p
                className="
                  mx-auto
                  max-w-lg
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                Beautiful decoration packages created for
                celebrations of every size.
              </p>

            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">

              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`
                    relative
                    flex
                    flex-col
                    rounded-2xl
                    border
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    ${
                      pkg.popular
                        ? "border-[#d6a86e] bg-[#3a202d] shadow-[0_15px_50px_rgba(0,0,0,0.3)]"
                        : "border-white/10 bg-[#321c28]"
                    }
                  `}
                >

                  {pkg.popular && (
                    <div
                      className="
                        absolute
                        -top-3
                        left-1/2
                        -translate-x-1/2
                        rounded-full
                        bg-[#d6a86e]
                        px-4
                        py-1.5
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-wider
                        text-[#291622]
                      "
                    >
                      Most Popular
                    </div>
                  )}

                  <h3 className="font-serif text-2xl">
                    {pkg.name}
                  </h3>

                  <p
                    className="
                      mt-4
                      font-serif
                      text-4xl
                      text-[#e6bd85]
                    "
                  >
                    {pkg.price}
                  </p>

                  <div className="my-6 h-px bg-white/10" />

                  <div className="flex-1 space-y-4">

                    {pkg.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-white/75
                        "
                      >
                        <span
                          className="
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#e6bd85]/15
                          "
                        >
                          <Check
                            size={12}
                            className="text-[#e6bd85]"
                          />
                        </span>

                        {feature}
                      </div>
                    ))}

                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="
                      mt-8
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-[#a65370]
                      py-3.5
                      text-sm
                      transition
                      hover:bg-[#bd6684]
                    "
                  >
                    Enquire on WhatsApp
                    <ArrowRight size={15} />
                  </button>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            VIDEOS
        ===================================================== */}

        <section
          id="videos"
          className="
            scroll-section
            min-h-screen
            bg-[#fffaf7]
            px-5
            py-20
            sm:px-8
            lg:px-16
            xl:px-24
          "
        >
          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-[#9d526e]
                "
              >
                Our Videos
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-4xl
                  text-[#301925]
                  sm:text-5xl
                "
              >
                Decoration Moments
              </h2>

              <div className="my-5 flex items-center justify-center gap-3">

                <div className="h-px w-12 bg-[#c9a66b]" />

                <Heart
                  size={14}
                  className="text-[#c9a66b]"
                  fill="currentColor"
                />

                <div className="h-px w-12 bg-[#c9a66b]" />

              </div>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              {/* VIDEO 1 */}

              <div
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfd2ca]
                  bg-white
                  shadow-sm
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="relative overflow-hidden">

                  <video
                    controls
                    preload="none"
                    playsInline
                    poster="/images/video-poster.webp"
                    className="aspect-video w-full object-cover"
                  >
                    <source
                      src="/videos/decoration-1.mp4"
                      type="video/mp4"
                    />
                  </video>

                </div>

                <div className="p-5">

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-[#9d526e]
                    "
                  >
                    Decoration Film
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-xl
                      text-[#301925]
                    "
                  >
                    Decoration Highlights
                  </h3>

                </div>
              </div>


              {/* VIDEO 2 */}

              <div
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfd2ca]
                  bg-white
                  shadow-sm
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="relative overflow-hidden">

                  <video
                    controls
                    preload="none"
                    playsInline
                    poster="/images/video-poster.webp"
                    className="aspect-video w-full object-cover"
                  >
                    <source
                      src="/videos/decoration-2.mp4"
                      type="video/mp4"
                    />
                  </video>

                </div>

                <div className="p-5">

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-[#9d526e]
                    "
                  >
                    Decoration Film
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-xl
                      text-[#301925]
                    "
                  >
                    Special Decoration
                  </h3>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
  id="contact"
  className="min-h-screen bg-[#24151F] px-5 py-20 text-[#F8E8EE]"
>
  {/* HEADER */}
  <div className="mx-auto max-w-6xl text-center">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B56D]">
      Contact Us
    </p>

    <h2 className="font-serif text-4xl leading-tight text-[#F8E8EE] md:text-5xl">
      Let's Decorate Your Dream Venue
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#C9AAB7] md:text-base">
      Tell us about your event, venue and decoration requirements.
      Our team will help you create a beautiful setup that matches
      your vision and occasion.
    </p>
  </div>

  {/* CONTACT INFORMATION */}
  <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

    {/* PHONE */}
    <a
      href="tel:+919XXXXXXXXX"
      className="group rounded-2xl border border-[#5A3547] bg-[#321D2A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D98FA8] hover:bg-[#3A2230]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D98FA8]/15">
        <Phone size={22} className="text-[#D98FA8]" />
      </div>

      <h3 className="text-lg font-semibold text-[#F8E8EE]">
        Call Us
      </h3>

      <p className="mt-2 text-sm text-[#C9AAB7]">
        +91 XXXXXXXXXX
      </p>

      <p className="mt-3 text-xs text-[#9F7D8B]">
        Tap to call directly
      </p>
    </a>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-[#5A3547] bg-[#321D2A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#3A2230]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/15">
        <MessageCircle size={22} className="text-[#25D366]" />
      </div>

      <h3 className="text-lg font-semibold text-[#F8E8EE]">
        WhatsApp
      </h3>

      <p className="mt-2 text-sm text-[#C9AAB7]">
        Chat with us instantly
      </p>

      <p className="mt-3 text-xs text-[#9F7D8B]">
        Quick enquiry & booking
      </p>
    </a>

    {/* EMAIL */}
    <a
      href="mailto:hello@yourdecoration.com"
      className="group rounded-2xl border border-[#5A3547] bg-[#321D2A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B56D] hover:bg-[#3A2230]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9B56D]/15">
        <Mail size={22} className="text-[#D9B56D]" />
      </div>

      <h3 className="text-lg font-semibold text-[#F8E8EE]">
        Email
      </h3>

      <p className="mt-2 break-all text-sm text-[#C9AAB7]">
        hello@yourdecoration.com
      </p>

      <p className="mt-3 text-xs text-[#9F7D8B]">
        For detailed enquiries
      </p>
    </a>

    {/* LOCATION */}
    <div className="rounded-2xl border border-[#5A3547] bg-[#321D2A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D98FA8] hover:bg-[#3A2230]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D98FA8]/15">
        <MapPin size={22} className="text-[#D98FA8]" />
      </div>

      <h3 className="text-lg font-semibold text-[#F8E8EE]">
        Location
      </h3>

      <p className="mt-2 text-sm text-[#C9AAB7]">
        Pune, Maharashtra
      </p>

      <p className="mt-3 text-xs text-[#9F7D8B]">
        Serving Pune & nearby locations
      </p>
    </div>
  </div>

  {/* QUICK RESPONSE */}
  <div className="mx-auto mt-8 max-w-6xl rounded-2xl border border-[#6A4051] bg-gradient-to-r from-[#321D2A] to-[#3A2230] p-6">
    <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D9B56D]/15">
          <Clock size={22} className="text-[#D9B56D]" />
        </div>

        <div>
          <h3 className="font-semibold text-[#F8E8EE]">
            Quick Response
          </h3>

          <p className="mt-1 text-sm leading-6 text-[#C9AAB7]">
            We usually respond to enquiries within a few hours.
            For urgent requirements, WhatsApp us directly.
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
      >
        <MessageCircle size={18} />
        WhatsApp Us
      </a>
    </div>
  </div>

  {/* DECORATION SERVICES + BOOKING */}
  <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">

    {/* SERVICES */}
    <div className="rounded-2xl border border-[#5A3547] bg-[#321D2A] p-7">

      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D98FA8]/15">
          <Sparkles size={20} className="text-[#D98FA8]" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#F8E8EE]">
            Our Decoration Services
          </h3>

          <p className="text-sm text-[#9F7D8B]">
            Beautiful setups for every occasion
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {[
          "Wedding Decoration",
          "Stage Decoration",
          "Reception Decoration",
          "Engagement Decoration",
          "Floral Decoration",
          "Theme Decoration",
          "Lighting Decoration",
          "Venue Decoration",
        ].map((service) => (
          <div
            key={service}
            className="flex items-center gap-3 rounded-xl border border-[#4E3040] bg-[#24151F] px-4 py-3"
          >
            <Check
              size={17}
              className="shrink-0 text-[#D9B56D]"
            />

            <span className="text-sm text-[#E8CBD5]">
              {service}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* BOOKING PROCESS */}
    <div className="rounded-2xl border border-[#5A3547] bg-[#321D2A] p-7">

      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9B56D]/15">
          <CalendarDays
            size={20}
            className="text-[#D9B56D]"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#F8E8EE]">
            Booking Process
          </h3>

          <p className="text-sm text-[#9F7D8B]">
            Simple & stress-free
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {[
          {
            number: "01",
            title: "Send Your Enquiry",
            text: "Share your event date, venue and decoration requirements.",
          },
          {
            number: "02",
            title: "Discuss Your Theme",
            text: "We understand your preferred colours, theme and decoration style.",
          },
          {
            number: "03",
            title: "Confirm Your Booking",
            text: "Finalize your decoration package and secure your event date.",
          },
        ].map((step) => (
          <div
            key={step.number}
            className="flex gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D98FA8] text-sm font-bold text-white">
              {step.number}
            </div>

            <div>
              <h4 className="font-semibold text-[#F8E8EE]">
                {step.title}
              </h4>

              <p className="mt-1 text-sm leading-6 text-[#C9AAB7]">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* ENQUIRY FORM */}
  <div className="mx-auto mt-8 max-w-6xl rounded-2xl border border-[#5A3547] bg-[#321D2A] p-7 md:p-9">

    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B56D]">
        Decoration Enquiry
      </p>

      <h3 className="mt-2 font-serif text-3xl text-[#F8E8EE]">
        Tell Us About Your Event
      </h3>

      <p className="mt-2 text-sm text-[#C9AAB7]">
        Fill in the details below and send your enquiry directly
        through WhatsApp.
      </p>
    </div>

    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get("name");
        const phone = formData.get("phone");
        const date = formData.get("date");
        const venue = formData.get("venue");
        const eventType = formData.get("eventType");
        const guests = formData.get("guests");
        const requirements = formData.get("requirements");

        const whatsappNumber = "91XXXXXXXXXX";

        const message = `
Hello, I am interested in your decoration services.

Name: ${name}
Phone: ${phone}
Event Date: ${date}
Venue: ${venue}
Event Type: ${eventType}
Guests: ${guests}

Decoration Requirements:
${requirements}
        `.trim();

        window.open(
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }}
      className="grid gap-5 md:grid-cols-2"
    >

      {/* NAME */}
      <div>
        <label className="mb-2 block text-sm text-[#E8CBD5]">
          Your Name
        </label>

        <input
          name="name"
          type="text"
          required
          placeholder="Enter your name"
          className="w-full rounded-xl border border-[#5A3547] bg-[#1B1017] px-4 py-3 text-[#F8E8EE] placeholder:text-[#8F6D7A] outline-none transition focus:border-[#D98FA8]"
        />
      </div>

      {/* PHONE */}
      <div>
        <label className="mb-2 block text-sm text-[#E8CBD5]">
          Phone Number
        </label>

        <input
        name="phone"
        type="tel"
        required
        placeholder="Enter your phone number"
        maxLength={10}
        inputMode="numeric"
        pattern="[0-9]{10}"
        onInput={(e) => {
          e.currentTarget.value = e.currentTarget.value
          .replace(/[^0-9]/g, "")
          .slice(0, 10);
  }}
  className="w-full rounded-xl border border-[#5A3547] bg-[#1B1017] px-4 py-3 text-[#F8E8EE] placeholder:text-[#8F6D7A] outline-none transition focus:border-[#D98FA8]"
/>
      </div>

      {/* DATE */}
      <div>
        <label className="mb-2 block text-sm text-[#E8CBD5]">
          Event Date
        </label>

        <input
          name="date"
          type="date"
          required
          className="w-full rounded-xl border border-[#5A3547] bg-[#1B1017] px-4 py-3 text-[#F8E8EE] outline-none transition focus:border-[#D98FA8]"
        />
      </div>

      {/* VENUE */}
      <div>
        <label className="mb-2 block text-sm text-[#E8CBD5]">
          Venue
        </label>

        <input
          name="venue"
          type="text"
          placeholder="Event venue"
          className="w-full rounded-xl border border-[#5A3547] bg-[#1B1017] px-4 py-3 text-[#F8E8EE] placeholder:text-[#8F6D7A] outline-none transition focus:border-[#D98FA8]"
        />
      </div>

      {/* EVENT TYPE */}
      <div>
        <label className="mb-2 block text-sm text-[#E8CBD5]">
          Event Type
        </label>

        <select
          name="eventType"
          required
          className="w-full rounded-xl border border-[#5A3547] bg-[#1B1017] px-4 py-3 text-[#F8E8EE] outline-none transition focus:border-[#D98FA8]"
        >
          <option value="">Select event</option>
          <option value="Wedding">Wedding</option>
          <option value="Reception">Reception</option>
          <option value="Engagement">Engagement</option>
          <option value="Haldi">Haldi</option>
          <option value="Mehndi">Mehndi</option>
          <option value="Birthday">Birthday</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* GUESTS */}
      <div>
        <label className="mb-2 block text-sm text-[#E8CBD5]">
          Approx. Guests
        </label>

        <input
          name="guests"
          type="number"
          placeholder="Number of guests"
          className="w-full rounded-xl border border-[#5A3547] bg-[#1B1017] px-4 py-3 text-[#F8E8EE] placeholder:text-[#8F6D7A] outline-none transition focus:border-[#D98FA8]"
        />
      </div>

      {/* REQUIREMENTS */}
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm text-[#E8CBD5]">
          Decoration Requirements
        </label>

        <textarea
          name="requirements"
          rows="5"
          placeholder="Tell us about your theme, colours, stage, flowers, lighting, budget, etc."
          className="w-full resize-none rounded-xl border border-[#5A3547] bg-[#1B1017] px-4 py-3 text-[#F8E8EE] placeholder:text-[#8F6D7A] outline-none transition focus:border-[#D98FA8]"
        />
      </div>

      {/* BUTTON */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D98FA8] px-6 py-4 font-semibold text-white shadow-lg shadow-[#D98FA8]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C97894]"
        >
          <Send size={19} />
          Send Enquiry on WhatsApp
        </button>
      </div>
    </form>
  </div>

  {/* FAQ */}
  <div className="mx-auto mt-8 max-w-6xl">

    <div className="mb-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B56D]">
        FAQ
      </p>

      <h3 className="mt-2 font-serif text-3xl text-[#F8E8EE]">
        Frequently Asked Questions
      </h3>
    </div>

    <div className="grid gap-5 md:grid-cols-2">
      {[
        {
          question: "How early should I book decoration?",
          answer:
            "We recommend booking as early as possible, especially for popular wedding dates and weekends.",
        },
        {
          question: "Can I customize the decoration theme?",
          answer:
            "Yes. We can customize colours, flowers, stage design, lighting and other decoration elements.",
        },
        {
          question: "Do you provide floral decoration?",
          answer:
            "Yes. Floral decoration can be included according to your theme and requirements.",
        },
        {
          question: "Do you work outside Pune?",
          answer:
            "Yes. We can take decoration projects outside Pune depending on the event and location.",
        },
      ].map((faq) => (
        <div
          key={faq.question}
          className="rounded-2xl border border-[#5A3547] bg-[#321D2A] p-6"
        >
          <h4 className="font-semibold text-[#F8E8EE]">
            {faq.question}
          </h4>

          <p className="mt-3 text-sm leading-6 text-[#C9AAB7]">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* LOCATION */}
  <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border border-[#5A3547] bg-[#321D2A]">

    <div className="grid md:grid-cols-2">

      <div className="flex flex-col justify-center p-8 md:p-10">
        <MapPin
          size={25}
          className="mb-4 text-[#D98FA8]"
        />

        <h3 className="font-serif text-3xl text-[#F8E8EE]">
          Based in Pune
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#C9AAB7]">
          Serving Pune, Maharashtra and nearby locations for
          weddings, receptions, engagements and special events.
        </p>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-[#6A4051] bg-[#24151F] px-5 py-3 text-sm font-semibold text-[#E8CBD5] transition hover:border-[#D98FA8] hover:text-[#F8E8EE]"
        >
          <MapPin size={17} />
          Open Location
        </a>
      </div>

      <div className="flex min-h-[280px] items-center justify-center bg-[#1B1017] p-8">
        <div className="text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#D98FA8]/15">
            <MapPin
              size={28}
              className="text-[#D98FA8]"
            />
          </div>

          <h4 className="text-xl font-semibold text-[#F8E8EE]">
            Pune, Maharashtra
          </h4>

          <p className="mt-2 text-sm text-[#9F7D8B]">
            Wedding & Event Decoration
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* FINAL CTA */}
  <div className="mx-auto mt-10 max-w-4xl text-center">

    <Heart
      size={25}
      className="mx-auto text-[#D98FA8]"
      fill="currentColor"
    />

    <h3 className="mt-4 font-serif text-3xl text-[#F8E8EE]">
      Let's Make Your Venue Beautiful
    </h3>

    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#C9AAB7]">
      From elegant stages to beautiful floral setups, we create
      decoration that makes your celebration unforgettable.
    </p>

    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 font-semibold text-white transition hover:scale-105"
    >
      <MessageCircle size={19} />
      Start Your Enquiry
    </a>
  </div>
</section>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer
          className="
            bg-[#24131f]
            px-5
            py-10
            text-center
            text-white
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              items-center
            "
          >

            <Heart
              size={22}
              className="text-[#e6bd85]"
              fill="currentColor"
            />

            <h3 className="mt-3 font-serif text-2xl">
              Beautiful Decorations
            </h3>

            <p className="mt-2 text-xs text-white/50">
              Wedding & Events
            </p>

            <div className="my-5 h-px w-20 bg-[#c9a66b]" />

            <p className="text-xs text-white/40">
              © 2026 Wedding & Events. All rights reserved.
            </p>

          </div>
        </footer>


        {/* =====================================================
            LIGHTBOX
        ===================================================== */}

        <ImageLightbox
          images={galleryImages}
          activeIndex={activeImage}
          setActiveIndex={setActiveImage}
          onClose={() => setActiveImage(null)}
        />

      </div>
    </>
  );
}

export default Decoration;