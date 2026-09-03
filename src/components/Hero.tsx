import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import heroBg from "../assets/campus_1_.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[150dvh] flex items-center justify-center pt-20 overflow-hidden bg-black">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Campus Image */}
        <motion.img
          src={heroBg}
          alt="IISER Thiruvananthapuram campus"
          initial={{ scale: 1 }}
          animate={{ scale: 1.035 }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Soft overall darkening */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Cinematic vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/90" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.38)_100%)]" />

        {/* Subtle cyan atmospheric glow */}
        <div
          className="
            absolute
            left-1/2
            top-[45%]
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[500px]
            rounded-full
            bg-cyan-400/[0.07]
            blur-[140px]
            pointer-events-none
          "
        />
      </div>


      {/* =========================================================
          SUBTLE DECORATIVE ELEMENTS
      ========================================================== */}

      <div className="absolute inset-0 z-[1] pointer-events-none">

        {/* Top-left corner line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="
            absolute
            top-32
            left-6
            md:left-12
            w-24
            md:w-40
            h-px
            bg-white/20
            origin-left
          "
        />

        {/* Top-right corner line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="
            absolute
            top-32
            right-6
            md:right-12
            w-24
            md:w-40
            h-px
            bg-white/20
            origin-right
          "
        />

        {/* Small corner markers */}
        <div className="absolute top-32 left-6 md:left-12 w-2 h-2 border-l border-t border-cyan-300/50" />
        <div className="absolute top-32 right-6 md:right-12 w-2 h-2 border-r border-t border-cyan-300/50" />


        {/* Floating nodes */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[28%] left-[12%]"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[38%] right-[14%]"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.8)]" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[30%] right-[22%]"
        >
          <div className="w-1 h-1 rounded-full bg-cyan-200" />
        </motion.div>

      </div>


      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div
        className="
          container
          relative
          z-10
          mx-auto
          px-4
          md:px-6
          flex
          flex-col
          items-center
          text-center
          -translate-y-8
          md:-translate-y-12
        "
      >

        {/* Event Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-white/20
            bg-black/20
            text-white/80
            font-mono
            text-xs
            md:text-sm
            tracking-wide
            mb-8
            backdrop-blur-md
          "
        >
          <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

          FALL 2026

          <span className="text-white/30">•</span>

          IISER THIRUVANANTHAPURAM
        </motion.div>


        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-bold
            tracking-tight
            text-white
            max-w-5xl
            mb-6
          "
          style={{
            textShadow: "0 4px 35px rgba(0,0,0,0.5)",
          }}
        >
          IBM Qiskit
          <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-white">
            Fall Fest 2026
          </span>
        </motion.h1>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="
            text-lg
            md:text-2xl
            text-white/85
            max-w-2xl
            mb-8
            font-light
            leading-relaxed
          "
        >
          Explore the frontier of quantum computation.
          <br className="hidden md:block" />
          Learn, build, and compete with the next generation of
          quantum researchers.
        </motion.p>


        {/* Event Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            flex
            items-center
            justify-center
            gap-4
            md:gap-6
            mb-9
            text-xs
            md:text-sm
            font-mono
            text-white/60
          "
        >
          <span>QUANTUM COMPUTING</span>

          <span className="w-1 h-1 rounded-full bg-cyan-300/60" />

          <span>IISER TVM</span>

          <span className="w-1 h-1 rounded-full bg-cyan-300/60" />

          <span>2026</span>
        </motion.div>


        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >

          {/* Register */}
          <Button
            asChild
            size="lg"
            className="
              group
              bg-blue-600
              hover:bg-blue-500
              text-white
              border-0
              rounded-full
              px-8
              h-14
              text-lg
              shadow-[0_0_20px_rgba(37,99,235,0.45)]
              hover:shadow-[0_0_40px_rgba(37,99,235,0.65)]
              transition-all
            "
          >
            <a href="#register">
              Register Now

              <ChevronRight
                className="
                  ml-2
                  w-5
                  h-5
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </a>
          </Button>


          {/* Discover */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              rounded-full
              px-8
              h-14
              text-lg
              bg-white/5
              text-white
              border-white/30
              hover:bg-white/15
              hover:text-white
              backdrop-blur-sm
              transition-all
            "
          >
            <a href="#about">
              Discover More
            </a>
          </Button>

        </motion.div>
      </div>


      {/* =========================================================
          BOTTOM SCROLL INDICATOR
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-3
          z-10
        "
      >

        <span
          className="
            text-[10px]
            md:text-xs
            font-mono
            text-white/60
            tracking-[0.3em]
            uppercase
          "
        >
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-8 bg-gradient-to-b from-white/70 to-transparent" />

          <ArrowDown className="w-4 h-4 text-white/60" />
        </motion.div>

      </motion.div>


      {/* =========================================================
          BOTTOM FADE
      ========================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-black
          to-transparent
          pointer-events-none
        "
      />

    </section>
  );
}
