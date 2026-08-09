import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import iiserLogo from "@assets/Logo_1782481254440.png";

export function Navbar() {
  const { theme, setTheme } = useTheme();
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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
          ? "bg-background/40 backdrop-blur-md border-b border-border/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={iiserLogo}
            alt="IISER TVM"
            className="h-10 w-10 object-contain"
          />

          <div>
            <h1 className="font-bold text-lg">Qiskit</h1>
            <p className="text-xs text-muted-foreground">
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
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

        </div>

        {/* Mobile Controls */}

        <div className="md:hidden flex items-center gap-2">

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        <div className="md:hidden bg-background border-t border-border">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-6 py-4 border-b border-border hover:bg-muted transition-colors"
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}
