import { Link } from "wouter";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from '@assets/image_1776997745490.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-1"}`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <img 
            src={logoImg} 
            alt="All Signs LLC" 
            className={`w-auto transition-all duration-300 ${scrolled ? "h-12 md:h-14" : "h-28 md:h-32"}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-sans font-medium text-sm text-foreground">
          <a href="#services" className="hover:text-secondary transition-colors">Services</a>
          <a href="#about" className="hover:text-secondary transition-colors">About Us</a>
          <a href="#process" className="hover:text-secondary transition-colors">Our Process</a>
          <a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </nav>

        {/* CTA & Phone */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Call Us Today</span>
            <a href="tel:6098390122" className="flex items-center gap-2 text-lg font-display font-bold text-primary hover:text-secondary transition-colors">
              <Phone className="w-5 h-5" />
              (609) 839-0122
            </a>
          </div>
          <a href="#contact" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-bold hover:bg-secondary/90 transition-colors shadow-sm hover:shadow">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a href="tel:6098390122" className="text-primary hover:text-secondary">
            <Phone className="w-6 h-6" />
          </a>
          <button className="text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-xl flex flex-col font-sans font-medium">
          <a href="#services" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-border text-foreground hover:bg-muted">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-border text-foreground hover:bg-muted">About Us</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-border text-foreground hover:bg-muted">Our Process</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-border text-foreground hover:bg-muted">Gallery</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-border text-foreground hover:bg-muted">Contact</a>
          <div className="p-6 bg-muted">
            <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground w-full py-3 rounded-md font-bold text-center">
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
