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
} from "lucide-react";

import ImageLightbox from "../components/ImageLightbox";

function Wedding({ setActiveMenu }) {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    "/images/wedding-1.webp",
    "/images/wedding-2.webp",
    "/images/wedding-3.webp",
    "/images/wedding-4.webp",
    "/images/wedding-5.webp",
    "/images/wedding-6.webp",
  ];

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
  ];

  const packages = [
    {
      name: "Classic",
      price: "₹25,000",
      features: [
        "Traditional Photography",
        "Wedding Ceremony Coverage",
        "Edited Photos",
        "Basic Video Coverage",
      ],
    },
    {
      name: "Premium",
      price: "₹50,000",
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
      price: "₹80,000",
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

  /* =====================================================
     WHATSAPP
  ===================================================== */

  const handleWhatsApp = () => {
    const phoneNumber = "91XXXXXXXXXX";

    const message =
      "Hello, I am interested in your wedding photography and videography services.";

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
      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes weddingFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes weddingSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes weddingSlideRight {
          from {
            opacity: 0;
            transform: translateX(35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .wedding-fade-up {
          animation: weddingFadeUp 0.8s ease-out both;
        }

        .wedding-slide-left {
          animation: weddingSlideLeft 0.8s ease-out both;
        }

        .wedding-slide-right {
          animation: weddingSlideRight 0.8s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .wedding-fade-up,
          .wedding-slide-left,
          .wedding-slide-right {
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
            src="/images/wedding-hero.webp"
            alt="Beautiful wedding"
            fetchPriority="high"
            decoding="async"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[55%_center]
              sm:object-[52%_center]
              md:object-[55%_center]
              lg:object-[55%_center]
              xl:object-[55%_center]
            "
          />

          {/* Dark overlay */}

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

          {/* Hero Content */}

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
            <div className="max-w-xl wedding-fade-up">

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
                Wedding Photography & Films
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
                Your Story.
                <br />

                <span className="text-[#e6bd85]">
                  Beautifully
                </span>

                <br />

                Captured.
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
                We capture the emotions, celebrations
                and beautiful moments that make your
                wedding unforgettable.
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
                  Book Your Wedding

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

              {/* IMAGE */}

              <div className="wedding-slide-left">

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


              {/* TEXT */}

              <div className="wedding-slide-right">

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

                <p
                  className="
                    text-sm
                    leading-7
                    text-[#5f5058]
                    sm:text-base
                  "
                >
                  Every wedding has a unique story.
                  Our goal is to capture the emotions,
                  people and little moments that make
                  your celebration special.
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
                  From the first smile to the final
                  celebration, we create beautiful
                  photographs and cinematic films that
                  you can treasure for years.
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
                      Weddings Covered
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

            <div className="text-center wedding-fade-up">

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

              <p
                className="
                  mx-auto
                  max-w-lg
                  text-sm
                  leading-6
                  text-[#75676e]
                "
              >
                Explore some of our favourite wedding
                moments and beautiful celebrations.
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
                Wedding Services
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
              {services.map((service) => {
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

              <p
                className="
                  mx-auto
                  max-w-lg
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                Choose a wedding package that matches
                your celebration and requirements.
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
                      src="/videos/wedding-1.mp4"
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
                    Wedding Film
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-xl
                      text-[#301925]
                    "
                  >
                    Wedding Highlights
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
                      src="/videos/wedding-2.mp4"
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
                    Wedding Film
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-xl
                      text-[#301925]
                    "
                  >
                    Beautiful Memories
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
          className="
            scroll-section
            min-h-screen
            bg-[#f4ebe6]
            px-5
            py-20
            sm:px-8
            lg:px-16
            xl:px-24
          "
        >
          <div className="mx-auto max-w-7xl">

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

              {/* CONTACT INFO */}

              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-[#9d526e]
                  "
                >
                  Contact Us
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
                  Let's Make
                  <br />

                  <span className="text-[#9d526e]">
                    Your Day Special
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
                    max-w-md
                    text-sm
                    leading-7
                    text-[#75676e]
                  "
                >
                  Tell us about your wedding and let
                  us help you preserve the beautiful
                  memories of your special day.
                </p>

                <div className="mt-8 space-y-5">

                  {/* PHONE */}

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#ead6dc]
                      "
                    >
                      <Phone
                        size={18}
                        className="text-[#9d526e]"
                      />
                    </div>

                    <div>

                      <p className="text-xs text-[#9d526e]">
                        Call Us
                      </p>

                      <p className="mt-1 text-sm text-[#301925]">
                        +91 12345 67890
                      </p>

                    </div>

                  </div>


                  {/* WHATSAPP */}

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#ead6dc]
                      "
                    >
                      <MessageCircle
                        size={18}
                        className="text-[#9d526e]"
                      />
                    </div>

                    <div>

                      <p className="text-xs text-[#9d526e]">
                        WhatsApp
                      </p>

                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="mt-1 text-sm text-[#301925]"
                      >
                        +91 12345 67890
                      </button>

                    </div>

                  </div>


                  {/* EMAIL */}

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#ead6dc]
                      "
                    >
                      <Mail
                        size={18}
                        className="text-[#9d526e]"
                      />
                    </div>

                    <div>

                      <p className="text-xs text-[#9d526e]">
                        Email
                      </p>

                      <p className="mt-1 text-sm text-[#301925]">
                        info@yourcompany.com
                      </p>

                    </div>

                  </div>


                  {/* ADDRESS */}

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#ead6dc]
                      "
                    >
                      <MapPin
                        size={18}
                        className="text-[#9d526e]"
                      />
                    </div>

                    <div>

                      <p className="text-xs text-[#9d526e]">
                        Address
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          leading-6
                          text-[#301925]
                        "
                      >
                        123, Wedding Street,
                        <br />
                        Pune, Maharashtra
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* FORM */}

              <div
                className="
                  rounded-2xl
                  border
                  border-[#dfd2ca]
                  bg-white
                  p-6
                  shadow-lg
                  sm:p-8
                "
              >

                <div className="mb-6">

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-[#9d526e]
                    "
                  >
                    Get In Touch
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-2xl
                      text-[#301925]
                    "
                  >
                    Tell Us About Your Wedding
                  </h3>

                </div>

                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleWhatsApp();
                  }}
                  className="space-y-4"
                >

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[#dfd2ca]
                      bg-[#faf7f5]
                      px-4
                      py-3.5
                      text-sm
                      text-[#301925]
                      outline-none
                      placeholder:text-[#a69a9f]
                      focus:border-[#9d526e]
                    "
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[#dfd2ca]
                      bg-[#faf7f5]
                      px-4
                      py-3.5
                      text-sm
                      text-[#301925]
                      outline-none
                      placeholder:text-[#a69a9f]
                      focus:border-[#9d526e]
                    "
                  />

                  <input
                    type="date"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[#dfd2ca]
                      bg-[#faf7f5]
                      px-4
                      py-3.5
                      text-sm
                      text-[#301925]
                      outline-none
                      focus:border-[#9d526e]
                    "
                  />

                  <textarea
                    rows="5"
                    placeholder="Tell us about your wedding requirements..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-[#dfd2ca]
                      bg-[#faf7f5]
                      px-4
                      py-3.5
                      text-sm
                      text-[#301925]
                      outline-none
                      placeholder:text-[#a69a9f]
                      focus:border-[#9d526e]
                    "
                  />

                  <button
                    type="submit"
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#8f4662]
                      py-3.5
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#a45673]
                    "
                  >
                    <MessageCircle size={17} />
                    Send on WhatsApp
                  </button>

                </form>

              </div>

            </div>

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

export default Wedding;