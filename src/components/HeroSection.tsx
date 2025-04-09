
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center pt-16 section-padding section-transition">
      <div className="matrix-effect"></div>
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in">
              Remote Technical Project Manager with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-gradient-shift bg-[length:200%_auto]">
                5+ years elevating teams, systems, and outcomes
              </span>.
            </h1>
            <p className="mt-6 text-lg text-foreground/80 animate-slide-up animate-delay-200">
              Helping premium product teams deliver high-impact solutions on time, 
              on budget, and beyond expectation — with strategic clarity and technical precision.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-slide-up animate-delay-400">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 group shadow-glow"
                asChild
              >
                <a href="#contact">
                  Let's Work Together
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/5 shadow-inner-glow"
                asChild
              >
                <a href="#case-studies">
                  View Case Studies
                </a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 animate-slide-up animate-delay-600">
              <div className="py-4 px-2 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-lg text-center premium-card">
                <p className="text-xl md:text-2xl font-semibold">5+</p>
                <p className="text-sm text-foreground/70">Years Experience</p>
              </div>
              <div className="py-4 px-2 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-lg text-center premium-card animate-delay-200">
                <p className="text-xl md:text-2xl font-semibold">20+</p>
                <p className="text-sm text-foreground/70">Projects Managed</p>
              </div>
              <div className="py-4 px-2 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-lg text-center premium-card animate-delay-400">
                <p className="text-xl md:text-2xl font-semibold">95%</p>
                <p className="text-sm text-foreground/70">Client Retention</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-2xl animate-pulse-glow"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=600"
                alt="Darlene - Technical Project Manager"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-2 border-white/10 shadow-xl relative z-10"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse-subtle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
