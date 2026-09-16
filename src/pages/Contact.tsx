import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import bgImage from "@/assets/Hero_1_without_title.png";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to your backend/form handler here
    setSubmitted(true);
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
            Have questions regarding sessions, participation, or logistics? Reach out to the organizing team.
          </p>
        </div>

        {/* 3:2 Split Grid Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
          {/* ==================== LEFT PANEL: 3/5 (Details + Form) ==================== */}
          <div className="space-y-8 lg:col-span-3">
            {/* Quick Details */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Email Card */}
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
                      href="mailto:qiskitfallfest2026@iisertvm.ac.in"
                      className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      qiskitfallfest2026@iisertvm.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Venue Card */}
              <div className="rounded-2xl border border-border/70 bg-card/35 p-5 backdrop-blur-sm shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                      Institute Address
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                      IISER Thiruvananthapuram, Maruthamala PO, Vithura, Kerala – 695551
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Query Form */}
            <div className="rounded-2xl border border-border/70 bg-card/35 p-6 backdrop-blur-sm shadow-sm md:p-8">
              <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl mb-1">
                Send a Query
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Fill in the details below and we will get back to you promptly.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary mb-3" />
                  <h4 className="text-base font-semibold text-foreground">Message Received</h4>
                  <p className="text-xs text-muted-foreground mt-1 max-w-sm">
                    Thank you for reaching out. The Qiskit Fall Fest 2026 team will respond to your registered email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 font-mono text-xs text-primary underline underline-offset-4 hover:opacity-80"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
                        Full Name *
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.edu"
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
                      placeholder="Workshop participation, schedule question, etc."
                      className="w-full rounded-lg border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query or question here..."
                      className="w-full resize-none rounded-lg border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Submit Query
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ==================== RIGHT PANEL: 2/5 (VQE Pipeline & Wall) ==================== */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border/70 bg-card/35 p-6 backdrop-blur-sm shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-border/40 pb-3">
                <div className="font-mono text-xs font-medium text-primary uppercase tracking-wider">
                  Algorithm // VQE Loop
                </div>
                <div className="font-serif text-xs italic text-muted-foreground">
                  ⟨H⟩(θ) = ⟨ψ(θ)|H|ψ(θ)⟩
                </div>
              </div>

              {/* VQE Schematic Canvas */}
              <VQESchematic />

              {/* Mathematical context notes */}
              <div className="mt-5 space-y-2 border-t border-border/40 pt-4 font-mono text-[11px] text-muted-foreground">
                <div className="flex justify-between">
                  <span>GROUND STATE ENERGY</span>
                  <span className="text-foreground">E₀ ≤ ⟨ψ(θ)|H|ψ(θ)⟩</span>
                </div>
                <div className="flex justify-between">
                  <span>OPTIMIZATION METHOD</span>
                  <span>SPSA / COBYLA</span>
                </div>
                <div className="flex justify-between">
                  <span>NISQ APPLICATION</span>
                  <span>Molecular Electronic States</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 border-t border-border/60 pt-6 flex flex-col sm:flex-row justify-between gap-3 font-mono text-xs text-muted-foreground">
          <span>IISER THIRUVANANTHAPURAM · SCHOOL OF PHYSICS</span>
          <span>CO-HOSTED WITH IBM QUANTUM</span>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   STATIC VQE (VARIATIONAL QUANTUM EIGENSOLVER) PIPELINE & CIRCUIT
   - Solid gate fills block pass-through wire lines cleanly
   - Closed-loop hybrid quantum-classical parameter update loop
