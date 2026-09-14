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
  visual: "bloch" | "circuit" | "state" | "grover";
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
        title: "Inaugural Session: Foundations of Qubits",
        type: "SESSION",
      },
      {
        time: "09:00 PM - 11:00 PM",
        title: "Quantum 101: State Geometry & Transformations",
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
        title: "Workshop: Bell States & Quantum Teleportation Protocols",
        type: "WORKSHOP",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Lecture Series: Multi-Qubit Gates & Decoherence Channels",
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
        title: "Workshop: Density Matrices, Ensembles & Noise Simulation",
        type: "WORKSHOP",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Lecture Series: Error Correction & Fault Tolerance",
        type: "LECTURE",
      },
    ],
  },
  {
    number: "04",
    date: "12 OCTOBER 2026",
    weekday: "MONDAY",
    visual: "grover",
    events: [
      {
        time: "04:00 PM - 06:00 PM",
        title: "Panel: Geometric Phase, Grover Amplification & Industry Careers",
        type: "PANEL",
      },
      {
        time: "06:00 PM onwards",
        title: "Concluding Session & Research Showcase",
        type: "CONCLUSION",
      },
    ],
  },
];

function EventBadge({ type }: { type: string }) {
  const isHighlight =
    type === "INAUGURATION" || type === "WORKSHOP" || type === "PANEL";

  return (
    <span
      className={`
        inline-flex items-center rounded-md border px-2.5 py-0.5 font-mono text-[9px] font-semibold tracking-wider transition-colors
        ${
          isHighlight
            ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_12px_hsl(var(--primary)/0.15)]"
            : "border-border/80 bg-muted/30 text-muted-foreground"
        }
      `}
    >
      {type}
    </span>
  );
}

/* ============================================================
   DIAGRAM 01: THEORETICAL BLOCH SPHERE
   ============================================================ */

function BlochSphereDiagram() {
  return (
    <div className="relative flex w-full max-w-[400px] flex-col items-center rounded-xl border border-border/40 bg-card/20 p-6 backdrop-blur-md">
      <div className="mb-3 flex w-full items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span className="tracking-widest text-primary">SCHEMATIC // 01</span>
        <span>SU(2) STATE MANIFOLD</span>
      </div>

      <div className="relative h-[280px] w-[280px]">
        <svg
          viewBox="0 0 280 280"
          className="h-full w-full overflow-visible"
          fill="none"
        >
          {/* Ambient Glow */}
          <circle
            cx="140"
            cy="140"
            r="95"
            className="fill-primary/[0.02] stroke-border/40"
            strokeWidth="1"
          />

          {/* Equator (XY Plane) - Front & Back */}
          <ellipse
            cx="140"
            cy="140"
            rx="95"
            ry="30"
            stroke="currentColor"
            strokeWidth="1"
            className="text-border"
          />
          <path
            d="M 45 140 A 95 30 0 0 1 235 140"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            className="text-muted-foreground/40"
          />

          {/* Prime Meridian (YZ Plane) */}
          <ellipse
            cx="140"
            cy="140"
            rx="34"
            ry="95"
            stroke="currentColor"
            strokeWidth="1"
            className="text-border/80"
          />

          {/* Z-Axis */}
          <line
            x1="140"
            y1="25"
            x2="140"
            y2="255"
            stroke="currentColor"
            strokeWidth="1"
            className="text-border"
          />
          {/* X-Axis (Perspective) */}
          <line
            x1="70"
            y1="180"
            x2="210"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
            className="text-border/60"
          />
          {/* Y-Axis */}
          <line
            x1="30"
            y1="140"
            x2="250"
            y2="140"
            stroke="currentColor"
            strokeWidth="1"
            className="text-border/60"
          />

          {/* Precession / Uncertainty Cone Ring */}
          <ellipse
            cx="140"
            cy="88"
            rx="46"
            ry="14"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 2"
            className="text-primary/40"
          />

          {/* State Vector |psi> */}
          <motion.g
            animate={{ rotate: [0, 8, -4, 0] }}
            style={{ transformOrigin: "140px 140px" }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Projection line to XY */}
            <line
              x1="182"
              y1="88"
              x2="182"
              y2="148"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 2"
              className="text-primary/40"
            />
            <line
              x1="140"
              y1="140"
              x2="182"
              y2="148"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/30"
            />

            {/* Vector arrow */}
            <line
              x1="140"
              y1="140"
              x2="182"
              y2="88"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />

            {/* Terminal State Point */}
            <circle
              cx="182"
              cy="88"
              r="4.5"
              fill="hsl(var(--background))"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />
            <circle
              cx="182"
              cy="88"
              r="8"
              stroke="hsl(var(--primary))"
              strokeWidth="0.8"
              className="animate-ping opacity-75"
            />

            {/* Label |psi> */}
            <text
              x="194"
              y="84"
              fill="hsl(var(--primary))"
              className="font-mono text-[11px] font-bold"
            >
              |ψ⟩
            </text>
          </motion.g>

          {/* Axis Endpoints Labels */}
          <text
            x="140"
            y="18"
            textAnchor="middle"
            fill="currentColor"
            className="font-mono text-[10px] text-muted-foreground"
          >
            |0⟩ (+z)
          </text>
          <text
            x="140"
            y="272"
            textAnchor="middle"
            fill="currentColor"
            className="font-mono text-[10px] text-muted-foreground"
          >
            |1⟩ (-z)
          </text>
          <text
            x="260"
            y="144"
            fill="currentColor"
            className="font-mono text-[9px] text-muted-foreground"
          >
            |+y⟩
          </text>
          <text
            x="58"
            y="192"
            fill="currentColor"
            className="font-mono text-[9px] text-muted-foreground"
          >
            |+x⟩
          </text>

          {/* Angle Theta & Phi arc */}
          <path
            d="M 140 115 A 25 25 0 0 1 156 122"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/70"
          />
          <text
            x="147"
            y="112"
            fill="hsl(var(--primary))"
            className="font-mono text-[9px]"
          >
            θ
          </text>
        </svg>
      </div>

      <div className="mt-2 text-center font-mono text-[10px] text-muted-foreground">
        |ψ⟩ = cos(θ/2)|0⟩ + e^{"iφ"}sin(θ/2)|1⟩
      </div>
    </div>
  );
}

