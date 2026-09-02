import { useState } from "react";
import {
  ArrowRight,
  Camera,
  Heart,
  Sparkles,
} from "lucide-react";

import ImageLightbox from "../components/ImageLightbox";

function Wedding({ activeMenu }) {
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
      icon: Heart,
      title: "Wedding Planning",
      description:
        "Complete wedding planning and coordination for your special day.",
    },
    {
      icon: Camera,
      title: "Wedding Photography",
      description:
        "Beautifully captured moments that you can remember forever.",
    },
    {
      icon: Sparkles,
      title: "Wedding Management",
      description:
        "Professional event management from planning to the final ceremony.",
    },
  ];

  const packages = [
    {
      name: "Silver",
      price: "₹25,000",
      features: [
        "Basic Wedding Planning",
        "Event Coordination",
        "Basic Photography",
      ],
    },
    {
      name: "Gold",
      price: "₹50,000",
      popular: true,
      features: [
        "Complete Wedding Planning",
        "Professional Photography",
        "Event Decoration",
        "Guest Management",
      ],
    },
    {
      name: "Luxury",
      price: "₹85,000",
      features: [
        "Premium Wedding Planning",
        "Premium Photography",
        "Complete Decoration",
        "Full Event Management",
        "Personal Coordinator",
      ],
    },
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "91XXXXXXXXXX";

    const message =
      "Hello, I am interested in your wedding services.";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#170d15] text-white">

      {/* ================= HOME ================= */}

      {activeMenu === "home" && (
        <>
          <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">

            <img
              src="/images/wedding-hero.webp"
              alt="Wedding celebration"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 flex min-h-[calc(100vh-64px)] items-end p-6 pb-12">

              <div className="max-w-xl">

                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#e5a9bc]">
                  Wedding & Events
                </p>

                <h1 className="font-serif text-4xl leading-tight md:text-6xl">
                  Your Day.
                  <br />
                  Your Story.
                  <br />

                  <span className="text-[#d48aa4]">
                    Beautifully Celebrated.
                  </span>
                </h1>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-200 md:text-base">
                  We create beautiful wedding experiences filled with
                  unforgettable moments, elegant details and memories
                  that last forever.
                </p>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="mt-7 flex items-center gap-2 rounded-xl bg-[#b96782] px-6 py-3.5 text-sm transition hover:bg-[#c97b95]"
                >
                  Plan Your Wedding
                  <ArrowRight size={17} />
                </button>

              </div>

            </div>
          </section>

          {/* Services preview */}

          <section className="px-5 py-16">

            <p className="text-xs uppercase tracking-[0.25em] text-[#d69aaf]">
              What We Do
            </p>

            <h2 className="mt-2 font-serif text-3xl">
              Creating Moments
            </h2>

            <div className="mt-8 grid gap-4">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-[#3d2635] bg-[#21141e] p-5"
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#35202d]">
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                        className="text-[#d69aaf]"
                      />
                    </div>

                    <h3 className="mt-4 font-serif text-lg">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {service.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </section>
        </>
      )}

      {/* ================= ABOUT ================= */}

      {activeMenu === "about" && (
        <section className="px-5 py-12">

          <p className="text-xs uppercase tracking-[0.25em] text-[#d69aaf]">
            About Us
          </p>

          <h1 className="mt-2 font-serif text-4xl">
            Making Your Day Special
          </h1>

          <img
            src="/images/wedding-about.webp"
            alt="Wedding event"
            loading="lazy"
            decoding="async"
            className="mt-8 h-64 w-full rounded-2xl object-cover"
          />

          <p className="mt-6 text-sm leading-7 text-gray-300">
            Every wedding has a unique story. Our goal is to turn that
            story into a beautiful experience that you and your family
            will remember for years to come.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            From planning and photography to event coordination, we
            take care of the details so you can enjoy your special day.
          </p>

        </section>
      )}

      {/* ================= SERVICES ================= */}

      {activeMenu === "services" && (
        <section className="px-5 py-12">

          <p className="text-xs uppercase tracking-[0.25em] text-[#d69aaf]">
            Our Services
          </p>

          <h1 className="mt-2 font-serif text-4xl">
            Wedding Services
          </h1>

          <div className="mt-8 grid gap-5">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-[#3d2635] bg-[#21141e] p-6"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#35202d]">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-[#d69aaf]"
                    />
                  </div>

                  <h2 className="mt-5 font-serif text-xl">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="mt-5 flex items-center gap-2 text-sm text-[#e0a3b8]"
                  >
                    Enquire Now
                    <ArrowRight size={15} />
                  </button>

                </div>
              );
            })}

          </div>

        </section>
      )}

      {/* ================= PACKAGES ================= */}

      {activeMenu === "packages" && (
        <section className="px-5 py-12">

          <p className="text-xs uppercase tracking-[0.25em] text-[#d69aaf]">
            Packages
          </p>

          <h1 className="mt-2 font-serif text-4xl">
            Choose Your Package
          </h1>

          <div className="mt-8 grid gap-5">

            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border bg-[#21141e] p-6 ${
                  pkg.popular
                    ? "border-[#b96782]"
                    : "border-[#3d2635]"
                }`}
              >

                {pkg.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#b96782] px-3 py-1 text-[10px] uppercase tracking-wider">
                    Popular
                  </div>
                )}

                <h2 className="font-serif text-2xl">
                  {pkg.name}
                </h2>

                <p className="mt-4 text-3xl text-[#e0a3b8]">
                  {pkg.price}
                </p>

                <div className="mt-6 space-y-3">

                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="text-[#d69aaf]">
                        ✓
                      </span>

                      {feature}
                    </div>
                  ))}

                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="mt-7 w-full rounded-xl bg-[#b96782] py-3 text-sm transition hover:bg-[#c97b95]"
                >
                  Enquire on WhatsApp
                </button>

              </div>
            ))}

          </div>

        </section>
      )}

      {/* ================= GALLERY ================= */}

      {activeMenu === "gallery" && (
        <section className="px-5 py-12">

          <p className="text-xs uppercase tracking-[0.25em] text-[#d69aaf]">
            Our Work
          </p>

          <h1 className="mt-2 font-serif text-4xl">
            Wedding Gallery
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            A collection of beautiful moments we have created.
          </p>

          <div className="mt-8 columns-2 gap-3">

            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                className="mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl"
              >

                <img
                  src={image}
                  alt={`Wedding moment ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />

              </button>
            ))}

          </div>

        </section>
      )}

      {/* ================= VIDEOS ================= */}

      {activeMenu === "videos" && (
        <section className="px-5 py-12">

          <p className="text-xs uppercase tracking-[0.25em] text-[#d69aaf]">
            Our Videos
          </p>

          <h1 className="mt-2 font-serif text-4xl">
            Wedding Moments
          </h1>

          <div className="mt-8 grid gap-6">

            <div className="overflow-hidden rounded-2xl border border-[#3d2635] bg-[#21141e]">

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

              <div className="p-4">
                <h2 className="font-serif text-lg">
                  Wedding Highlights
                </h2>
              </div>

            </div>

            <div className="overflow-hidden rounded-2xl border border-[#3d2635] bg-[#21141e]">

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

              <div className="p-4">
                <h2 className="font-serif text-lg">
                  Special Moments
                </h2>
              </div>

            </div>

          </div>

        </section>
      )}

      {/* ================= CONTACT ================= */}

      {activeMenu === "contact" && (
        <section className="px-5 py-12">

          <p className="text-xs uppercase tracking-[0.25em] text-[#d69aaf]">
            Contact
          </p>

          <h1 className="mt-2 font-serif text-4xl">
            Let's Plan Your Wedding
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Tell us about your wedding and we will get back to you.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleWhatsApp();
            }}
            className="mt-8 space-y-4"
          >

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-[#3d2635] bg-[#21141e] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#b96782]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full rounded-xl border border-[#3d2635] bg-[#21141e] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#b96782]"
            />

            <input
              type="text"
              placeholder="Wedding Date"
              className="w-full rounded-xl border border-[#3d2635] bg-[#21141e] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#b96782]"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your wedding..."
              className="w-full resize-none rounded-xl border border-[#3d2635] bg-[#21141e] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#b96782]"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-white transition hover:bg-[#20bd5a]"
            >
              Send Enquiry on WhatsApp
            </button>

          </form>

        </section>
      )}

      {/* ================= IMAGE LIGHTBOX ================= */}

      <ImageLightbox
        images={galleryImages}
        activeIndex={activeImage}
        setActiveIndex={setActiveImage}
        onClose={() => setActiveImage(null)}
      />

    </div>
  );
}

export default Wedding;
