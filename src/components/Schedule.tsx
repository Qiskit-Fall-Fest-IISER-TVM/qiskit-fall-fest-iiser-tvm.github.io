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
        time: "05:00 PM – 05:30 PM",
        title: "Inaugural Address & Welcome Remarks",
        type: "INAUGURATION",
      },
      {
        time: "05:45 PM – 07:00 PM",
        title: "Keynote: Geometric Phases and Two-Level State Manifolds",
        type: "SESSION",
      },
      {
        time: "09:00 PM – 11:00 PM",
        title: "Quantum 101: State Geometry & Transformations in Hilbert Space",
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
        time: "09:00 AM – 12:00 PM",
        title: "Workshop: Bell State Generation & Quantum Teleportation Protocols",
        type: "WORKSHOP",
      },
      {
        time: "02:00 PM – 05:00 PM",
        title: "Lecture: Multi-Qubit Unitaries and Controlled Phase Evolution",
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
        time: "09:00 AM – 12:00 PM",
        title: "Workshop: Open Quantum Systems, Density Matrices, & Decoherence",
        type: "WORKSHOP",
      },
      {
        time: "02:00 PM – 05:00 PM",
        title: "Lecture: Quantum Error Mitigation, Purity, and Surface Codes",
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
        time: "04:00 PM – 06:00 PM",
        title: "Symposium: Grover Amplitude Amplification & Complexity Bounds",
        type: "PANEL",
      },
      {
        time: "06:00 PM onwards",
        title: "Concluding Remarks & Research Poster Presentation",
        type: "CONCLUSION",
      },
    ],
  },
];

function EventBadge({ type }: { type: string }) {
  return (
    <span className="inline-block border border-foreground/80 px-3 py-1 font-mono text-xs uppercase tracking-widest text-foreground bg-transparent">
      [{type}]
    </span>
  );
}

/* ============================================================
   TIKZ REPLICA 01: PGF/TIKZ BLOCH SPHERE (STATIC)
   ============================================================ */
function TikzBlochSphere() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-2">
      <svg
        viewBox="0 0 340 340"
        className="w-full max-w-[320px] overflow-visible text-foreground"
        fill="none"
      >
        {/* Main Sphere Outer Boundary */}
        <circle
          cx="170"
          cy="170"
          r="115"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* Equator (XY Plane) */}
        <path
          d="M 55 170 A 115 36 0 0 1 285 170"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M 55 170 A 115 36 0 0 0 285 170"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        {/* Prime Meridian (YZ Plane) */}
        <path
          d="M 170 55 A 40 115 0 0 1 170 285"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M 170 55 A 40 115 0 0 0 170 285"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        {/* Z-Axis */}
        <line
          x1="170"
          y1="25"
          x2="170"
          y2="305"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <polygon points="170,16 166,28 174,28" fill="currentColor" />

        {/* X-Axis (Perspective) */}
        <line
          x1="170"
          y1="170"
          x2="85"
          y2="225"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <polygon points="78,229 90,225 86,217" fill="currentColor" />

        {/* Y-Axis */}
        <line
          x1="170"
          y1="170"
          x2="295"
          y2="170"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <polygon points="303,170 291,166 291,174" fill="currentColor" />

        {/* Projection Trajectory to XY Plane */}
        <line
          x1="222"
          y1="108"
          x2="222"
          y2="182"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <line
          x1="170"
          y1="170"
          x2="222"
          y2="182"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* State Vector Arrow */}
        <line
          x1="170"
          y1="170"
          x2="220"
          y2="110"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <polygon points="226,103 214,110 221,118" fill="currentColor" />

        {/* Polar Angle Arc theta */}
        <path
          d="M 170 135 A 35 35 0 0 1 188 147"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* Azimuthal Angle Arc phi */}
        <path
          d="M 152 181 A 24 24 0 0 0 185 174"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* Coordinate Labels */}
        <text
          x="170"
          y="10"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          |0⟩
        </text>
        <text
          x="170"
          y="328"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          |1⟩
        </text>
        <text
          x="62"
          y="244"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          x
        </text>
        <text
          x="315"
          y="175"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          y
        </text>
        <text
          x="182"
          y="28"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          z
        </text>

        <text
          x="236"
          y="102"
          fill="currentColor"
          className="font-serif italic text-xl font-bold"
        >
          |ψ⟩
        </text>
        <text
          x="182"
          y="134"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          θ
        </text>
        <text
          x="166"
          y="195"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          φ
        </text>
      </svg>
      <div className="mt-4 font-serif text-sm italic text-muted-foreground text-center">
        Fig 1. Orthographic projection of state vector |ψ⟩ on the unit sphere S²
      </div>
    </div>
  );
}

