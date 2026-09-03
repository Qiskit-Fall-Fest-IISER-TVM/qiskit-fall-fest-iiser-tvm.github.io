import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";

import heroBg from "../assets/campus_1_.jpg";
import ibmLogo from "../assets/IBM_Quantum_logotype_rev_RGB.png";

export function Hero() {
  return (
    <section className="relative min-h-[150dvh] flex items-center justify-center pt-20 overflow-hidden bg-black">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Campus Image - Slow Cinematic Zoom */}
        <motion.img
          src={heroBg}
          alt="IISER Thiruvananthapuram campus"
          initial={{
            scale: 1,
            y: "-1.5%",
          }}
          animate={{
            scale: 1.10,
            y: "3%",
          }}
          transition={{
            duration: 16,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-90
          "
        />

        {/* Light Overall Darkening */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Cinematic Vertical Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/5
            via-black/20
            to-black/90
          "
        />

        {/* Subtle Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.30)_100%)]
          "
        />

        {/* Subtle Cyan Atmospheric Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            -translate-x-1/2
            -translate-y-1/2
            w-[750px]
            h-[520px]
            rounded-full
            bg-cyan-400/[0.04]
            blur-[150px]
            pointer-events-none
          "
        />
      </div>


      {/* =========================================================
          VERY SUBTLE AMBIENT DETAILS
      ========================================================== */}

      <div className="absolute inset-0 z-[1] pointer-events-none">

        {/* Ambient Point 1 */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.02, 0.1, 0.02],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[28%] left-[12%]"
        >
          <div className="w-1 h-1 rounded-full bg-cyan-200" />
        </motion.div>


        {/* Ambient Point 2 */}
        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [0.02, 0.08, 0.02],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute top-[36%] right-[15%]"
        >
          <div className="w-1 h-1 rounded-full bg-blue-200" />
        </motion.div>


        {/* Ambient Point 3 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.01, 0.07, 0.01],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[28%] right-[22%]"
        >
          <div className="w-1 h-1 rounded-full bg-cyan-100" />
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
          -translate-y-20
          md:-translate-y-28
        "
      >

        {/* =====================================================
            DATE / LOCATION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
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
            text-white/85
            font-mono
            text-[10px]
            sm:text-xs
            md:text-sm
            tracking-wide
            mb-8
            backdrop-blur-md
          "
        >
          <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

          <span>9–12 OCTOBER 2026</span>

          <span className="text-white/30">•</span>

          <span>IISER THIRUVANANTHAPURAM</span>
        </motion.div>


        {/* =====================================================
            IBM QUANTUM LOGO
        ====================================================== */}

        <motion.img
          src={ibmLogo}
          alt="IBM Quantum"
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: "easeOut",
          }}
          className="
            w-56
            sm:w-64
            md:w-80
            lg:w-[24rem]
            xl:w-[28rem]
            h-auto
            object-contain
            mb-7
            drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]
          "
        />


        {/* =====================================================
            QISKIT FALL FEST 2026
        ====================================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.24,
            ease: "easeOut",
          }}
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-bold
            tracking-tight
            max-w-6xl
            mb-2
          "
          style={{
            textShadow: "0 4px 35px rgba(0,0,0,0.55)",
          }}
        >
          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-blue-300
              via-cyan-300
              to-white
            "
          >
            Qiskit Fall Fest 2026
          </span>
        </motion.h1>


        {/* =====================================================
            IISER TVM
        ====================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.38,
            ease: "easeOut",
          }}
          className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-bold
            tracking-tight
            text-white
            mb-6
          "
          style={{
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
          }}
        >
          IISER TVM
        </motion.h2>


        {/* =====================================================
            PUNCHLINE
        ====================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="
            text-2xl
            md:text-3xl
            lg:text-4xl
            text-white/85
            max-w-4xl
            mb-10
            leading-relaxed
          "
          style={{
            fontFamily:
              '"Dancing Script", "Segoe Script", "Brush Script MT", cursive',
            textShadow: "0 3px 20px rgba(0,0,0,0.55)",
          }}
        >
          Where the quantum frontier meets the Western Ghats...
        </motion.p>


        {/* =====================================================
            ACTION BUTTONS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.62,
            ease: "easeOut",
          }}
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            gap-4
          "
        >

          {/* Register Button */}
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
              duration-300
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


          {/* Discover Button */}
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
              duration-300
            "
          >
            <a href="#about">
              Discover More
            </a>
          </Button>

        </motion.div>

      </div>


      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
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
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >

          <div
            className="
              w-px
              h-8
              bg-gradient-to-b
              from-white/70
              to-transparent
            "
          />

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
