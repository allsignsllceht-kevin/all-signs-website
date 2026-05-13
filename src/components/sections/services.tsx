import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import serviceChannel from "@assets/IMG_9001_1777001330394.jpeg";
import servicePush from "@assets/IMG_8980_1777001383006.jpeg";
import serviceVinyl from "@assets/IMG_8981_1777001383005.jpeg";
import serviceAwning from "@assets/IMG_8987_1777001349378.jpeg";
import serviceExterior from "@assets/IMG_8994_1777001349378.jpeg";
import serviceLed from "@assets/IMG_9021_1777005833311.png";

const services = [
  { 
    id: "channel", 
    title: "Channel Letters", 
    desc: "Make your storefront glow. We fabricate and install custom illuminated 3D letters that give your business a professional, highly visible presence day and night.",
    img: serviceChannel
  },
  { 
    id: "push", 
    title: "Push-Through & Dimensional Signs", 
    desc: "For a modern, high-end architectural look, our push-through acrylic and dimensional signs offer a clean, multi-dimensional glow perfect for hotels, offices, and contemporary businesses.",
    img: servicePush
  },
  { 
    id: "vinyl", 
    title: "Vinyl Graphics & Vehicle Wraps", 
    desc: "Transform your windows, walls, and vehicles. We use premium vinyl to create crisp, durable graphics — from full vehicle wraps to storefront window lettering.",
    img: serviceVinyl
  },
  { 
    id: "awning", 
    title: "Custom Awnings", 
    desc: "We fabricate weather-resistant fabric awnings in our shop and deliver them ready to install — branded, striped, or solid, built to your storefront's exact dimensions.",
    img: serviceAwning
  },
  { 
    id: "exterior", 
    title: "Exterior Business Signage", 
    desc: "From freestanding monument signs to large commercial complex displays, we handle the masonry, metalwork, and electrical to make you stand out.",
    img: serviceExterior
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">Our Sign Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Everything Your Business Needs to Stand Out.</h3>
            <p className="text-muted-foreground text-lg">
              We are a full-service sign company. From design and permits to fabrication and installation, we handle the entire process to get your business noticed.
            </p>
          </div>
        </Reveal>

        {/* Featured Service: LED Walls */}
        <Reveal className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden mb-8 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-3 py-1 rounded-full w-max mb-6">
                LED & DIGITAL DISPLAYS
              </div>
              <h4 className="text-3xl font-display font-bold text-primary mb-4">LED Video Walls & Digital Displays</h4>
              
              <div className="space-y-4 text-muted-foreground text-lg mb-8">
                <p>
                  We engineer and install programmable LED video walls and digital message boards for commercial applications of <strong>every size</strong> — from compact storefront panels up to large architectural facades.
                </p>
                <p>
                  Our team handles the mounting hardware, power supply routing, and digital controller setup so your display is ready to run on day one.
                </p>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors mt-auto group">
                Get a quote on your LED display <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="relative h-64 lg:h-auto min-h-[400px]">
              <img src={serviceLed} alt="LED video marquee fabricated by All Signs LLC for Tilton Square Theatre" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Reveal key={service.id} delay={(idx % 3) * 80} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden group hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-display font-bold text-primary mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group/link">
                  Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          ))}
          
          <Reveal delay={services.length % 3 * 80} className="bg-primary text-primary-foreground rounded-xl shadow-sm overflow-hidden flex flex-col justify-center items-center text-center p-8 relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
            <h4 className="text-2xl font-display font-bold mb-4 relative z-10">Need Sign Service or Repair?</h4>
            <p className="text-primary-foreground/80 mb-8 relative z-10">We don't just build new signs. We fix broken neon, replace burnt-out LEDs, and maintain existing signage.</p>
            <a href="tel:6098390122" className="bg-white text-primary px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors relative z-10">
              Call for Service
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
