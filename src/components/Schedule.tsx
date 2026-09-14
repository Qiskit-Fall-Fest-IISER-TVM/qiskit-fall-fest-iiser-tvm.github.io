import bgImage from "@/assets/Hero_1_without_title.png";

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
        time: "05:15 PM - 05:45 PM",
        title: "Inauguration",
        type: "INAUGURATION",
      },
      {
        time: "06:00 PM - 07:00 PM",
        title: "Inaugural Lecture",
        type: "LECTURE",
      },
      {
        time: "08:00 PM - 09:00 PM",
        title: "Keynote Lecture",
        type: "KEYNOTE",
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
        time: "10:00 AM - 12:00 PM",
        title: "Workshop",
        type: "WORKSHOP",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Keynote Lectures",
        type: "KEYNOTE",
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
        time: "10:00 AM - 12:00 PM",
        title: "Workshop",
        type: "WORKSHOP",
      },
      {
        time: "02:00 PM - 04:00 PM",
        title: "Keynote Lecture",
        type: "KEYNOTE",
      },
      {
        time: "04:00 PM - 05:00 PM",
        title: "Panel Discussion on Career in Quantum",
        type: "PANEL",
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
        time: "05:00 PM - 06:00 PM",
        title: "Keynote Lecture",
        type: "KEYNOTE",
      },
      {
        time: "06:00 PM - 06:30 PM",
        title: "Concluding Session",
        type: "CONCLUSION",
      },
    ],
  },
];

