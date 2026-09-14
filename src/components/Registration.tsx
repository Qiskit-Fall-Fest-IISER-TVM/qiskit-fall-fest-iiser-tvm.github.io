import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { SectionBackground } from "@/components/SectionBackground";
import bgImage from "@/assets/Hero_1_without_title.png";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScc2eJ8bxz76kkZu2LatUrb_eGNkSkiySGwVSpeVnKd5AeIpA/viewform";

export function Registration() {
  return (
    <SectionBackground className="relative overflow-hidden py-24 md:py-32">
      {/* Background Hero Asset matching the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/70 bg-card/40 shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
            {/* ============================= LEFT COLUMN ============================= */}
            <div className="p-8 md:p-12 lg:p-14">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
                  Registration Open
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.6rem] leading-[1.15]">
                Join Qiskit Fall Fest 2026 at IISER Thiruvananthapuram
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Four days of workshops, keynote sessions, and hands-on explorations in quantum
                information science — open to students, educators, and researchers.
              </p>

              {/* Event Details */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/50 p-3.5 backdrop-blur-sm">
                  <CalendarDays className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                  <div>
                    <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                      Date
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      09–12 October 2026
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/50 p-3.5 backdrop-blur-sm">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                  <div>
                    <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                      Venue
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      IISER Thiruvananthapuram
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
                >
                  Register now
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <span className="font-mono text-xs text-muted-foreground">
                  Opens in external form
                </span>
              </div>
            </div>

            {/* ============================= RIGHT COLUMN: CIRCUIT ============================= */}
            <div className="relative hidden min-h-[440px] flex-col justify-center border-l border-border/60 bg-card/25 p-8 md:flex backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <QiskitCircuit />

                {/* State Formula with Proper LaTeX/HTML Superscripts */}
                <div className="mt-6 flex items-center justify-center gap-2 font-serif text-base text-muted-foreground">
                  <span className="font-medium italic text-foreground">|GHZ₃⟩</span>
                  <span>=</span>
                  <span>
                    (1/√2)&thinsp;(|000⟩ + |111⟩)
                  </span>
                </div>

                <div className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  GHZ State Preparation (3-Qubit Entanglement)
                </div>
              </div>
            </div>
          </div>

          {/* ============================= BOTTOM BAR ============================= */}
          <div className="flex flex-col gap-2 border-t border-border/60 bg-background/40 px-8 py-4 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-12 backdrop-blur-sm">
            <span>ORGANIZED WITH IBM QUANTUM</span>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
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

/* =====================================================================
   QUANTIKZ-STYLE THREE-QUBIT GHZ CIRCUIT
   Opaque gate masks prevent wires from passing through gate boxes.
===================================================================== */
function QiskitCircuit() {
  const rowY = [35, 95, 155];
  const wireStart = 60;
  const wireEnd = 340;

  return (
    <div className="flex w-full items-center justify-center opacity-90 transition-opacity hover:opacity-100">
      <svg
        viewBox="0 0 360 190"
        className="mx-auto w-full max-w-[340px] overflow-visible text-foreground"
        fill="none"
      >
        {/* Continuous Qubit Wire Lines */}
        {rowY.map((y, i) => (
          <g key={`wire-${i}`}>
            <text
              x={10}
              y={y + 5}
              fill="currentColor"
              className="font-serif italic text-base"
            >
              {`|0⟩`}
            </text>
            <line
              x1={wireStart}
              y1={y}
              x2={wireEnd}
              y2={y}
              stroke="currentColor"
              strokeWidth={1.3}
              className="stroke-foreground/75"
            />
          </g>
        ))}

        {/* CNOT 1 Vertical Line (q0 to q1) */}
        <line
          x1={190}
          y1={rowY[0]}
          x2={190}
          y2={rowY[1]}
          stroke="currentColor"
          strokeWidth={1.3}
          className="stroke-foreground/75"
        />

        {/* CNOT 2 Vertical Line (q1 to q2) */}
        <line
          x1={270}
          y1={rowY[1]}
          x2={270}
          y2={rowY[2]}
          stroke="currentColor"
          strokeWidth={1.3}
          className="stroke-foreground/75"
        />

        {/* Hadamard Gate on q0: Opaque fill to cleanly mask underlying wire */}
        <rect
          x={100}
          y={rowY[0] - 18}
          width={36}
          height={36}
          rx={3}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.3}
        />
        <text
          x={118}
          y={rowY[0] + 6}
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-lg font-medium"
        >
          H
        </text>

        {/* CNOT 1: Control dot on q0, Target on q1 */}
        <circle cx={190} cy={rowY[0]} r={4.5} fill="currentColor" />
        <TargetSymbol cx={190} cy={rowY[1]} />

        {/* CNOT 2: Control dot on q1, Target on q2 */}
        <circle cx={270} cy={rowY[1]} r={4.5} fill="currentColor" />
        <TargetSymbol cx={270} cy={rowY[2]} />
      </svg>
    </div>
  );
}

/** The ⊕ target symbol with opaque center fill to block wire crossings */
function TargetSymbol({ cx, cy }: { cx: number; cy: number }) {
  const r = 10;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        className="fill-background stroke-foreground/80"
        strokeWidth={1.3}
      />
      <line
        x1={cx - r}
        y1={cy}
        x2={cx + r}
        y2={cy}
        stroke="currentColor"
        strokeWidth={1.3}
      />
      <line
        x1={cx}
        y1={cy - r}
        x2={cx}
        y2={cy + r}
        stroke="currentColor"
        strokeWidth={1.3}
      />
    </g>
  );
}
