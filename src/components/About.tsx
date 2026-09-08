import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { SiQiskit } from "react-icons/si";
import aboutBg from "../assets/about-bg.png";
import { SectionBackground } from "@/components/SectionBackground";

export function About() {
  return (
    <SectionBackground className="relative overflow-hidden py-28 md:py-36">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-background" />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/[0.045]
          blur-[120px]
        "
      />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        <div className="
          grid
          grid-cols-1
          items-center
          gap-16
          lg:grid-cols-2
          lg:gap-24
        ">

          {/* =================================================
              LEFT: TEXT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
          >

            {/* Eyebrow */}

            <div className="
              mb-7
              flex
              items-center
              gap-3
            ">

              <div className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                border
                border-primary/20
                bg-primary/5
              ">
                <SiQiskit className="h-4 w-4 text-primary" />
              </div>

              <span className="
                font-mono
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-muted-foreground
              ">
                ABOUT THE EVENT
              </span>

            </div>


            {/* Heading */}

            <h2 className="
              max-w-xl
              text-4xl
              font-bold
              leading-[1.05]
              tracking-[-0.03em]
              text-foreground
              md:text-5xl
              lg:text-6xl
            ">
              The Quantum
              <br />

              <span className="text-primary">
                Frontier
              </span>
            </h2>


            {/* Accent line */}

            <div className="
              mt-8
              h-px
              w-16
              bg-primary
            " />


            {/* Main copy */}

            <div className="
              mt-8
              max-w-xl
              space-y-5
              text-[15px]
              leading-[1.85]
              text-muted-foreground
              md:text-base
            ">

              <p>
                Ever wondered what quantum computing is actually
                about? Maybe you've heard of qubits, superposition,
                entanglement and all that cool stuff, or maybe
                you're already experimenting with quantum circuits.
              </p>

              <p>
                Either way,{" "}
                <span className="font-medium text-foreground">
                  Qiskit Fall Fest 2026
                </span>{" "}
                is coming to IISER Thiruvananthapuram.
              </p>

              <p>
                Whether you're a complete beginner who's just
                curious about the quantum world or someone who's
                already familiar with quantum computing and wants
                to take things further, there's something here
                for you.
              </p>

              <p>
                We'll have hands-on workshops, talks, challenges
                and a hackathon, giving you a chance to learn,
                experiment, build, and have some fun along the way.
                You'll also get to interact with other students,
                researchers, and people working in the field.
              </p>

              <p>
                You don't need to be an expert. Just bring your
                curiosity. And if you already know your way around
                quantum computing, bring your ideas too.
              </p>

            </div>


            {/* Closing */}

            <div className="
              mt-9
              flex
              items-start
              gap-4
            ">

              <div className="
                mt-2
                h-8
                w-1
                shrink-0
                rounded-full
                bg-primary
              />

              <div>

                <p className="
                  text-base
                  font-semibold
                  text-foreground
                  md:text-lg
                ">
                  Come explore the quantum realm with us.
                </p>

                <p className="
                  mt-1.5
                  font-mono
                  text-[9px]
                  tracking-[0.16em]
                  text-muted-foreground
                ">
                  SEE YOU AT QISKIT FALL FEST 2026
                </p>

              </div>

            </div>


            {/* Event information */}

            <div className="
              mt-10
              grid
              grid-cols-1
              gap-3
              border-t
              border-border
              pt-6
              sm:grid-cols-2
            ">

              {/* Date */}

              <div className="
                flex
                items-center
                gap-3
              ">

                <CalendarDays className="
                  h-4
                  w-4
                  shrink-0
                  text-primary
                " />

                <div>

                  <p className="
                    font-mono
                    text-[8px]
                    tracking-[0.18em]
                    text-muted-foreground
                  ">
                    DATE
                  </p>

                  <p className="
                    mt-0.5
                    text-xs
                    font-medium
                    text-foreground
                  ">
                    09 — 12 October 2026
                  </p>

                </div>

              </div>


              {/* Location */}

              <div className="
                flex
                items-center
                gap-3
              ">

                <MapPin className="
                  h-4
                  w-4
                  shrink-0
                  text-primary
                " />

                <div>

                  <p className="
                    font-mono
                    text-[8px]
                    tracking-[0.18em]
                    text-muted-foreground
                  ">
                    LOCATION
                  </p>

                  <p className="
                    mt-0.5
                    text-xs
                    font-medium
                    text-foreground
                  ">
                    IISER Thiruvananthapuram
                  </p>

                </div>

              </div>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT: IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >

            {/* Image container */}

            <div className="
              relative
              aspect-[4/5]
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-muted
              shadow-xl
              md:aspect-[5/4]
            ">

              <img
                src={aboutBg}
                alt="Abstract visualization of quantum computing"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />


              {/* Image overlay */}

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-background/80
                via-transparent
                to-transparent
              " />


              {/* Top label */}

              <div className="
                absolute
                left-5
                right-5
                top-5
                flex
                items-center
                justify-between
              ">

                <div className="
                  rounded-full
                  border
                  border-white/20
                  bg-black/20
                  px-3
                  py-1.5
                  font-mono
                  text-[8px]
                  font-medium
                  tracking-[0.2em]
                  text-white/80
                  backdrop-blur-md
                ">
                  QISKIT FALL FEST
                </div>

                <div className="
                  font-mono
                  text-[9px]
                  tracking-[0.15em]
                  text-white/60
                ">
                  2026
                </div>

              </div>


              {/* Bottom image caption */}

              <div className="
                absolute
                bottom-6
                left-6
                right-6
              ">

                <div className="
                  mb-2
                  font-mono
                  text-[9px]
                  tracking-[0.2em]
                  text-white/60
                ">
                  IISER THIRUVANANTHAPURAM
                </div>

                <div className="
                  flex
                  items-end
                  justify-between
                  gap-6
                ">

                  <h3 className="
                    max-w-sm
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                    md:text-3xl
                  ">
                    Learn.
                    <br />
                    Experiment.
                    <br />
                    Build.
                  </h3>


                  <div className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    backdrop-blur-md
                  ">
                    <ArrowUpRight className="
                      h-4
                      w-4
                      text-white
                    " />
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                DECORATIVE FRAME
            ================================================= */}

            <div className="
              pointer-events-none
              absolute
              -right-4
              -top-4
              -z-10
              h-24
              w-24
              rounded-tr-2xl
              border-r
              border-t
              border-primary/40
            " />

            <div className="
              pointer-events-none
              absolute
              -bottom-4
              -left-4
              -z-10
              h-24
              w-24
              rounded-bl-2xl
              border-b
              border-l
              border-primary/20
            " />


            {/* Small coordinate label */}

            <div className="
              absolute
              -bottom-7
              right-0
              hidden
              font-mono
              text-[8px]
              tracking-[0.2em]
              text-muted-foreground
              md:block
            ">
              QFF / IISER-TVM / 2026
            </div>

          </motion.div>

        </div>

      </div>

    </SectionBackground>
  );
}
