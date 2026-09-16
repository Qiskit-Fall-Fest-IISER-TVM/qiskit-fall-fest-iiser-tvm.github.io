import { useState } from "react";
import { Mail, MapPin, Send, ExternalLink } from "lucide-react";
import bgImage from "@/assets/Hero_1_without_title.png";

const TARGET_EMAIL = "qiskitfallfest2026@iisertvm.ac.in";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} - Qiskit Fall Fest 2026`
    );
    const bodyContent = encodeURIComponent(
      `Sender: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${TARGET_EMAIL}?subject=${mailSubject}&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-background py-20 md:py-28">
      {/* Background Hero Asset Layer without any synthetic grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
              Get in Touch
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Contact & Enquiries
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Have questions regarding symposium modules, technical sessions, or logistics? Reach out to the IISER TVM organizing committee.
          </p>
        </div>

        {/* 3:2 Split Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
          {/* ==================== LEFT PANEL: 3/5 (Details + Form) ==================== */}
          <div className="space-y-8 lg:col-span-3">
            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-card/35 p-5 backdrop-blur-sm shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                      Official Email
                    </div>
                    <a
                      href={`mailto:${TARGET_EMAIL}`}
                      className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 mt-0.5"
                    >
                      {TARGET_EMAIL}
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-card/35 p-5 backdrop-blur-sm shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                      Institute Address
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-foreground leading-snug mt-0.5">
                      IISER Thiruvananthapuram, Maruthamala PO, Vithura, Kerala – 695551
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Query Form */}
            <div className="rounded-2xl border border-border/70 bg-card/35 p-6 backdrop-blur-sm shadow-sm md:p-8">
              <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl mb-1">
                Direct Dispatch Form
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Completing this form will draft an official inquiry email directly to the organizing inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Richard Feynman"
                      className="w-full rounded-lg border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rfeynman@caltech.edu"
                      className="w-full rounded-lg border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Symposium participation query / travel grant / schedule"
                    className="w-full rounded-lg border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
                    Message / Query Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your detailed query or requirement here..."
                    className="w-full resize-none rounded-lg border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  Compose in Mail Client
                </button>
              </form>
            </div>
          </div>

          {/* ==================== RIGHT PANEL: 2/5 (VQE + Ferrocene Wall) ==================== */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border/70 bg-card/35 p-6 backdrop-blur-sm shadow-sm space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="font-mono text-xs font-medium text-primary uppercase tracking-wider">
                  Model Ref // VQE Architecture
                </div>
                <div className="font-serif text-xs italic text-muted-foreground">
                  ⟨H⟩(θ) = ⟨ψ(θ)|H|ψ(θ)⟩
                </div>
              </div>

              {/* Step 1: Classical to Quantum Workflow Steps */}
              <div className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Step 1: Fermionic to Qubit Mapping
                </div>
                <div className="flex items-center justify-between gap-2 text-xs font-serif italic border border-border/50 rounded-lg p-2.5 bg-background/40">
                  <span>H<sub>el</sub> = ∑ h<sub>pq</sub> a<sub>p</sub><sup>†</sup>a<sub>q</sub> + ...</span>
                  <span className="font-mono text-[10px] text-primary">Jordan-Wigner</span>
                  <span>∑ c<sub>i</sub> P<sub>i</sub></span>
                </div>
              </div>

              {/* Step 2: Parameterized Ansatz Circuit */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Step 2: Parameterized Unitary Circuit U(θ)
                </div>
                <VQECircuit />
              </div>

              {/* Step 3: Ferrocene Molecule 3D Model Target */}
              <div className="border-t border-border/40 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Electronic Target: Ferrocene Fe(C₅H₅)₂
                  </span>
                  <span className="font-mono text-[10px] text-primary">D<sub>5d</sub> Symmetry</span>
                </div>
                <Ferrocene3D />
                <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground pt-1">
                  <span>Active Space: (10e, 10o)</span>
                  <span>Ground State: E₀ ≈ −1650.32 Ha</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-border/60 pt-6 flex flex-col sm:flex-row justify-between gap-3 font-mono text-xs text-muted-foreground">
          <span>IISER THIRUVANANTHAPURAM · SCHOOL OF PHYSICS</span>
          <span>CO-HOSTED WITH IBM QUANTUM</span>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   PARAMETERIZED VQE QUANTUM CIRCUIT (STATIC & CLEAN)
   Solid background masks on boxes prevent wire lines from showing through
===================================================================== */
function VQECircuit() {
  const rowY = [28, 68];
  const wireStart = 40;
  const wireEnd = 300;

  return (
    <div className="flex w-full flex-col items-center justify-center opacity-95">
      <svg viewBox="0 0 320 100" className="w-full max-w-[310px] text-foreground" fill="none">
        {/* Continuous Qubit Wires */}
        {rowY.map((y, i) => (
          <g key={`wire-${i}`}>
            <text x={8} y={y + 4} fill="currentColor" className="font-serif italic text-xs">
              |0⟩
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

        {/* CNOT between q0 and q1 */}
        <line
          x1={140}
          y1={rowY[0]}
          x2={140}
          y2={rowY[1]}
          stroke="currentColor"
          strokeWidth={1.2}
          className="stroke-foreground/75"
        />
        <circle cx={140} cy={rowY[0]} r={3.5} fill="currentColor" />
        <circle
          cx={140}
          cy={rowY[1]}
          r={7.5}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <line x1={140} y1={rowY[1] - 5} x2={140} y2={rowY[1] + 5} stroke="currentColor" strokeWidth={1.2} />
        <line x1={135} y1={rowY[1]} x2={145} y2={rowY[1]} stroke="currentColor" strokeWidth={1.2} />

        {/* First Rotation Layer R_y(θ₁) and R_y(θ₂) */}
        <rect
          x={65}
          y={rowY[0] - 12}
          width={45}
          height={24}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <text x={87} y={rowY[0] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-[11px]">
          R<sub>y</sub>(θ₁)
        </text>

        <rect
          x={65}
          y={rowY[1] - 12}
          width={45}
          height={24}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <text x={87} y={rowY[1] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-[11px]">
          R<sub>y</sub>(θ₂)
        </text>

        {/* Second Rotation Layer R_z(θ₃) */}
        <rect
          x={165}
          y={rowY[1] - 12}
          width={45}
          height={24}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <text x={187} y={rowY[1] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-[11px]">
          R<sub>z</sub>(θ₃)
        </text>

        {/* Pauli Measurement Detectors */}
        <rect
          x={235}
          y={rowY[0] - 13}
          width={28}
          height={26}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <path d="M 241 33 A 8 8 0 0 1 257 33" stroke="currentColor" strokeWidth={1} />
        <line x1={249} y1={33} x2={255} y2={21} stroke="currentColor" strokeWidth={1.2} />

        <rect
          x={235}
          y={rowY[1] - 13}
          width={28}
          height={26}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <path d="M 241 73 A 8 8 0 0 1 257 73" stroke="currentColor" strokeWidth={1} />
        <line x1={249} y1={73} x2={255} y2={61} stroke="currentColor" strokeWidth={1.2} />

        <text x={275} y={rowY[0] + 4} fill="currentColor" className="font-serif italic text-xs">
          Z₁
        </text>
        <text x={275} y={rowY[1] + 4} fill="currentColor" className="font-serif italic text-xs">
          Z₂
        </text>
      </svg>
    </div>
  );
}

/* =====================================================================
   FERROCENE Fe(C5H5)2 3D ISOMETRIC SANDWICH MODEL
   Features coordinate bonding, cyclopentadienyl rings, and Fe center
===================================================================== */
function Ferrocene3D() {
  return (
    <div className="w-full flex justify-center py-2">
      <svg
        viewBox="0 0 320 200"
        className="w-full max-w-[280px] overflow-visible"
        fill="none"
      >
        <defs>
          <radialGradient id="feGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="60%" stopColor="#d97706" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="ringTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="ringBottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Coordinate Bonds from Fe(II) center to Lower Ring */}
        <line x1="160" y1="100" x2="120" y2="148" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <line x1="160" y1="100" x2="145" y2="168" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <line x1="160" y1="100" x2="185" y2="168" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <line x1="160" y1="100" x2="200" y2="148" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <line x1="160" y1="100" x2="160" y2="135" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

        {/* Lower Cyclopentadienyl Ring (C5H5) - Staggered */}
        <polygon
          points="160,135 120,148 145,168 185,168 200,148"
          fill="url(#ringBottom)"
          stroke="#0284c7"
          strokeWidth="1.8"
          fillOpacity="0.25"
        />
        {/* Carbon Atoms (Lower) */}
        {[
          [160, 135],
          [120, 148],
          [145, 168],
          [185, 168],
          [200, 148],
        ].map(([cx, cy], i) => (
          <circle key={`c-bot-${i}`} cx={cx} cy={cy} r="4" fill="#38bdf8" stroke="#0c4a6e" strokeWidth="1.2" />
        ))}
        {/* Ring Delocalized Circle (Lower) */}
        <ellipse cx="162" cy="154" rx="24" ry="10" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.7" />

        {/* Coordinate Bonds from Fe(II) center to Upper Ring */}
        <line x1="160" y1="100" x2="160" y2="65" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.9" />
        <line x1="160" y1="100" x2="125" y2="52" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.9" />
        <line x1="160" y1="100" x2="140" y2="32" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.9" />
        <line x1="160" y1="100" x2="180" y2="32" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.9" />
        <line x1="160" y1="100" x2="195" y2="52" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.9" />

        {/* Central Iron Atom Fe(II) with Realistic Core */}
        <circle cx="160" cy="100" r="13" fill="url(#feGlow)" stroke="#78350f" strokeWidth="1.5" />
        <text x="160" y="104" textAnchor="middle" fill="#ffffff" className="font-sans font-bold text-[10px]">
          Fe²⁺
        </text>

        {/* Upper Cyclopentadienyl Ring (C5H5) */}
        <polygon
          points="160,65 125,52 140,32 180,32 195,52"
          fill="url(#ringTop)"
          stroke="#38bdf8"
          strokeWidth="1.8"
          fillOpacity="0.3"
        />
        {/* Carbon Atoms (Upper) */}
        {[
          [160, 65],
          [125, 52],
          [140, 32],
          [180, 32],
          [195, 52],
        ].map(([cx, cy], i) => (
          <circle key={`c-top-${i}`} cx={cx} cy={cy} r="4" fill="#7dd3fc" stroke="#0369a1" strokeWidth="1.2" />
        ))}
        {/* Ring Delocalized Circle (Upper) */}
        <ellipse cx="160" cy="46" rx="24" ry="10" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.8" />

        {/* Molecular Axis Notation */}
        <line x1="240" y1="40" x2="240" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-muted-foreground/60" />
        <polygon points="240,34 237,42 243,42" fill="currentColor" className="text-muted-foreground/60" />
        <text x="248" y="102" fill="currentColor" className="font-mono text-[10px] text-muted-foreground">
          η⁵-axis
        </text>
      </svg>
    </div>
  );
}
