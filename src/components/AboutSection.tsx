
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Clock,
  Laptop,
  MessageSquare
} from "lucide-react";
import { useEffect, useRef } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillSets: SkillCategory[] = [
  {
    title: "Project Management",
    skills: ["Agile/Scrum", "Kanban", "Waterfall", "Risk Management", "Stakeholder Management", "Program Management"]
  },
  {
    title: "Tools Proficiency",
    skills: ["Jira", "Notion", "Asana", "GitHub", "Figma", "Slack", "Monday", "ClickUp"]
  },
  {
    title: "Technical Background",
    skills: ["Web Development", "Cloud Infrastructure", "Database Management", "API Integration", "AI/ML Operations", "DevOps"]
  },
  {
    title: "Soft Skills",
    skills: ["Clear Communication", "Conflict Resolution", "Team Leadership", "Client Management", "Problem Solving", "Strategic Thinking"]
  }
];

export default function AboutSection() {
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

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding section-transition bg-background/50">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl blur-2xl animate-pulse-glow"></div>
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&h=700"
                alt="Darlene - About Me"
                className="rounded-2xl w-full h-auto object-cover border border-white/10 shadow-xl relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>

          <div className="animate-slide-up">
            <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/20">About Me</Badge>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent animate-gradient-shift bg-[length:200%_auto]">
              I'm Darlene
            </h2>
            <p className="mt-4 text-lg text-primary">
              A remote-first PM with 5+ years blending tech fluency with business clarity.
            </p>
            
            <div className="mt-6 space-y-6 text-foreground/80">
              <p>
                I don't just move tickets — I move strategy, people, and product forward. With over 5 years of experience leading distributed teams across multiple industries, I've developed a proven system for delivering complex technical projects that align with business goals.
              </p>
              <p>
                My approach combines technical understanding, clear communication, and systematic processes that create predictable, successful outcomes for my clients—from early-stage startups to Fortune 500 enterprises.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3 premium-card p-4 rounded-lg">
                <Globe className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-medium text-primary">Remote-First</h3>
                  <p className="text-sm text-foreground/70">Working with global teams since 2019</p>
                </div>
              </div>
              <div className="flex items-start gap-3 premium-card p-4 rounded-lg">
                <Clock className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-medium text-primary">Timezone</h3>
                  <p className="text-sm text-foreground/70">EST (GMT-5) with flexible hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3 premium-card p-4 rounded-lg">
                <Laptop className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-medium text-primary">Tech Setup</h3>
                  <p className="text-sm text-foreground/70">Optimized for collaboration and availability</p>
                </div>
              </div>
              <div className="flex items-start gap-3 premium-card p-4 rounded-lg">
                <MessageSquare className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-medium text-primary">Communication</h3>
                  <p className="text-sm text-foreground/70">Clear, consistent, and responsive</p>
                </div>
              </div>
            </div>

            <div className="mt-10 animate-fade-in animate-delay-400">
              <h3 className="font-semibold text-lg mb-4 text-primary">Core Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillSets.map((category, index) => (
                  <div key={index} className="bg-card/50 p-4 rounded-lg premium-card">
                    <h4 className="font-medium text-accent mb-2">{category.title}</h4>
                    <ul className="space-y-1">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-sm text-foreground/80 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/60"></span> 
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
