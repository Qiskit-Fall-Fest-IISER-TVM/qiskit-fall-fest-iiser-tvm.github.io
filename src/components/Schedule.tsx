import { motion } from "framer-motion";

export function Schedule() {
  const scheduleData = [
    {
      day: "01",
      date: "09 OCTOBER 2026",
      weekday: "FRIDAY",
      events: [
        {
          time: "05:00 PM – 05:30 PM",
          title: "Inauguration",
          type: "INAUGURATION",
        },
        {
          time: "05:45 PM – 07:00 PM",
          title: "Inaugural Session",
          type: "SESSION",
        },
        {
          time: "09:00 PM – 11:00 PM",
          title: "Quantum 101",
          type: "LECTURE",
        },
      ],
      visual: "bloch",
    },
    {
      day: "02",
      date: "10 OCTOBER 2026",
      weekday: "SATURDAY",
      events: [
        {
          time: "09:00 AM – 12:00 PM",
          title: "Workshop / Hands-on Session",
          type: "WORKSHOP",
        },
        {
          time: "02:00 PM – 05:00 PM",
          title: "Lecture Series",
          type: "LECTURE",
        },
      ],
      visual: "circuit",
    },
    {
      day: "03",
      date: "11 OCTOBER 2026",
      weekday: "SUNDAY",
      events: [
        {
          time: "09:00 AM – 12:00 PM",
          title: "Workshop / Hands-on Session",
          type: "WORKSHOP",
        },
        {
          time: "02:00 PM – 05:00 PM",
          title: "Lecture Series",
          type: "LECTURE",
        },
      ],
      visual: "state",
    },
    {
      day: "04",
      date: "12 OCTOBER 2026",
      weekday: "MONDAY",
      events: [
        {
          time: "04:00 PM – 06:00 PM",
          title: "IBM Quantum Hackathon",
          type: "HACKATHON",
        },
        {
          time: "06:00 PM onwards",
          title: "Concluding Session",
          type: "CONCLUSION",
        },
      ],
      visual: "circuit2",
    },
  ];

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "HACKATHON":
        return "text-primary border-primary/40 bg-primary/5";

      case "WORKSHOP":
        return "text-secondary border-secondary/40 bg-secondary/5";

      case "LECTURE":
        return "text-foreground border-border bg-muted/40";

      case "INAUGURATION":
        return "text-primary border-primary/40 bg-primary/5";

      default:
        return "text-muted-foreground border-border bg-muted/40";
    }
  };

  return (
    <section
      id="schedule"
      className="relative py-28 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        {/* -------------------------------------------------- */}
        {/* HEADER                                             */}
        {/* -------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-primary" />

            <span className="text-xs font-mono font-semibold tracking-[0.25em] text-primary uppercase">
              Programme
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Event Schedule
              </h2>

              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Four days of lectures, hands-on learning,
                quantum computing, and collaborative exploration.
              </p>
            </div>

            <div className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
              09 — 12 OCTOBER 2026
            </div>

          </div>
        </motion.div>


        {/* -------------------------------------------------- */}
        {/* ALTERNATING SCHEDULE                               */}
        {/* -------------------------------------------------- */}

        <div className="space-y-20 md:space-y-28">

          {scheduleData.map((day, index) => {

            const isLeft = index % 2 === 0;

            return (
              <div
                key={day.day}
                className={`
                  grid grid-cols-1 md:grid-cols-2
                  gap-10 md:gap-20
                  items-center
                `}
              >

                {/* ========================================== */}
                {/* LEFT SIDE                                   */}
                {/* ========================================== */}

                <div
                  className={`
                    ${isLeft ? "md:order-1" : "md:order-2"}
                  `}
                >

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -30 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="
                      relative
                      rounded-2xl
                      border border-border/70
                      bg-card/40
                      backdrop-blur-sm
                      p-6 md:p-8
                      transition-all
                      duration-300
                      hover:border-border
                      hover:bg-card/60
                    "
                  >

                    {/* Day number */}
                    <div className="absolute top-5 right-6">
                      <span className="font-mono text-5xl font-bold text-muted-foreground/10">
                        {day.day}
                      </span>
                    </div>


                    {/* Date */}
                    <div className="relative mb-8">

                      <div className="flex items-center gap-3 mb-2">

                        <span className="text-xs font-mono tracking-[0.2em] text-primary">
                          DAY {day.day}
                        </span>

                        <div className="h-px flex-1 bg-border" />

                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                        {day.date}
                      </h3>

                      <p className="mt-1 font-mono text-xs tracking-widest text-muted-foreground">
                        {day.weekday}
                      </p>

                    </div>


                    {/* Events */}
                    <div className="space-y-4">

                      {day.events.map((event, eventIndex) => (

                        <motion.div
                          key={eventIndex}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: eventIndex * 0.08,
                            duration: 0.4,
                          }}
                          className="
                            group
                            border-t border-border/60
                            pt-4
                            first:border-t-0
                            first:pt-0
                          "
                        >

                          <div className="flex flex-col gap-2">

                            <div className="flex items-center justify-between gap-4">

                              <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
                                {event.time}
                              </span>

                              <span
                                className={`
                                  shrink-0
                                  px-2 py-1
                                  rounded
                                  border
                                  text-[8px]
                                  font-mono
                                  font-semibold
                                  tracking-[0.15em]
                                  ${getTypeStyle(event.type)}
                                `}
                              >
                                {event.type}
                              </span>

                            </div>

                            <h4 className="
                              text-base
                              md:text-lg
                              font-semibold
                              tracking-tight
                              text-foreground
                              group-hover:text-primary
                              transition-colors
                            ">
                              {event.title}
                            </h4>

                          </div>

                        </motion.div>

                      ))}

                    </div>

                  </motion.div>

                </div>


                {/* ========================================== */}
                {/* QUANTUM VISUAL SIDE                         */}
                {/* ========================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: isLeft ? 30 : -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                  }}
                  className={`
                    hidden md:flex
                    items-center
                    justify-center
                    min-h-[280px]
                    ${isLeft ? "md:order-2" : "md:order-1"}
                  `}
                >

                  {/* ====================================== */}
                  {/* BLOCH SPHERE                            */}
                  {/* ====================================== */}

                  {day.visual === "bloch" && (
                    <div className="relative flex items-center justify-center w-64 h-64">

                      <div className="
                        absolute
                        w-52 h-52
                        rounded-full
                        border
                        border-border
                      " />

                      <div className="
                        absolute
                        w-52 h-24
                        rounded-[50%]
                        border
                        border-border
                      " />

                      <div className="
                        absolute
                        w-24 h-52
                        rounded-[50%]
                        border
                        border-border
                      " />

                      <div className="absolute w-px h-64 bg-border" />
                      <div className="absolute w-64 h-px bg-border" />

                      <div className="
                        absolute
                        w-3 h-3
                        rounded-full
                        bg-primary
                        shadow-[0_0_20px_hsl(var(--primary))]
                      " />

                      <span className="absolute -top-2 font-mono text-xs text-muted-foreground">
                        |0⟩
                      </span>

                      <span className="absolute -bottom-2 font-mono text-xs text-muted-foreground">
                        |1⟩
                      </span>

                      <span className="absolute right-0 font-mono text-xs text-muted-foreground">
                        X
                      </span>

                      <span className="absolute left-0 font-mono text-xs text-muted-foreground">
                        −X
                      </span>

                    </div>
                  )}


                  {/* ====================================== */}
                  {/* QUANTUM CIRCUIT                         */}
                  {/* ====================================== */}

                  {day.visual === "circuit" && (
                    <div className="w-full max-w-sm">

                      <div className="font-mono text-xs text-muted-foreground mb-6 tracking-widest">
                        QUANTUM CIRCUIT
                      </div>

                      <div className="space-y-10">

                        <div className="relative h-px bg-border">

                          <span className="
                            absolute
                            left-[20%]
                            -top-4
                            font-mono
                            text-lg
                            text-foreground
                          ">
                            H
                          </span>

                          <span className="
                            absolute
                            left-[48%]
                            -top-4
                            font-mono
                            text-lg
                            text-foreground
                          ">
                            ●
                          </span>

                          <span className="
                            absolute
                            right-[15%]
                            -top-4
                            font-mono
                            text-lg
                            text-foreground
                          ">
                            X
                          </span>

                        </div>

                        <div className="relative h-px bg-border">

                          <span className="
                            absolute
                            left-[48%]
                            -top-[7px]
                            w-3
                            h-3
                            rounded-full
                            border
                            border-primary
                            bg-background
                          />

                        </div>

                      </div>

                      <div className="mt-8 font-mono text-xs text-muted-foreground">
                        |ψ⟩ → U → |ψ′⟩
                      </div>

                    </div>
                  )}


                  {/* ====================================== */}
                  {/* QUANTUM STATE                           */}
                  {/* ====================================== */}

                  {day.visual === "state" && (
                    <div className="text-center">

                      <div className="
                        font-mono
                        text-4xl
                        md:text-5xl
                        tracking-tight
                        text-foreground
                      ">
                        |ψ⟩ = α|0⟩ + β|1⟩
                      </div>

                      <div className="
                        mt-6
                        font-mono
                        text-xs
                        tracking-[0.2em]
                        text-muted-foreground
                      ">
                        QUANTUM STATE
                      </div>

                      <div className="mt-8 flex items-center justify-center gap-3">

                        <span className="w-16 h-px bg-border" />

                        <span className="text-primary text-xs">
                          ⟨ψ|ψ⟩ = 1
                        </span>

                        <span className="w-16 h-px bg-border" />

                      </div>

                    </div>
                  )}


                  {/* ====================================== */}
                  {/* SECOND CIRCUIT                          */}
                  {/* ====================================== */}

                  {day.visual === "circuit2" && (
                    <div className="w-full max-w-sm">

                      <div className="font-mono text-xs text-muted-foreground mb-7 tracking-widest">
                        QUANTUM COMPUTATION
                      </div>

                      <div className="font-mono text-sm text-foreground space-y-7">

                        <div className="flex items-center gap-3">
                          <span>|0⟩</span>
                          <span className="flex-1 h-px bg-border" />
                          <span className="px-3 py-1 border border-border rounded">
                            H
                          </span>
                          <span className="flex-1 h-px bg-border" />
                          <span>●</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span>|0⟩</span>
                          <span className="flex-1 h-px bg-border" />
                          <span className="w-8" />
                          <span className="flex-1 h-px bg-border" />
                          <span>⊕</span>
                        </div>

                      </div>

                      <div className="mt-8 text-xs font-mono text-muted-foreground">
                        H · CNOT · M
                      </div>

                    </div>
                  )}

                </motion.div>

              </div>
            );
          })}

        </div>


        {/* -------------------------------------------------- */}
        {/* FOOTER NOTE                                        */}
        {/* -------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 pt-7 border-t border-border"
        >

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">

            <span className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-muted-foreground
            ">
              Programme Note
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
