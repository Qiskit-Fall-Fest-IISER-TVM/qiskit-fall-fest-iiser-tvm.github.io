import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionBackground } from "@/components/SectionBackground";
import bgImage from "@/assets/Hero_1_without_title.png";

export function WhyAttend() {
  const reasons = [
    {
      number: "01",
      label: "LEARN",
      title: "From Qubits to Circuits",
      description:
        "Build physical intuition for quantum states and translate theoretical formulations into functioning algorithmic circuits with Qiskit.",
    },
    {
      number: "02",
      label: "BUILD",
      title: "Real Quantum Programs",
      description:
        "Synthesize multi-qubit unitaries, simulate noise channels, and execute algorithmic workflows on physical quantum hardware.",
    },
    {
      number: "03",
      label: "CONNECT",
      title: "Collaborative Community",
      description:
        "Engage directly with fellow students, researchers, and mentors exploring quantum information and computation.",
    },
    {
      number: "04",
      label: "EXPLORE",
      title: "Frontiers of Computation",
      description:
        "Discover quantum phase estimation, error mitigation, and the theoretical algorithms redefining computational complexity.",
    },
  ];

  return (
    <SectionBackground className="relative overflow-hidden py-20 md:py-28">
      {/* Background Hero Asset Layer */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
              Why Attend?
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Quantum computing,
            <br />
            <span className="text-muted-foreground font-normal">
              experienced rigorously.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            A hands-on symposium bridging theoretical foundations, open quantum systems,
            and executable algorithmic circuits.
          </p>
        </div>

        {/* Compact QFT Schematic Card */}
        <div className="mx-auto mb-14 max-w-3xl">
          <QFTCircuit />
        </div>

        {/* Four Reason Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.45,
              }}
              className="h-full"
            >
              <div className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/35 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/50 shadow-sm">
                {/* Background Number */}
                <div className="pointer-events-none absolute -right-2 -top-5 select-none font-mono text-[100px] font-bold leading-none text-muted-foreground/[0.04] transition-colors group-hover:text-primary/[0.08]">
                  {reason.number}
                </div>

                <div>
                  <div className="relative mb-5 flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-primary">
                      {reason.number}
                    </span>
                    <span className="h-px w-8 bg-border/70 transition-all duration-300 group-hover:w-10 group-hover:bg-primary/50" />
                  </div>

                  <p className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
                    {reason.label}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="font-mono text-[11px] text-muted-foreground group-hover:text-foreground transition-colors">
                    EXPLORE
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}

/* =====================================================================
   COMPACT & STATIC QUANTIKZ 3-QUBIT QFT CIRCUIT
   - Uses clean Unicode subscripts (|j₁⟩, |j₂⟩, |j₃⟩) to prevent raw underscores
   - Solid fill on gate boxes cleanly masks the wire pass-throughs
===================================================================== */
function QFTCircuit() {
  const rowY = [35, 85, 135];
  const qubitLabels = ["|j₁⟩", "|j₂⟩", "|j₃⟩"];
  const wireStart = 55;
  const wireEnd = 435;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-5 backdrop-blur-sm shadow-sm md:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-border/40 pb-3">
        <div className="font-mono text-xs font-medium text-primary uppercase tracking-wider">
          Quantum Fourier Transform (QFT₃)
        </div>
        <div className="font-serif text-sm italic text-muted-foreground">
          |j⟩ ↦ 2<sup>−3/2</sup> ∑<sub>k</sub> e<sup>2πi jk / 8</sup> |k⟩
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="flex w-full items-center justify-center overflow-x-auto py-1">
        <svg
          viewBox="0 0 480 170"
          className="w-full max-w-[460px] text-foreground opacity-90 transition-opacity hover:opacity-100"
          fill="none"
        >
          {/* Continuous Qubit Wire Lines */}
          {rowY.map((y, i) => (
            <g key={`wire-${i}`}>
              <text
                x={12}
                y={y + 5}
                fill="currentColor"
                className="font-serif italic text-base"
              >
                {qubitLabels[i]}
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

          {/* Vertical Control-Phase Connecting Lines */}
          {/* q0 control links */}
          <line
            x1={148}
            y1={rowY[0]}
            x2={148}
            y2={rowY[1]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />
          <line
            x1={208}
            y1={rowY[0]}
            x2={208}
            y2={rowY[2]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />

          {/* q1 control link */}
          <line
            x1={318}
            y1={rowY[1]}
            x2={318}
            y2={rowY[2]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />

          {/* SWAP Gate vertical wire */}
          <line
            x1={405}
            y1={rowY[0]}
            x2={405}
            y2={rowY[2]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />

          {/* --- QUBIT 0 STAGE --- */}
          {/* H Gate */}
          <rect
            x={88}
            y={rowY[0] - 14}
            width={28}
            height={28}
            rx={2}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={102}
            y={rowY[0] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-sm font-medium"
          >
            H
          </text>

          {/* Controlled R2 on q0 from q1 */}
          <rect
            x={134}
            y={rowY[0] - 14}
            width={28}
            height={28}
            rx={2}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={148}
            y={rowY[0] + 4}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-xs"
          >
            R₂
          </text>
          <circle cx={148} cy={rowY[1]} r={4} fill="currentColor" />

          {/* Controlled R3 on q0 from q2 */}
          <rect
            x={194}
            y={rowY[0] - 14}
            width={28}
            height={28}
            rx={2}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={208}
            y={rowY[0] + 4}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-xs"
          >
            R₃
          </text>
          <circle cx={208} cy={rowY[2]} r={4} fill="currentColor" />

          {/* --- QUBIT 1 STAGE --- */}
          {/* H Gate */}
          <rect
            x={258}
            y={rowY[1] - 14}
            width={28}
            height={28}
            rx={2}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={272}
            y={rowY[1] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-sm font-medium"
          >
            H
          </text>

          {/* Controlled R2 on q1 from q2 */}
          <rect
            x={304}
            y={rowY[1] - 14}
            width={28}
            height={28}
            rx={2}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={318}
            y={rowY[1] + 4}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-xs"
          >
            R₂
          </text>
          <circle cx={318} cy={rowY[2]} r={4} fill="currentColor" />

          {/* --- QUBIT 2 STAGE --- */}
          {/* H Gate */}
          <rect
            x={354}
            y={rowY[2] - 14}
            width={28}
            height={28}
            rx={2}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={368}
            y={rowY[2] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-sm font-medium"
          >
            H
          </text>

          {/* --- SWAP GATES (q0 <-> q2) --- */}
          <SwapCross cx={405} cy={rowY[0]} />
          <SwapCross cx={405} cy={rowY[2]} />
        </svg>
      </div>

      {/* Clean Math Footer */}
      <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-3 font-mono text-xs text-muted-foreground">
        <span>PHASE SHIFT: R<sub>k</sub> = diag(1, e<sup>2πi/2<sup>k</sup></sup>)</span>
        <span className="uppercase">Complexity: O(n²)</span>
      </div>
    </div>
  );
}

/** Crisp SWAP target cross with solid fill */
function SwapCross({ cx, cy }: { cx: number; cy: number }) {
  const d = 4.5;
  return (
    <g>
      <circle cx={cx} cy={cy} r={6} className="fill-background" />
      <line
        x1={cx - d}
        y1={cy - d}
        x2={cx + d}
        y2={cy + d}
        stroke="currentColor"
        strokeWidth={1.3}
        className="stroke-foreground"
      />
      <line
        x1={cx - d}
        y1={cy + d}
        x2={cx + d}
        y2={cy - d}
        stroke="currentColor"
        strokeWidth={1.3}
        className="stroke-foreground"
      />
    </g>
  );
}
