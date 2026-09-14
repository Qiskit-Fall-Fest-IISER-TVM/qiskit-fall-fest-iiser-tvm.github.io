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
      {/* Background Hero Asset Layer without any synthetic grid */}
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

        {/* Compact 4-Qubit QFT Schematic Card */}
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
   COMPACT & STATIC 4-QUBIT QFT CIRCUIT
   - Uses clean subscripts (|j₁⟩, |j₂⟩, |j₃⟩, |j₄⟩) without raw underscores
   - Reduced gate sizes and tighter column widths for a balanced aspect ratio
   - Solid fill on boxes cleanly masks continuous lines
===================================================================== */
function QFTCircuit() {
  const rowY = [28, 64, 100, 136];
  const qubitLabels = ["|j₁⟩", "|j₂⟩", "|j₃⟩", "|j₄⟩"];
  const wireStart = 48;
  const wireEnd = 475;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-5 backdrop-blur-sm shadow-sm md:p-6">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between border-b border-border/40 pb-2.5">
        <div className="font-mono text-xs font-medium text-primary uppercase tracking-wider">
          Quantum Fourier Transform (QFT₄)
        </div>
        <div className="font-serif text-xs md:text-sm italic text-muted-foreground">
          |j⟩ ↦ 2<sup>−2</sup> ∑<sub>k</sub> e<sup>2πi jk / 16</sup> |k⟩
        </div>
      </div>

      {/* Compact SVG Canvas */}
      <div className="flex w-full items-center justify-center overflow-x-auto py-1">
        <svg
          viewBox="0 0 500 165"
          className="w-full max-w-[490px] text-foreground opacity-90 transition-opacity hover:opacity-100"
          fill="none"
        >
          {/* Continuous Qubit Wire Lines */}
          {rowY.map((y, i) => (
            <g key={`wire-${i}`}>
              <text
                x={8}
                y={y + 4}
                fill="currentColor"
                className="font-serif italic text-sm"
              >
                {qubitLabels[i]}
              </text>
              <line
                x1={wireStart}
                y1={y}
                x2={wireEnd}
                y2={y}
                stroke="currentColor"
                strokeWidth={1.2}
                className="stroke-foreground/75"
              />
            </g>
          ))}

          {/* Vertical Control-Phase Connecting Lines */}
          {/* q0 control links */}
          <line x1={120} y1={rowY[0]} x2={120} y2={rowY[1]} stroke="currentColor" strokeWidth={1.2} className="stroke-foreground/75" />
          <line x1={162} y1={rowY[0]} x2={162} y2={rowY[2]} stroke="currentColor" strokeWidth={1.2} className="stroke-foreground/75" />
          <line x1={204} y1={rowY[0]} x2={204} y2={rowY[3]} stroke="currentColor" strokeWidth={1.2} className="stroke-foreground/75" />

          {/* q1 control links */}
          <line x1={278} y1={rowY[1]} x2={278} y2={rowY[2]} stroke="currentColor" strokeWidth={1.2} className="stroke-foreground/75" />
          <line x1={320} y1={rowY[1]} x2={320} y2={rowY[3]} stroke="currentColor" strokeWidth={1.2} className="stroke-foreground/75" />

          {/* q2 control link */}
          <line x1={394} y1={rowY[2]} x2={394} y2={rowY[3]} stroke="currentColor" strokeWidth={1.2} className="stroke-foreground/75" />

          {/* SWAP Gate vertical connecting wires */}
          <line x1={444} y1={rowY[0]} x2={444} y2={rowY[3]} stroke="currentColor" strokeWidth={1.2} className="stroke-foreground/75" />
          <line x1={460} y1={rowY[1]} x2={460} y2={rowY[2]} stroke="currentColor" strokeWidth={1.2} className="stroke-foreground/75" />

          {/* --- QUBIT 0 STAGE --- */}
          <rect x={72} y={rowY[0] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={83} y={rowY[0] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-xs font-medium">H</text>

          <rect x={109} y={rowY[0] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={120} y={rowY[0] + 3} textAnchor="middle" fill="currentColor" className="font-serif text-[10px]">R₂</text>
          <circle cx={120} cy={rowY[1]} r={3.5} fill="currentColor" />

          <rect x={151} y={rowY[0] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={162} y={rowY[0] + 3} textAnchor="middle" fill="currentColor" className="font-serif text-[10px]">R₃</text>
          <circle cx={162} cy={rowY[2]} r={3.5} fill="currentColor" />

          <rect x={193} y={rowY[0] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={204} y={rowY[0] + 3} textAnchor="middle" fill="currentColor" className="font-serif text-[10px]">R₄</text>
          <circle cx={204} cy={rowY[3]} r={3.5} fill="currentColor" />

          {/* --- QUBIT 1 STAGE --- */}
          <rect x={232} y={rowY[1] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={243} y={rowY[1] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-xs font-medium">H</text>

          <rect x={267} y={rowY[1] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={278} y={rowY[1] + 3} textAnchor="middle" fill="currentColor" className="font-serif text-[10px]">R₂</text>
          <circle cx={278} cy={rowY[2]} r={3.5} fill="currentColor" />

          <rect x={309} y={rowY[1] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={320} y={rowY[1] + 3} textAnchor="middle" fill="currentColor" className="font-serif text-[10px]">R₃</text>
          <circle cx={320} cy={rowY[3]} r={3.5} fill="currentColor" />

          {/* --- QUBIT 2 STAGE --- */}
          <rect x={348} y={rowY[2] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={359} y={rowY[2] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-xs font-medium">H</text>

          <rect x={383} y={rowY[2] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={394} y={rowY[2] + 3} textAnchor="middle" fill="currentColor" className="font-serif text-[10px]">R₂</text>
          <circle cx={394} cy={rowY[3]} r={3.5} fill="currentColor" />

          {/* --- QUBIT 3 STAGE --- */}
          <rect x={412} y={rowY[3] - 11} width={22} height={22} rx={2} className="fill-background stroke-foreground/80" strokeWidth={1.2} />
          <text x={423} y={rowY[3] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-xs font-medium">H</text>

          {/* --- SWAP GATES --- */}
          <SwapCross cx={444} cy={rowY[0]} />
          <SwapCross cx={444} cy={rowY[3]} />
          <SwapCross cx={460} cy={rowY[1]} />
          <SwapCross cx={460} cy={rowY[2]} />
        </svg>
      </div>

      {/* Clean Math Footer */}
      <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-2.5 font-mono text-xs text-muted-foreground">
        <span>PHASE SHIFT: R<sub>k</sub> = diag(1, e<sup>2πi/2<sup>k</sup></sup>)</span>
        <span className="uppercase">Complexity: O(n²)</span>
      </div>
    </div>
  );
}

/** Compact SWAP target cross */
function SwapCross({ cx, cy }: { cx: number; cy: number }) {
  const d = 3.5;
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} className="fill-background" />
      <line
        x1={cx - d}
        y1={cy - d}
        x2={cx + d}
        y2={cy + d}
        stroke="currentColor"
        strokeWidth={1.2}
        className="stroke-foreground"
      />
      <line
        x1={cx - d}
        y1={cy + d}
        x2={cx + d}
        y2={cy - d}
        stroke="currentColor"
        strokeWidth={1.2}
        className="stroke-foreground"
      />
    </g>
  );
}
