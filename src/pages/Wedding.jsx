import {
  ArrowRight,
  Camera,
  Heart,
  Sparkles,
} from "lucide-react";

function Wedding({ activeMenu }) {
  return (
    <div className="min-h-screen bg-[#f8f2ed] text-[#351f2b]">

      {/* ================= HOME ================= */}
      {activeMenu === "home" && (
        <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">

          {/* Background */}
          <img
            src="/images/wedding-hero.webp"
            alt="Beautiful wedding celebration"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#d99aaa]/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 min-h-[calc(100vh-64px)] flex flex-col justify-end p-7 pb-12 text-white">

            <div className="animate-[fadeIn_0.8s_ease-out]">

              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={15} className="text-[#f0c4cf]" />

                <span className="text-[10px] tracking-[0.35em] uppercase text-[#f0c4cf]">
                  Weddings & Celebrations
                </span>
              </div>

              <h1 className="font-serif text-[44px] leading-[1.05]">
                Your Day.
                <br />
                Your Story.
                <br />

                <span className="italic text-[#e9b1c2]">
                  Beautifully
                </span>
                <br />

                Celebrated.
              </h1>

              <p className="mt-5 max-w-[310px] text-sm leading-6 text-gray-200">
                Creating unforgettable wedding experiences
                filled with love, elegance and beautiful
                memories.
              </p>

              <div className="flex gap-3 mt-7">

                <button
                  onClick={() => {}}
                  className="group px-5 py-3.5 rounded-xl bg-[#b96782] flex items-center gap-2 text-sm font-medium shadow-xl hover:bg-[#a85572] transition"
                >
                  Explore Weddings

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center hover:bg-white/25 transition"
                  aria-label="Wedding gallery"
                >
                  <Camera size={18} />
                </button>

              </div>

            </div>

            {/* Bottom indicator */}
            <div className="flex items-center gap-3 mt-10 text-[10px] tracking-[0.2em] text-gray-300">
              <span className="w-8 h-[1px] bg-white/50" />
              SCROLL TO EXPLORE
            </div>

          </div>
        </section>
      )}

      {/* ================= ABOUT ================= */}
      {activeMenu === "about" && (
        <section className="p-6 min-h-screen">

          <p className="text-[10px] tracking-[0.3em] text-[#a65b77] text-center">
            OUR STORY
          </p>

          <h2 className="text-3xl font-serif text-center mt-3">
            About Wedding
          </h2>

          <img
            src="/images/wedding-about.webp"
            alt="Wedding celebration"
            loading="lazy"
            decoding="async"
            className="w-full h-64 object-cover rounded-2xl mt-8"
          />

          <p className="mt-6 text-sm leading-7 text-gray-600">
            From intimate ceremonies to grand celebrations,
            we create beautiful wedding experiences designed
            around your story.
          </p>

        </section>
      )}

      {/* ================= SERVICES ================= */}
      {activeMenu === "services" && (
        <section className="p-6 min-h-screen">

          <p className="text-[10px] tracking-[0.3em] text-[#a65b77] text-center">
            WHAT WE DO
          </p>

          <h2 className="text-3xl font-serif text-center mt-3">
            Wedding Services
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-8">

            {[
              ["Wedding Planning", Heart],
              ["Photography", Camera],
              ["Wedding Design", Sparkles],
              ["Event Styling", Heart],
            ].map(([title, Icon]) => (

              <div
                key={title}
                className="bg-white rounded-2xl border border-[#eadde2] p-6 text-center shadow-sm"
              >
                <div className="w-11 h-11 mx-auto rounded-full bg-[#f5e4e9] flex items-center justify-center">
                  <Icon
                    size={20}
                    className="text-[#a65b77]"
                  />
                </div>

                <p className="text-xs mt-4 font-medium">
                  {title}
                </p>

              </div>

            ))}

          </div>

        </section>
      )}

      {/* ================= PACKAGES ================= */}
      {activeMenu === "packages" && (
        <section className="p-6 min-h-screen">

          <p className="text-[10px] tracking-[0.3em] text-[#a65b77] text-center">
            WEDDING PACKAGES
          </p>

          <h2 className="text-3xl font-serif text-center mt-3">
            Choose Your Experience
          </h2>

          <div className="space-y-4 mt-8">

            {[
              {
                name: "Silver",
                price: "₹25,000",
                description: "Perfect for intimate celebrations.",
              },
              {
                name: "Gold",
                price: "₹50,000",
                description: "A complete wedding experience.",
                popular: true,
              },
              {
                name: "Luxury",
                price: "₹85,000",
                description: "For unforgettable grand celebrations.",
              },
            ].map((pkg) => (

              <div
                key={pkg.name}
                className={`relative bg-white rounded-2xl p-6 border ${
                  pkg.popular
                    ? "border-[#b96782] shadow-lg"
                    : "border-[#eadde2]"
                }`}
              >

                {pkg.popular && (
                  <span className="absolute top-4 right-4 text-[9px] tracking-wider uppercase bg-[#b96782] text-white px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}

                <h3 className="font-serif text-xl">
                  {pkg.name}
                </h3>

                <p className="text-2xl font-semibold text-[#a65b77] mt-2">
                  {pkg.price}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  {pkg.description}
                </p>

                <button className="w-full mt-5 py-3 rounded-xl bg-[#8d405f] text-white text-xs">
                  Enquire on WhatsApp
                </button>

              </div>

            ))}

          </div>

        </section>
      )}

      {/* ================= GALLERY ================= */}
      {activeMenu === "gallery" && (
        <section className="p-5 min-h-screen">

          <p className="text-[10px] tracking-[0.3em] text-[#a65b77] text-center">
            OUR MOMENTS
          </p>

          <h2 className="text-3xl font-serif text-center mt-3">
            Wedding Gallery
          </h2>

          <div className="columns-2 gap-2 mt-8 space-y-2">

            {[
              "wedding-1.webp",
              "wedding-2.webp",
              "wedding-3.webp",
              "wedding-4.webp",
              "wedding-5.webp",
              "wedding-6.webp",
            ].map((image) => (

              <img
                key={image}
                src={`/images/${image}`}
                alt="Wedding moment"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl break-inside-avoid"
              />

            ))}

          </div>

        </section>
      )}

      {/* ================= VIDEOS ================= */}
      {activeMenu === "videos" && (
        <section className="p-5 min-h-screen">

          <p className="text-[10px] tracking-[0.3em] text-[#a65b77] text-center">
            WATCH OUR STORIES
          </p>

          <h2 className="text-3xl font-serif text-center mt-3">
            Wedding Videos
          </h2>

          <div className="space-y-5 mt-8">

            {[
              "wedding-1.mp4",
              "wedding-2.mp4",
            ].map((video) => (

              <video
                key={video}
                controls
                preload="none"
                playsInline
                poster="/images/video-poster.webp"
                className="w-full rounded-2xl"
              >
                <source
                  src={`/videos/${video}`}
                  type="video/mp4"
                />
              </video>

            ))}

          </div>

        </section>
      )}

      {/* ================= CONTACT ================= */}
      {activeMenu === "contact" && (
        <section className="p-6 min-h-screen">

          <p className="text-[10px] tracking-[0.3em] text-[#a65b77] text-center">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl font-serif text-center mt-3">
            Let's Create
            <br />
            Something Beautiful
          </h2>

          <div className="mt-8 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-[#e5d6dd] bg-white outline-none focus:border-[#b96782]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border border-[#e5d6dd] bg-white outline-none focus:border-[#b96782]"
            />

            <textarea
              placeholder="Tell us about your wedding..."
              rows="5"
              className="w-full p-4 rounded-xl border border-[#e5d6dd] bg-white outline-none focus:border-[#b96782]"
            />

            <button className="w-full py-4 bg-[#25D366] text-white rounded-xl text-sm font-medium">
              Send Enquiry on WhatsApp
            </button>

          </div>

        </section>
      )}

    </div>
  );
}

export default Wedding;