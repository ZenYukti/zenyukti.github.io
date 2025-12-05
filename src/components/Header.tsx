import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu} from "lucide-react";
import { Link } from "react-router-dom";
import { Discord , Github , Cross} from "./icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Community", href: "/community" },
    { name: "Notes", href: "/notes" },
    //{ name: "Projects", href: "/projects" },
    { name: "Join Us", href: "/join-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-full overflow-hidden">
              <img
                src="/assets/logo.png"
                alt="zenyukti_logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              ZenYukti
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a
                href="https://discord.gg/HuBa9r33kW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Discord className="w-4 h-4 mr-2" /> Discord
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-neon-green hover:bg-neon-green/90 shadow-neon"
            >
              <a
                href="https://github.com/ZenYukti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <Cross className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary"
                onClick={() =>
                  window.open("https://discord.gg/HuBa9r33kW", "_blank")
                }
              >
                <Discord className="w-4 h-4 mr-2" />
                Discord
              </Button>
              <Button
                size="sm"
                className="bg-neon-green hover:bg-neon-green/90"
                onClick={() =>
                  window.open("https://github.com/ZenYukti", "_blank")
                }
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;