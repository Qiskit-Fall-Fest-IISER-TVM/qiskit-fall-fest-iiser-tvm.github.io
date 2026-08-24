import { SiQiskit } from "react-icons/si";
import iiserLogo from "@assets/Logo_1782481254440.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-6 flex-wrap">
              <img
                src={iiserLogo}
                alt="IISER TVM"
                className="h-12 w-auto object-contain dark:brightness-0 dark:invert"
              />
              <div className="h-8 w-px bg-border"></div>
              <div className="flex items-center gap-2">
                <SiQiskit className="text-2xl text-secondary" />
                <span className="text-lg font-semibold text-foreground tracking-tight">IBM Qiskit</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm">
              IBM Qiskit Fall Fest 2026 organized locally at IISER Thiruvananthapuram. Empowering the next generation of quantum researchers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#schedule" className="hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="#speakers" className="hover:text-primary transition-colors">Speakers</a></li>
              <li><a href="#venue" className="hover:text-primary transition-colors">Venue</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="https://quantum.ibm.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">IBM Quantum</a></li>
              <li><a href="https://qiskit.org/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Qiskit Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Code of Conduct</a></li>
              <li><a href="https://www.iisertvm.ac.in/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">IISER TVM Website</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 IISER Thiruvananthapuram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
