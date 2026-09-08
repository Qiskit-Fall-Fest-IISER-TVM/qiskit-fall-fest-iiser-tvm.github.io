import { motion } from "framer-motion";

type Event = {
  time: string;
  title: string;
  type: string;
};

type ScheduleDay = {
  number: string;
  date: string;
  weekday: string;
  events: Event[];
  visual: "bloch" | "circuit" | "state" | "algorithm";
};

const scheduleData: ScheduleDay[] = [
  {
    number: "01",
    date: "09 OCTOBER 2026",
    weekday: "FRIDAY",
    visual: "bloch",
    events: [
      {
        time: "05:00 PM - 05:30 PM",
        title: "Inauguration",
        type: "INAUGURATION",
      },
      {
        time: "05:45 PM - 07:00 PM",
        title: "Inaugural Session",
        type: "SESSION",
      },
      {
        time: "09:00 PM - 11:00 PM",
        title: "Quantum 101",
        type: "LECTURE",
      },
    ],
  },
  {
    number: "02",
    date: "10 OCTOBER 2026",
    weekday: "SATURDAY",
    visual: "circuit",
    events: [
      {
        time: "09:00 AM - 12:00 PM",
        title: "Workshop / Hands-on Session",
        type: "WORKSHOP",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Lecture Series",
        type: "LECTURE",
      },
    ],
  },
  {
    number: "03",
    date: "11 OCTOBER 2026",
    weekday: "SUNDAY",
    visual: "state",
    events: [
      {
        time: "09:00 AM - 12:00 PM",
        title: "Workshop / Hands-on Session",
        type: "WORKSHOP",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Lecture Series",
        type: "LECTURE",
      },
    ],
  },
  {
    number: "04",
    date: "12 OCTOBER 2026",
    weekday: "MONDAY",
    visual: "algorithm",
    events: [
      {
        time: "04:00 PM - 06:00 PM",
        title: "IBM Quantum Hackathon",
        type: "HACKATHON",
      },
      {
        time: "06:00 PM onwards",
        title: "Concluding Session",
        type: "CONCLUSION",
      },
    ],
  },
];

