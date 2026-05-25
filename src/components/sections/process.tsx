import { ArrowRight, Camera, CheckCircle2, ClipboardCheck, Hammer, Lightbulb, PencilRuler, PhoneCall, Sparkles, Truck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    subtitle: "We start with a conversation.",
    description:
      "Every sign begins with a phone call, shop visit, or meeting where we learn about your business, your brand, your location, and what you need the sign to do.",
    icon: PhoneCall,
    photoLabel: "Consultation photo",
  },
  {
    number: "02",
    title: "Design & Concept",
    subtitle: "Your idea starts taking shape.",
    description:
      "We sketch ideas, build the logo or artwork, and prepare mockups so you can see the direction before anything is fabricated. You approve the look before we move forward.",
    icon: PencilRuler,
    photoLabel: "Design mockup photo",
  },
  {
    number: "03",
    title: "Permits & Engineering",
    subtitle: "We help handle the red tape.",
    description:
      "Local sign codes, permit paperwork, landlord requirements, and engineering drawings can be confusing. We help guide the process so your sign is built correctly and responsibly.",
    icon: ClipboardCheck,
    photoLabel: "Permit drawing photo",
  },
  {
    number: "04",
    title: "Fabrication",
    subtitle: "This is where the craft happens.",
    description:
      "Most of our work is built by hand in the shop — cutting metal, bending faces, welding frames, wiring LEDs, sanding, painting, and assembling each piece with care.",
    icon: Hammer,
    photoLabel: "Shop fabrication photo",
  },
  {
    number: "05",
    title: "Quality Check",
    subtitle: "Nothing leaves until it is right.",
    description:
      "Before your sign goes out the door, we check the finish, hardware, wiring, lighting, fit, and overall presentation so it is ready for the job site.",
    icon: CheckCircle2,
    photoLabel: "Quality check photo",
  },
  {
    number: "06",
    title: "Installation",
    subtitle: "Built in the shop. Finished on-site.",
    description:
      "We deliver and mount the sign, make sure it is level and secure, connect lighting where needed, and pay attention to the details that make the final install look professional.",
    icon: Truck,
    photoLabel: "Installation photo",
  },
  {
    number: "07",
    title: "The Reveal",
    subtitle: "Your business gets noticed.",
    description:
      "The best part is seeing the finished sign doing its job — lighting up, drawing attention, and giving your storefront the pride and presence it deserves.",
    icon: Sparkles,
    photoLabel: "Finished sign photo",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(circle_at_20%_20%,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-bold px-4 py-2 rounded-full mb-4">
              <Lightbulb className="w-4 h-4" />
              FROM CONCEPT TO COMPLETION
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              A Custom Sign Is a Journey — We Guide Every Step.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When you work with All Signs LLC, you are not ordering from a machine. You are working with a hands-on sign shop that designs, builds, checks, and installs your project with real craftsmanship and pride.
            </p>
          </div>
        </Reveal>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <Reveal key={step.number} delay={(index % 3) * 80}>
                  <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>
                    <div className="bg-muted/40 border border-border rounded-2xl p-4 min-h-[240px] flex items-center justify-center overflow-hidden group">
                      <div className="w-full h-full min-h-[210px] rounded-xl border-2 border-dashed border-primary/20 bg-white/80 flex flex-col items-center justify-center text-center p-6 transition-colors group-hover:border-secondary/40">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Camera className="w-8 h-8 text-primary/60" />
                        </div>
                        <p className="text-primary font-display font-bold text-lg">Photo Placeholder</p>
                        <p className="text-muted-foreground text-sm mt-1">{step.photoLabel}</p>
                        <p className="text-muted-foreground/70 text-xs mt-4 max-w-xs">
                          Add a real shop or job-site photo here later to show customers the work behind the finished sign.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-10 relative">
                      <div className="hidden lg:flex absolute top-10 -left-[3.25rem] w-10 h-10 rounded-full bg-secondary text-secondary-foreground items-center justify-center font-display font-bold shadow-md border-4 border-white">
                        {step.number}
                      </div>
                      {!isEven && (
                        <div className="hidden lg:flex absolute top-10 -right-[3.25rem] w-10 h-10 rounded-full bg-secondary text-secondary-foreground items-center justify-center font-display font-bold shadow-md border-4 border-white">
                          {step.number}
                        </div>
                      )}

                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <div className="text-secondary font-bold tracking-wider text-sm uppercase">Step {step.number}</div>
                          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-lg font-semibold text-foreground mb-3">{step.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal>
          <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent" />
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl font-display font-bold mb-3">Have a sign idea? Let’s talk it through.</h3>
              <p className="text-primary-foreground/80 text-lg">
                Tell us what you are trying to build, where it is going, and what you want customers to notice first. We will help you understand the next step.
              </p>
            </div>
            <a href="#contact" className="relative z-10 inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-bold hover:bg-secondary/90 transition-colors shadow-sm hover:shadow">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
