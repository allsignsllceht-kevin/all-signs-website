import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import g1 from "@assets/IMG_8993_1777001349378.jpeg";
import g2 from "@assets/IMG_9001_1777001330394.jpeg";
import g3 from "@assets/IMG_8996_1777001330394.png";
import g4 from "@assets/IMG_9004_1777001330394.jpeg";
import g5 from "@assets/IMG_9002_1777001330394.jpeg";
import g6 from "@assets/IMG_8991_1777001349378.jpeg";
import g7 from "@assets/IMG_8994_1777001349378.jpeg";
import g8 from "@assets/IMG_8983_1777001383005.jpeg";
import g9 from "@assets/IMG_8978_1777001383006.jpeg";
import g10 from "@assets/IMG_8989_1777001349378.jpeg";
import g11 from "@assets/IMG_8981_1777001383005.jpeg";
import g12 from "@assets/IMG_8987_1777001349378.jpeg";
import g13 from "@assets/IMG_9022_1777005833311.jpeg";
import g14 from "@assets/IMG_9025_1777005833312.jpeg";
import g15 from "@assets/IMG_9023_1777005833312.jpeg";
import g16 from "@assets/IMG_8998_1777006384622.jpeg";
import g17 from "@assets/IMG_8999_1777006384622.jpeg";
import g18 from "@assets/IMG_8984_1777006384622.jpeg";
import g19 from "@assets/IMG_8977_1777006384622.jpeg";
import g20 from "@assets/IMG_8976_1777006384622.jpeg";
import g21 from "@assets/IMG_8974_1777006384622.png";
import g22 from "@assets/jennings-funeral-home.jpg";
import g23 from "@assets/atilis-gym-channel-letters.jpg";
import g24 from "@assets/pizza-di-roma-cedar.jpg";
import g25 from "@assets/culina-mundi-window.jpg";

type Project = {
  img: string;
  name: string;
  location: string;
  tag: string;
  story: string;
};

