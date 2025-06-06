import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import RegisterButton from "./RegisterButton";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Overview",
    href: "#overview"
  }, {
    name: "Focus Areas",
    href: "#focus-areas"
  }, {
    name: "Timeline",
    href: "#timeline"
  }, {
    name: "Prizes",
    href: "#prizes"
  }, {
    name: "Resources",
    href: "#resources"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}>
      <div className="container mx-auto flex items-center justify-between container-padding">
        <div className="flex items-center">
          <img alt="Sutra Logo" src="/lovable-uploads/40be74cf-0b30-4b29-9aad-4e755b0bee4e.png" className="h-8 w-auto mr-3 object-contain mix-blend-multiply" />
          <span className="text-2xl font-bold text-sutra-blue">SUTRA</span>
          <span className="ml-2 bg-sutra-purple text-white py-1 px-2 rounded text-xs">HACKATHON</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-sutra-purple transition-colors">
              {link.name}
            </a>)}
          <RegisterButton className="bg-sutra-purple hover:bg-sutra-blue text-white" />
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto flex flex-col space-y-4 container-padding">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-sutra-purple transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>)}
            <RegisterButton className="bg-sutra-purple hover:bg-sutra-blue text-white w-full" />
          </div>
        </div>}
    </nav>;
};
export default Navbar;