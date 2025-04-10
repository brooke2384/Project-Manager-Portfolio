import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ChevronRight, ArrowLeft } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface CaseStudy {
  id: string;
  title: string;
  role: string;
  scope: string;
  tools: string[];
  results: string[];
  process: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "ai-model-ops",
    title: "AI Model Ops for Global Retail Platform",
    role: "Technical PM & Stakeholder Lead",
    scope: "Managed 12-person cross-functional team across 4 time zones",
    tools: ["Jira", "Notion", "Loom", "Google Cloud", "Slack"],
    results: [
      "Reduced dev cycle time by 30%",
      "Increased stakeholder NPS from 7.2 to 9.1",
      "Launched on time with 100% feature completeness"
    ],
    process: "Sprint planning → async check-ins → stakeholder reviews → retros",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ecommerce-replatforming",
    title: "E-Commerce Replatforming Project",
    role: "Senior Technical Project Manager",
    scope: "Led migration team of 8 developers and 3 designers",
    tools: ["Asana", "Figma", "AWS", "GitHub", "Linear"],
    results: [
      "Completed migration 2 weeks ahead of schedule",
      "Increased site performance by 45%",
      "Reduced infrastructure costs by 30%"
    ],
    process: "Tech discovery → architecture planning → phased migration → testing → launch",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Data Analytics Dashboard",
    role: "Project Manager & Product Owner",
    scope: "Coordinated 6-person remote team with healthcare stakeholders",
    tools: ["Trello", "Miro", "Power BI", "Slack", "Azure"],
    results: [
      "Delivered HIPAA-compliant solution on time and budget",
      "Reduced reporting time by 75%",
      "Increased data accuracy from 92% to 99.8%"
    ],
    process: "Requirements gathering → wireframing → agile development → user testing → release",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500"
  }
];

const CaseStudiesPage = () => {
  // Initialize scroll animations
  useScrollAnimation('-100px', 0.1);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <section className="section-padding section-transition bg-background/50">
          <div className="matrix-effect opacity-30"></div>
          <div className="container mx-auto container-padding">
            <div className="mb-8">
              <Link to="/#case-studies" className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 font-medium group mb-6">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </Link>
              <div className="text-center mb-12 animate-fade-in">
                <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/20">Portfolio</Badge>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent animate-gradient-shift bg-[length:200%_auto]">
                  Case Studies
                </h2>
                <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
                  Real projects with measurable results that demonstrate my approach to technical project management.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-16 mt-16">
              {caseStudies.map((study, index) => (
                <Card key={index} className="case-study-card section-transition overflow-hidden border-none shadow-glow bg-transparent">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                      <div className="lg:col-span-2 h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay"></div>
                        <div className="h-64 lg:h-full">
                          <img 
                            src={study.image} 
                            alt={study.title} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r"></div>
                      </div>
                      <div className="lg:col-span-3 p-6 md:p-8 bg-gradient-to-b from-card to-background">
                        <h3 className="text-2xl font-semibold text-primary">{study.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div>
                            <h4 className="font-medium text-primary/70 mb-1">Role</h4>
                            <p className="font-medium">{study.role}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-primary/70 mb-1">Scope</h4>
                            <p>{study.scope}</p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="font-medium text-primary/70 mb-2">Tools & Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.tools.map((tool, toolIndex) => (
                              <Badge 
                                key={toolIndex} 
                                variant="secondary" 
                                className="bg-primary/10 hover:bg-primary/20 transition-colors duration-300 border border-primary/20 text-foreground"
                              >
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="font-medium text-primary/70 mb-2">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6">
                          <h4 className="font-medium text-primary/70 mb-1">Process</h4>
                          <p>{study.process}</p>
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                          <Link to={`/case-studies/${study.id}`} className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 font-medium group">
                            View detailed case study
                            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;