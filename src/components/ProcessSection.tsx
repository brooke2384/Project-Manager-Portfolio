
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  BarChart3, 
  Rocket, 
  CheckSquare
} from "lucide-react";
import { useEffect, useRef } from "react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgGradient: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: <Search className="h-10 w-10 text-blue-400" />,
    title: "Discovery & Alignment",
    description: "Understand the product vision, map stakeholders, assess tech + team fit, and establish success metrics.",
    bgGradient: "from-blue-500/20 to-blue-600/5"
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-purple-400" />,
    title: "Planning & Roadmapping",
    description: "Sprint structure, delivery strategy, tools stack alignment, and risk assessment to set expectations.",
    bgGradient: "from-purple-500/20 to-purple-600/5"
  },
  {
    icon: <Rocket className="h-10 w-10 text-orange-400" />,
    title: "Execution",
    description: "Remote standups, async updates, stakeholder demos, and proactive blocker removal for steady progress.",
    bgGradient: "from-orange-500/20 to-orange-600/5"
  },
  {
    icon: <CheckSquare className="h-10 w-10 text-emerald-400" />,
    title: "Close & Handoff",
    description: "Retros, documentation, success metrics review, and knowledge transfer to ensure sustainability.",
    bgGradient: "from-emerald-500/20 to-emerald-600/5"
  }
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    const processCards = document.querySelectorAll(".process-card");
    processCards.forEach((card, index) => {
      card.classList.add(`animate-delay-${index * 200}`);
      observer.observe(card);
    });

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      processCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="process" ref={sectionRef} className="section-padding section-transition">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/20">Methodology</Badge>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent animate-gradient-shift bg-[length:200%_auto]">
            My Process
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            A structured, transparent approach refined over 5+ years that keeps projects on track
            and stakeholders confident in every decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`process-card premium-card section-transition opacity-0 rounded-xl overflow-hidden backdrop-blur-sm p-8 bg-gradient-to-br ${step.bgGradient}`}
            >
              <div className="mb-6 relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-white/5 to-white/0 rounded-full blur-md"></div>
                <div className="relative z-10">{step.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phase {index + 1}: {step.title}</h3>
                <p className="mt-2 text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm p-8 rounded-xl max-w-4xl mx-auto shadow-inner-glow animate-fade-in animate-delay-800">
          <h3 className="text-xl font-semibold text-center mb-6 text-primary">Why This Process Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-black/20 rounded-lg backdrop-blur-sm">
              <h4 className="font-medium mb-2 text-accent">Transparency</h4>
              <p className="text-sm">Everyone sees where we are, where we're going, and what's next.</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg backdrop-blur-sm">
              <h4 className="font-medium mb-2 text-accent">Adaptability</h4>
              <p className="text-sm">Structured but flexible to respond to changing requirements.</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg backdrop-blur-sm">
              <h4 className="font-medium mb-2 text-accent">Accountability</h4>
              <p className="text-sm">Clear ownership and measurable milestones drive results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
