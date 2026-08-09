import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import iiserLogo from "@assets/Logo_1782481254440.png";

export function Navbar() {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Speakers", to: "/speakers" },
    { name: "Team", to: "/team" },
    { name: "Schedule", to: "/schedule" },
    { name: "Register", to: "/register" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/45 backdrop-blur-md border-b border-black/10 py-3"
          : "bg-white/10 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <img
            src={iiserLogo}
            alt="IISER TVM"
            className="h-10 w-10 object-contain"
          />

          <div>
            <h1 className="font-bold text-lg text-black">
              Qiskit
            </h1>

            <p className="text-xs text-black/70">
              Fall Fest '26
            </p>
          </div>
        </Link>


        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`transition-colors text-sm font-medium ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>


        {/* Mobile Controls */}

        <div className="md:hidden flex items-center gap-2">

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black hover:bg-black/5"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

        </div>

      </div>


      {/* Mobile Menu */}

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-black/10">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-6 py-4 border-b border-black/10 transition-colors ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-black/80 hover:bg-black/5"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}
