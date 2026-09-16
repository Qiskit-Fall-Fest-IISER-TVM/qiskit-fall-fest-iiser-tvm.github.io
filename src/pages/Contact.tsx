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
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">Get in touch</span>
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
                <a href={`mailto:${TARGET_EMAIL}`} className="mt-0.5 flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-primary sm:text-sm">
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
              {/* Deliberately the only heading in the form card. */}
              <h3 className="mb-6 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Write your feedback or queries
              </h3>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-primary/30 bg-primary/5 py-10 text-center">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                  <p className="text-sm font-semibold text-foreground">Message sent successfully.</p>
                  <p className="max-w-xs text-xs text-muted-foreground">The organizing committee will respond via email shortly.</p>
                  <button type="button" onClick={() => setStatus("idle")} className="mt-2 font-mono text-xs uppercase tracking-wider text-primary hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FieldLabel label="Your name *">
                      <input type="text" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Richard Feynman" className={inputClassName} />
                    </FieldLabel>
                    <FieldLabel label="Your email *">
                      <input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="rfeynman@caltech.edu" className={inputClassName} />
                    </FieldLabel>
                  </div>
                  <FieldLabel label="Subject">
                    <input type="text" value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} placeholder="Participation, travel grant, schedule…" className={inputClassName} />
                  </FieldLabel>
                  <FieldLabel label="Your feedback or query *">
                    <textarea rows={4} required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell us how we can help…" className={`${inputClassName} resize-none`} />
                  </FieldLabel>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-xs text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Something went wrong sending your message. Please try again, or email us directly.
                    </div>
                  )}

                  <button type="submit" disabled={status === "sending"} className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60">
                    {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Send message</>}
                  </button>
                </form>
              )}
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-border/70 bg-card/35 p-5 shadow-sm backdrop-blur-sm md:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-border/40 pb-3">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">VQE in context</span>
                <span className="font-serif text-xs italic text-muted-foreground">E(θ) → min</span>
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

const inputClassName = "w-full rounded-lg border border-border/80 bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

function FieldLabel({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground"><span className="mb-1.5 block">{label}</span>{children}</label>;
}

function ContactCard({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/35 p-5 shadow-sm backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">{icon}</div>
        <div><div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>{children}</div>
      </div>
    </div>
  );
}

/** A complete VQE story: molecule → Hamiltonian → QPU → measured energy → optimizer → updated parameters. */
function VQEWorkflow() {
  return (
    <svg viewBox="0 0 440 680" className="mx-auto block w-full max-w-[410px] overflow-visible text-foreground" fill="none" aria-label="Variational quantum eigensolver workflow for ferrocene">
      <defs>
        <filter id="vqe-shadow" x="-25%" y="-25%" width="150%" height="150%"><feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0f172a" floodOpacity="0.22" /></filter>
        <radialGradient id="iron-core" cx="35%" cy="25%" r="70%"><stop offset="0%" stopColor="#fde68a" /><stop offset="55%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#92400e" /></radialGradient>
        <linearGradient id="ring-surface" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.72" /><stop offset="100%" stopColor="#0369a1" stopOpacity="0.32" /></linearGradient>
        <marker id="arrow-primary" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 8 4 L 0 8 z" className="fill-primary" /></marker>
        <marker id="arrow-muted" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 8 4 L 0 8 z" className="fill-muted-foreground" /></marker>
      </defs>

      <text x="220" y="18" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px] uppercase tracking-[0.18em]">Molecular target</text>
      <FerroceneMolecule />
      <text x="220" y="202" textAnchor="middle" className="fill-foreground font-serif text-[15px] font-semibold">Ferrocene · Fe(C₅H₅)₂</text>
      <text x="220" y="219" textAnchor="middle" className="fill-muted-foreground font-sans text-[10px]">Its electronic structure is the energy VQE is estimating.</text>

      <path d="M220 229V243" className="stroke-primary" strokeWidth="1.8" markerEnd="url(#arrow-primary)" />
      <rect x="55" y="253" width="330" height="54" rx="10" className="fill-background/80 stroke-primary/60" strokeWidth="1.2" />
      <text x="76" y="276" className="fill-muted-foreground font-mono text-[9px] uppercase tracking-wider">1 · Encode molecule</text>
      <text x="76" y="294" className="fill-foreground font-serif text-[14px]">H₍Fe(C₅H₅)₂₎  ⟶  Σᵢ cᵢPᵢ</text>
      <text x="318" y="293" className="fill-primary font-mono text-[9px]">qubit Hamiltonian</text>

      <path d="M220 308V333" className="stroke-primary" strokeWidth="1.8" markerEnd="url(#arrow-primary)" />
      <rect x="43" y="344" width="354" height="193" rx="14" className="fill-background/60 stroke-border" strokeWidth="1.2" />
      <text x="63" y="367" className="fill-primary font-mono text-[9px] uppercase tracking-wider">2 · Quantum processor · U(θ)</text>
      <text x="63" y="382" className="fill-muted-foreground font-sans text-[10px]">Parameterized ansatz prepares |ψ(θ)⟩, then each qubit is measured.</text>

      <CircuitRow y={410} label="q₀" gates={[{ x: 130, label: "Rʏ θ₁" }, { x: 242, label: "Rᴢ θ₄" }]} />
      <CircuitRow y={452} label="q₁" gates={[{ x: 130, label: "Rʏ θ₂" }, { x: 242, label: "Rᴢ θ₅" }]} />
      <CircuitRow y={494} label="q₂" gates={[{ x: 130, label: "Rʏ θ₃" }, { x: 242, label: "Rᴢ θ₆" }]} />
      <line x1="205" y1="410" x2="205" y2="452" className="stroke-foreground" strokeWidth="1.4" />
      <circle cx="205" cy="410" r="3.5" className="fill-foreground" />
      <circle cx="205" cy="452" r="8" className="fill-background stroke-foreground" strokeWidth="1.4" />
      <path d="M200 452h10M205 447v10" className="stroke-foreground" strokeWidth="1.4" />
      <line x1="205" y1="452" x2="205" y2="494" className="stroke-foreground" strokeWidth="1.4" />
      <circle cx="205" cy="494" r="3.5" className="fill-foreground" />
      <text x="205" y="525" textAnchor="middle" className="fill-muted-foreground font-mono text-[9px]">entangle</text>

      <path d="M340 410v84" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M340 494V552H296" className="stroke-primary" strokeWidth="1.7" markerEnd="url(#arrow-primary)" />
      <rect x="225" y="552" width="165" height="50" rx="10" className="fill-primary/10 stroke-primary/60" strokeWidth="1.2" />
      <text x="240" y="574" className="fill-primary font-mono text-[9px] uppercase tracking-wider">3 · Measure energy</text>
      <text x="240" y="591" className="fill-foreground font-serif text-[13px]">E(θ) = ⟨H⟩</text>

      <path d="M225 577H205" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arrow-muted)" />
      <rect x="52" y="552" width="153" height="84" rx="10" className="fill-background/90 stroke-primary/60" strokeWidth="1.2" />
      <text x="69" y="576" className="fill-primary font-mono text-[9px] uppercase tracking-wider">4 · Classical optimizer</text>
      <text x="69" y="595" className="fill-foreground font-serif text-[13px]">minimize E(θ)</text>
      <text x="69" y="615" className="fill-muted-foreground font-sans text-[10px]">update θ₁ … θ₆</text>

      <path d="M120 636V655H24V390H52" className="stroke-primary" strokeWidth="1.8" strokeDasharray="5 4" markerEnd="url(#arrow-primary)" />
      <text x="26" y="650" className="fill-primary font-mono text-[9px]" transform="rotate(-90 26 650)">new parameters θ</text>
      <text x="220" y="672" textAnchor="middle" className="fill-muted-foreground font-sans text-[10px]">Repeat until the ferrocene ground-state energy converges.</text>
    </svg>
  );
}