function EventBadge({ type }: { type: string }) {
  const isHighlight =
    type === "INAUGURATION" ||
    type === "WORKSHOP" ||
    type === "PANEL" ||
    type === "KEYNOTE";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono font-medium tracking-wide transition-colors ${
        isHighlight
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border/70 bg-muted/30 text-muted-foreground"
      }`}
    >
      {type}
    </span>
  );
}

/* ============================================================
   DIAGRAM 01: BLOCH SPHERE
   ============================================================ */
function BlochSphereDiagram() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-3 opacity-90 transition-opacity hover:opacity-100">
      <svg
        viewBox="0 0 320 320"
        className="w-full max-w-[280px] overflow-visible text-foreground"
        fill="none"
      >
        <circle
          cx="160"
          cy="160"
          r="105"
          stroke="currentColor"
          strokeWidth="1.2"
          className="stroke-foreground/75"
        />

        {/* Equator */}
        <path
          d="M 55 160 A 105 34 0 0 1 265 160"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="stroke-foreground/40"
        />
        <path
          d="M 55 160 A 105 34 0 0 0 265 160"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-foreground/70"
        />

        {/* Prime Meridian */}
        <path
          d="M 160 55 A 36 105 0 0 1 160 265"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="stroke-foreground/40"
        />
        <path
          d="M 160 55 A 36 105 0 0 0 160 265"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-foreground/70"
        />

        {/* Axes */}
        <line
          x1="160"
          y1="28"
          x2="160"
          y2="285"
          stroke="currentColor"
          strokeWidth="1.2"
          className="stroke-foreground/60"
        />
        <polygon points="160,20 156,30 164,30" fill="currentColor" />

        <line
          x1="160"
          y1="160"
          x2="85"
          y2="210"
          stroke="currentColor"
          strokeWidth="1.2"
          className="stroke-foreground/60"
        />
        <polygon points="78,214 90,211 86,203" fill="currentColor" />

        <line
          x1="160"
          y1="160"
          x2="275"
          y2="160"
          stroke="currentColor"
          strokeWidth="1.2"
          className="stroke-foreground/60"
        />
        <polygon points="282,160 272,156 272,164" fill="currentColor" />

        {/* Projection dotted lines */}
        <line
          x1="208"
          y1="102"
          x2="208"
          y2="170"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeDasharray="3 3"
          className="stroke-foreground/50"
        />
        <line
          x1="160"
          y1="160"
          x2="208"
          y2="170"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeDasharray="3 3"
          className="stroke-foreground/50"
        />

        {/* Vector Arrow */}
        <line
          x1="160"
          y1="160"
          x2="206"
          y2="105"
          stroke="hsl(var(--primary))"
          strokeWidth="2.2"
        />
        <polygon
          points="212,98 200,105 207,113"
          fill="hsl(var(--primary))"
        />

        {/* Angles */}
        <path
          d="M 160 128 A 32 32 0 0 1 178 138"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-foreground/60"
        />
        <path
          d="M 144 171 A 24 24 0 0 0 174 165"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-foreground/60"
        />

        {/* Annotations */}
        <text
          x="160"
          y="14"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          |0⟩
        </text>
        <text
          x="160"
          y="306"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          |1⟩
        </text>
        <text
          x="62"
          y="228"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          x
        </text>
        <text
          x="292"
          y="164"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          y
        </text>
        <text
          x="172"
          y="35"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          z
        </text>

        <text
          x="220"
          y="98"
          fill="hsl(var(--primary))"
          className="font-serif italic text-lg font-semibold"
        >
          |ψ⟩
        </text>
        <text
          x="170"
          y="126"
          fill="currentColor"
          className="font-serif italic text-sm"
        >
          θ
        </text>
        <text
          x="154"
          y="185"
          fill="currentColor"
          className="font-serif italic text-sm"
        >
          φ
        </text>
      </svg>
      <div className="mt-3 font-mono text-xs tracking-wider text-muted-foreground text-center uppercase">
        Bloch Sphere
      </div>
    </div>
  );
}

/* ============================================================
   DIAGRAM 02: TELEPORTATION PROTOCOL
   ============================================================ */
function TeleportationDiagram() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-3 opacity-90 transition-opacity hover:opacity-100">
      <svg
        viewBox="0 0 450 190"
        className="w-full max-w-[420px] text-foreground"
        fill="none"
      >
        {/* Continuous Qubit Wires drawn first */}
        <text
          x="8"
          y="39"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          |ψ⟩
        </text>
        <line
          x1="45"
          y1="35"
          x2="275"
          y2="35"
          stroke="currentColor"
          strokeWidth="1.3"
          className="stroke-foreground/75"
        />

        <text
          x="8"
          y="94"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          |0⟩
        </text>
        <line
          x1="45"
          y1="90"
          x2="275"
          y2="90"
          stroke="currentColor"
          strokeWidth="1.3"
          className="stroke-foreground/75"
        />

        <text
          x="8"
          y="149"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          |0⟩
        </text>
        <line
          x1="45"
          y1="145"
          x2="410"
          y2="145"
          stroke="currentColor"
          strokeWidth="1.3"
          className="stroke-foreground/75"
        />

        {/* Double Feedforward Bus Wires */}
        <line
          x1="311"
          y1="33"
          x2="385"
          y2="33"
          stroke="currentColor"
          strokeWidth="0.8"
          className="stroke-foreground/60"
        />
        <line
          x1="311"
          y1="37"
          x2="385"
          y2="37"
          stroke="currentColor"
          strokeWidth="0.8"
          className="stroke-foreground/60"
        />
        <line
          x1="385"
          y1="37"
          x2="385"
          y2="130"
          stroke="currentColor"
          strokeWidth="0.8"
          className="stroke-foreground/60"
        />

        <line
          x1="311"
          y1="88"
          x2="345"
          y2="88"
          stroke="currentColor"
          strokeWidth="0.8"
          className="stroke-foreground/60"
        />
        <line
          x1="311"
          y1="92"
          x2="345"
          y2="92"
          stroke="currentColor"
          strokeWidth="0.8"
          className="stroke-foreground/60"
        />
        <line
          x1="345"
          y1="92"
          x2="345"
          y2="130"
          stroke="currentColor"
          strokeWidth="0.8"
          className="stroke-foreground/60"
        />

        {/* Gate H (Wire 2) - Solid background masks the wire underneath */}
        <rect
          x="75"
          y="74"
          width="32"
          height="32"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <text
          x="91"
          y="96"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-base"
        >
          H
        </text>

        {/* Bell CNOT Wire 2 to Wire 3 */}
        <line
          x1="135"
          y1="90"
          x2="135"
          y2="145"
          stroke="currentColor"
          strokeWidth="1.3"
          className="stroke-foreground/75"
        />
        <circle cx="135" cy="90" r="4.5" fill="currentColor" />
        <circle
          cx="135"
          cy="145"
          r="9.5"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <line
          x1="135"
          y1="137"
          x2="135"
          y2="153"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <line
          x1="127"
          y1="145"
          x2="143"
          y2="145"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        {/* Alice's Entangling CNOT Wire 1 to Wire 2 */}
        <line
          x1="185"
          y1="35"
          x2="185"
          y2="90"
          stroke="currentColor"
          strokeWidth="1.3"
          className="stroke-foreground/75"
        />
        <circle cx="185" cy="35" r="4.5" fill="currentColor" />
        <circle
          cx="185"
          cy="90"
          r="9.5"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <line
          x1="185"
          y1="82"
          x2="185"
          y2="98"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <line
          x1="177"
          y1="90"
          x2="193"
          y2="90"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        {/* Gate H (Wire 1) */}
        <rect
          x="220"
          y="19"
          width="32"
          height="32"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <text
          x="236"
          y="41"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-base"
        >
          H
        </text>

        {/* Measurements */}
        <rect
          x="275"
          y="19"
          width="36"
          height="32"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <path
          d="M 283 43 A 12 12 0 0 1 303 43"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <line
          x1="293"
          y1="43"
          x2="301"
          y2="27"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        <rect
          x="275"
          y="74"
          width="36"
          height="32"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <path
          d="M 283 98 A 12 12 0 0 1 303 98"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <line
          x1="293"
          y1="98"
          x2="301"
          y2="82"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        {/* Unitary Corrections X and Z */}
        <rect
          x="330"
          y="130"
          width="30"
          height="30"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <text
          x="345"
          y="151"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-base"
        >
          X
        </text>

        <rect
          x="370"
          y="130"
          width="30"
          height="30"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <text
          x="385"
          y="151"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-base"
        >
          Z
        </text>

        <text
          x="420"
          y="150"
          fill="currentColor"
          className="font-serif italic text-base"
        >
          |ψ⟩
        </text>
      </svg>
      <div className="mt-3 font-mono text-xs tracking-wider text-muted-foreground text-center uppercase">
        Quantum Teleportation Circuit
      </div>
    </div>
  );
}

/* ============================================================
   DIAGRAM 03: DENSITY OPERATOR MATRIX & TRANSVERSE DECAY
   ============================================================ */
function DensityMatrixDiagram() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-3 opacity-90 transition-opacity hover:opacity-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Clean Density Matrix using proper HTML <sup> exponents */}
        <div className="flex items-center space-x-3 font-serif text-lg text-foreground">
          <span className="italic font-medium">ρ =</span>
          <div className="border-l-2 border-r-2 border-foreground/70 px-4 py-2">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-center text-sm md:text-base">
              <div>
                <span className="italic">
                  |α|<sup>2</sup>
                </span>
                <div className="font-mono text-[10px] text-muted-foreground">ρ₀₀</div>
              </div>
              <div>
                <span className="italic">
                  αβ<sup>*</sup> e<sup>−iΔω t</sup>
                </span>
                <div className="font-mono text-[10px] text-muted-foreground">ρ₀₁</div>
              </div>
              <div>
                <span className="italic">
                  α<sup>*</sup>β e<sup>iΔω t</sup>
                </span>
                <div className="font-mono text-[10px] text-muted-foreground">ρ₁₀</div>
              </div>
              <div>
                <span className="italic">
                  |β|<sup>2</sup>
                </span>
                <div className="font-mono text-[10px] text-muted-foreground">ρ₁₁</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decoherence Envelope with SVG tspan superscripts */}
        <svg
          viewBox="0 0 320 90"
          className="w-full max-w-[300px] text-foreground"
          fill="none"
        >
          <line
            x1="30"
            y1="75"
            x2="300"
            y2="75"
            stroke="currentColor"
            strokeWidth="1.1"
            className="stroke-foreground/60"
          />
          <polygon points="306,75 296,72 296,78" fill="currentColor" />

          <line
            x1="30"
            y1="75"
            x2="30"
            y2="12"
            stroke="currentColor"
            strokeWidth="1.1"
            className="stroke-foreground/60"
          />
          <polygon points="30,6 27,16 33,16" fill="currentColor" />

          <path
            d="M 30 20 Q 55 25 75 48 T 120 71 T 165 73 T 215 74.5 L 285 75"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M 30 20 Q 110 38 285 75"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeDasharray="3 3"
            className="stroke-foreground/50"
          />

          <text x="300" y="88" fill="currentColor" className="font-serif italic text-xs">
            t
          </text>
          <text x="10" y="18" fill="currentColor" className="font-serif italic text-xs">
            |ρ₀₁|
          </text>
          <text x="165" y="36" fill="currentColor" className="font-serif italic text-xs">
            e<tspan dy="-5" fontSize="9">−t/T₂*</tspan>
          </text>
        </svg>
      </div>

      <div className="mt-3 font-mono text-xs tracking-wider text-muted-foreground text-center uppercase">
        Density Matrix & Dephasing
      </div>
    </div>
  );
}

/* ============================================================
   DIAGRAM 04: GROVER AMPLIFICATION
   ============================================================ */
function GroverDiagram() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-3 opacity-90 transition-opacity hover:opacity-100">
      <svg
        viewBox="0 0 520 185"
        className="w-full max-w-[480px] overflow-visible text-foreground"
        fill="none"
      >
        {/* Input Register State */}
        <text
          x="12"
          y="66"
          fill="currentColor"
          className="font-serif text-base"
        >
          <tspan fontStyle="italic">|0⟩</tspan>
          <tspan dy="-6" fontSize="11" fontStyle="italic">⊗n</tspan>
        </text>

        {/* Main Continuous Quantum Wire */}
        <line
          x1="68"
          y1="60"
          x2="480"
          y2="60"
          stroke="currentColor"
          strokeWidth="1.3"
          className="stroke-foreground/75"
        />

        {/* Multi-qubit Bus Slash */}
        <line
          x1="86"
          y1="52"
          x2="94"
          y2="68"
          stroke="currentColor"
          strokeWidth="1.3"
          className="stroke-foreground/80"
        />
        <text
          x="95"
          y="48"
          fill="currentColor"
          className="font-serif italic text-xs"
        >
          n
        </text>

        {/* Gate: H^⊗n with opaque background fill to mask wire */}
        <rect
          x="115"
          y="38"
          width="48"
          height="44"
          rx="3"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <text
          x="139"
          y="66"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-base"
        >
          <tspan fontStyle="normal">H</tspan>
          <tspan dy="-6" fontSize="11" fontStyle="italic">⊗n</tspan>
        </text>

        {/* Oracle Gate: U_ω with opaque background fill */}
        <rect
          x="185"
          y="32"
          width="68"
          height="56"
          rx="3"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.4"
        />
        <text
          x="219"
          y="67"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-lg"
        >
          <tspan fontStyle="italic">U</tspan>
          <tspan dy="4" fontSize="12" fontStyle="italic">ω</tspan>
        </text>

        {/* Diffusion Operator with opaque background fill */}
        <rect
          x="275"
          y="32"
          width="118"
          height="56"
          rx="3"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.4"
        />
        <text
          x="334"
          y="67"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-base"
        >
          2|s⟩⟨s| − I
        </text>

        {/* Measurement Box with opaque background fill */}
        <rect
          x="418"
          y="40"
          width="40"
          height="40"
          rx="3"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.3"
        />
        <path
          d="M 426 71 A 14 14 0 0 1 450 71"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <line
          x1="438"
          y1="71"
          x2="448"
          y2="51"
          stroke="currentColor"
          strokeWidth="1.3"
        />

        {/* Repetition Bracket */}
        <path
          d="M 185 98 C 185 108, 269 108, 269 118 C 269 108, 393 108, 393 98"
          stroke="currentColor"
          strokeWidth="1.1"
          fill="none"
          className="stroke-foreground/60"
        />
        <text
          x="289"
          y="140"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif italic text-sm text-foreground/80"
        >
          Repeat R ≈ (π/4)√N times
        </text>
      </svg>
      <div className="mt-2 font-mono text-xs tracking-wider text-muted-foreground text-center uppercase">
        Grover Search Circuit
      </div>
    </div>
  );
}

function QuantumVisual({ type }: { type: ScheduleDay["visual"] }) {
  switch (type) {
    case "bloch":
      return <BlochSphereDiagram />;
    case "circuit":
      return <TeleportationDiagram />;
    case "state":
      return <DensityMatrixDiagram />;
    case "grover":
      return <GroverDiagram />;
  }
}

/* ============================================================
   MAIN SCHEDULE COMPONENT
   ============================================================ */
export function Schedule() {
  return (
    <section id="schedule" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background Hero Asset Layer without any synthetic grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6">
        {/* HEADER */}
        <div className="mb-20">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
              Symposium Syllabus
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Event Schedule
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Four days of workshops, keynote lectures, and panel discussions.
              </p>
            </div>

            <div className="shrink-0 rounded-full border border-border/80 bg-muted/20 px-4 py-2 font-mono text-xs tracking-wider text-muted-foreground backdrop-blur-sm">
              09 – 12 OCTOBER 2026
            </div>
          </div>
        </div>

        {/* DAYS & VISUALS */}
        <div className="space-y-16 md:space-y-24">
          {scheduleData.map((day, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={day.number}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                {/* TIMELINE LIST */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-6 md:p-8 backdrop-blur-sm shadow-sm">
                    {/* Background Index Number */}
                    <div className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[120px] font-bold leading-none text-muted-foreground/[0.04]">
                      {day.number}
                    </div>

                    {/* Day Header */}
                    <div className="relative mb-6 flex items-center justify-between border-b border-border/60 pb-4">
                      <div>
                        <div className="font-mono text-xs font-medium text-primary">
                          DAY {day.number}
                        </div>
                        <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                          {day.date}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground uppercase">
                        {day.weekday}
                      </span>
                    </div>

                    {/* Events List */}
                    <div className="divide-y divide-border/40">
                      {day.events.map((event) => (
                        <div
                          key={event.title}
                          className="flex flex-col justify-between gap-3 py-4 sm:flex-row sm:items-center sm:gap-6"
                        >
                          <div className="space-y-1 sm:max-w-[78%]">
                            <div className="font-mono text-xs text-muted-foreground">
                              {event.time}
                            </div>
                            <div className="text-base font-semibold text-foreground md:text-lg">
                              {event.title}
                            </div>
                          </div>

                          <div className="shrink-0">
                            <EventBadge type={event.type} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SCHEMATIC PANEL */}
                <div
                  className={`flex items-center justify-center lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="w-full rounded-2xl border border-border/50 bg-card/25 p-5 backdrop-blur-sm shadow-sm transition-colors hover:border-border/80">
                    <QuantumVisual type={day.visual} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-20 border-t border-border/60 pt-6 flex flex-col sm:flex-row justify-between gap-4 font-mono text-xs text-muted-foreground">
          <span>PROGRAMME NOTE: SCHEDULE FOLLOWS IST (UTC+5:30)</span>
          <span>SUBJECT TO MODIFICATION BY THE ORGANIZING COMMITTEE</span>
        </div>
      </div>
    </section>
  );
}