===================================================================== */
function VQESchematic() {
  const rowY = [35, 75];
  const wireStart = 45;
  const wireEnd = 310;

  return (
    <div className="flex w-full flex-col items-center justify-center opacity-90 transition-opacity hover:opacity-100">
      <svg
        viewBox="0 0 350 250"
        className="w-full max-w-[340px] text-foreground"
        fill="none"
      >
        {/* Continuous Quantum Wires */}
        {rowY.map((y, i) => (
          <g key={`wire-${i}`}>
            <text
              x={8}
              y={y + 4}
              fill="currentColor"
              className="font-serif italic text-sm"
            >
              {`|0⟩`}
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
        <line x1={140 - 5} y1={rowY[1]} x2={140 + 5} y2={rowY[1]} stroke="currentColor" strokeWidth={1.2} />

        {/* Parameterized Single Qubit Rotations R_y(θ₁) and R_y(θ₂) */}
        <rect
          x={65}
          y={rowY[0] - 13}
          width={45}
          height={26}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <text
          x={87}
          y={rowY[0] + 4}
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-xs"
        >
          R_y(θ₁)
        </text>

        <rect
          x={65}
          y={rowY[1] - 13}
          width={45}
          height={26}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <text
          x={87}
          y={rowY[1] + 4}
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-xs"
        >
          R_y(θ₂)
        </text>

        {/* Second Rotation Stage R_z(θ₃) */}
        <rect
          x={165}
          y={rowY[1] - 13}
          width={45}
          height={26}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <text
          x={187}
          y={rowY[1] + 4}
          textAnchor="middle"
          fill="currentColor"
          className="font-serif text-xs"
        >
          R_z(θ₃)
        </text>

        {/* Hamiltonian Pauli Basis Measurements ⟨H⟩ */}
        <rect
          x={235}
          y={rowY[0] - 15}
          width={30}
          height={30}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <path d="M 241 40 A 10 10 0 0 1 259 40" stroke="currentColor" strokeWidth={1} />
        <line x1={250} y1={40} x2={256} y2={27} stroke="currentColor" strokeWidth={1.2} />

        <rect
          x={235}
          y={rowY[1] - 15}
          width={30}
          height={30}
          rx={2}
          className="fill-background stroke-foreground/80"
          strokeWidth={1.2}
        />
        <path d="M 241 80 A 10 10 0 0 1 259 80" stroke="currentColor" strokeWidth={1} />
        <line x1={250} y1={80} x2={256} y2={67} stroke="currentColor" strokeWidth={1.2} />

        <text x={280} y={rowY[0] + 4} fill="currentColor" className="font-serif italic text-xs">
          Z₁
        </text>
        <text x={280} y={rowY[1] + 4} fill="currentColor" className="font-serif italic text-xs">
          Z₂
        </text>

        {/* Classical Feedforward Loop Line Down */}
        <path
          d="M 295 55 L 320 55 L 320 170 L 260 170"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeDasharray="3 3"
          className="stroke-foreground/60"
        />
        <polygon points="260,170 268,166 268,174" fill="currentColor" />

        {/* Classical Optimizer Box */}
        <rect
          x="120"
          y="150"
          width="135"
          height="40"
          rx="4"
          className="fill-background stroke-foreground/80"
          strokeWidth="1.2"
        />
        <text
          x="187"
          y="167"
          textAnchor="middle"
          fill="currentColor"
          className="font-mono text-[10px] uppercase font-semibold"
        >
          Classical Optimizer
        </text>
        <text
          x="187"
          y="180"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif italic text-[10px] text-muted-foreground"
        >
          min_θ ⟨ψ(θ)|H|ψ(θ)⟩
        </text>

        {/* Parameter Feedback Loop Up to Ansatz */}
        <path
          d="M 120 170 L 40 170 L 40 115 L 87 115 L 87 95"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeDasharray="3 3"
          className="stroke-foreground/60"
        />
        <polygon points="87,93 83,101 91,101" fill="currentColor" />

        <text
          x="48"
          y="140"
          fill="currentColor"
          className="font-mono text-[9px] text-primary"
        >
          θ ← θ − η∇E
        </text>
      </svg>
      <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground text-center">
        Variational Quantum Eigensolver (VQE)
      </div>
    </div>
  );
}
