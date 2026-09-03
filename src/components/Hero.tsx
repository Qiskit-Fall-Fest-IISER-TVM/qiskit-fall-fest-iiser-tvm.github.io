import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroBg from "../assets/campus_1_.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[150dvh] flex items-center justify-center pt-20 overflow-hidden bg-black">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroBg}
          alt="IISER Thiruvananthapuram campus"
          initial={{ scale: 1 }}
          animate={{ scale: 1.025 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="w-full h-full object-cover opacity-90"
        />

        {/* Soft cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/75" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">

        {/* Event Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-200 font-mono text-xs md:text-sm mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

          Fall 2026 • IISER Thiruvananthapuram
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl mb-6"
        >
          IBM Qiskit
          <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Fall Fest 2026
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="text-lg md:text-2xl text-white/85 max-w-2xl mb-10 font-light leading-relaxed"
        >
          Explore the frontier of quantum computation. A prestigious
          hackathon and learning event for the next generation of quantum
          researchers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >

          {/* Register Button */}
          <Button
            asChild
            size="lg"
            className="group bg-blue-600 hover:bg-blue-500 text-white border-0 rounded-full px-8 h-14 text-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all"
          >
            <a href="#register">
              Register Now
              <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>

          {/* Discover Button */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-lg bg-white/5 text-white border-white/30 hover:bg-white/15 hover:text-white backdrop-blur-sm transition-all"
          >
            <a href="#about">
              Discover More
            </a>
          </Button>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-white/70 tracking-widest uppercase">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent"
        />
      </motion.div>

    </section>
  );
}
