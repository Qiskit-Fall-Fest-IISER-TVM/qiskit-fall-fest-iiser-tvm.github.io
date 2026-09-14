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
        "Build a solid physical intuition for quantum mechanics and master translating concepts into working algorithmic circuits with Qiskit.",
    },
    {
      number: "02",
      label: "BUILD",
      title: "Real Quantum Programs",
      description:
        "Synthesize multi-qubit unitaries, explore quantum noise channels, and execute your own routines on actual quantum computing hardware.",
    },
    {
      number: "03",
      label: "CONNECT",
      title: "Collaborative Community",
      description:
        "Engage with fellow students, researchers, and theoretical physicists actively pushing the boundaries of quantum information science.",
    },
    {
      number: "04",
      label: "EXPLORE",
      title: "Frontiers of Computation",
      description:
        "Delve into error correction, topological phases, Grover searches, and the foundational algorithms redefining modern computational complexity.",
    },
  ];

  return (
    <SectionBackground className="relative overflow-hidden py-24 md:py-32">
      {/* Background Hero Asset Layer without any synthetic grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
              Why Attend?
            </span>
            <span className="h-px w-10 bg-primary" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Quantum computing,
            <br />
            <span className="text-muted-foreground font-normal">
              experienced rigorously.
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A hands-on symposium bridging algebraic principles, open systems,
            and executable quantum circuits designed for students and researchers alike.
          </p>
        </div>

        {/* Quantikz-Style QFT Schematic Card */}
        <div className="mb-14">
          <QFTCircuit />
        </div>

        {/* Four Reason Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="h-full"
            >
              <div className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/35 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/50 shadow-sm">
                {/* Background Number */}
                <div className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[110px] font-bold leading-none text-muted-foreground/[0.04] transition-colors group-hover:text-primary/[0.08]">
                  {reason.number}
                </div>

                <div>
                  {/* Number Badge */}
                  <div className="relative mb-6 flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-primary">
                      {reason.number}
                    </span>
                    <span className="h-px w-8 bg-border/70 transition-all duration-300 group-hover:w-12 group-hover:bg-primary/50" />
                  </div>

                  {/* Category Label */}
                  <p className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
                    {reason.label}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Arrow Accent */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/40">
                  <span className="font-mono text-[11px] text-muted-foreground group-hover:text-foreground transition-colors">
                    EXPLORE
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Subtle Hover Bar */}
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
   STATIC QUANTIKZ-STYLE QUANTUM FOURIER TRANSFORM (QFT) CIRCUIT
   - Opaque gate fills mask continuous qubit wires cleanly
   - Standard control-target notation for controlled-phase gates
   - Explicit cross-wire SWAP gate representations at output