/* ============================================================
   DIAGRAM 02: TELEPORTATION & BELL ENTANGLEMENT CIRCUIT
   ============================================================ */

function QuantumCircuitDiagram() {
  return (
    <div className="flex w-full max-w-[430px] flex-col rounded-xl border border-border/40 bg-card/20 p-6 backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span className="tracking-widest text-primary">SCHEMATIC // 02</span>
        <span>TELEPORTATION PROTOCOL</span>
      </div>

      <div className="space-y-6">
        {/* Qubit 0: Alice's Unknown State */}
        <div className="relative flex items-center">
          <span className="w-14 font-mono text-xs font-semibold text-primary">
            |ψ⟩
          </span>
          <div className="relative h-px flex-1 bg-border">
            {/* CNOT Control */}
            <div className="absolute left-[36%] top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
            </div>

            {/* Hadamard Gate */}
            <div className="absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded border border-primary/50 bg-background px-2 py-1 font-mono text-[11px] font-bold text-primary shadow-sm">
              H
            </div>

            {/* Measurement Box */}
            <div className="absolute right-[8%] top-1/2 -translate-y-1/2 rounded border border-border bg-muted/40 px-2 py-1 font-mono text-[10px] text-muted-foreground">
              M₁
            </div>
          </div>
        </div>

        {/* Qubit 1: Bell Pair Half (Alice) */}
        <div className="relative flex items-center">
          <span className="w-14 font-mono text-xs text-muted-foreground">
            |0⟩_A
          </span>
          <div className="relative h-px flex-1 bg-border">
            {/* Bell Pair Creation: H */}
            <div className="absolute left-[12%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded border border-border bg-card px-2 py-1 font-mono text-[11px]">
              H
            </div>

            {/* Bell Pair Creation: CNOT Target */}
            <div className="absolute left-[24%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-base font-light text-primary">
              ⊕
            </div>

            {/* CNOT Target from |psi> */}
            <div className="absolute left-[36%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-base font-light text-primary">
              ⊕
            </div>

            {/* Measurement Box */}
            <div className="absolute right-[8%] top-1/2 -translate-y-1/2 rounded border border-border bg-muted/40 px-2 py-1 font-mono text-[10px] text-muted-foreground">
              M₂
            </div>
          </div>
        </div>

        {/* Vertical Entanglement links */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
        >
          {/* Bell state generation line */}
          <line
            x1="126"
            y1="82"
            x2="126"
            y2="128"
            stroke="hsl(var(--primary))"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
          {/* Alice's entangling control line */}
          <line
            x1="176"
            y1="56"
            x2="176"
            y2="128"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
          />
        </svg>

        {/* Qubit 2: Bob's Target Line */}
        <div className="relative flex items-center pt-2">
          <span className="w-14 font-mono text-xs text-muted-foreground">
            |0⟩_B
          </span>
          <div className="relative h-px flex-1 bg-border">
            {/* Target from Bell Pair */}
            <div className="absolute left-[24%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-base text-primary">
              ⊕
            </div>

            {/* Correction Unit */}
            <div className="absolute right-[8%] top-1/2 -translate-y-1/2 flex items-center gap-1">
              <div className="rounded border border-primary/40 bg-primary/5 px-2 py-1 font-mono text-[10px] text-primary">
                X^{"M₂"}
              </div>
              <div className="rounded border border-primary/40 bg-primary/5 px-2 py-1 font-mono text-[10px] text-primary">
                Z^{"M₁"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classical Double Wire representation */}
      <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-3 font-mono text-[9px] text-muted-foreground">
        <span>CLASSICAL BUS: 2 BITS (c=2)</span>
        <span className="text-primary font-semibold">OUTPUT: |ψ⟩_B</span>
      </div>
    </div>
  );
}

/* ============================================================
   DIAGRAM 03: DENSITY MATRIX & INTERFERENCE DYNAMICS
   ============================================================ */

function QuantumInterferenceDiagram() {
  return (
    <div className="flex w-full max-w-[430px] flex-col rounded-xl border border-border/40 bg-card/20 p-6 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span className="tracking-widest text-primary">SCHEMATIC // 03</span>
        <span>MIXED STATE PURITY & COHERENCE</span>
      </div>

      {/* Density Matrix Visual Grid */}
      <div className="my-2 flex items-center justify-center gap-4">
        <span className="font-mono text-xl text-muted-foreground">ρ =</span>
        <div className="relative rounded-lg border border-border/80 bg-background/60 p-3 font-mono">
          <div className="grid grid-cols-2 gap-3 text-center text-xs">
            <div className="rounded border border-primary/30 bg-primary/5 p-2">
              <span className="text-primary">|α|²</span>
              <p className="text-[9px] text-muted-foreground">POPULATION ρ₀₀</p>
            </div>
            <div className="rounded border border-border/60 bg-muted/20 p-2">
              <span className="text-foreground">αβ* e^{"-iΔt"}</span>
              <p className="text-[9px] text-muted-foreground">COHERENCE ρ₀₁</p>
            </div>
            <div className="rounded border border-border/60 bg-muted/20 p-2">
              <span className="text-foreground">α*β e^{"iΔt"}</span>
              <p className="text-[9px] text-muted-foreground">COHERENCE ρ₁₀</p>
            </div>
            <div className="rounded border border-primary/30 bg-primary/5 p-2">
              <span className="text-primary">|β|²</span>
              <p className="text-[9px] text-muted-foreground">POPULATION ρ₁₁</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interference Phase Waveform */}
      <div className="mt-5">
        <div className="mb-1 flex justify-between font-mono text-[9px] text-muted-foreground">
          <span>COHERENT OSCILLATION: P(θ) = cos²(ωt/2)</span>
          <span className="text-primary">Tr(ρ²) = 1.0</span>
        </div>

        <svg viewBox="0 0 320 50" className="w-full" fill="none">
          <path
            d="M 0 25 C 40 0, 40 50, 80 25 C 120 0, 120 50, 160 25 C 200 0, 200 50, 240 25 C 280 0, 280 50, 320 25"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            className="opacity-80"
          />
          <line
            x1="0"
            y1="25"
            x2="320"
            y2="25"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="4 4"
            className="text-border"
          />
        </svg>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 font-mono text-[9px] text-muted-foreground">
        <span>DEPHASING TIME: T₂* ≈ 94.2 μs</span>
        <span>RELAXATION: T₁ ≈ 128 μs</span>
      </div>
    </div>
  );
}

