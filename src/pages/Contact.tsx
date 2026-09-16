import { useState } from "react";
import { Mail, MapPin, Send, ExternalLink, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import bgImage from "@/assets/Hero_1_without_title.png";

const TARGET_EMAIL = "qiskitfallfest2026@iisertvm.ac.in";
// FormSubmit forwards POSTs made to this endpoint straight to TARGET_EMAIL.
// First-ever submission triggers a one-time "confirm this inbox" email — click it once and you're done.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Inquiry from ${formData.name} - Qiskit Fall Fest 2026`,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
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
                Submitting this form sends your query directly to the organizing inbox — no mail app required.
              </p>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-primary/30 bg-primary/5 py-10 text-center">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                  <p className="text-sm font-semibold text-foreground">Message sent successfully.</p>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    The organizing committee has received your query and will respond via email shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs font-mono uppercase tracking-wider text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
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

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-xs text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Something went wrong sending your message. Please try again, or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
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
   PARAMETERIZED VQE QUANTUM CIRCUIT
   Panel background + consistent stroke weights tie the gates to the wires
   so the whole thing reads as one circuit instead of floating boxes.
===================================================================== */
function VQECircuit() {
  const rowY = [30, 70];
  const wireStart = 40;
  const wireEnd = 300;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <svg viewBox="0 0 320 104" className="w-full max-w-[310px] text-foreground" fill="none">
        <defs>
          <linearGradient id="wireFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="8%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="92%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Panel backdrop unifies the circuit as one component */}
        <rect
          x={2}
          y={4}
          width={316}
          height={96}
          rx={10}
          className="fill-background/40 stroke-border/60"
          strokeWidth={1}
        />

        {/* Continuous Qubit Wires */}
        {rowY.map((y, i) => (
          <g key={`wire-${i}`}>
            <text x={12} y={y + 4} fill="currentColor" className="font-serif italic text-xs">
              |0⟩
            </text>
            <line x1={wireStart} y1={y} x2={wireEnd} y2={y} stroke="url(#wireFade)" strokeWidth={1.4} />
          </g>
        ))}

        {/* CNOT between q0 and q1 */}
        <line x1={140} y1={rowY[0]} x2={140} y2={rowY[1]} stroke="currentColor" strokeWidth={1.4} className="stroke-foreground/80" />
        <circle cx={140} cy={rowY[0]} r={3.5} fill="currentColor" />
        <circle cx={140} cy={rowY[1]} r={7.5} className="fill-background stroke-foreground/85" strokeWidth={1.4} />
        <line x1={140} y1={rowY[1] - 5} x2={140} y2={rowY[1] + 5} stroke="currentColor" strokeWidth={1.4} />
        <line x1={135} y1={rowY[1]} x2={145} y2={rowY[1]} stroke="currentColor" strokeWidth={1.4} />

        {/* First Rotation Layer R_y(θ₁) and R_y(θ₂) */}
        <rect x={65} y={rowY[0] - 13} width={45} height={26} rx={3} className="fill-background stroke-primary/70" strokeWidth={1.4} />
        <text x={87} y={rowY[0] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-[11px]">
          R<sub>y</sub>(θ₁)
        </text>

        <rect x={65} y={rowY[1] - 13} width={45} height={26} rx={3} className="fill-background stroke-primary/70" strokeWidth={1.4} />
        <text x={87} y={rowY[1] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-[11px]">
          R<sub>y</sub>(θ₂)
        </text>

        {/* Second Rotation Layer R_z(θ₃) */}
        <rect x={165} y={rowY[1] - 13} width={45} height={26} rx={3} className="fill-background stroke-primary/70" strokeWidth={1.4} />
        <text x={187} y={rowY[1] + 4} textAnchor="middle" fill="currentColor" className="font-serif text-[11px]">
          R<sub>z</sub>(θ₃)
        </text>

        {/* Pauli Measurement Detectors */}
        <rect x={235} y={rowY[0] - 14} width={28} height={28} rx={3} className="fill-background stroke-foreground/85" strokeWidth={1.4} />
        <path d={`M 241 ${rowY[0] + 5} A 8 8 0 0 1 257 ${rowY[0] + 5}`} stroke="currentColor" strokeWidth={1.1} />
        <line x1={249} y1={rowY[0] + 5} x2={255} y2={rowY[0] - 7} stroke="currentColor" strokeWidth={1.4} />

        <rect x={235} y={rowY[1] - 14} width={28} height={28} rx={3} className="fill-background stroke-foreground/85" strokeWidth={1.4} />
        <path d={`M 241 ${rowY[1] + 5} A 8 8 0 0 1 257 ${rowY[1] + 5}`} stroke="currentColor" strokeWidth={1.1} />
        <line x1={249} y1={rowY[1] + 5} x2={255} y2={rowY[1] - 7} stroke="currentColor" strokeWidth={1.4} />

        <text x={278} y={rowY[0] + 4} fill="currentColor" className="font-serif italic text-xs">
          Z₁
        </text>
        <text x={278} y={rowY[1] + 4} fill="currentColor" className="font-serif italic text-xs">
          Z₂
        </text>
      </svg>
    </div>
  );
}

/* =====================================================================
   FERROCENE Fe(C5H5)2 3D ISOMETRIC SANDWICH MODEL
   Solid gradient bonds + a soft radial backdrop bind the two rings and
   the iron center into a single connected object instead of scattered shapes.
===================================================================== */
function Ferrocene3D() {
  const feCenter = { x: 160, y: 100 };
  const lowerRing = [
    [160, 135],
    [120, 148],
    [145, 168],
    [185, 168],
    [200, 148],
  ];
  const upperRing = [
    [160, 65],
    [125, 52],
    [140, 32],
    [180, 32],
    [195, 52],
  ];

  return (
    <div className="w-full flex justify-center py-2">
      <svg viewBox="0 0 320 200" className="w-full max-w-[280px] overflow-visible" fill="none">
        <defs>
          <radialGradient id="feGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="60%" stopColor="#d97706" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="moleculeBackdrop" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="ringBottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="bondGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.35" />
          </linearGradient>
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.6" floodColor="#0f172a" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Soft backdrop disc ties the whole sandwich together visually */}
        <ellipse cx="160" cy="100" rx="130" ry="95" fill="url(#moleculeBackdrop)" />

        {/* Coordinate Bonds: Fe -> Lower Ring (solid gradient, not dashed) */}
        {lowerRing.map(([x, y], i) => (
          <line key={`bond-bot-${i}`} x1={feCenter.x} y1={feCenter.y} x2={x} y2={y} stroke="url(#bondGlow)" strokeWidth={1.6} strokeLinecap="round" opacity={0.75} />
        ))}

        {/* Lower Cyclopentadienyl Ring (C5H5) */}
        <polygon
          points={lowerRing.map(([x, y]) => `${x},${y}`).join(" ")}
          fill="url(#ringBottom)"
          stroke="#0284c7"
          strokeWidth="1.8"
          fillOpacity="0.28"
          filter="url(#softShadow)"
        />
        {lowerRing.map(([cx, cy], i) => (
          <circle key={`c-bot-${i}`} cx={cx} cy={cy} r="4.5" fill="#38bdf8" stroke="#0c4a6e" strokeWidth="1.3" filter="url(#softShadow)" />
        ))}
        <ellipse cx="162" cy="154" rx="24" ry="10" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.75" />

        {/* Coordinate Bonds: Fe -> Upper Ring */}
        {upperRing.map(([x, y], i) => (
          <line key={`bond-top-${i}`} x1={feCenter.x} y1={feCenter.y} x2={x} y2={y} stroke="url(#bondGlow)" strokeWidth={1.8} strokeLinecap="round" opacity={0.9} />
        ))}

        {/* Central Iron Atom Fe(II) */}
        <circle cx={feCenter.x} cy={feCenter.y} r="13.5" fill="url(#feGlow)" stroke="#78350f" strokeWidth="1.5" filter="url(#softShadow)" />
        <text x={feCenter.x} y={feCenter.y + 4} textAnchor="middle" fill="#fff" className="font-sans font-bold text-[10px]">
          Fe²⁺
        </text>

        {/* Upper Cyclopentadienyl Ring (C5H5) */}
        <polygon
          points={upperRing.map(([x, y]) => `${x},${y}`).join(" ")}
          fill="url(#ringTop)"
          stroke="#38bdf8"
          strokeWidth="1.8"
          fillOpacity="0.32"
          filter="url(#softShadow)"
        />
        {upperRing.map(([cx, cy], i) => (
          <circle key={`c-top-${i}`} cx={cx} cy={cy} r="4.5" fill="#7dd3fc" stroke="#0369a1" strokeWidth="1.3" filter="url(#softShadow)" />
        ))}
        <ellipse cx="160" cy="46" rx="24" ry="10" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.85" />

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