function CircuitRow({ y, label, gates }: { y: number; label: string; gates: { x: number; label: string }[] }) {
  return (
    <g>
      <text x="66" y={y + 4} className="fill-muted-foreground font-mono text-[11px]">{label}</text>
      <line x1="87" y1={y} x2="347" y2={y} className="stroke-foreground" strokeWidth="1.35" opacity="0.78" />
      {gates.map((gate) => <g key={`${label}-${gate.x}`}>
        <rect x={gate.x - 27} y={y - 14} width="54" height="28" rx="4" className="fill-background stroke-primary" strokeWidth="1.35" />
        <text x={gate.x} y={y + 4} textAnchor="middle" className="fill-foreground font-serif text-[10px]">{gate.label}</text>
      </g>)}
      <rect x="326" y={y - 13} width="25" height="26" rx="3" className="fill-background stroke-foreground" strokeWidth="1.2" />
      <path d={`M331 ${y + 5}A7 7 0 0 1 346 ${y + 5}M339 ${y + 5}l5 -10`} className="stroke-foreground" strokeWidth="1.1" />
    </g>
  );
}

function FerroceneMolecule() {
  const upper = "220,35 178,53 188,85 252,85 262,53";
  const lower = "220,133 178,151 188,183 252,183 262,151";
  const topAtoms = [[220,35], [178,53], [188,85], [252,85], [262,53]];
  const bottomAtoms = [[220,133], [178,151], [188,183], [252,183], [262,151]];

  return (
    <g filter="url(#vqe-shadow)">
      <ellipse cx="220" cy="109" rx="108" ry="86" className="fill-primary/5" />
      {[...topAtoms, ...bottomAtoms].map(([x, y], index) => <line key={index} x1="220" y1="109" x2={x} y2={y} stroke="#f59e0b" strokeWidth="1.7" opacity="0.82" />)}
      <polygon points={upper} fill="url(#ring-surface)" stroke="#38bdf8" strokeWidth="2.2" />
      <polygon points={lower} fill="url(#ring-surface)" stroke="#38bdf8" strokeWidth="2.2" />
      {topAtoms.map(([x, y], index) => <circle key={`top-${index}`} cx={x} cy={y} r="6" fill="#7dd3fc" stroke="#075985" strokeWidth="1.4" />)}
      {bottomAtoms.map(([x, y], index) => <circle key={`bottom-${index}`} cx={x} cy={y} r="6" fill="#38bdf8" stroke="#075985" strokeWidth="1.4" />)}
      <ellipse cx="220" cy="61" rx="30" ry="11" className="stroke-primary" strokeWidth="1" strokeDasharray="3 3" />
      <ellipse cx="220" cy="159" rx="30" ry="11" className="stroke-primary" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="220" cy="109" r="18" fill="url(#iron-core)" stroke="#92400e" strokeWidth="1.8" />
      <text x="220" y="114" textAnchor="middle" fill="white" className="font-sans text-[11px] font-bold">Fe</text>
    </g>
  );
}