/* ============================================================
   DIAGRAM 04: GROVER AMPLIFICATION & DIFFUSION
   ============================================================ */

function GroverAlgorithmDiagram() {
  return (
    <div className="flex w-full max-w-[430px] flex-col rounded-xl border border-border/40 bg-card/20 p-6 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span className="tracking-widest text-primary">SCHEMATIC // 04</span>
        <span>GROVER ORACLE & DIFFUSION</span>
      </div>

      {/* Amplitude reflection schematic */}
      <div className="space-y-4 py-2">
        <div className="space-y-1">
          <div className="flex justify-between font-mono text-[9px] text-muted-foreground">
            <span>TARGET STATE |ω⟩ AMPLITUDE</span>
            <span className="text-primary font-bold">O(√N) ROTATION</span>
          </div>
          <div className="relative h-7 w-full overflow-hidden rounded border border-border bg-background">
            {/* Base mean line */}
            <div className="absolute bottom-0 left-0 top-0 w-1/4 border-r border-border bg-muted/20" />
            <motion.div
              initial={{ width: "22%" }}
              whileInView={{ width: "86%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary/60 to-primary flex items-center justify-end pr-2 font-mono text-[10px] font-bold text-primary-foreground"
            >
              sin((2k+1)θ)
            </motion.div>
          </div>
        </div>

        {/* Orthogonal states suppression */}
        <div className="space-y-1">
          <div className="flex justify-between font-mono text-[9px] text-muted-foreground">
            <span>NON-TARGET STATES |s'⟩</span>
            <span>AMPLITUDE SUPPRESSION</span>
          </div>
          <div className="relative h-4 w-full overflow-hidden rounded border border-border bg-background">
            <motion.div
              initial={{ width: "70%" }}
              whileInView={{ width: "14%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="h-full bg-muted-foreground/30"
            />
          </div>
        </div>
      </div>

      {/* Unitary Pipeline */}
      <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px]">
        <span className="rounded border border-border bg-card px-2 py-1">
          H^{"⊗n"}
        </span>
        <span className="text-muted-foreground">→</span>
        <span className="rounded border border-primary/40 bg-primary/10 px-2 py-1 text-primary">
          U_ω (Oracle)
        </span>
        <span className="text-muted-foreground">→</span>
        <span className="rounded border border-border bg-card px-2 py-1">
          2|s⟩⟨s| - I
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-3 font-mono text-[9px] text-muted-foreground">
        <span>DIFFUSION OPERATOR</span>
        <span className="text-primary">OPTIMAL RUNTIME: (π/4)√N</span>
      </div>
    </div>
  );
}

/* ============================================================
   VISUAL SELECTOR
   ============================================================ */

function QuantumVisual({ type }: { type: ScheduleDay["visual"] }) {
  if (type === "bloch") {
    return <BlochSphereDiagram />;
  }

  if (type === "circuit") {
    return <QuantumCircuitDiagram />;
  }

  if (type === "state") {
    return <QuantumInterferenceDiagram />;
  }

  return <GroverAlgorithmDiagram />;
}

/* ============================================================
   MAIN SCHEDULE COMPONENT
   ============================================================ */

export function Schedule() {
  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-background py-28 md:py-36"
    >
      {/* Structural Blueprint Grid Background Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 md:mb-32"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-primary uppercase">
              Symposium Syllabus
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Event Schedule & Theory
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Four days spanning state space geometries, entanglement
                protocols, mixed-state density matrices, and quantum search
                complexity.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-border/80 bg-card/40 px-4 py-2 font-mono text-[10px] tracking-widest text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              09 - 12 OCTOBER 2026
            </div>
          </div>
        </motion.div>

        {/* DAYS & DIAGRAMS */}
        <div className="space-y-24 md:space-y-36">
          {scheduleData.map((day, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={day.number}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
              >
                {/* TIMELINE LIST */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/30 p-6 backdrop-blur-md md:p-8 transition-colors hover:border-border">
                    {/* Background Index Number */}
                    <div className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[130px] font-bold leading-none text-muted-foreground/[0.04]">
                      {day.number}
                    </div>

                    {/* Day Header */}
                    <div className="relative mb-6 flex items-center justify-between border-b border-border/60 pb-4">
                      <div>
                        <div className="font-mono text-[10px] font-semibold tracking-wider text-primary">
                          STAGE // DAY {day.number}
                        </div>
                        <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                          {day.date}
                        </h3>
                      </div>
                      <span className="rounded border border-border bg-muted/30 px-2 py-1 font-mono text-[10px] text-muted-foreground">
                        {day.weekday}
                      </span>
                    </div>

                    {/* Event Rows */}
                    <div className="relative divide-y divide-border/40">
                      {day.events.map((event, eventIndex) => (
                        <motion.div
                          key={event.title}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: eventIndex * 0.08,
                          }}
                          className="group flex flex-col justify-between gap-3 py-4 sm:flex-row sm:items-center sm:gap-6"
                        >
                          <div className="space-y-1">
                            <div className="font-mono text-[10px] text-muted-foreground">
                              {event.time}
                            </div>
                            <div className="text-sm font-medium text-foreground transition-colors group-hover:text-primary md:text-base">
                              {event.title}
                            </div>
                          </div>

                          <div className="shrink-0">
                            <EventBadge type={event.type} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* THEORETICAL DIAGRAM */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex items-center justify-center lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <QuantumVisual type={day.visual} />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-24 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>RIGOROUS ACADEMIC STANDARDS APPLIED</span>
          </div>
          <span>SUBJECT TO MODIFICATION BY THE ORGANIZING COMMITTEE</span>
        </div>
      </div>
    </section>
  );
}
