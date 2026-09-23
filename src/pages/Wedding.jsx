import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Camera,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Video,
  Clock,
  CalendarDays,
  Send,
} from "lucide-react";

import ImageLightbox from "../components/ImageLightbox";

function Wedding({ setActiveMenu }) {
  const [activeImage, setActiveImage] = useState(null);

  /* =========================================================
     ANIMATION STYLES
  ========================================================= */

  const animationStyles = `
    /* ==================== CINEMATIC HERO ZOOM ==================== */

    @keyframes cinematicZoom {
      from {
        transform: scale(1.05);
      }

      to {
        transform: scale(1.14);
      }
    }


    /* ==================== FADE UP ==================== */

    @keyframes weddingFadeUp {
      from {
        opacity: 0;
        transform: translateY(35px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }


    /* ==================== SLIDE LEFT ==================== */

    @keyframes weddingSlideLeft {
      from {
        opacity: 0;
        transform: translateX(-45px);
      }

      to {
        opacity: 1;
        transform: translateX(0);
      }
    }


    /* ==================== SLIDE RIGHT ==================== */

    @keyframes weddingSlideRight {
      from {
        opacity: 0;
        transform: translateX(45px);
      }

      to {
        opacity: 1;
        transform: translateX(0);
      }
    }


    /* ==================== FLOATING LIGHT ==================== */

    @keyframes floatingLight {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
      }

      50% {
        transform: translate(45px, -30px) scale(1.12);
      }
    }


    /* ==================== FLOATING LIGHT REVERSE ==================== */

    @keyframes floatingLightReverse {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
      }

      50% {
        transform: translate(-40px, 35px) scale(1.12);
      }
    }


    /* ==================== SCROLL INDICATOR ==================== */

    @keyframes weddingScrollLine {
      0%,
      100% {
        opacity: 0.35;
        transform: scaleY(0.7);
        transform-origin: top;
      }

      50% {
        opacity: 1;
        transform: scaleY(1);
        transform-origin: top;
      }
    }


    /* ==================== GLOW ==================== */

    @keyframes weddingGlow {
      0%,
      100% {
        opacity: 0.3;
        transform: scale(1);
      }

      50% {
        opacity: 0.7;
        transform: scale(1.08);
      }
    }


    /* =========================================================
       HERO ANIMATIONS
    ========================================================= */

    .wedding-cinematic-image {
      animation: cinematicZoom 14s ease-in-out infinite alternate;
    }

    .wedding-floating-light {
      animation: floatingLight 9s ease-in-out infinite;
    }

    .wedding-floating-light-reverse {
      animation: floatingLightReverse 11s ease-in-out infinite;
    }

    .wedding-scroll-line {
      animation: weddingScrollLine 1.8s ease-in-out infinite;
    }


    /* =========================================================
       HERO TEXT ANIMATIONS
    ========================================================= */

    .wedding-fade-up {
      animation: weddingFadeUp 0.9s ease-out both;
    }

    .wedding-slide-left {
      animation: weddingSlideLeft 0.9s ease-out both;
    }

    .wedding-slide-right {
      animation: weddingSlideRight 0.9s ease-out both;
    }


    /* =========================================================
       SCROLL REVEAL
    ========================================================= */

    .animate-on-scroll {
      opacity: 0;
      transform: translateY(45px);
      transition:
        opacity 0.9s ease,
        transform 0.9s ease;
    }

    .animate-on-scroll.is-visible {
      opacity: 1;
      transform: translateY(0);
    }


    /* =========================================================
       SCROLL REVEAL LEFT
    ========================================================= */

    .animate-on-scroll-left {
      opacity: 0;
      transform: translateX(-55px);
      transition:
        opacity 1s ease,
        transform 1s ease;
    }

    .animate-on-scroll-left.is-visible {
      opacity: 1;
      transform: translateX(0);
    }


    /* =========================================================
       SCROLL REVEAL RIGHT
    ========================================================= */

    .animate-on-scroll-right {
      opacity: 0;
      transform: translateX(55px);
      transition:
        opacity 1s ease,
        transform 1s ease;
    }

    .animate-on-scroll-right.is-visible {
      opacity: 1;
      transform: translateX(0);
    }


    /* =========================================================
       SCALE REVEAL
    ========================================================= */

    .animate-scale {
      opacity: 0;
      transform: scale(0.92);
      transition:
        opacity 0.9s ease,
        transform 0.9s ease;
    }

    .animate-scale.is-visible {
      opacity: 1;
      transform: scale(1);
    }


    /* =========================================================
       LUXURY CARD HOVER
    ========================================================= */

    .luxury-card {
      transition:
        transform 0.5s ease,
        box-shadow 0.5s ease,
        border-color 0.5s ease;
    }

    .luxury-card:hover {
      transform: translateY(-8px);
    }


    /* =========================================================
       LUXURY IMAGE HOVER
    ========================================================= */

    .luxury-image {
      transition:
        transform 0.8s ease,
        filter 0.8s ease;
    }

    .luxury-image:hover {
      transform: scale(1.04);
    }


    /* =========================================================
       REDUCED MOTION
    ========================================================= */

    @media (prefers-reduced-motion: reduce) {
      .wedding-cinematic-image,
      .wedding-floating-light,
      .wedding-floating-light-reverse,
      .wedding-scroll-line,
      .wedding-fade-up,
      .wedding-slide-left,
      .wedding-slide-right,
      .animate-on-scroll,
      .animate-on-scroll-left,
      .animate-on-scroll-right,
      .animate-scale {
        animation: none !important;
        transition: none !important;
        transform: none !important;
        opacity: 1 !important;
      }
    }
  `;

  /* =========================================================
     GALLERY IMAGES
  ========================================================= */

  const galleryImages = [
    "/images/wedding-1.webp",
    "/images/wedding-2.webp",
    "/images/wedding-3.webp",
    "/images/wedding-4.webp",
    "/images/wedding-5.webp",
    "/images/wedding-6.webp",
  ];

  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    {
      icon: Camera,
      title: "Wedding Photography",
      text: "Beautifully capture every special moment, emotion and memory of your wedding day.",
    },
    {
      icon: Video,
      title: "Wedding Videography",
      text: "Cinematic wedding films that allow you to relive your most beautiful moments.",
    },
    {
      icon: Heart,
      title: "Pre-Wedding Shoot",
      text: "Creative and romantic pre-wedding sessions designed around your story.",
    },
    {
      icon: Sparkles,
      title: "Complete Wedding",
      text: "Professional photography and videography coverage for your complete wedding celebration.",
    },
    {
      icon: Camera,
      title: "Birthday Photography",
      text: "Capture every smile, celebration and special moment of your birthday.",
    },
    {
      icon: Video,
      title: "Birthday Videography",
      text: "Beautiful cinematic videos that preserve the fun and memorable moments of your birthday.",
    },
  ];

  /* =========================================================
     PACKAGES
  ========================================================= */

  const packages = [
    {
      name: "Classic",
      price: "₹22,000",
      features: [
        "Traditional Photography",
        "Wedding Ceremony Coverage",
        "Edited Photos",
        "Basic Video Coverage",
      ],
    },
    {
      name: "Premium",
      price: "₹51,000",
      popular: true,
      features: [
        "Traditional Photography",
        "Cinematic Photography",
        "Full Wedding Video",
        "Edited Photos",
        "Highlight Film",
      ],
    },
    {
      name: "Luxury",
      price: "₹81,000",
      features: [
        "Premium Photography",
        "Cinematic Videography",
        "Pre-Wedding Shoot",
        "Wedding Highlight Film",
        "Premium Photo Album",
        "Complete Event Coverage",
      ],
    },
  ];

  /* =========================================================
     WHATSAPP HANDLER
  ========================================================= */

  const handleWhatsApp = () => {
    const phoneNumber = "91XXXXXXXXXX";

    const message =
      "Hello, I am interested in your wedding photography and videography services.";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  /* =========================================================
     ACTIVE SECTION TRACKING
  ========================================================= */

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

  /* =========================================================
     SCROLL ANIMATION OBSERVER
  ========================================================= */

  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      {/* ==================== ANIMATION STYLES ==================== */}

      <style>{animationStyles}</style>

      {/* ==================== MAIN WEDDING PAGE ==================== */}

      <div className="min-h-screen w-full overflow-x-hidden bg-[#f8f3ef] text-[#301925]">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section
          id="home"
          className="
            scroll-section
            relative
            min-h-screen
            w-full
            overflow-hidden
            bg-[#24131f]
          "
        >
          <div className="absolute inset-0 overflow-hidden">

            {/* Hero Image */}

            <img
              src="/images/wedding-hero.webp"
              alt="Beautiful wedding"
              fetchPriority="high"
              decoding="async"
              className="
                wedding-cinematic-image
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-[35%_center]
                sm:object-[35%_center]
                md:object-[50%_20%]
                lg:object-[55%_15%]
                xl:object-[55%_15%]
              "
            />

            {/* Dark Overlay */}

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

            {/* Bottom Gradient */}

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

            {/* Pink Cinematic Light */}

            <div
              className="
                wedding-floating-light
                absolute
                -left-20
                top-1/4
                h-72
                w-72
                rounded-full
                bg-[#d98fa8]/20
                blur-[100px]
              "
            />

            {/* Gold Cinematic Light */}

            <div
              className="
                wedding-floating-light-reverse
                absolute
                -right-20
                bottom-1/4
                h-80
                w-80
                rounded-full
                bg-[#f1d09b]/15
                blur-[110px]
              "
            />
          </div>

          {/* Hero Content */}

          <div
            className="
              relative
              z-10
              flex
              min-h-screen
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
            <div className="max-w-xl">

              {/* Hero Small Text */}

              <p
                className="
                  mb-4
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-[#e6bd85]
                  opacity-0
                  sm:text-xs
                  animate-[weddingFadeUp_1s_ease-out_0.2s_forwards]
                "
              >
                Wedding Photography & Films
              </p>

              {/* Hero Heading */}

              <h1
                className="
                  font-serif
                  text-4xl
                  leading-[1.05]
                  text-white
                  opacity-0
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  animate-[weddingFadeUp_1.2s_ease-out_0.45s_forwards]
                "
              >
                Your Story.
                <br />

                <span className="text-[#e6bd85]">
                  Beautifully
                </span>

                <br />

                Captured.
              </h1>

              {/* Decorative Line */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                  opacity-0
                  animate-[weddingFadeUp_1s_ease-out_0.7s_forwards]
                "
              >
                <div className="h-px w-12 bg-[#d4ad72]" />

                <Heart
                  size={13}
                  className="text-[#e6bd85]"
                  fill="currentColor"
                />

                <div className="h-px w-12 bg-[#d4ad72]" />
              </div>

              {/* Hero Description */}

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-gray-200
                  opacity-0
                  sm:text-base
                  animate-[weddingFadeUp_1.1s_ease-out_0.85s_forwards]
                "
              >
                We capture the emotions, celebrations and beautiful moments
                that make your wedding unforgettable.
              </p>

              {/* Hero Buttons */}

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-3
                  opacity-0
                  animate-[weddingFadeUp_1.1s_ease-out_1.05s_forwards]
                "
              >
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
                    duration-500
                    hover:-translate-y-1
                    hover:bg-[#f0cc9b]
                    hover:shadow-[0_15px_40px_rgba(230,189,133,0.25)]
                  "
                >
                  Book Your Wedding

                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("gallery")?.scrollIntoView({
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
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-white/80
                    hover:bg-white/10
                  "
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}

          <div
            className="
              absolute
              bottom-7
              left-1/2
              z-20
              -translate-x-1/2
              opacity-0
              animate-[weddingFadeUp_1s_ease-out_1.7s_forwards]
            "
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[8px] tracking-[0.35em] text-white/50">
                SCROLL
              </span>

              <span
                className="
                  wedding-scroll-line
                  h-10
                  w-px
                  bg-gradient-to-b
                  from-[#f1d09b]
                  to-transparent
                "
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT SECTION
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

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

              {/* About Image */}

              <div className="animate-on-scroll-left">
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
                    src="/images/wedding-about.webp"
                    alt="Wedding photography"
                    loading="lazy"
                    decoding="async"
                    className="
                      luxury-image
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
                      Timeless Memories
                    </p>

                    <p className="text-xs text-[#e6bd85]">
                      Captured With Love
                    </p>
                  </div>
                </div>
              </div>

              {/* About Content */}

              <div className="animate-on-scroll-right">

                <p className="text-xs uppercase tracking-[0.3em] text-[#9d526e]">
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
                  Your Moments.
                  <br />

                  <span className="text-[#9d526e]">
                    Your Story.
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

                <p className="text-sm leading-7 text-[#5f5058] sm:text-base">
                  Every wedding has a unique story. Our goal is to capture the
                  emotions, people and little moments that make your celebration
                  special.
                </p>

                <p className="mt-4 text-sm leading-7 text-[#75676e] sm:text-base">
                  From the first smile to the final celebration, we create
                  beautiful photographs and cinematic films that you can treasure
                  for years.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">

                  <div className="luxury-card rounded-xl border border-[#dfd2ca] bg-white/60 p-4">
                    <p className="font-serif text-2xl text-[#9d526e]">
                      100+
                    </p>

                    <p className="mt-1 text-xs text-[#75676e]">
                      Weddings Covered
                    </p>
                  </div>

                  <div className="luxury-card rounded-xl border border-[#dfd2ca] bg-white/60 p-4">
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
                    duration-500
                    hover:-translate-y-1
                    hover:bg-[#a45673]
                    hover:shadow-lg
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
            GALLERY SECTION
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

            {/* Gallery Heading */}

            <div className="text-center animate-on-scroll">

              <p className="text-xs uppercase tracking-[0.3em] text-[#9d526e]">
                Our Work
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#301925] sm:text-5xl">
                Wedding Gallery
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

              <p className="mx-auto max-w-lg text-sm leading-6 text-[#75676e]">
                Explore some of our favourite wedding moments and beautiful
                celebrations.
              </p>
            </div>

            {/* Gallery Images */}

            <div className="mt-10 columns-2 gap-3 sm:columns-3 lg:gap-5">

              {galleryImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                  className="
                    animate-on-scroll
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
                    alt={`Wedding moment ${index + 1}`}
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
            SERVICES SECTION
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

            {/* Services Heading */}

            <div className="text-center animate-on-scroll">

              <p className="text-xs uppercase tracking-[0.3em] text-[#9d526e]">
                What We Offer
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#301925] sm:text-5xl">
                Wedding & Event Services
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

              <p className="mx-auto max-w-xl text-sm leading-6 text-[#75676e]">
                From weddings to birthday celebrations, we capture every
                beautiful moment with creativity and care.
              </p>
            </div>

            {/* Service Cards */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    style={{
                      transitionDelay: `${index * 120}ms`,
                    }}
                    className="
                      animate-on-scroll
                      luxury-card
                      group
                      rounded-2xl
                      border
                      border-[#dfd2ca]
                      bg-white
                      p-6
                      text-center
                      shadow-sm
                      hover:border-[#c9a66b]/50
                      hover:shadow-[0_20px_50px_rgba(48,25,37,0.12)]
                    "
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
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:bg-[#8f4662]
                      "
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.6}
                        className="
                          text-[#9d526e]
                          transition-colors
                          duration-500
                          group-hover:text-white
                        "
                      />
                    </div>

                    <h3 className="mt-5 font-serif text-xl text-[#301925]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#75676e]">
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
                        transition-all
                        duration-300
                        hover:text-[#8f4662]
                      "
                    >
                      Enquire Now

                      <ArrowRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
            PACKAGES SECTION
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

            {/* Packages Heading */}

            <div className="text-center animate-on-scroll">

              <p className="text-xs uppercase tracking-[0.3em] text-[#e6bd85]">
                Packages
              </p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Wedding Packages
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

              <p className="mx-auto max-w-lg text-sm leading-6 text-white/60">
                Choose a wedding package that matches your celebration and
                requirements.
              </p>
            </div>

            {/* Package Cards */}

            <div className="mt-10 grid gap-5 lg:grid-cols-3">

              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                  className={`
                    animate-on-scroll
                    luxury-card
                    relative
                    flex
                    flex-col
                    rounded-2xl
                    border
                    p-7
                    ${
                      pkg.popular
                        ? "border-[#d6a86e] bg-[#3a202d] shadow-[0_15px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(214,168,110,0.12)]"
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

                  <p className="mt-4 font-serif text-4xl text-[#e6bd85]">
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
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
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
            VIDEOS SECTION
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

            {/* Video Heading */}

            <div className="text-center animate-on-scroll">

              <p className="text-xs uppercase tracking-[0.3em] text-[#9d526e]">
                Our Videos
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#301925] sm:text-5xl">
                Wedding Moments
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

            {/* Videos */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              {/* Video 1 */}

              <div
                className="
                  animate-on-scroll-left
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfd2ca]
                  bg-white
                  shadow-sm
                  transition-all
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
                    className="
                      aspect-video
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.02]
                    "
                  >
                    <source
                      src="/videos/wedding-1.mp4"
                      type="video/mp4"
                    />
                  </video>

                </div>

                <div className="p-5">

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9d526e]">
                    Wedding Film
                  </p>

                  <h3 className="mt-2 font-serif text-xl text-[#301925]">
                    Wedding Highlights
                  </h3>

                </div>
              </div>

              {/* Video 2 */}

              <div
                className="
                  animate-on-scroll-right
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfd2ca]
                  bg-white
                  shadow-sm
                  transition-all
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
                    className="
                      aspect-video
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.02]
                    "
                  >
                    <source
                      src="/videos/wedding-2.mp4"
                      type="video/mp4"
                    />
                  </video>

                </div>

                <div className="p-5">

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9d526e]">
                    Wedding Film
                  </p>

                  <h3 className="mt-2 font-serif text-xl text-[#301925]">
                    Beautiful Memories
                  </h3>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT SECTION
        ===================================================== */}

        <section
          id="contact"
          className="
            scroll-section
            min-h-screen
            bg-[#24151F]
            px-5
            py-20
            text-[#F8E8EE]
          "
        >

          {/* Contact Heading */}

          <div className="mx-auto max-w-6xl text-center animate-on-scroll">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B56D]">
              Contact Us
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#F8E8EE] md:text-5xl">
              Let's Create Something Beautiful
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#C9AAB7] md:text-base">
              Planning your special day? Tell us about your wedding and let us
              create a beautiful experience that you and your family will
              remember forever.
            </p>

          </div>

          {/* Contact Cards */}

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Phone */}

            <a
              href="tel:+919XXXXXXXXX"
              className="
                animate-on-scroll
                group
                rounded-2xl
                border
                border-[#5A3547]
                bg-[#321D2A]
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D98FA8]
                hover:bg-[#3A2230]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#D98FA8]/15
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                <Phone
                  size={22}
                  className="text-[#D98FA8]"
                />
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

            {/* WhatsApp */}

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="
                animate-on-scroll
                group
                rounded-2xl
                border
                border-[#5A3547]
                bg-[#321D2A]
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#25D366]
                hover:bg-[#3A2230]
                hover:shadow-[0_20px_50px_rgba(37,211,102,0.12)]
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#25D366]/15
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                <MessageCircle
                  size={22}
                  className="text-[#25D366]"
                />
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

            {/* Email */}

            <a
              href="mailto:hello@yourwedding.com"
              className="
                animate-on-scroll
                group
                rounded-2xl
                border
                border-[#5A3547]
                bg-[#321D2A]
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D9B56D]
                hover:bg-[#3A2230]
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#D9B56D]/15
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                <Mail
                  size={22}
                  className="text-[#D9B56D]"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#F8E8EE]">
                Email
              </h3>

              <p className="mt-2 break-all text-sm text-[#C9AAB7]">
                hello@yourwedding.com
              </p>

              <p className="mt-3 text-xs text-[#9F7D8B]">
                For detailed enquiries
              </p>
            </a>

            {/* Location */}

            <div
              className="
                animate-on-scroll
                group
                rounded-2xl
                border
                border-[#5A3547]
                bg-[#321D2A]
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D98FA8]
                hover:bg-[#3A2230]
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#D98FA8]/15
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                <MapPin
                  size={22}
                  className="text-[#D98FA8]"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#F8E8EE]">
                Location
              </h3>

              <p className="mt-2 text-sm text-[#C9AAB7]">
                Pune, Maharashtra
              </p>

              <p className="mt-3 text-xs text-[#9F7D8B]">
                Available for destination weddings
              </p>
            </div>

          </div>

          {/* Quick Response */}

          <div
            className="
              animate-on-scroll
              mx-auto
              mt-8
              max-w-6xl
              rounded-2xl
              border
              border-[#6A4051]
              bg-gradient-to-r
              from-[#321D2A]
              to-[#3A2230]
              p-6
            "
          >
            <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">

              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D9B56D]/15
                  "
                >
                  <Clock
                    size={22}
                    className="text-[#D9B56D]"
                  />
                </div>

                <div>

                  <h3 className="font-semibold text-[#F8E8EE]">
                    Quick Response
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#C9AAB7]">
                    We usually respond to enquiries within a few hours. For
                    urgent bookings, WhatsApp us directly.
                  </p>

                </div>
              </div>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#25D366]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-lg
                  hover:shadow-[#25D366]/20
                "
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

            </div>
          </div>

          {/* Services & Booking Process */}

          <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">

            {/* Services */}

            <div
              className="
                animate-on-scroll-left
                rounded-2xl
                border
                border-[#5A3547]
                bg-[#321D2A]
                p-7
                transition-all
                duration-500
              "
            >

              <div className="mb-6 flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#D98FA8]/15
                  "
                >
                  <Sparkles
                    size={20}
                    className="text-[#D98FA8]"
                  />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-[#F8E8EE]">
                    Our Wedding Services
                  </h3>

                  <p className="text-sm text-[#9F7D8B]">
                    Complete wedding coverage
                  </p>

                </div>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  "Wedding Photography",
                  "Cinematic Videography",
                  "Pre-Wedding Shoot",
                  "Traditional Photography",
                  "Highlight Films",
                  "Wedding Albums",
                  "Complete Wedding Coverage",
                  "Destination Weddings",
                ].map((service) => (
                  <div
                    key={service}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-[#4E3040]
                      bg-[#24151F]
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#6A4051]
                    "
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

            {/* Booking Process */}

            <div
              className="
                animate-on-scroll-right
                rounded-2xl
                border
                border-[#5A3547]
                bg-[#321D2A]
                p-7
                transition-all
                duration-500
              "
            >

              <div className="mb-6 flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#D9B56D]/15
                  "
                >
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
                    text: "Share your wedding date, venue and requirements.",
                  },
                  {
                    number: "02",
                    title: "Discuss Your Vision",
                    text: "We understand your style, expectations and budget.",
                  },
                  {
                    number: "03",
                    title: "Confirm Your Date",
                    text: "Choose your package and secure your wedding date.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-4"
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D98FA8]
                        text-sm
                        font-bold
                        text-white
                      "
                    >
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

          {/* Wedding Enquiry Form */}

          <div
            className="
              animate-on-scroll
              mx-auto
              mt-8
              max-w-6xl
              rounded-2xl
              border
              border-[#5A3547]
              bg-[#321D2A]
              p-7
              md:p-9
            "
          >

            <div className="mb-8">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B56D]">
                Wedding Enquiry
              </p>

              <h3 className="mt-2 font-serif text-3xl text-[#F8E8EE]">
                Tell Us About Your Special Day
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
                const service = formData.get("service");
                const guests = formData.get("guests");
                const requirements = formData.get("requirements");

                const whatsappNumber = "91XXXXXXXXXX";

                const message = `
Hello, I am interested in your wedding services.

Name: ${name}
Phone: ${phone}
Wedding Date: ${date}
Venue: ${venue}
Service: ${service}
Guests: ${guests}

Requirements:
${requirements}
                `.trim();

                window.open(
                  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    message
                  )}`,
                  "_blank"
                );
              }}
              className="grid gap-5 md:grid-cols-2"
            >

              {/* Name */}

              <div>
                <label className="mb-2 block text-sm text-[#E8CBD5]">
                  Your Name
                </label>

                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#5A3547]
                    bg-[#1B1017]
                    px-4
                    py-3
                    text-[#F8E8EE]
                    placeholder:text-[#8F6D7A]
                    outline-none
                    transition
                    focus:border-[#D98FA8]
                  "
                />
              </div>

              {/* Phone */}

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
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#5A3547]
                    bg-[#1B1017]
                    px-4
                    py-3
                    text-[#F8E8EE]
                    placeholder:text-[#8F6D7A]
                    outline-none
                    transition
                    focus:border-[#D98FA8]
                  "
                />
              </div>

              {/* Date */}

              <div>
                <label className="mb-2 block text-sm text-[#E8CBD5]">
                  Wedding Date
                </label>

                <input
                  name="date"
                  type="date"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#5A3547]
                    bg-[#1B1017]
                    px-4
                    py-3
                    text-[#F8E8EE]
                    outline-none
                    transition
                    focus:border-[#D98FA8]
                  "
                />
              </div>

              {/* Venue */}

              <div>
                <label className="mb-2 block text-sm text-[#E8CBD5]">
                  Venue
                </label>

                <input
                  name="venue"
                  type="text"
                  placeholder="Wedding venue"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#5A3547]
                    bg-[#1B1017]
                    px-4
                    py-3
                    text-[#F8E8EE]
                    placeholder:text-[#8F6D7A]
                    outline-none
                    transition
                    focus:border-[#D98FA8]
                  "
                />
              </div>

              {/* Service */}

              <div>
                <label className="mb-2 block text-sm text-[#E8CBD5]">
                  Required Service
                </label>

                <select
                  name="service"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#5A3547]
                    bg-[#1B1017]
                    px-4
                    py-3
                    text-[#F8E8EE]
                    outline-none
                    transition
                    focus:border-[#D98FA8]
                  "
                >
                  <option value="">
                    Select service
                  </option>

                  <option value="Wedding Photography">
                    Wedding Photography
                  </option>

                  <option value="Wedding Videography">
                    Wedding Videography
                  </option>

                  <option value="Photography + Videography">
                    Photography + Videography
                  </option>

                  <option value="Pre-Wedding Shoot">
                    Pre-Wedding Shoot
                  </option>

                  <option value="Complete Wedding Coverage">
                    Complete Wedding Coverage
                  </option>
                </select>
              </div>

              {/* Guests */}

              <div>
                <label className="mb-2 block text-sm text-[#E8CBD5]">
                  Approx. Guests
                </label>

                <input
                  name="guests"
                  type="number"
                  placeholder="Number of guests"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#5A3547]
                    bg-[#1B1017]
                    px-4
                    py-3
                    text-[#F8E8EE]
                    placeholder:text-[#8F6D7A]
                    outline-none
                    transition
                    focus:border-[#D98FA8]
                  "
                />
              </div>

              {/* Requirements */}

              <div className="md:col-span-2">

                <label className="mb-2 block text-sm text-[#E8CBD5]">
                  Tell Us More
                </label>

                <textarea
                  name="requirements"
                  rows="5"
                  placeholder="Tell us about your wedding, preferred style, events, budget, etc."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#5A3547]
                    bg-[#1B1017]
                    px-4
                    py-3
                    text-[#F8E8EE]
                    placeholder:text-[#8F6D7A]
                    outline-none
                    transition
                    focus:border-[#D98FA8]
                  "
                />

              </div>

              {/* Submit */}

              <div className="md:col-span-2">

                <button
                  type="submit"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#D98FA8]
                    px-6
                    py-4
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-[#D98FA8]/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#C97894]
                    hover:shadow-[#D98FA8]/20
                  "
                >
                  <Send size={19} />
                  Send Enquiry on WhatsApp
                </button>

              </div>

            </form>
          </div>

          {/* =====================================================
              FAQ SECTION
          ===================================================== */}

          <div className="mx-auto mt-8 max-w-6xl">

            <div className="mb-6 text-center animate-on-scroll">

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
                  question: "How early should I book?",
                  answer:
                    "We recommend booking as early as possible, especially for popular wedding dates and weekends.",
                },
                {
                  question: "Do you travel outside Pune?",
                  answer:
                    "Yes. We are available for destination weddings and events outside Pune based on availability.",
                },
                {
                  question: "Can I customize my package?",
                  answer:
                    "Yes. Packages can be customized according to your events, coverage requirements and budget.",
                },
                {
                  question: "How can I check availability?",
                  answer:
                    "Send us your wedding date through WhatsApp and we will check availability for you.",
                },
              ].map((faq, index) => (
                <div
                  key={faq.question}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                  className="
                    animate-on-scroll
                    rounded-2xl
                    border
                    border-[#5A3547]
                    bg-[#321D2A]
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#D98FA8]/50
                  "
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

          {/* =====================================================
              LOCATION SECTION
          ===================================================== */}

          <div
            className="
              animate-on-scroll
              mx-auto
              mt-8
              max-w-6xl
              overflow-hidden
              rounded-2xl
              border
              border-[#5A3547]
              bg-[#321D2A]
            "
          >

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
                  Serving Pune, Maharashtra and available for weddings,
                  receptions, engagements and destination events.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-6
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#6A4051]
                    bg-[#24151F]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#E8CBD5]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D98FA8]
                    hover:text-[#F8E8EE]
                  "
                >
                  <MapPin size={17} />
                  Open Location
                </a>

              </div>

              <div
                className="
                  flex
                  min-h-[280px]
                  items-center
                  justify-center
                  bg-[#1B1017]
                  p-8
                "
              >

                <div className="text-center">

                  <div
                    className="
                      mx-auto
                      mb-5
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D98FA8]/15
                    "
                  >
                    <MapPin
                      size={28}
                      className="text-[#D98FA8]"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-[#F8E8EE]">
                    Pune, Maharashtra
                  </h4>

                  <p className="mt-2 text-sm text-[#9F7D8B]">
                    Wedding Photography & Events
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* =====================================================
              FINAL CTA
          ===================================================== */}

          <div className="mx-auto mt-10 max-w-4xl text-center animate-on-scroll">

            <Heart
              size={25}
              className="mx-auto text-[#D98FA8]"
              fill="currentColor"
            />

            <h3 className="mt-4 font-serif text-3xl text-[#F8E8EE]">
              Your Story Deserves To Be Beautiful
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#C9AAB7]">
              Let's capture every smile, emotion and beautiful moment of your
              special day.
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#25D366]
                px-7
                py-3.5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-[#25D366]/20
              "
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
          <div className="mx-auto flex max-w-7xl flex-col items-center">

            <Heart
              size={22}
              className="text-[#e6bd85]"
              fill="currentColor"
            />

            <h3 className="mt-3 font-serif text-2xl">
              Beautiful Weddings
            </h3>

            <p className="mt-2 text-xs text-white/50">
              Photography & Films
            </p>

            <div className="my-5 h-px w-20 bg-[#c9a66b]" />

            <p className="text-xs text-white/40">
              © 2026 Wedding & Events. All rights reserved.
            </p>

          </div>
        </footer>

        {/* =====================================================
            IMAGE LIGHTBOX
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

export default Wedding;