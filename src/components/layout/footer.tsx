import { Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";
import logoImg from '@assets/image_1776997745490.png';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <img src={logoImg} alt="All Signs LLC" className="h-16 w-auto object-contain object-left bg-white/10 p-2 rounded-lg" />
            <p className="text-primary-foreground/80 leading-relaxed">
              Your hometown sign shop serving Pleasantville and the South Jersey shore region. We build signs that help local businesses get noticed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-display mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-secondary transition-colors">Channel Letters</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">LED Video Walls</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Vinyl Graphics</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Custom Awnings</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Push-Through Signs</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Service & Repair</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-display mb-6">Contact Us</h4>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>28 Cambria Ave<br/>Pleasantville, NJ 08232</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:6098390122" className="hover:text-secondary transition-colors">(609) 839-0122</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:allsignsllc@gmail.com" className="hover:text-secondary transition-colors">allsignsllc@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours & CTA */}
          <div>
            <h4 className="text-lg font-bold font-display mb-6">Business Hours</h4>
            <ul className="space-y-4 text-primary-foreground/80 mb-6">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 opacity-0" />
                <span>Sat - Sun: Closed</span>
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-bold hover:bg-secondary/90 transition-colors w-full justify-center">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} All Signs LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
