function Decoration({ activeMenu }) {
  return (
    <div className="min-h-screen bg-[#f8f2ed] text-[#351f2b]">

      {activeMenu === "home" && (
        <section
          className="min-h-[calc(100vh-64px)] bg-cover bg-center relative flex items-end"
          style={{
            backgroundImage:
              "url('/images/decoration-hero.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 p-7 pb-12 text-white">

            <p className="text-xs tracking-[0.3em] text-[#e8b8c8]">
              BEAUTIFUL DECORATIONS
            </p>

            <h1 className="text-4xl font-serif mt-4">
              Transforming
              <br />
              Spaces Into
              <br />
              <span className="text-[#e9b3c5]">
                Memories
              </span>
            </h1>

            <p className="mt-5 text-sm text-gray-200">
              Elegant decorations designed especially
              for your special celebrations.
            </p>

          </div>
        </section>
      )}

      {activeMenu === "about" && (
        <section className="p-6">

          <h2 className="text-3xl font-serif text-center">
            About Decoration
          </h2>

          <img
            src="/images/decoration-about.webp"
            alt="Wedding decoration"
            loading="lazy"
            className="w-full h-64 object-cover rounded-2xl mt-8"
          />

          <p className="mt-6 text-sm leading-7 text-gray-600">
            We create elegant and memorable decoration setups
            for weddings, receptions, engagements and special
            events.
          </p>

        </section>
      )}

      {activeMenu === "services" && (
        <section className="p-6">

          <h2 className="text-3xl font-serif text-center">
            Decoration Services
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-8">

            {[
              "Stage Decoration",
              "Mandap Decoration",
              "Venue Decoration",
              "Floral Decoration",
              "Lighting Design",
              "Theme Decoration",
            ].map((service) => (
              <div
                key={service}
                className="bg-white border border-[#eadde2] rounded-xl p-5 text-center"
              >
                <p className="text-sm">
                  {service}
                </p>
              </div>
            ))}

          </div>

        </section>
      )}

      {activeMenu === "packages" && (
        <section className="p-6">

          <h2 className="text-3xl font-serif text-center">
            Decoration Packages
          </h2>

          <div className="space-y-4 mt-8">

            {[
              ["Basic", "₹15,000"],
              ["Premium", "₹35,000"],
              ["Luxury", "₹60,000"],
            ].map(([name, price]) => (
              <div
                key={name}
                className="bg-white p-6 rounded-2xl border border-[#eadde2]"
              >
                <h3 className="text-xl font-serif">
                  {name}
                </h3>

                <p className="text-2xl text-[#a65b77] mt-2">
                  {price}
                </p>

                <p className="text-sm text-gray-600 mt-4">
                  Customized decoration package for your event.
                </p>

                <button className="w-full mt-5 py-3 bg-[#8d405f] text-white rounded-lg">
                  Enquire on WhatsApp
                </button>
              </div>
            ))}

          </div>

        </section>
      )}

      {activeMenu === "gallery" && (
        <section className="p-5">

          <h2 className="text-3xl font-serif text-center">
            Decoration Gallery
          </h2>

          <div className="grid grid-cols-2 gap-2 mt-8">

            {[
              "decoration-1.webp",
              "decoration-2.webp",
              "decoration-3.webp",
              "decoration-4.webp",
              "decoration-5.webp",
              "decoration-6.webp",
            ].map((image) => (
              <img
                key={image}
                src={`/images/${image}`}
                alt="Decoration"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover rounded-lg"
              />
            ))}

          </div>

        </section>
      )}

      {activeMenu === "videos" && (
        <section className="p-5">

          <h2 className="text-3xl font-serif text-center">
            Decoration Videos
          </h2>

          <div className="space-y-5 mt-8">

            <video
              controls
              preload="none"
              playsInline
              poster="/images/video-poster.webp"
              className="w-full rounded-xl"
            >
              <source
                src="/videos/decoration-1.mp4"
                type="video/mp4"
              />
            </video>

          </div>

        </section>
      )}

      {activeMenu === "contact" && (
        <section className="p-6">

          <h2 className="text-3xl font-serif text-center">
            Contact Us
          </h2>

          <div className="space-y-4 mt-8">

            <input
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border bg-white"
            />

            <input
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border bg-white"
            />

            <textarea
              placeholder="Tell us about your event"
              rows="5"
              className="w-full p-4 rounded-xl border bg-white"
            />

            <button className="w-full py-4 bg-[#25D366] text-white rounded-xl">
              Send Enquiry on WhatsApp
            </button>

          </div>

        </section>
      )}

    </div>
  );
}

export default Decoration;