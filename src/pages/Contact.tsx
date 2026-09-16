import { useState } from "react";
import { AlertCircle, CheckCircle2, ExternalLink, Loader2, Mail, MapPin, Send } from "lucide-react";
import bgImage from "@/assets/Hero_1_without_title.png";

const TARGET_EMAIL = "qiskitfallfest2026@iisertvm.ac.in";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Feedback or query from ${formData.name} – Qiskit Fall Fest 2026`,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-background py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-foreground" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground">Get in touch</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">Contact &amp; Enquiries</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Have questions regarding symposium modules, technical sessions, or logistics? Reach out to the IISER TVM organizing committee.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ContactCard icon={<Mail className="h-4 w-4" />} label="Official email">
                <a href={`mailto:${TARGET_EMAIL}`} className="mt-0.5 flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-foreground/70 sm:text-sm">
                  {TARGET_EMAIL} <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </ContactCard>
              <ContactCard icon={<MapPin className="h-4 w-4" />} label="Institute address">
                <p className="mt-0.5 text-xs font-medium leading-snug text-foreground sm:text-sm">
                  IISER Thiruvananthapuram, Maruthamala PO, Vithura, Kerala – 695551
                </p>
              </ContactCard>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/35 p-6 shadow-sm backdrop-blur-sm md:p-8">
              <h3 className="mb-6 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Write your feedback or queries
              </h3>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card/50 py-10 text-center">
                  <CheckCircle2 className="h-8 w-8 text-foreground" />
                  <p className="text-sm font-semibold text-foreground">Message sent successfully.</p>
                  <p className="max-w-xs text-xs text-muted-foreground">The organizing committee will respond via email shortly.</p>
                  <button type="button" onClick={() => setStatus("idle")} className="mt-2 font-mono text-xs uppercase tracking-wider text-foreground hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FieldLabel label="Your name *">
                      <input type="text" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Quanta" className={inputClassName} />
                    </FieldLabel>
                    <FieldLabel label="Your email *">
                      <input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="quanta@nowhere.com" className={inputClassName} />
                    </FieldLabel>
                  </div>
                  <FieldLabel label="Subject">
                    <input type="text" value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} placeholder="Where is my entangled pair?" className={inputClassName} />
                  </FieldLabel>
                  <FieldLabel label="Your feedback or query *">
                    <textarea rows={4} required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="I seem to be in a superposition of questions…" className={`${inputClassName} resize-none`} />
                  </FieldLabel>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-xs text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Something went wrong sending your message. Please try again, or email us directly.
                    </div>
                  )}

                  <button type="submit" disabled={status === "sending"} className="inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 text-xs font-semibold uppercase tracking-wider text-background shadow-md transition-all hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60">
                    {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Send message</>}
                  </button>
                </form>
              )}
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-border/70 bg-card/35 p-5 shadow-sm backdrop-blur-sm md:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-border/40 pb-3">
                <span className="text-sm font-medium uppercase tracking-wider text-foreground" style={{ fontFamily: latexTextFont }}>VQE in context</span>
                <span className="text-sm italic text-muted-foreground" style={mathTextStyle}>E(θ) → min</span>
              </div>
              <VQEWorkflow />
            </div>
          </aside>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
          <span>IISER THIRUVANANTHAPURAM · SCHOOL OF PHYSICS</span>
          <span>CO-HOSTED WITH IBM QUANTUM</span>
        </div>
      </div>
    </section>
  );
}

const inputClassName = "w-full rounded-lg border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground";

function FieldLabel({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground"><span className="mb-1.5 block">{label}</span>{children}</label>;
}

function ContactCard({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/35 p-5 shadow-sm backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-muted/40 text-foreground">{icon}</div>
        <div><div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>{children}</div>
      </div>
    </div>
  );
}

const latexTextFont = '"Latin Modern Roman", "Computer Modern Serif", "STIX Two Text", Georgia, serif';
const latexMathFont = '"Latin Modern Math", "Computer Modern Serif", "STIX Two Math", "Cambria Math", serif';
const mathTextStyle = { fontFamily: latexMathFont, fontStyle: "italic" as const };

/** Complete B&W monochrome VQE loop with colored Ferrocene anchor */
function VQEWorkflow() {
  return (
    <svg viewBox="0 0 440 760" className="mx-auto block w-full max-w-[410px] overflow-visible text-foreground" fill="none" aria-label="Variational quantum eigensolver workflow for ferrocene" style={{ fontFamily: latexTextFont }}>
      <defs>
        <filter id="vqe-shadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.18" />
        </filter>
        <radialGradient id="iron-core" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="55%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#92400e" />
        </radialGradient>
        <linearGradient id="ring-surface" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#0369a1" stopOpacity="0.35" />
        </linearGradient>
        <marker id="arrow-bw" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 z" className="fill-foreground" />
        </marker>
        <marker id="arrow-muted-bw" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 z" className="fill-muted-foreground" />
        </marker>
      </defs>

      {/* Target Molecule Header */}
      <text x="220" y="18" textAnchor="middle" className="fill-muted-foreground text-[12px] uppercase tracking-[0.18em]">Molecular target</text>
      
      {/* Ferrocene (Colored & Stretched Horizontally) */}
      <FerroceneMolecule />
      
      <text x="220" y="204" textAnchor="middle" className="fill-foreground text-[18px] font-semibold" style={mathTextStyle}>Ferrocene · Fe(C₅H₅)₂</text>
      <text x="220" y="224" textAnchor="middle" className="fill-muted-foreground text-[12px]">Its electronic structure is the ground-state target.</text>

      {/* Step 1: Encode */}
      <path d="M220 234V246" className="stroke-foreground" strokeWidth="1.6" markerEnd="url(#arrow-bw)" />
      <rect x="24" y="256" width="392" height="70" rx="10" className="fill-background/90 stroke-foreground/70" strokeWidth="1.2" />
      <text x="38" y="276" className="fill-muted-foreground text-[11px] uppercase tracking-wider">1 · Encode molecule</text>
      
      {/* Clean inline notation without dropped subscripts */}
      <text x="38" y="304" className="fill-foreground text-[15px]" style={mathTextStyle}>H(Fe(C₅H₅)₂)</text>
      
      <path d="M152 299H198" className="stroke-foreground" strokeWidth="1.4" markerEnd="url(#arrow-bw)" />
      <text x="175" y="289" textAnchor="middle" className="fill-foreground text-[10px]">Jordan–Wigner</text>
      <text x="208" y="304" className="fill-foreground text-[16px]" style={mathTextStyle}>∑</text>
      <text x="216" y="309" className="fill-foreground text-[10px]" style={mathTextStyle}>i</text>
      <text x="224" y="304" className="fill-foreground text-[15px]" style={mathTextStyle}>cᵢPᵢ</text>
      
      {/* Replaced boundary-overflowing label */}
      <text x="260" y="303" className="fill-muted-foreground text-[10px] tracking-tight">Jordan–Wigner rep.</text>

      {/* Step 2: Quantum Processor */}
      <path d="M220 326V339" className="stroke-foreground" strokeWidth="1.6" markerEnd="url(#arrow-bw)" />
      <rect x="24" y="348" width="392" height="220" rx="12" className="fill-background/60 stroke-foreground/50" strokeWidth="1.2" />
      <text x="44" y="374" className="fill-foreground text-[11px] uppercase tracking-wider">2 · Quantum processor · U(θ)</text>
      <text x="44" y="391" className="fill-muted-foreground text-[12px]">Parameterized ansatz prepares |ψ(θ)⟩.</text>
      <text x="44" y="406" className="fill-muted-foreground text-[12px]">Each qubit is then measured.</text>

      {/* Circuit Rows (Black and White) */}
      <CircuitRow y={436} label="q₀" gates={[{ x: 135, label: "Rʏ(θ₁)" }, { x: 260, label: "Rᴢ(θ₄)" }]} />
      <CircuitRow y={480} label="q₁" gates={[{ x: 135, label: "Rʏ(θ₂)" }, { x: 260, label: "Rᴢ(θ₅)" }]} />
      <CircuitRow y={524} label="q₂" gates={[{ x: 135, label: "Rʏ(θ₃)" }, { x: 260, label: "Rᴢ(θ₆)" }]} />
      
      {/* CNOT Entanglement Wire */}
      <line x1="210" y1="436" x2="210" y2="480" className="stroke-foreground" strokeWidth="1.4" />
      <circle cx="210" cy="436" r="3.5" className="fill-foreground" />
      <circle cx="210" cy="480" r="7.5" className="fill-background stroke-foreground" strokeWidth="1.4" />
      <path d="M205 480h10M210 475v10" className="stroke-foreground" strokeWidth="1.4" />
      <line x1="210" y1="480" x2="210" y2="524" className="stroke-foreground" strokeWidth="1.4" />
      <circle cx="210" cy="524" r="3.5" className="fill-foreground" />
      <text x="210" y="556" textAnchor="middle" className="fill-muted-foreground text-[10px] uppercase font-mono">entangle</text>

      {/* Step 3: Measure Energy */}
      <path d="M365 436v88" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M365 524V584H320" className="stroke-foreground" strokeWidth="1.6" markerEnd="url(#arrow-bw)" />
      <rect x="230" y="584" width="165" height="60" rx="10" className="fill-background/90 stroke-foreground/70" strokeWidth="1.2" />
      <text x="245" y="608" className="fill-foreground text-[11px] uppercase tracking-wider">3 · Measure energy</text>
      <text x="245" y="629" className="fill-foreground text-[16px]" style={mathTextStyle}>E(θ) = ⟨H⟩</text>

      {/* Step 4: Classical Optimizer Loop */}
      <path d="M230 614H205" className="stroke-muted-foreground" strokeWidth="1.4" markerEnd="url(#arrow-muted-bw)" />
      <rect x="35" y="584" width="160" height="92" rx="10" className="fill-background/90 stroke-foreground/70" strokeWidth="1.2" />
      <text x="50" y="608" className="fill-foreground text-[11px] uppercase tracking-wider">4 · Optimizer</text>
      <text x="50" y="630" className="fill-foreground text-[15px]" style={mathTextStyle}>minimize E(θ)</text>
      <text x="50" y="652" className="fill-muted-foreground text-[11px]" style={mathTextStyle}>update θ₁ … θ₆</text>

      {/* Feedback Arrow */}
      <path d="M115 676V710H16V415H36" className="stroke-foreground" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#arrow-bw)" />
      <rect x="45" y="684" width="140" height="18" rx="6" className="fill-background stroke-foreground/40" />
      <text x="115" y="697" textAnchor="middle" className="fill-foreground text-[11px]" style={mathTextStyle}>updated parameters θ</text>
      <text x="220" y="742" textAnchor="middle" className="fill-muted-foreground text-[11px]">Repeat until the ferrocene ground-state energy converges.</text>
    </svg>
  );
}

function CircuitRow({ y, label, gates }: { y: number; label: string; gates: { x: number; label: string }[] }) {
  return (
    <g>
      <text x="44" y={y + 5} className="fill-muted-foreground text-[13px]" style={mathTextStyle}>{label}</text>
      <line x1="68" y1={y} x2="368" y2={y} className="stroke-foreground" strokeWidth="1.3" opacity="0.75" />
      {gates.map((gate) => (
        <g key={`${label}-${gate.x}`}>
          <rect x={gate.x - 28} y={y - 15} width="56" height="30" rx="3" className="fill-background stroke-foreground" strokeWidth="1.3" />
          <text x={gate.x} y={y + 4} textAnchor="middle" className="fill-foreground text-[11px]" style={mathTextStyle}>{gate.label}</text>
        </g>
      ))}
      <rect x="345" y={y - 14} width="26" height="28" rx="2" className="fill-background stroke-foreground" strokeWidth="1.3" />
      <path d={`M350 ${y + 5}A7 7 0 0 1 366 ${y + 5}M358 ${y + 5}l5 -10`} className="stroke-foreground" strokeWidth="1.1" />
    </g>
  );
}

/** 3D Ferrocene stretched horizontally while maintaining vertical thickness */
function FerroceneMolecule() {
  // Broadened horizontally by expanding X coordinates outward
  const upper = "220,35 150,53 166,85 274,85 290,53";
  const lower = "220,133 150,151 166,183 274,183 290,151";
  const topAtoms = [[220, 35], [150, 53], [166, 85], [274, 85], [290, 53]];
  const bottomAtoms = [[220, 133], [150, 151], [166, 183], [274, 183], [290, 151]];

  return (
    <g filter="url(#vqe-shadow)">
      <ellipse cx="220" cy="109" rx="145" ry="86" className="fill-foreground/[0.02]" />
      
      {/* Coordinate Bonds */}
      {[...topAtoms, ...bottomAtoms].map(([x, y], index) => (
        <line key={index} x1="220" y1="109" x2={x} y2={y} stroke="#f59e0b" strokeWidth="1.6" opacity="0.85" />
      ))}
      
      {/* Cyclopentadienyl Rings */}
      <polygon points={upper} fill="url(#ring-surface)" stroke="#38bdf8" strokeWidth="2.2" />
      <polygon points={lower} fill="url(#ring-surface)" stroke="#38bdf8" strokeWidth="2.2" />
      
      {/* Carbon Centers */}
      {topAtoms.map(([x, y], index) => (
        <circle key={`top-${index}`} cx={x} cy={y} r="5.5" fill="#7dd3fc" stroke="#075985" strokeWidth="1.3" />
      ))}
      {bottomAtoms.map(([x, y], index) => (
        <circle key={`bottom-${index}`} cx={x} cy={y} r="5.5" fill="#38bdf8" stroke="#075985" strokeWidth="1.3" />
      ))}
      
      {/* Delocalized Aromatic Rings */}
      <ellipse cx="220" cy="61" rx="46" ry="11" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
      <ellipse cx="220" cy="159" rx="46" ry="11" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Central Iron Core */}
      <circle cx="220" cy="109" r="18" fill="url(#iron-core)" stroke="#92400e" strokeWidth="1.8" />
      <text x="220" y="114" textAnchor="middle" fill="white" className="text-[11px] font-bold" style={{ fontFamily: latexMathFont }}>Fe</text>
    </g>
  );
}