===================================================================== */
function QFTCircuit() {
  const rowY = [40, 95, 150, 205];
  const wireStart = 65;
  const wireEnd = 620;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border/70 bg-card/30 backdrop-blur-sm p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-4">
        <div>
          <div className="font-mono text-xs font-medium text-primary uppercase tracking-wider">
            QUANTIKZ SCHEMATIC // QFT₄
          </div>
          <h3 className="mt-1 text-xl font-bold tracking-tight text-foreground md:text-2xl">
            Quantum Fourier Transform Protocol
          </h3>
        </div>
        <div className="hidden sm:block font-serif text-sm italic text-muted-foreground">
          |j⟩ ↦ 2<sup>−n/2</sup> ∑<sub>k</sub> e<sup>2πijk/2ⁿ</sup> |k⟩
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 660 250"
          className="min-w-[620px] w-full text-foreground opacity-90 transition-opacity hover:opacity-100"
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
                {`|j_${i}⟩`}
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

          {/* Vertical Control-Phase Links */}
          {/* q0 control links */}
          <line
            x1={155}
            y1={rowY[0]}
            x2={155}
            y2={rowY[1]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />
          <line
            x1={220}
            y1={rowY[0]}
            x2={220}
            y2={rowY[2]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />
          <line
            x1={285}
            y1={rowY[0]}
            x2={285}
            y2={rowY[3]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />

          {/* q1 control links */}
          <line
            x1={390}
            y1={rowY[1]}
            x2={390}
            y2={rowY[2]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />
          <line
            x1={445}
            y1={rowY[1]}
            x2={445}
            y2={rowY[3]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />

          {/* q2 control link */}
          <line
            x1={530}
            y1={rowY[2]}
            x2={530}
            y2={rowY[3]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />

          {/* SWAP Gate vertical connecting wire */}
          <line
            x1={585}
            y1={rowY[0]}
            x2={585}
            y2={rowY[3]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />
          <line
            x1={605}
            y1={rowY[1]}
            x2={605}
            y2={rowY[2]}
            stroke="currentColor"
            strokeWidth={1.3}
            className="stroke-foreground/75"
          />

          {/* --- QUBIT 0 STAGE --- */}
          {/* H Gate on q0 */}
          <rect
            x={95}
            y={rowY[0] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={112}
            y={rowY[0] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-base font-medium"
          >
            H
          </text>

          {/* Controlled R_k targets from q1, q2, q3 onto q0 */}
          <rect
            x={138}
            y={rowY[0] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={155}
            y={rowY[0] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-xs font-medium"
          >
            R<tspan dy="2" fontSize="9">2</tspan>
          </text>
          <circle cx={155} cy={rowY[1]} r={4.5} fill="currentColor" />

          <rect
            x={203}
            y={rowY[0] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={220}
            y={rowY[0] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-xs font-medium"
          >
            R<tspan dy="2" fontSize="9">3</tspan>
          </text>
          <circle cx={220} cy={rowY[2]} r={4.5} fill="currentColor" />

          <rect
            x={268}
            y={rowY[0] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={285}
            y={rowY[0] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-xs font-medium"
          >
            R<tspan dy="2" fontSize="9">4</tspan>
          </text>
          <circle cx={285} cy={rowY[3]} r={4.5} fill="currentColor" />

          {/* --- QUBIT 1 STAGE --- */}
          {/* H Gate on q1 */}
          <rect
            x={330}
            y={rowY[1] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={347}
            y={rowY[1] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-base font-medium"
          >
            H
          </text>

          {/* Controlled R2, R3 on q1 */}
          <rect
            x={373}
            y={rowY[1] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={390}
            y={rowY[1] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-xs font-medium"
          >
            R<tspan dy="2" fontSize="9">2</tspan>
          </text>
          <circle cx={390} cy={rowY[2]} r={4.5} fill="currentColor" />

          <rect
            x={428}
            y={rowY[1] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={445}
            y={rowY[1] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-xs font-medium"
          >
            R<tspan dy="2" fontSize="9">3</tspan>
          </text>
          <circle cx={445} cy={rowY[3]} r={4.5} fill="currentColor" />

          {/* --- QUBIT 2 STAGE --- */}
          {/* H Gate on q2 */}
          <rect
            x={475}
            y={rowY[2] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={492}
            y={rowY[2] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-base font-medium"
          >
            H
          </text>

          <rect
            x={513}
            y={rowY[2] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={530}
            y={rowY[2] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-xs font-medium"
          >
            R<tspan dy="2" fontSize="9">2</tspan>
          </text>
          <circle cx={530} cy={rowY[3]} r={4.5} fill="currentColor" />

          {/* --- QUBIT 3 STAGE --- */}
          {/* H Gate on q3 */}
          <rect
            x={550}
            y={rowY[3] - 17}
            width={34}
            height={34}
            rx={3}
            className="fill-background stroke-foreground/80"
            strokeWidth={1.3}
          />
          <text
            x={567}
            y={rowY[3] + 5}
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-base font-medium"
          >
            H
          </text>

          {/* --- SWAP GATES (q0 <-> q3) & (q1 <-> q2) --- */}
          <SwapCross cx={585} cy={rowY[0]} />
          <SwapCross cx={585} cy={rowY[3]} />

          <SwapCross cx={605} cy={rowY[1]} />
          <SwapCross cx={605} cy={rowY[2]} />
        </svg>
      </div>

      {/* Footer Details */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between border-t border-border/40 pt-4 font-mono text-xs text-muted-foreground gap-2">
        <span>GATE PHASE EVOLUTION: R_k = diag(1, e^{"2πi/2ᵏ"})</span>
        <span className="uppercase">O(n²) Total Gate Complexity</span>
      </div>
    </div>
  );
}

/** Explicit SWAP target 'x' cross with opaque backing */
function SwapCross({ cx, cy }: { cx: number; cy: number }) {
  const d = 5;
  return (
    <g>
      <circle cx={cx} cy={cy} r={7} className="fill-background" />
      <line
        x1={cx - d}
        y1={cy - d}
        x2={cx + d}
        y2={cy + d}
        stroke="currentColor"
        strokeWidth={1.4}
        className="stroke-foreground"
      />
      <line
        x1={cx - d}
        y1={cy + d}
        x2={cx + d}
        y2={cy - d}
        stroke="currentColor"
        strokeWidth={1.4}
        className="stroke-foreground"
      />
    </g>
  );
}