function EventBadge({ type }: { type: string }) {
  const isHighlight =
    type === "HACKATHON" || type === "INAUGURATION";

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-2.5
        py-1
        text-[9px]
        font-mono
        font-semibold
        tracking-[0.16em]
        ${isHighlight
          ? "border-primary/30 bg-primary/5 text-primary"
          : "border-border bg-muted/40 text-muted-foreground"
        }
      `}
    >
      {type}
    </span>
  );
}

/* ============================================================
   BLOCH SPHERE
   ============================================================ */

function BlochSphere() {
  return (
    <div className="relative h-[330px] w-[330px]">

      {/* Ambient rings */}
      <div className="absolute inset-[22px] rounded-full border border-border/50" />
      <div className="absolute inset-[42px] rounded-full border border-border/30" />

      {/* Sphere */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[205px]
          w-[205px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-border
        "
      />

      {/* Horizontal latitude */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[72px]
          w-[205px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-border
        "
      />

      {/* Vertical longitude */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[205px]
          w-[72px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-border
        "
      />

      {/* Z axis */}
      <div
        className="
          absolute
          left-1/2
          top-[30px]
          h-[245px]
          w-px
          -translate-x-1/2
          bg-border
        "
      />

      {/* X axis */}
      <div
        className="
          absolute
          left-[48px]
          top-1/2
          h-px
          w-[235px]
          -translate-y-1/2
          bg-border
        "
      />

      {/* State vector */}
      <motion.div
        initial={{ rotate: -28 }}
        animate={{ rotate: -20 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[105px]
          w-px
          origin-bottom
          -translate-x-1/2
          -translate-y-full
          bg-primary
        "
      />

      {/* State point */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[calc(50%-10px)]
          top-[calc(50%-92px)]
          h-5
          w-5
          rounded-full
          border
          border-primary
          bg-background
          shadow-[0_0_25px_hsl(var(--primary)/0.45)]
        "
      />

      {/* Labels */}
      <span className="absolute left-1/2 top-0 -translate-x-1/2 font-mono text-xs text-muted-foreground">
        |0⟩
      </span>

      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground">
        |1⟩
      </span>

      <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">
        X
      </span>

      <span className="absolute left-2 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">
        -X
      </span>

      <span className="absolute right-8 top-[58px] font-mono text-[10px] tracking-widest text-primary">
        |ψ⟩
      </span>

      {/* Caption */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center">
        <div className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground">
          BLOCH SPHERE
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   QUANTUM CIRCUIT
   ============================================================ */

function QuantumCircuit() {
  return (
    <div className="w-full max-w-[430px]">

      <div className="mb-10 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
          QUANTUM CIRCUIT
        </span>

        <span className="font-mono text-[10px] text-muted-foreground">
          02 / 04
        </span>
      </div>

      <div className="space-y-12">

        {/* Qubit 0 */}
        <div className="relative flex items-center gap-4">

          <span className="w-8 font-mono text-xs text-muted-foreground">
            q₀
          </span>

          <div className="relative h-px flex-1 bg-border">

            <div className="absolute left-[22%] top-1/2 -translate-y-1/2">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-primary/40
                  bg-background
                  font-mono
                  text-sm
                  text-primary
                "
              >
                H
              </div>
            </div>

            <div className="absolute left-[57%] top-1/2 -translate-y-1/2">
              <div className="h-3 w-3 rounded-full bg-primary" />
            </div>

            <div className="absolute right-[12%] top-1/2 -translate-y-1/2">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-border
                  bg-background
                  font-mono
                  text-sm
                "
              >
                X
              </div>
            </div>
          </div>

        </div>

        {/* Qubit 1 */}
        <div className="relative flex items-center gap-4">

          <span className="w-8 font-mono text-xs text-muted-foreground">
            q₁
          </span>

          <div className="relative h-px flex-1 bg-border">

            {/* Control line */}
            <div
              className="
                absolute
                left-[57%]
                top-0
                h-[49px]
                w-px
                bg-primary/50
              "
            />

            <div
              className="
                absolute
                left-[57%]
                top-1/2
                flex
                h-9
                w-9
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-primary/50
                bg-background
                font-mono
                text-sm
                text-primary
              "
            >
              ⊕
            </div>

          </div>
        </div>

      </div>

      <div className="mt-10 flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />

        <span className="font-mono text-[10px] text-muted-foreground">
          H · CNOT · X
        </span>

        <span className="h-px flex-1 bg-border" />
      </div>

    </div>
  );
}

/* ============================================================
   QUANTUM STATE
   ============================================================ */

function QuantumState() {
  return (
    <div className="flex w-full max-w-[430px] flex-col items-center">

      <div className="mb-10 w-full flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
          QUANTUM STATE
        </span>

        <span className="font-mono text-[10px] text-muted-foreground">
          03 / 04
        </span>
      </div>

      {/* Equation */}
      <div className="font-mono text-3xl md:text-4xl tracking-tight text-foreground">
        |ψ⟩ = α|0⟩ + β|1⟩
      </div>

      <div className="mt-4 font-mono text-xs text-muted-foreground">
        |α|² + |β|² = 1
      </div>

      {/* Probability bars */}
      <div className="mt-12 w-full max-w-[350px] space-y-6">

        <div>
          <div className="mb-2 flex justify-between font-mono text-[10px]">
            <span className="text-muted-foreground">
              P(|0⟩)
            </span>

            <span className="text-foreground">
              |α|²
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "64%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-primary"
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between font-mono text-[10px]">
            <span className="text-muted-foreground">
              P(|1⟩)
            </span>

            <span className="text-foreground">
              |β|²
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "36%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="h-full rounded-full bg-primary/50"
            />
          </div>
        </div>

      </div>

      {/* Basis states */}
      <div className="mt-12 flex items-center gap-5 font-mono text-xs">

        <div className="rounded-lg border border-border px-5 py-3">
          |0⟩
        </div>

        <span className="text-muted-foreground">
          +
        </span>

        <div className="rounded-lg border border-border px-5 py-3">
          |1⟩
        </div>

      </div>

    </div>
  );
}

/* ============================================================
   ALGORITHM / HACKATHON VISUAL
   ============================================================ */

function QuantumAlgorithm() {
  return (
    <div className="w-full max-w-[430px]">

      <div className="mb-10 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
          QUANTUM ALGORITHM
        </span>

        <span className="font-mono text-[10px] text-primary">
          04 / 04
        </span>
      </div>

      <div className="space-y-5">

        {/* Step 1 */}
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-border
              bg-card
              font-mono
              text-sm
            "
          >
            01
          </div>

          <div className="h-px flex-1 bg-border" />

          <div className="w-28 rounded-lg border border-border px-4 py-3">
            <div className="font-mono text-xs">
              INIT
            </div>

            <div className="mt-1 text-[9px] text-muted-foreground">
              |000⟩
            </div>
          </div>

        </div>

        {/* Step 2 */}
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-primary/30
              bg-primary/5
              font-mono
              text-sm
              text-primary
            "
          >
            02
          </div>

          <div className="h-px flex-1 bg-primary/30" />

          <div className="w-28 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
            <div className="font-mono text-xs text-primary">
              APPLY
            </div>

            <div className="mt-1 text-[9px] text-muted-foreground">
              U(θ)
            </div>
          </div>

        </div>

        {/* Step 3 */}
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-border
              bg-card
              font-mono
              text-sm
            "
          >
            03
          </div>

          <div className="h-px flex-1 bg-border" />

          <div className="w-28 rounded-lg border border-border px-4 py-3">
            <div className="font-mono text-xs">
              MEASURE
            </div>

            <div className="mt-1 text-[9px] text-muted-foreground">
              M(q)
            </div>
          </div>

        </div>

      </div>

      <div className="mt-10 flex items-center justify-end gap-3">
        <span className="font-mono text-[10px] text-muted-foreground">
          BUILD
        </span>

        <span className="text-primary">
          →
        </span>

        <span className="font-mono text-[10px] text-primary">
          CREATE
        </span>
      </div>

    </div>
  );
}

/* ============================================================
   VISUAL SELECTOR
   ============================================================ */

function QuantumVisual({
  type,
}: {
  type: ScheduleDay["visual"];
}) {
  if (type === "bloch") {
    return <BlochSphere />;
  }

  if (type === "circuit") {
    return <QuantumCircuit />;
  }

  if (type === "state") {
    return <QuantumState />;
  }

  return <QuantumAlgorithm />;
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export function Schedule() {
  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-background py-28 md:py-36"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 md:mb-32"
        >

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span className="font-mono text-[10px] font-semibold tracking-[0.28em] text-primary">
              PROGRAMME
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                Event Schedule
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Explore four days of quantum computing, hands-on learning,
                lectures, workshops, and collaborative innovation.
              </p>
            </div>

            <div className="shrink-0 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
              09 - 12 OCTOBER 2026
            </div>

          </div>

        </motion.div>


        {/* ==================================================
            DAYS
        ================================================== */}

        <div className="space-y-24 md:space-y-36">

          {scheduleData.map((day, index) => {

            const left = index % 2 === 0;

            return (
              <div
                key={day.number}
                className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24"
              >

                {/* ==================================================
                    SCHEDULE CARD
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: left ? -35 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className={left ? "md:order-1" : "md:order-2"}
                >

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-border/70
                      bg-card/30
                      p-6
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:border-border
                      hover:bg-card/50
                      md:p-8
                    "
                  >

                    {/* Large background number */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-3
                        -top-8
                        select-none
                        font-mono
                        text-[150px]
                        font-bold
                        leading-none
                        text-muted-foreground/[0.035]
                      "
                    >
                      {day.number}
                    </div>


                    {/* Header */}
                    <div className="relative mb-8">

                      <div className="mb-4 flex items-center gap-3">

                        <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-primary">
                          DAY {day.number}
                        </span>

                        <span className="h-px w-8 bg-border" />

                        <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                          {day.weekday}
                        </span>

                      </div>

                      <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                        {day.date}
                      </h3>

                    </div>


                    {/* Events */}
                    <div className="relative space-y-0">

                      {day.events.map((event, eventIndex) => (

                        <motion.div
                          key={event.title}
                          initial={{
                            opacity: 0,
                            y: 12,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.45,
                            delay: eventIndex * 0.1,
                          }}
                          className="
                            group
                            border-t
                            border-border/60
                            py-5
                            first:border-t-0
                            first:pt-0
                            last:pb-0
                          "
                        >

                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">

                            <div className="min-w-0">

                              <div className="mb-2 font-mono text-[10px] tracking-wide text-muted-foreground">
                                {event.time}
                              </div>

                              <h4
                                className="
                                  text-base
                                  font-semibold
                                  tracking-tight
                                  text-foreground
                                  transition-colors
                                  duration-200
                                  group-hover:text-primary
                                  md:text-lg
                                "
                              >
                                {event.title}
                              </h4>

                            </div>

                            <EventBadge type={event.type} />

                          </div>

                        </motion.div>

                      ))}

                    </div>

                  </div>

                </motion.div>


                {/* ==================================================
                    QUANTUM OBJECT
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: left ? 35 : -35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                  }}
                  className={`
                    hidden
                    min-h-[330px]
                    items-center
                    justify-center
                    md:flex
                    ${left ? "md:order-2" : "md:order-1"}
                  `}
                >

                  <QuantumVisual type={day.visual} />

                </motion.div>

              </div>
            );
          })}

        </div>


        {/* ==================================================
            FOOTER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 border-t border-border pt-7 md:mt-36"
        >

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <span className="font-mono text-[9px] font-semibold tracking-[0.22em] text-muted-foreground">
              PROGRAMME NOTE
            </span>

            <p className="text-sm text-muted-foreground">
              The schedule is tentative and may be subject to change.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
