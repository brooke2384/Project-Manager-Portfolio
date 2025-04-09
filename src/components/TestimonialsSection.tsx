
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Darlene delivered more than we expected — ahead of time. She's sharp, communicative, and calm under fire. Her ability to translate complex technical issues into clear business terms saved our project.",
    name: "Michael Chen",
    role: "CTO",
    company: "AI Startup"
  },
  {
    quote: "You made it easy to trust the process and actually enjoy the sprint cycles. Our team's productivity increased 40% within the first month of Darlene taking over PM responsibilities.",
    name: "Sarah Williams",
    role: "Product Owner",
    company: "EMEA"
  },
  {
    quote: "Working with Darlene completely changed our approach to project management. Her systematic process brought clarity to a chaotic development cycle and helped us ship on time for the first time in a year.",
    name: "David Rodriguez",
    role: "Engineering Manager",
    company: "SaaS Platform"
  }
];

export default function TestimonialsSection() {
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

    const testimonialCards = document.querySelectorAll(".testimonial-card");
    testimonialCards.forEach((card, index) => {
      card.classList.add(`animate-delay-${index * 200}`);
      observer.observe(card);
    });

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      testimonialCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding section-transition">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/20">Social Proof</Badge>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent animate-gradient-shift bg-[length:200%_auto]">
            What Clients Say
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Feedback from teams and stakeholders who've experienced my project management approach over the past 5+ years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="testimonial-card border-none premium-card section-transition opacity-0 bg-card"
            >
              <CardContent className="p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="italic text-foreground/90 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-primary/5 blur-xl"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in animate-delay-800">
          <p className="text-foreground/60">More references available upon request.</p>
        </div>
      </div>
    </section>
  );
}