/* ============================================================
   QUANTIKZ REPLICA 02: TELEPORTATION CIRCUIT (STATIC)
   ============================================================ */
function QuantikzTeleportation() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-2">
      <svg
        viewBox="0 0 460 200"
        className="w-full max-w-[430px] text-foreground"
        fill="none"
      >
        {/* Wire 1: |psi> */}
        <text
          x="10"
          y="45"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          |ψ⟩
        </text>
        <line
          x1="45"
          y1="40"
          x2="280"
          y2="40"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* Wire 2: |0>_A */}
        <text
          x="10"
          y="105"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          |0⟩
        </text>
        <line
          x1="45"
          y1="100"
          x2="280"
          y2="100"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* Wire 3: |0>_B */}
        <text
          x="10"
          y="165"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          |0⟩
        </text>
        <line
          x1="45"
          y1="160"
          x2="415"
          y2="160"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* Gate: H on Wire 2 */}
        <rect
          x="75"
          y="83"
          width="34"
          height="34"
          fill="currentColor"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <text
          x="92"
          y="106"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-lg font-medium"
        >
          H
        </text>

        {/* CNOT between Wire 2 & Wire 3 */}
        <line
          x1="135"
          y1="100"
          x2="135"
          y2="160"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="135" cy="100" r="4.5" fill="currentColor" />
        <circle
          cx="135"
          cy="160"
          r="10"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <line
          x1="135"
          y1="152"
          x2="135"
          y2="168"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <line
          x1="127"
          y1="160"
          x2="143"
          y2="160"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* CNOT between Wire 1 & Wire 2 */}
        <line
          x1="185"
          y1="40"
          x2="185"
          y2="100"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="185" cy="40" r="4.5" fill="currentColor" />
        <circle
          cx="185"
          cy="100"
          r="10"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <line
          x1="185"
          y1="92"
          x2="185"
          y2="108"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <line
          x1="177"
          y1="100"
          x2="193"
          y2="100"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* Gate: H on Wire 1 */}
        <rect
          x="225"
          y="23"
          width="34"
          height="34"
          fill="currentColor"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <text
          x="242"
          y="46"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-lg font-medium"
        >
          H
        </text>

        {/* Measurement Box M on Wire 1 */}
        <rect
          x="280"
          y="23"
          width="38"
          height="34"
          fill="currentColor"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <path
          d="M 288 49 A 14 14 0 0 1 310 49"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="299"
          y1="49"
          x2="308"
          y2="31"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* Measurement Box M on Wire 2 */}
        <rect
          x="280"
          y="83"
          width="38"
          height="34"
          fill="currentColor"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <path
          d="M 288 109 A 14 14 0 0 1 310 109"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="299"
          y1="109"
          x2="308"
          y2="91"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* Classical Feedforward Double Wires */}
        {/* M1 -> Z Gate */}
        <line
          x1="318"
          y1="38"
          x2="390"
          y2="38"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <line
          x1="318"
          y1="42"
          x2="390"
          y2="42"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <line
          x1="390"
          y1="42"
          x2="390"
          y2="143"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        {/* M2 -> X Gate */}
        <line
          x1="318"
          y1="98"
          x2="345"
          y2="98"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <line
          x1="318"
          y1="102"
          x2="345"
          y2="102"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <line
          x1="345"
          y1="102"
          x2="345"
          y2="143"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        {/* Unitary Corrections X and Z */}
        <rect
          x="330"
          y="143"
          width="32"
          height="34"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <text
          x="346"
          y="166"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-lg font-medium"
        >
          X
        </text>

        <rect
          x="375"
          y="143"
          width="32"
          height="34"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <text
          x="391"
          y="166"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-lg font-medium"
        >
          Z
        </text>

        <text
          x="425"
          y="165"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          |ψ⟩
        </text>
      </svg>
      <div className="mt-4 font-serif text-sm italic text-muted-foreground text-center">
        Fig 2. Canonical teleportation circuit compiled via quantikz notation
      </div>
    </div>
  );
}

