import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@assets/IMG_8993_1777001349378.jpeg";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex items-center pt-44 md:pt-48 pb-12">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="South Jersey's Custom Sign Shop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-white font-medium text-sm mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Serving South Jersey & The Shore
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 drop-shadow-sm">
              Signs That Help Your Business <span className="text-secondary">Get Noticed.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-sans">
              Your friendly, hometown sign shop located in Pleasantville, NJ. From custom storefront letters to LED video walls, we build and install high-quality signage for local businesses of every size.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:6098390122" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <Phone className="w-5 h-5" /> Call (609) 839-0122
              </a>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="mt-12 flex items-center gap-8 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">✓</div>
                In-House Fabrication
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">✓</div>
                Full-Service Install
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">✓</div>
                Free Quotes
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
