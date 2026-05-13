import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
