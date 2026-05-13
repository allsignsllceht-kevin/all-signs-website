import { CheckCircle2 } from "lucide-react";
import aboutShop from "@assets/IMG_8975_1777001383006.png";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <Reveal className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <div className="aspect-[4/3]">
                <img 
                  src={aboutShop} 
                  alt="Inside the All Signs LLC Fabrication Shop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8">
                <p className="text-white font-bold text-lg">In-House Fabrication Facility</p>
                <p className="text-white/80 text-sm">Pleasantville, NJ</p>
              </div>
            </div>
            
            {/* Badge overlay */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg border border-border p-6 hidden md:block">
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-primary mb-1">100%</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-wider">In-House</div>
                <div className="text-xs text-muted-foreground mt-1">Fabrication</div>
              </div>
            </div>
          </Reveal>

          {/* Content Side */}
          <Reveal delay={120}>
            <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">About All Signs LLC</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Your Hometown Sign Shop.</h3>
            
            <div className="space-y-6 text-muted-foreground text-lg mb-8">
              <p>
                Based in Pleasantville, New Jersey, we are a family-run business dedicated to helping local companies get noticed. We believe that a great sign is the foundation of a successful brick-and-mortar business.
              </p>
              <p>
                Unlike generic sign brokers, we operate our own full-service fabrication facility. From welding raw aluminum to routing acrylic faces and wiring custom LED layouts, we build your sign from scratch. This means we control the quality, the timeline, and the price.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="font-medium text-foreground">In-House Fabrication</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="font-medium text-foreground">Full-Service Installation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="font-medium text-foreground">Free Consultations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="font-medium text-foreground">Local & Family-Run</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="font-medium text-foreground">Permitting Assistance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="font-medium text-foreground">Service & Repair</span>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
              Meet the Team
            </a>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
