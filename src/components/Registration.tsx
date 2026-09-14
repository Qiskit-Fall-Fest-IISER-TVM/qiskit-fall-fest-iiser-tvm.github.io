import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { SectionBackground } from "@/components/SectionBackground";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScc2eJ8bxz76kkZu2LatUrb_eGNkSkiySGwVSpeVnKd5AeIpA/viewform";

export function Registration() {
  return (
    <SectionBackground className="relative overflow-hidden py-28 md:py-36">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-primary/[0.035] dark:bg-primary/[0.07]" />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/[0.08]
          blur-[140px]
        "
      />

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-border/70
            bg-background/85
            shadow-2xl
            backdrop-blur-xl
          "
        >

          {/* =================================================
              TOP ACCENT
          ================================================= */}

          <div className="h-1 w-full bg-primary" />

          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="relative p-8 md:p-14 lg:p-16">

              {/* Small label */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-primary" />

                <span
                  className="
                    font-mono
                    text-[10px]
                    font-semibold
                    tracking-[0.25em]
                    text-primary
                  "
                >
                  REGISTRATION
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="
                  max-w-xl
                  text-4xl
                  font-bold
                  tracking-tight
                  text-foreground
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Join the
                <span className="text-primary"> Quantum Frontier.</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-relaxed
                  text-muted-foreground
                  md:text-lg
                "
              >
                Be part of Qiskit Fall Fest 2026 at IISER
                Thiruvananthapuram. Learn, build, and explore
                the possibilities of quantum computing alongside
                students, educators, and researchers.
              </motion.p>

              {/* Event information */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="
                  mt-10
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                "
              >

                {/* Date */}
                <div
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-xl
                    border
                    border-border
                    bg-muted/30
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-border
                      bg-background
                    "
                  >
                    <CalendarDays className="h-4 w-4 text-primary" />
                  </div>

                  <div>
                    <p
                      className="
                        font-mono
                        text-[9px]
                        tracking-[0.18em]
                        text-muted-foreground
                      "
                    >
                      DATE
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      09 - 12 October 2026
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-xl
                    border
                    border-border
                    bg-muted/30
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-border
                      bg-background
                    "
                  >
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>

                  <div>
                    <p
                      className="
                        font-mono
                        text-[9px]
                        tracking-[0.18em]
                        text-muted-foreground
                      "
                    >
                      VENUE
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      IISER Thiruvananthapuram
                    </p>
                  </div>
                </div>

              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="mt-10"
              >
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    h-13
                    items-center
                    gap-3
                    rounded-xl
                    bg-primary
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-primary-foreground
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-primary/90
                    hover:shadow-xl
                  "
                >
                  Register Now

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>

                <p
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-muted-foreground
                  "
                >
                  Registration opens in a new tab

                  <ExternalLink className="h-3 w-3" />
                </p>
              </motion.div>

            </div>

            {/* =================================================
                RIGHT VISUAL - GHZ CIRCUIT
            ================================================= */}

            <div
              className="
                relative
                hidden
                min-h-[500px]
                overflow-hidden
                border-l
                border-border
                bg-muted/20
                md:flex
                md:items-center
                md:justify-center
              "
            >

              {/* Subtle grid */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.035]
                  [background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)]
                  [background-size:32px_32px]
                "
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[460px] px-7"
              >

                {/* Circuit heading */}
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />

                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-semibold
                      tracking-[0.25em]
                      text-primary
                    "
                  >
                    GHZ STATE PREPARATION
                  </span>
                </div>


                {/* =================================================
                    QUANTUM CIRCUIT
                ================================================= */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-border/70
                    bg-background/70
                    px-6
                    py-8
                    shadow-xl
                    backdrop-blur-sm
                  "
                >

                  {/* Circuit columns */}
                  <div className="relative">

                    {/* Vertical CNOT 1 */}
                    <div
                      className="
                        absolute
                        left-[168px]
                        top-[32px]
                        h-[96px]
                        w-px
                        bg-primary
                      "
                    />

                    {/* Vertical CNOT 2 */}
                    <div
                      className="
                        absolute
                        left-[268px]
                        top-[96px]
                        h-[96px]
                        w-px
                        bg-primary
                      "
                    />


                    {/* ===============================
                        QUBIT 0
                    =============================== */}

                    <div className="relative flex h-16 items-center">

                      <span
                        className="
                          w-10
                          shrink-0
                          font-mono
                          text-sm
                          text-muted-foreground
                        "
                      >
                        q₀
                      </span>

                      <div className="relative flex flex-1 items-center">

                        {/* Wire */}
                        <div
                          className="
                            absolute
                            left-0
                            right-0
                            h-px
                            bg-border
                          "
                        />

                        {/* H gate */}
                        <div
                          className="
                            relative
                            z-10
                            ml-4
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-md
                            border
                            border-primary/60
                            bg-background
                            font-serif
                            text-lg
                            text-primary
                            shadow-sm
                          "
                        >
                          H
                        </div>

                        {/* CNOT control 1 */}
                        <div
                          className="
                            absolute
                            left-[120px]
                            z-10
                            h-3.5
                            w-3.5
                            rounded-full
                            bg-primary
                          "
                        />

                      </div>
                    </div>


                    {/* ===============================
                        QUBIT 1
                    =============================== */}

                    <div className="relative flex h-16 items-center">

                      <span
                        className="
                          w-10
                          shrink-0
                          font-mono
                          text-sm
                          text-muted-foreground
                        "
                      >
                        q₁
                      </span>

                      <div className="relative flex flex-1 items-center">

                        {/* Wire */}
                        <div
                          className="
                            absolute
                            left-0
                            right-0
                            h-px
                            bg-border
                          "
                        />

                        {/* CNOT target 1 */}
                        <div
                          className="
                            absolute
                            left-[112px]
                            z-10
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            border-2
                            border-primary
                            bg-background
                          "
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>

                        {/* CNOT control 2 */}
                        <div
                          className="
                            absolute
                            left-[212px]
                            z-10
                            h-3.5
                            w-3.5
                            rounded-full
                            bg-primary
                          "
                        />

                      </div>
                    </div>


                    {/* ===============================
                        QUBIT 2
                    =============================== */}

                    <div className="relative flex h-16 items-center">

                      <span
                        className="
                          w-10
                          shrink-0
                          font-mono
                          text-sm
                          text-muted-foreground
                        "
                      >
                        q₂
                      </span>

                      <div className="relative flex flex-1 items-center">

                        {/* Wire */}
                        <div
                          className="
                            absolute
                            left-0
                            right-0
                            h-px
                            bg-border
                          "
                        />

                        {/* CNOT target 2 */}
                        <div
                          className="
                            absolute
                            left-[212px]
                            z-10
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            border-2
                            border-primary
                            bg-background
                          "
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>

                      </div>
                    </div>

                  </div>

                </div>


                {/* =================================================
                    GHZ EQUATION
                ================================================= */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="mt-7 text-center"
                >

                  <div
                    className="
                      font-serif
                      text-lg
                      text-foreground
                    "
                  >
                    <span className="text-primary">
                      |GHZ₃⟩
                    </span>

                    <span className="mx-2 opacity-60">
                      =
                    </span>

                    <span className="text-primary">
                      1/√2
                    </span>

                    <span className="mx-2 opacity-60">
                      (
                    </span>

                    <span>
                      |000⟩ + |111⟩
                    </span>

                    <span className="opacity-60">
                      )
                    </span>
                  </div>

                  <p
                    className="
                      mt-3
                      font-mono
                      text-[9px]
                      tracking-[0.18em]
                      text-muted-foreground
                    "
                  >
                    THREE QUBITS · ENTANGLED STATE
                  </p>

                </motion.div>


                {/* =================================================
                    IDENTIFIER
                ================================================= */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    font-mono
                    text-[8px]
                    tracking-[0.18em]
                    text-muted-foreground/50
                  "
                >
                  <span>QFF_2026</span>
                  <span>Q₃ → |GHZ₃⟩</span>
                </div>

              </motion.div>

            </div>

          </div>


          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-3
              border-t
              border-border
              px-8
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              md:px-14
            "
          >

            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-muted-foreground
              "
            >
              IBM QUANTUM × IISER THIRUVANANTHAPURAM
            </span>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-medium
                text-muted-foreground
                transition-colors
                hover:text-primary
              "
            >
              Open registration form

              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

          </div>

        </motion.div>

      </div>

    </SectionBackground>
  );
}
