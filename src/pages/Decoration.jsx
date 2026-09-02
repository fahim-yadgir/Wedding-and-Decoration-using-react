import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Flower2,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Sparkles,
  Star,
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

  const handleWhatsApp = () => {
    const phoneNumber = "91XXXXXXXXXX";

    const message =
      "Hello, I am interested in your wedding decoration services.";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveMenu(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-80px 0px -25% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveMenu]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f3ef] text-[#301925]">

      {/* =====================================================
          HOME / HERO
      ===================================================== */}

      <section
        id="home"
        className="scroll-section relative min-h-[calc(100vh-64px)] overflow-hidden bg-[#24131f]"
      >
        <img
          src="/images/decoration-hero.webp"
          alt="Wedding decoration"
          fetchPriority="high"
          decoding="async"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-center
            lg:object-center
          "
        />

        {/* Dark overlay */}

        <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/75
          via-black/45
          to-black/20
        " />

        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#170d15]/80
          via-transparent
          to-transparent
        " />

        {/* Hero Content */}

        <div className="
          relative
          z-10
          flex
          min-h-[calc(100vh-64px)]
          items-end
          px-5
          pb-12
          sm:px-8
          sm:pb-16
          lg:items-center
          lg:px-16
          lg:pb-0
          xl:px-24
        ">
          <div className="
            max-w-xl
            animate-fade-up
          ">

            <p className="
              mb-4
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#e6bd85]
              sm:text-xs
            ">
              Wedding Decoration
            </p>

            <h1 className="
              font-serif
              text-4xl
              leading-[1.05]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            ">
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

            <p className="
              mt-5
              max-w-md
              text-sm
              leading-7
              text-gray-200
              sm:text-base
            ">
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
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({
                      behavior: "smooth",
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

        <div className="
          absolute
          bottom-5
          left-1/2
          z-20
          -translate-x-1/2
          animate-bounce
          text-white/70
        ">
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

          <div className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          ">

            {/* IMAGE */}

            <div className="animate-slide-left">

              <div className="relative">

                <div className="
                  absolute
                  -left-3
                  -top-3
                  h-full
                  w-full
                  rounded-2xl
                  border
                  border-[#c9a66b]/40
                " />

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

                <div className="
                  absolute
                  bottom-5
                  left-5
                  rounded-xl
                  bg-[#301925]/90
                  px-5
                  py-4
                  text-white
                  backdrop-blur-sm
                ">
                  <p className="font-serif text-lg">
                    Beautiful Spaces
                  </p>

                  <p className="text-xs text-[#e6bd85]">
                    Designed With Love
                  </p>
                </div>

              </div>
            </div>


            {/* TEXT */}

            <div className="animate-slide-right">

              <p className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#9d526e]
              ">
                About Us
              </p>

              <h2 className="
                mt-3
                font-serif
                text-4xl
                leading-tight
                text-[#301925]
                sm:text-5xl
              ">
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

              <p className="
                text-sm
                leading-7
                text-[#5f5058]
                sm:text-base
              ">
                We believe that every celebration deserves
                a beautiful setting. Our decoration team
                creates elegant and memorable environments
                for weddings and special occasions.
              </p>

              <p className="
                mt-4
                text-sm
                leading-7
                text-[#75676e]
                sm:text-base
              ">
                From stage decoration and flowers to
                lighting and complete venue styling, we
                take care of every visual detail.
              </p>

              <div className="
                mt-7
                grid
                grid-cols-2
                gap-4
              ">

                <div className="
                  rounded-xl
                  border
                  border-[#dfd2ca]
                  bg-white/60
                  p-4
                ">
                  <p className="
                    font-serif
                    text-2xl
                    text-[#9d526e]
                  ">
                    100+
                  </p>

                  <p className="
                    mt-1
                    text-xs
                    text-[#75676e]
                  ">
                    Events Decorated
                  </p>
                </div>

                <div className="
                  rounded-xl
                  border
                  border-[#dfd2ca]
                  bg-white/60
                  p-4
                ">
                  <p className="
                    font-serif
                    text-2xl
                    text-[#9d526e]
                  ">
                    5+
                  </p>

                  <p className="
                    mt-1
                    text-xs
                    text-[#75676e]
                  ">
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

          <div className="
            text-center
            animate-fade-up
          ">

            <p className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#9d526e]
            ">
              Our Work
            </p>

            <h2 className="
              mt-3
              font-serif
              text-4xl
              text-[#301925]
              sm:text-5xl
            ">
              Decoration Gallery
            </h2>

            <div className="
              my-5
              flex
              items-center
              justify-center
              gap-3
            ">
              <div className="h-px w-12 bg-[#c9a66b]" />

              <Heart
                size={14}
                className="text-[#c9a66b]"
                fill="currentColor"
              />

              <div className="h-px w-12 bg-[#c9a66b]" />
            </div>

            <p className="
              mx-auto
              max-w-lg
              text-sm
              leading-6
              text-[#75676e]
            ">
              Explore some of our beautiful wedding
              decoration setups and creative designs.
            </p>

          </div>


          <div className="
            mt-10
            columns-2
            gap-3
            sm:columns-3
            lg:gap-5
          ">
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

            <p className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#9d526e]
            ">
              What We Offer
            </p>

            <h2 className="
              mt-3
              font-serif
              text-4xl
              text-[#301925]
              sm:text-5xl
            ">
              Decoration Services
            </h2>

            <div className="
              my-5
              flex
              items-center
              justify-center
              gap-3
            ">
              <div className="h-px w-12 bg-[#c9a66b]" />

              <Heart
                size={14}
                className="text-[#c9a66b]"
                fill="currentColor"
              />

              <div className="h-px w-12 bg-[#c9a66b]" />
            </div>

          </div>


          <div className="
            mt-10
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          ">
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

                  <div className="
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
                  ">
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

                  <h3 className="
                    mt-5
                    font-serif
                    text-xl
                    text-[#301925]
                  ">
                    {service.title}
                  </h3>

                  <p className="
                    mt-3
                    text-sm
                    leading-6
                    text-[#75676e]
                  ">
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

            <p className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#e6bd85]
            ">
              Packages
            </p>

            <h2 className="
              mt-3
              font-serif
              text-4xl
              sm:text-5xl
            ">
              Decoration Packages
            </h2>

            <div className="
              my-5
              flex
              items-center
              justify-center
              gap-3
            ">
              <div className="h-px w-12 bg-[#c9a66b]" />

              <Heart
                size={14}
                className="text-[#e6bd85]"
                fill="currentColor"
              />

              <div className="h-px w-12 bg-[#c9a66b]" />
            </div>

            <p className="
              mx-auto
              max-w-lg
              text-sm
              leading-6
              text-white/60
            ">
              Beautiful decoration packages created for
              celebrations of every size.
            </p>

          </div>


          <div className="
            mt-10
            grid
            gap-5
            lg:grid-cols-3
          ">
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
                  <div className="
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
                  ">
                    Most Popular
                  </div>
                )}

                <h3 className="font-serif text-2xl">
                  {pkg.name}
                </h3>

                <p className="
                  mt-4
                  font-serif
                  text-4xl
                  text-[#e6bd85]
                ">
                  {pkg.price}
                </p>

                <div className="
                  my-6
                  h-px
                  bg-white/10
                " />

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
                      <span className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#e6bd85]/15
                      ">
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

            <p className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#9d526e]
            ">
              Our Videos
            </p>

            <h2 className="
              mt-3
              font-serif
              text-4xl
              text-[#301925]
              sm:text-5xl
            ">
              Decoration Moments
            </h2>

            <div className="
              my-5
              flex
              items-center
              justify-center
              gap-3
            ">
              <div className="h-px w-12 bg-[#c9a66b]" />

              <Heart
                size={14}
                className="text-[#c9a66b]"
                fill="currentColor"
              />

              <div className="h-px w-12 bg-[#c9a66b]" />
            </div>

          </div>


          <div className="
            mt-10
            grid
            gap-6
            md:grid-cols-2
          ">

            {/* VIDEO 1 */}

            <div className="
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
            ">

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
                  "
                >
                  <source
                    src="/videos/decoration-1.mp4"
                    type="video/mp4"
                  />
                </video>

              </div>

              <div className="p-5">

                <p className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#9d526e]
                ">
                  Decoration Film
                </p>

                <h3 className="
                  mt-2
                  font-serif
                  text-xl
                  text-[#301925]
                ">
                  Decoration Highlights
                </h3>

              </div>

            </div>


            {/* VIDEO 2 */}

            <div className="
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
            ">

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
                  "
                >
                  <source
                    src="/videos/decoration-2.mp4"
                    type="video/mp4"
                  />
                </video>

              </div>

              <div className="p-5">

                <p className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#9d526e]
                ">
                  Decoration Film
                </p>

                <h3 className="
                  mt-2
                  font-serif
                  text-xl
                  text-[#301925]
                ">
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

          <div className="
            grid
            gap-10
            lg:grid-cols-2
            lg:gap-16
          ">

            {/* CONTACT INFO */}

            <div>

              <p className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#9d526e]
              ">
                Contact Us
              </p>

              <h2 className="
                mt-3
                font-serif
                text-4xl
                leading-tight
                text-[#301925]
                sm:text-5xl
              ">
                Let's Decorate
                <br />

                <span className="text-[#9d526e]">
                  Your Perfect Day
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

              <p className="
                max-w-md
                text-sm
                leading-7
                text-[#75676e]
              ">
                Tell us about your event and let us help
                you create a beautiful decoration setup
                that your guests will remember.
              </p>


              <div className="mt-8 space-y-5">

                {/* PHONE */}

                <div className="flex items-center gap-4">

                  <div className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ead6dc]
                  ">
                    <Phone
                      size={18}
                      className="text-[#9d526e]"
                    />
                  </div>

                  <div>

                    <p className="
                      text-xs
                      text-[#9d526e]
                    ">
                      Call Us
                    </p>

                    <p className="
                      mt-1
                      text-sm
                      text-[#301925]
                    ">
                      +91 12345 67890
                    </p>

                  </div>

                </div>


                {/* WHATSAPP */}

                <div className="flex items-center gap-4">

                  <div className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ead6dc]
                  ">
                    <MessageCircle
                      size={18}
                      className="text-[#9d526e]"
                    />
                  </div>

                  <div>

                    <p className="
                      text-xs
                      text-[#9d526e]
                    ">
                      WhatsApp
                    </p>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="
                        mt-1
                        text-sm
                        text-[#301925]
                      "
                    >
                      +91 12345 67890
                    </button>

                  </div>

                </div>


                {/* EMAIL */}

                <div className="flex items-center gap-4">

                  <div className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ead6dc]
                  ">
                    <Mail
                      size={18}
                      className="text-[#9d526e]"
                    />
                  </div>

                  <div>

                    <p className="
                      text-xs
                      text-[#9d526e]
                    ">
                      Email
                    </p>

                    <p className="
                      mt-1
                      text-sm
                      text-[#301925]
                    ">
                      info@yourcompany.com
                    </p>

                  </div>

                </div>


                {/* ADDRESS */}

                <div className="flex items-center gap-4">

                  <div className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ead6dc]
                  ">
                    <MapPin
                      size={18}
                      className="text-[#9d526e]"
                    />
                  </div>

                  <div>

                    <p className="
                      text-xs
                      text-[#9d526e]
                    ">
                      Address
                    </p>

                    <p className="
                      mt-1
                      text-sm
                      leading-6
                      text-[#301925]
                    ">
                      123, Wedding Street,
                      <br />
                      Pune, Maharashtra
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="
              rounded-2xl
              border
              border-[#dfd2ca]
              bg-white
              p-6
              shadow-lg
              sm:p-8
            ">

              <div className="mb-6">

                <p className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#9d526e]
                ">
                  Get In Touch
                </p>

                <h3 className="
                  mt-2
                  font-serif
                  text-2xl
                  text-[#301925]
                ">
                  Tell Us About Your Event
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
                  placeholder="Tell us about your decoration requirements..."
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

      <footer className="
        bg-[#24131f]
        px-5
        py-10
        text-center
        text-white
      ">

        <div className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
        ">

          <Heart
            size={22}
            className="text-[#e6bd85]"
            fill="currentColor"
          />

          <h3 className="
            mt-3
            font-serif
            text-2xl
          ">
            Beautiful Decorations
          </h3>

          <p className="
            mt-2
            text-xs
            text-white/50
          ">
            Wedding & Events
          </p>

          <div className="
            my-5
            h-px
            w-20
            bg-[#c9a66b]
          " />

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
  );
}

export default Decoration;