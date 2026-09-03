import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

function ContactSection({ type = "wedding" }) {
  const isWedding = type === "wedding";

  const data = isWedding
    ? {
        label: "Wedding & Events",
        title: "Let's Plan Your",
        highlight: "Perfect Wedding",
        description:
          "Tell us about your wedding and let our team create a beautiful, memorable celebration designed around your dreams.",
        message:
          "Hello, I am interested in your wedding services.",
        eventTypes: [
          "Wedding",
          "Reception",
          "Engagement",
          "Pre-Wedding",
          "Other",
        ],
      }
    : {
        label: "Wedding Decoration",
        title: "Let's Create Your",
        highlight: "Dream Venue",
        description:
          "Tell us about your event and our decoration team will transform your venue with beautiful themes, flowers, lighting and elegant details.",
        message:
          "Hello, I am interested in your wedding decoration services.",
        eventTypes: [
          "Wedding Decoration",
          "Reception",
          "Engagement",
          "Birthday",
          "Corporate Event",
          "Other",
        ],
      };

  const handleWhatsApp = () => {
    const phoneNumber = "91XXXXXXXXXX";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        data.message
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="
        scroll-section
        relative
        overflow-hidden
        bg-[#24131f]
        px-5
        py-20
        text-white
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#b96782]/20
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#d6a86e]/10
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#e6bd85]
              sm:text-xs
            "
          >
            {data.label}
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-4xl
              leading-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            {data.title}
            <br />
            <span className="text-[#e6bd85]">
              {data.highlight}
            </span>
          </h2>

          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-[#c9a66b]" />

            <Sparkles
              size={15}
              className="text-[#e6bd85]"
            />

            <div className="h-px w-14 bg-[#c9a66b]" />
          </div>

          <p
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-7
              text-white/60
              sm:text-base
            "
          >
            {data.description}
          </p>
        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            mt-12
            grid
            gap-7
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-10
          "
        >

          {/* ================= LEFT ================= */}

          <div>

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.05]
                p-6
                backdrop-blur-xl
                sm:p-8
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#e6bd85]
                "
              >
                Contact Information
              </p>

              <h3 className="
                mt-3
                font-serif
                text-2xl
              ">
                We'd Love To Hear From You
              </h3>

              <p className="
                mt-3
                text-sm
                leading-6
                text-white/50
              ">
                Have a question, need a quotation or want
                to discuss your event? Contact us directly.
              </p>


              {/* PHONE */}

              <div className="
                mt-7
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-black/10
                p-4
                transition
                hover:bg-white/[0.08]
              ">

                <div className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#b96782]/20
                ">
                  <Phone
                    size={20}
                    className="text-[#e6bd85]"
                  />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm">
                    +91 12345 67890
                  </p>
                </div>

              </div>


              {/* WHATSAPP */}

              <button
                type="button"
                onClick={handleWhatsApp}
                className="
                  mt-3
                  flex
                  w-full
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/10
                  p-4
                  text-left
                  transition
                  hover:bg-white/[0.08]
                "
              >

                <div className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#25D366]/15
                ">
                  <MessageCircle
                    size={20}
                    className="text-[#25D366]"
                  />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm">
                    +91 12345 67890
                  </p>
                </div>

              </button>


              {/* EMAIL */}

              <div className="
                mt-3
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-black/10
                p-4
              ">

                <div className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#b96782]/20
                ">
                  <Mail
                    size={20}
                    className="text-[#e6bd85]"
                  />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    Email
                  </p>

                  <p className="mt-1 text-sm">
                    info@yourcompany.com
                  </p>
                </div>

              </div>


              {/* LOCATION */}

              <div className="
                mt-3
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-black/10
                p-4
              ">

                <div className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#b96782]/20
                ">
                  <MapPin
                    size={20}
                    className="text-[#e6bd85]"
                  />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    Location
                  </p>

                  <p className="mt-1 text-sm">
                    Pune, Maharashtra
                  </p>
                </div>

              </div>


              {/* HOURS */}

              <div className="
                mt-3
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-black/10
                p-4
              ">

                <div className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#b96782]/20
                ">
                  <Clock3
                    size={20}
                    className="text-[#e6bd85]"
                  />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm">
                    Mon – Sun · 9:00 AM – 9:00 PM
                  </p>
                </div>

              </div>

            </div>


            {/* STATS */}

            <div className="
              mt-4
              grid
              grid-cols-3
              gap-3
            ">

              <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-4
                text-center
              ">
                <p className="
                  font-serif
                  text-2xl
                  text-[#e6bd85]
                ">
                  100+
                </p>

                <p className="
                  mt-1
                  text-[10px]
                  text-white/45
                ">
                  Events
                </p>
              </div>


              <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-4
                text-center
              ">
                <p className="
                  font-serif
                  text-2xl
                  text-[#e6bd85]
                ">
                  5+
                </p>

                <p className="
                  mt-1
                  text-[10px]
                  text-white/45
                ">
                  Years
                </p>
              </div>


              <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-4
                text-center
              ">
                <p className="
                  font-serif
                  text-2xl
                  text-[#e6bd85]
                ">
                  100%
                </p>

                <p className="
                  mt-1
                  text-[10px]
                  text-white/45
                ">
                  Satisfaction
                </p>
              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <div
            className="
              rounded-3xl
              border
              border-[#d6a86e]/30
              bg-gradient-to-br
              from-white/[0.12]
              to-white/[0.03]
              p-6
              shadow-2xl
              backdrop-blur-xl
              sm:p-8
            "
          >

            <div className="mb-7">

              <p className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-[#e6bd85]
              ">
                Start A Conversation
              </p>

              <h3 className="
                mt-2
                font-serif
                text-3xl
              ">
                Tell Us About Your Event
              </h3>

              <p className="
                mt-2
                text-sm
                text-white/45
              ">
                Fill in your details and we'll contact
                you on WhatsApp.
              </p>

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
                  border-white/10
                  bg-black/20
                  px-4
                  py-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/30
                  focus:border-[#d6a86e]
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
                  border-white/10
                  bg-black/20
                  px-4
                  py-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/30
                  focus:border-[#d6a86e]
                "
              />


              <div className="
                grid
                gap-4
                sm:grid-cols-2
              ">

                <input
                  type="date"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-4
                    text-sm
                    text-white
                    outline-none
                    focus:border-[#d6a86e]
                  "
                />


                <select
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-[#291622]
                    px-4
                    py-4
                    text-sm
                    text-white
                    outline-none
                    focus:border-[#d6a86e]
                  "
                >

                  <option>
                    Event Type
                  </option>

                  {data.eventTypes.map((event) => (
                    <option key={event}>
                      {event}
                    </option>
                  ))}

                </select>

              </div>


              <select
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#291622]
                  px-4
                  py-4
                  text-sm
                  text-white
                  outline-none
                  focus:border-[#d6a86e]
                "
              >

                <option>
                  Choose Your Budget
                </option>

                <option>
                  ₹20,000 – ₹40,000
                </option>

                <option>
                  ₹40,000 – ₹70,000
                </option>

                <option>
                  ₹70,000 – ₹1,00,000
                </option>

                <option>
                  ₹1,00,000+
                </option>

              </select>


              <textarea
                rows="5"
                placeholder={
                  isWedding
                    ? "Tell us about your wedding..."
                    : "Tell us about your decoration requirements..."
                }
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-white/10
                  bg-black/20
                  px-4
                  py-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/30
                  focus:border-[#d6a86e]
                "
              />


              <button
                type="submit"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#a65370]
                  to-[#c47791]
                  py-4
                  text-sm
                  font-medium
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <MessageCircle size={18} />

                Send Enquiry on WhatsApp

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />

              </button>

            </form>

          </div>

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <div className="
          mt-10
          rounded-3xl
          border
          border-[#d6a86e]/20
          bg-gradient-to-r
          from-[#3a202d]
          to-[#291622]
          p-7
          text-center
          sm:p-10
        ">

          <p className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-[#e6bd85]
          ">
            Ready To Begin?
          </p>

          <h3 className="
            mt-3
            font-serif
            text-3xl
            sm:text-4xl
          ">
            Your Beautiful Celebration Starts Here
          </h3>

          <p className="
            mx-auto
            mt-3
            max-w-xl
            text-sm
            leading-6
            text-white/50
          ">
            Share your vision with us and let's turn
            your ideas into an unforgettable experience.
          </p>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#e6bd85]
              px-7
              py-3.5
              text-sm
              font-medium
              text-[#291622]
              transition-all
              hover:-translate-y-1
              hover:bg-[#f0cc9b]
            "
          >
            Talk To Us
            <ArrowRight size={16} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;