/* ============================================================
   TIKZ REPLICA 03: DENSITY OPERATOR & DEPHASING (STATIC)
   ============================================================ */
function TikzDensityMatrix() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-2">
      <div className="flex flex-col items-center space-y-6">
        {/* Exact LaTeX-Style Matrix */}
        <div className="flex items-center space-x-3 font-serif text-xl md:text-2xl text-foreground">
          <span className="italic font-medium">ρ =</span>
          <div className="relative border-l-2 border-r-2 border-foreground px-5 py-3">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-center">
              <div>
                <span className="italic text-lg md:text-xl">|α|²</span>
                <div className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground">
                  (population ρ₀₀)
                </div>
              </div>
              <div>
                <span className="italic text-lg md:text-xl">α β* e^{"-iΔω t"}</span>
                <div className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground">
                  (coherence ρ₀₁)
                </div>
              </div>
              <div>
                <span className="italic text-lg md:text-xl">α* β e^{"iΔω t"}</span>
                <div className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground">
                  (coherence ρ₁₀)
                </div>
              </div>
              <div>
                <span className="italic text-lg md:text-xl">|β|²</span>
                <div className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground">
                  (population ρ₁₁)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PGFPlots Style Transverse Decoherence Curve */}
        <svg
          viewBox="0 0 340 110"
          className="w-full max-w-[320px] text-foreground"
          fill="none"
        >
          {/* T-Axis */}
          <line
            x1="35"
            y1="90"
            x2="315"
            y2="90"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <polygon points="322,90 312,87 312,93" fill="currentColor" />

          {/* Vertical Coherence Axis */}
          <line
            x1="35"
            y1="90"
            x2="35"
            y2="15"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <polygon points="35,8 32,18 38,18" fill="currentColor" />

          {/* Damped Off-diagonal Oscillations */}
          <path
            d="M 35 25 Q 65 30 85 55 T 135 85 T 185 88 T 235 89.5 L 300 90"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          {/* Exponential Decay Envelope (Dashed) */}
          <path
            d="M 35 25 Q 125 45 300 90"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          <text
            x="315"
            y="105"
            fill="currentColor"
            className="font-serif italic text-sm"
          >
            t
          </text>
          <text
            x="12"
            y="22"
            fill="currentColor"
            className="font-serif italic text-sm"
          >
            |ρ₀₁|
          </text>
          <text
            x="180"
            y="42"
            fill="currentColor"
            className="font-serif italic text-sm"
          >
            e^{"-t / T₂*"}
          </text>
        </svg>
      </div>

      <div className="mt-4 font-serif text-sm italic text-muted-foreground text-center">
        Fig 3. Density operator matrix elements and transverse dephasing channel
      </div>
    </div>
  );
}

/* ============================================================
   QUANTIKZ REPLICA 04: GROVER ITERATION (STATIC)
   ============================================================ */
function QuantikzGrover() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-2">
      <svg
        viewBox="0 0 450 170"
        className="w-full max-w-[430px] text-foreground"
        fill="none"
      >
        {/* Wire n-qubits */}
        <text
          x="8"
          y="56"
          fill="currentColor"
          className="font-serif italic text-lg"
        >
          |0⟩^{"⊗n"}
        </text>
        <line
          x1="65"
          y1="50"
          x2="415"
          y2="50"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        {/* Slash for multi-qubit bus */}
        <line
          x1="82"
          y1="42"
          x2="90"
          y2="58"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <text
          x="90"
          y="38"
          fill="currentColor"
          className="font-serif italic text-xs"
        >
          n
        </text>

        {/* Initial Walsh-Hadamard */}
        <rect
          x="110"
          y="31"
          width="38"
          height="38"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <text
          x="129"
          y="56"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-base font-medium"
        >
          H^{"⊗n"}
        </text>

        {/* Oracle Box U_w */}
        <rect
          x="175"
          y="23"
          width="62"
          height="54"
          className="fill-background stroke-foreground"
          strokeWidth="1.6"
        />
        <text
          x="206"
          y="56"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-lg font-medium"
        >
          U_ω
        </text>

        {/* Diffusion Operator */}
        <rect
          x="260"
          y="23"
          width="90"
          height="54"
          className="fill-background stroke-foreground"
          strokeWidth="1.6"
        />
        <text
          x="305"
          y="56"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-base font-medium"
        >
          2|s⟩⟨s| - I
        </text>

        {/* Grover Repeat Bracket */}
        <path
          d="M 175 85 C 175 95 260 95 260 105 C 260 95 350 95 350 85"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <text
          x="260"
          y="126"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif italic text-sm"
        >
          Repeat R ≈ (π/4)√N times
        </text>

        {/* Final Measurement */}
        <rect
          x="372"
          y="33"
          width="38"
          height="34"
          className="fill-background stroke-foreground"
          strokeWidth="1.4"
        />
        <path
          d="M 380 59 A 14 14 0 0 1 402 59"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="391"
          y1="59"
          x2="400"
          y2="41"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
      <div className="mt-4 font-serif text-sm italic text-muted-foreground text-center">
        Fig 4. Schematic circuit layout for unstructured search via amplitude amplification
      </div>
    </div>
  );
}