const projects: Project[] = [
  {
    img: g16,
    name: "Wildwood Boardwalk Sign",
    location: "Wildwood, NJ — Morey's Piers",
    tag: "Iconic Boardwalk Landmark",
    story: "Three months in our shop. One unforgettable lift day. The massive 'Wildwood' oval craned into place at the entrance to Morey's Piers — one of the proudest builds we've ever delivered.",
  },
  {
    img: g17,
    name: "Wildwood Sign — In the Shop",
    location: "Pleasantville, NJ (Fabrication)",
    tag: "In-House Fabrication",
    story: "The 'W' getting its finishing touches before the trip down to the boardwalk — every letter dimensional, every curve hand-finished in our Pleasantville shop.",
  },
  {
    img: g1,
    name: "Sandi Pointe Coastal Bistro",
    location: "Somers Point, NJ",
    tag: "Custom Blade Sign",
    story: "A custom-shaped mermaid blade sign for the bistro at 908 Shore Road — the same spot where the legendary Bubba Mac Shack rocked the shore in the early 2000s.",
  },
  {
    img: g2,
    name: "Atilis Gym",
    location: "Atlantic County, NJ",
    tag: "Illuminated Channel Letters",
    story: "Red illuminated channel letters for the no-nonsense iron-house brand that's been part of the Jersey Shore lifting scene since 1974.",
  },
  {
    img: g3,
    name: "Atlantic City Bar & Grill",
    location: "Atlantic City, NJ",
    tag: "Hand-Painted Blade Sign",
    story: "A custom blade sign for the AC institution that started as Mama Tucci's Pizzeria back in the early 1970s — Pacific & South Carolina, still going strong.",
  },
  {
    img: g4,
    name: "Surfside Casual Furniture",
    location: "South Jersey",
    tag: "Storefront Cabinet Sign",
    story: "Large illuminated branding for the family-owned outdoor furniture destination — going up on installation day.",
  },
  {
    img: g5,
    name: "The Healing Side",
    location: "South Jersey",
    tag: "Custom Channel Letters & Logo",
    story: "Custom-fabricated channel letters and dimensional logo for one of South Jersey's wellness dispensaries.",
  },
  {
    img: g6,
    name: "Angelo's Fairmount Tavern",
    location: "Atlantic City, NJ",
    tag: "Channel Letters & Neon",
    story: "Bold red letters and warm neon for Atlantic City's beloved Italian kitchen — serving the Fairmount neighborhood since 1935.",
  },
  {
    img: g7,
    name: "Circle Liquor Store",
    location: "Somers Point, NJ",
    tag: "Channel Letters & Custom Shield",
    story: "Massive dimensional letters and a hand-built crest for the Somers Point Circle landmark that's been pouring since 1938.",
  },
  {
    img: g8,
    name: "Sakura Japanese Steakhouse",
    location: "South Jersey",
    tag: "Storefront Channel Letters",
    story: "Custom-fabricated channel letters for the local hibachi and sushi favorite — clean storefront branding for a busy plaza tenant.",
  },
  {
    img: g9,
    name: "ICONA Golden Inn",
    location: "Avalon, NJ",
    tag: "Architectural Dimensional Letters",
    story: "Modern dimensional branding for the reborn shore icon — originally built in 1961 by Robert Golden, today one of Avalon's most beloved oceanfront resorts.",
  },
  {
    img: g10,
    name: "Surroundings Furniture",
    location: "Northfield, NJ (Tilton Rd)",
    tag: "Pylon Sign Installation",
    story: "A two-piece roadside pylon sign installed for the local interior design and furniture showroom on Tilton Road — All Signs trucks on site, bucket up.",
  },
  {
    img: g11,
    name: "Lanz Pet Care",
    location: "Jersey Shore",
    tag: "Full Vehicle Wrap",
    story: "Full-color vehicle wrap for the mobile grooming trailer — built to turn every job into a billboard rolling around the Shore.",
  },
  {
    img: g12,
    name: "Rita's Italian Ice",
    location: "Multiple South Jersey Locations",
    tag: "Custom Branded Awnings",
    story: "Hand-fabricated red-and-white striped awnings for the Jersey-favorite ice and custard stand — leaving the shop and headed for install.",
  },
  {
    img: g13,
    name: "Tilton Square Theatre",
    location: "Northfield, NJ (Tilton Plaza)",
    tag: "Neon + LED Video Marquee",
    story: "Hand-bent neon lettering paired with a full programmable LED video marquee for the independent IMAX theater at Tilton Plaza — the centerpiece of the storefront, day and night.",
  },
  {
    img: g15,
    name: "Tilton Square Theatre — Install Day",
    location: "Northfield, NJ (Tilton Plaza)",
    tag: "Crane Install",
    story: "Setting the LED video panel into the marquee frame with the boom truck — the kind of in-house install we've been doing along Tilton Road for years.",
  },
  {
    img: g14,
    name: "Bolero Resort & Conference Center",
    location: "Wildwood, NJ",
    tag: "LED Video Panel Tower",
    story: "A stacked column of programmable LED video panels mounted to the tower of the Wildwood resort — visible from blocks down the strip.",
  },
  {
    img: g18,
    name: "Atlantic Holistic Center",
    location: "South Jersey (Mall Storefront)",
    tag: "Halo-Lit Channel Letters",
    story: "Halo-lit dimensional letters and logos for the wellness center storefront — clean modern branding that glows softly after closing.",
  },
  {
    img: g19,
    name: "Silver Secret Jewelry",
    location: "Wildwood Boardwalk, NJ",
    tag: "Boardwalk Storefront Suite",
    story: "Cabinet sign and full awning lettering for the boardwalk jewelry shop — All Signs crew up on the scaffolding making it happen.",
  },
  {
    img: g20,
    name: "Atlantic City Bar & Grill — Building Mural",
    location: "Atlantic City, NJ",
    tag: "Large-Format Printed Mural",
    story: "A wraparound printed mural with the AC skyline and the Bar & Grill's signature logo — mounted high on the building with our bucket truck.",
  },
  {
    img: g21,
    name: "Philly Steaks",
    location: "South Jersey",
    tag: "Channel Letters In-Shop",
    story: "A full set of black-faced illuminated channel letters fabricated in our Pleasantville shop — staged on the table before heading out for install.",
  },
  {
    img: g22,
    name: "TJC Jennings Funeral Home",
    location: "South Jersey",
    tag: "Monument Sign",
    story: "A stately monument sign with dimensional letters, custom tree element, and stone veneer base — built to honor the legacy of a family-owned funeral home serving the community.",
  },
  {
    img: g23,
    name: "Atilis Gym — In the Shop",
    location: "Pleasantville, NJ (Fabrication)",
    tag: "Custom Channel Letters",
    story: "Custom-built red illuminated channel letters for Atilis Gym — assembled on the workbench in our Pleasantville shop before heading out for installation.",
  },
  {
    img: g24,
    name: "Pizza Di Roma II & Cedar Wine & Spirits",
    location: "Pleasantville, NJ",
    tag: "Illuminated Channel Letters",
    story: "Individually mounted, illuminated custom-built channel letters for a local plaza — featuring the Italy boot logo for Pizza Di Roma II and the cedar tree for Cedar Wine & Spirits.",
  },
  {
    img: g25,
    name: "Culina Mundi",
    location: "Ventnor, NJ",
    tag: "Vinyl Window Graphics",
    story: "Elegant vinyl window graphics for Culina Mundi — 'Where the world gathers at one table.' Gold lettering on tinted glass announcing the coming-soon opening of this new restaurant.",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">Our Work</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary">Built for Our South Jersey Neighbors.</h3>
              <p className="text-muted-foreground text-lg mt-4">
                Real signs for real businesses — from corner taverns serving since the '30s to brand-new dispensaries opening this year.
              </p>
            </div>
            <div>
              <a href="#contact" className="inline-flex items-center justify-center bg-primary/5 text-primary px-6 py-3 rounded-md font-bold hover:bg-primary/10 transition-colors whitespace-nowrap">
                Start Your Project
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <Reveal key={idx} delay={(idx % 3) * 80} className="h-full">
              <article
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-border transition-shadow duration-300 flex flex-col h-full"
                data-testid={`gallery-card-${idx}`}
              >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={p.img} 
                  alt={`${p.name} — ${p.tag} by All Signs LLC`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Tag pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                  {p.tag}
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h4 className="font-display text-lg font-bold text-primary leading-tight">
                  {p.name}
                </h4>
                <div className="flex items-center gap-1.5 text-secondary text-sm font-medium">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{p.location}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                  {p.story}
                </p>
              </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground italic">
            Got a building with a story? We've fabricated and reinstalled signs for places dating back 50+ years. Whether you're opening this month or you've been on Main Street since the '30s — we'd love to build yours next.
          </p>
        </div>

      </div>
    </section>
  );
}
