import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "BAT", path: "/bat" },
    { name: "MAT", path: "/mat" },
    { name: "CAT", path: "/cat" },
    { name: "SAT", path: "/sat" },
    { name: "HAT", path: "/hat" },
    { name: "PAT", path: "/pat" },
    { name: "Know Us", path: "/know-us" },
    { name: "Questionnaire", path: "/questionnaire" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-gradient">
            GoBrand
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-foreground/80"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;