function QuantumVisual({ type }: { type: ScheduleDay["visual"] }) {
  switch (type) {
    case "bloch":
      return <TikzBlochSphere />;
    case "circuit":
      return <QuantikzTeleportation />;
    case "state":
      return <TikzDensityMatrix />;
    case "grover":
      return <QuantikzGrover />;
  }
}

/* ============================================================
   MAIN COMPONENT: SCHEDULE
   ============================================================ */
export function Schedule() {
  return (
    <section
      id="schedule"
      className="w-full bg-background py-20 text-foreground font-serif selection:bg-foreground selection:text-background"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        {/* ACADEMIC HEADER */}
        <div className="border-b-2 border-foreground pb-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <div>
              <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                Section IV · Symposia & Lectures
              </div>
              <h1 className="mt-2 font-serif text-4xl md:text-5xl font-normal tracking-normal text-foreground">
                Programme & Theoretical Schemata
              </h1>
            </div>
            <div className="font-serif italic text-xl md:text-2xl text-muted-foreground">
              October 9 – 12, 2026
            </div>
          </div>
          <p className="mt-4 max-w-3xl font-serif text-lg leading-relaxed text-muted-foreground">
            A comprehensive four-day symposium exploring the algebraic foundations
            of quantum information, state tomography, teleportation protocols, and
            fault-tolerant compilation.
          </p>
        </div>

        {/* DAYS LIST WITH INTEGRATED SCHEMATICS */}
        <div className="divide-y divide-foreground/20">
          {scheduleData.map((day) => (
            <div
              key={day.number}
              className="py-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start"
            >
              {/* TIMELINE LIST */}
              <div className="lg:col-span-7 space-y-6">
                <div className="border-b border-foreground/40 pb-2 flex items-baseline justify-between">
                  <h2 className="font-serif text-2xl md:text-3xl font-normal">
                    Day {day.number} · {day.weekday}
                  </h2>
                  <span className="font-mono text-sm tracking-wider text-muted-foreground">
                    {day.date}
                  </span>
                </div>

                <div className="divide-y divide-foreground/10">
                  {day.events.map((event) => (
                    <div
                      key={event.title}
                      className="py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3"
                    >
                      <div className="space-y-1.5 sm:max-w-[76%]">
                        <div className="font-mono text-xs tracking-wider text-muted-foreground">
                          {event.time}
                        </div>
                        <div className="font-serif text-lg md:text-xl font-medium leading-snug">
                          {event.title}
                        </div>
                      </div>
                      <div className="mt-1 sm:mt-0">
                        <EventBadge type={event.type} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TIKZ / QUANTIKZ FIGURE PANEL */}
              <div className="lg:col-span-5 border border-foreground/30 bg-card/20 p-5 shadow-sm">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-foreground/20 pb-2 mb-3">
                  Theoretical Model Ref: 0{day.number}
                </div>
                <QuantumVisual type={day.visual} />
              </div>
            </div>
          ))}
        </div>

        {/* ACADEMIC FOOTER */}
        <div className="border-t-2 border-foreground pt-6 mt-12 flex flex-col sm:flex-row justify-between text-sm text-muted-foreground font-serif">
          <span>* All sessions follow Indian Standard Time (IST, UTC+5:30).</span>
          <span className="italic mt-2 sm:mt-0">
            Typeset in Computer Modern / Latin Modern representation.
          </span>
        </div>
      </div>
    </section>
  );
}
