import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { SectionBackground } from "@/components/SectionBackground";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScc2eJ8bxz76kkZu2LatUrb_eGNkSkiySGwVSpeVnKd5AeIpA/viewform";

export function Registration() {
  return (
    <SectionBackground className="relative overflow-hidden py-24 md:py-32">

      {/* Background */}
      <div className="absolute inset-0 bg-primary/[0.03] dark:bg-primary/[0.05]" />
      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[820px]
          -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[130px]
        "
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            mx-auto max-w-5xl overflow-hidden rounded-2xl
            border border-border bg-background shadow-xl
          "
        >

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">

            {/* ============================= LEFT ============================= */}

            <div className="p-8 md:p-12 lg:p-14">

              <p className="text-sm font-medium text-primary">
                Registration is open
              </p>

              <h2
                className="
                  mt-4 max-w-xl text-3xl font-semibold leading-[1.1]
                  tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]
                "
              >
                Join Qiskit Fall Fest 2026 at IISER Thiruvananthapuram
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Four days of talks, hands-on labs, and challenges in
                quantum computing — open to students, educators, and
                researchers of every background.
              </p>

              {/* Event details */}
              <dl className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                  <div>
                    <dt className="text-xs text-muted-foreground">Date</dt>
                    <dd className="text-sm font-medium text-foreground">
                      09–12 October 2026
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                  <div>
                    <dt className="text-xs text-muted-foreground">Venue</dt>
                    <dd className="text-sm font-medium text-foreground">
                      IISER Thiruvananthapuram
                    </dd>
                  </div>
                </div>
              </dl>

              {/* CTA */}
              <div className="mt-10 flex items-center gap-4">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group inline-flex h-11 items-center gap-2 rounded-lg
                    bg-primary px-6 text-sm font-medium text-primary-foreground
                    transition-colors hover:bg-primary/90
                  "
                >
                  Register now
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <span className="text-xs text-muted-foreground">
                  Opens in a new tab
                </span>
              </div>

            </div>

            {/* ============================= RIGHT: CIRCUIT ============================= */}

            <div
              className="
                relative hidden min-h-[440px] flex-col justify-center
                border-l border-border bg-muted/20 p-10 md:flex
              "
            >
              <p className="mb-6 text-xs font-medium text-muted-foreground">
                GHZ state preparation · 3 qubits
              </p>

              <QiskitCircuit />

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">|GHZ₃⟩</span>
                <span>=</span>
                <span>
                  1/√2&nbsp;(|000⟩ + |111⟩)
                </span>
              </div>
            </div>

          </div>

          {/* ============================= BOTTOM BAR ============================= */}

          <div
            className="
              flex flex-col gap-2 border-t border-border px-8 py-4
              sm:flex-row sm:items-center sm:justify-between md:px-12
            "
          >
            <span className="text-xs text-muted-foreground">
              Organized with IBM Quantum
            </span>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5 text-xs font-medium
                text-muted-foreground transition-colors hover:text-primary
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

/* =====================================================================
   QISKIT-STYLE CIRCUIT DIAGRAM
   Drawn as a single SVG so gate boxes, wires, and control/target dots
   stay pixel-aligned at any size — modeled on Qiskit's matplotlib
   circuit drawer conventions.
===================================================================== */

function QiskitCircuit() {
  const rowY = [30, 100, 170];
  const wireStart = 56;
  const wireEnd = 380;

  return (
    <svg
      viewBox="0 0 380 200"
      className="mx-auto w-full max-w-[380px] overflow-visible"
      role="img"
      aria-label="Quantum circuit preparing a three-qubit GHZ state: a Hadamard gate on q0 followed by two CNOT gates"
    >
      {/* Qubit wires */}
      {rowY.map((y, i) => (
        <line
          key={i}
          x1={wireStart}
          y1={y}
          x2={wireEnd}
          y2={y}
          stroke="hsl(var(--border))"
          strokeWidth={1.5}
        />
      ))}

      {/* Qubit labels */}
      {rowY.map((y, i) => (
        <text
          key={i}
          x={0}
          y={y + 5}
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize={14}
          fill="hsl(var(--muted-foreground))"
        >
          {`q${i}`}
        </text>
      ))}

      {/* CNOT connector lines (drawn first, under the dots) */}
      <line
        x1={190}
        y1={rowY[0]}
        x2={190}
        y2={rowY[1]}
        stroke="hsl(var(--foreground))"
        strokeWidth={1.5}
      />
      <line
        x1={290}
        y1={rowY[1]}
        x2={290}
        y2={rowY[2]}
        stroke="hsl(var(--foreground))"
        strokeWidth={1.5}
      />

      {/* Hadamard gate on q0 */}
      <rect
        x={100}
        y={10}
        width={40}
        height={40}
        rx={5}
        fill="hsl(var(--primary) / 0.12)"
        stroke="hsl(var(--primary))"
        strokeWidth={1.5}
      />
      <text
        x={120}
        y={35}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="ui-serif, Georgia, serif"
        fontSize={18}
        fontWeight={600}
        fill="hsl(var(--primary))"
      >
        H
      </text>

      {/* CNOT 1 — control on q0, target on q1 */}
      <circle cx={190} cy={rowY[0]} r={6} fill="hsl(var(--foreground))" />
      <TargetSymbol cx={190} cy={rowY[1]} />

      {/* CNOT 2 — control on q1, target on q2 */}
      <circle cx={290} cy={rowY[1]} r={6} fill="hsl(var(--foreground))" />
      <TargetSymbol cx={290} cy={rowY[2]} />
    </svg>
  );
}

/** The ⊕ target symbol used for a CNOT gate, matching Qiskit's drawer. */
function TargetSymbol({ cx, cy }: { cx: number; cy: number }) {
  const r = 14;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="hsl(var(--background))"
        stroke="hsl(var(--foreground))"
        strokeWidth={1.5}
      />
      <line
        x1={cx - r}
        y1={cy}
        x2={cx + r}
        y2={cy}
        stroke="hsl(var(--foreground))"
        strokeWidth={1.5}
      />
      <line
        x1={cx}
        y1={cy - r}
        x2={cx}
        y2={cy + r}
        stroke="hsl(var(--foreground))"
        strokeWidth={1.5}
      />
    </g>
  );
}
