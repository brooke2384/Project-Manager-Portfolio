import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowLeft, Calendar, Users, Target, Lightbulb, Puzzle, Award } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AIModelOps = () => {
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
              <Link to="/case-studies" className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 font-medium group mb-6">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Case Studies
              </Link>
              
              {/* Hero Section */}
              <div className="relative rounded-xl overflow-hidden mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&h=600" 
                  alt="AI Model Ops for Global Retail Platform" 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-30">
                  <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/20">Case Study</Badge>
                  <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent animate-gradient-shift bg-[length:200%_auto]">
                    AI Model Ops for Global Retail Platform
                  </h1>
                </div>
              </div>

              {/* Project Overview */}
              <Card className="section-transition mb-12 border-none shadow-glow bg-card/50">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-primary mb-6">Project Overview</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Role</h3>
                      </div>
                      <p className="font-medium">Technical PM & Stakeholder Lead</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Timeline</h3>
                      </div>
                      <p>6 months (Jan - June 2023)</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Scope</h3>
                      </div>
                      <p>Managed 12-person cross-functional team across 4 time zones</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Key Achievement</h3>
                      </div>
                      <p>Reduced dev cycle time by 30%</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium text-primary/70 mb-2">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Jira", "Notion", "Loom", "Google Cloud", "Slack", "Python", "TensorFlow", "Docker", "Kubernetes"].map((tool, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-primary/10 hover:bg-primary/20 transition-colors duration-300 border border-primary/20 text-foreground"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Content */}
              <Tabs defaultValue="challenge" className="section-transition">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="challenge" className="text-sm md:text-base">
                    <Puzzle className="h-4 w-4 mr-2 hidden md:inline" />
                    Challenge
                  </TabsTrigger>
                  <TabsTrigger value="approach" className="text-sm md:text-base">
                    <Lightbulb className="h-4 w-4 mr-2 hidden md:inline" />
                    Approach
                  </TabsTrigger>
                  <TabsTrigger value="execution" className="text-sm md:text-base">
                    <Target className="h-4 w-4 mr-2 hidden md:inline" />
                    Execution
                  </TabsTrigger>
                  <TabsTrigger value="results" className="text-sm md:text-base">
                    <Award className="h-4 w-4 mr-2 hidden md:inline" />
                    Results
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="challenge" className="space-y-6">
                  <Card className="border-none shadow-glow bg-card/50">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-primary mb-4">The Challenge</h3>
                      <p className="mb-4">A global retail platform with operations in 15 countries needed to streamline their AI model deployment process. The existing workflow was fragmented, with data scientists working in silos and deployment taking weeks due to manual handoffs between teams.</p>
                      
                      <h4 className="font-medium text-primary/70 mt-6 mb-2">Key Challenges:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Inconsistent model deployment processes across different regional teams</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Poor visibility into model performance and drift after deployment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Lengthy approval processes involving multiple stakeholders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Technical debt from previous one-off deployment solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Coordination challenges with teams across 4 different time zones</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="approach" className="space-y-6">
                  <Card className="border-none shadow-glow bg-card/50">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-primary mb-4">My Approach</h3>
                      <p className="mb-4">I implemented a structured yet flexible approach to address the complex challenges of this global project:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="font-medium text-primary/70 mb-2">Discovery & Planning</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Conducted 25+ stakeholder interviews across all regions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Mapped current workflows and identified bottlenecks</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Created detailed technical requirements with engineering leads</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-primary/70 mb-2">Team Structure</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Organized cross-functional pods with representation from each region</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Established clear roles and responsibilities matrix</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Created asynchronous communication protocols for global collaboration</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Technical Strategy</h4>
                        <p className="mb-4">We decided on a phased implementation approach with continuous feedback loops:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Phase 1: Standardized model packaging and documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Phase 2: Automated CI/CD pipeline for model deployment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Phase 3: Monitoring and observability framework</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Phase 4: Governance and approval workflow automation</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="execution" className="space-y-6">
                  <Card className="border-none shadow-glow bg-card/50">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-primary mb-4">Execution & Process</h3>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-primary/70 mb-2">Project Management Approach</h4>
                        <p>I implemented a hybrid agile methodology tailored to accommodate global teams:</p>
                        <ul className="space-y-2 mt-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>2-week sprints with staggered planning sessions across time zones</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Daily async check-ins via Loom and Slack instead of synchronous standups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Bi-weekly demos with key stakeholders from business and technical teams</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Comprehensive documentation in Notion with clear decision logs</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-primary/70 mb-2">Key Implementation Milestones</h4>
                        <div className="relative border-l-2 border-primary/20 pl-6 space-y-6 mt-4">
                          <div className="relative">
                            <div className="absolute -left-[29px] top-0 h-5 w-5 rounded-full bg-primary/20 border border-primary/30"></div>
                            <h5 className="font-medium">Month 1-2: Foundation</h5>
                            <p className="text-sm text-foreground/80 mt-1">Established standardized model packaging format and documentation templates. Created initial CI pipeline for model validation.</p>
                          </div>
                          
                          <div className="relative">
                            <div className="absolute -left-[29px] top-0 h-5 w-5 rounded-full bg-primary/20 border border-primary/30"></div>
                            <h5 className="font-medium">Month 2-4: Core Infrastructure</h5>
                            <p className="text-sm text-foreground/80 mt-1">Developed automated deployment pipeline with staging environments. Implemented basic monitoring dashboards for model performance.</p>
                          </div>
                          
                          <div className="relative">
                            <div className="absolute -left-[29px] top-0 h-5 w-5 rounded-full bg-primary/20 border border-primary/30"></div>
                            <h5 className="font-medium">Month 4-5: Advanced Features</h5>
                            <p className="text-sm text-foreground/80 mt-1">Added automated A/B testing capabilities. Integrated drift detection and alerting. Developed approval workflow with role-based permissions.</p>
                          </div>
                          
                          <div className="relative">
                            <div className="absolute -left-[29px] top-0 h-5 w-5 rounded-full bg-primary/40 border border-primary/50"></div>
                            <h5 className="font-medium">Month 5-6: Rollout & Training</h5>
                            <p className="text-sm text-foreground/80 mt-1">Conducted training sessions for all regional teams. Migrated existing models to new platform. Documented best practices and created self-service guides.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary/70 mb-2">Stakeholder Management</h4>
                        <p>Managing diverse stakeholders was critical to the project's success:</p>
                        <ul className="space-y-2 mt-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Created tiered communication plan with different detail levels for technical and business stakeholders</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Established regular executive updates with clear KPI tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Implemented feedback collection after each milestone to continuously improve</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="results" className="space-y-6">
                  <Card className="border-none shadow-glow bg-card/50">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-primary mb-4">Results & Impact</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                          <h4 className="font-medium text-primary mb-2">30%</h4>
                          <p className="text-sm">Reduction in model deployment cycle time, from 3 weeks to 5 days on average</p>
                        </div>
                        
                        <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                          <h4 className="font-medium text-primary mb-2">9.1/10</h4>
                          <p className="text-sm">Stakeholder satisfaction score, up from 7.2/10 before the project</p>
                        </div>
                        
                        <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                          <h4 className="font-medium text-primary mb-2">100%</h4>
                          <p className="text-sm">Feature completeness at launch, with all planned capabilities delivered on schedule</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-primary/70 mb-2">Technical Achievements</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Standardized model packaging across all regions, eliminating compatibility issues</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Automated 85% of the deployment process, reducing manual errors by 92%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Implemented real-time monitoring that detected performance issues 4x faster than before</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Reduced infrastructure costs by 25% through optimized resource allocation</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-primary/70 mb-2">Business Impact</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Enabled 3x more frequent model updates, improving recommendation accuracy by 18%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Increased data science team productivity by 40% through streamlined workflows</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Improved compliance with automated documentation and approval workflows</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-primary/70 mb-2">Lessons Learned</h4>
                        <p className="mb-4">Key takeaways from this global project:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Async-first communication is essential for global teams, but requires clear documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Early stakeholder alignment on technical decisions prevents costly changes later</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Phased implementation with quick wins maintains momentum and builds trust</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIModelOps;