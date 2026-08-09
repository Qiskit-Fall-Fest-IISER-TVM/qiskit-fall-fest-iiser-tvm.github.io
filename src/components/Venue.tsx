import { motion } from "framer-motion";
import { MapPin, Calendar, Mail } from "lucide-react";
import iiserLogo from "@assets/Logo_1782481254440.png";
import venueBg from "@assets/venue-bg.png";

export function Venue() {
  return (
    <section
      id="venue"
      className="relative py-24 overflow-hidden bg-black"
    >

      {/* Background */}
      <div className="absolute inset-0 z-0">

        <img
          src={venueBg}
          alt="IISER Thiruvananthapuram campus"
          className="w-full h-full object-cover opacity-65"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/70 to-black/90" />

      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            The Venue
          </h2>

          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Hosted at the stunning campus of Indian Institute of Science
            Education and Research (IISER), Thiruvananthapuram, nestled
            in the lush Western Ghats.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IISER Logo Card */}
          <motion.div
            initial={{ opacity: 0.1, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >

            <div className="relative p-12 rounded-3xl border border-white/15 bg-black/40 backdrop-blur-md flex flex-col items-center gap-6 max-w-sm w-full shadow-2xl">

              <img
                src={iiserLogo}
                alt="IISER Thiruvananthapuram"
                className="h-24 w-auto object-contain brightness-0 invert"
              />

              <div className="text-center">

                <h3 className="text-xl font-bold text-white mb-1">
                  IISER Thiruvananthapuram
                </h3>

                <p className="text-sm text-white/65">
                  Indian Institute of Science Education and Research
                </p>

              </div>

              <div className="w-full h-px bg-white/15" />

              <p className="text-center text-sm text-white/65 leading-relaxed">
                Maruthamala PO, Vithura
                <br />
                Thiruvananthapuram, Kerala 695551
                <br />
                India
              </p>

            </div>

          </motion.div>


          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0.1, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Event Dates */}
            <div className="flex items-start gap-4">

              <div className="p-3 rounded-lg bg-blue-500/15 text-blue-300 mt-1 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>

              <div>

                <h3 className="text-lg font-semibold mb-1 text-white">
                  Event Dates
                </h3>

                <p className="text-white/70">
                  Fall 2026 — Exact dates to be announced. Stay tuned!
                </p>

              </div>

            </div>


            {/* Location */}
            <div className="flex items-start gap-4">

              <div className="p-3 rounded-lg bg-cyan-400/15 text-cyan-300 mt-1 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>

              <div>

                <h3 className="text-lg font-semibold mb-1 text-white">
                  Location
                </h3>

                <p className="text-white/70">
                  IISER Thiruvananthapuram
                  <br />
                  Vithura, Kerala
                </p>

              </div>

            </div>


            {/* Contact */}
            <div className="flex items-start gap-4">

              <div className="p-3 rounded-lg bg-purple-400/15 text-purple-300 mt-1 shrink-0">
                <Mail className="w-5 h-5" />
              </div>

              <div>

                <h3 className="text-lg font-semibold mb-1 text-white">
                  Contact
                </h3>

                <a
                  href="mailto:qiskitfallfest@iisertvm.ac.in"
                  className="text-white/70 hover:text-cyan-300 transition-colors"
                >
                  qiskitfallfest@iisertvm.ac.in
                </a>

              </div>

            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}
