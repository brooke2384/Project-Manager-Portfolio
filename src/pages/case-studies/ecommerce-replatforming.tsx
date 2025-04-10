import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowLeft, Calendar, Users, Target, Lightbulb, Puzzle, Award } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const EcommerceReplatforming = () => {
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&h=600" 
                  alt="E-Commerce Replatforming Project" 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-30">
                  <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/20">Case Study</Badge>
                  <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent animate-gradient-shift bg-[length:200%_auto]">
                    E-Commerce Replatforming Project
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
                      <p className="font-medium">Senior Technical Project Manager</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Timeline</h3>
                      </div>
                      <p>8 months (March - October 2022)</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Scope</h3>
                      </div>
                      <p>Led migration team of 8 developers and 3 designers</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Key Achievement</h3>
                      </div>
                      <p>Completed migration 2 weeks ahead of schedule</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium text-primary/70 mb-2">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Asana", "Figma", "AWS", "GitHub", "Linear", "React", "Node.js", "Shopify", "Stripe"].map((tool, index) => (
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
                      <p className="mb-4">A rapidly growing e-commerce company was experiencing significant performance issues with their legacy platform. As their customer base expanded internationally, the existing system struggled with increased traffic, leading to slow page loads, checkout failures, and limited scalability for new features.</p>
                      
                      <h4 className="font-medium text-primary/70 mt-6 mb-2">Key Challenges:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Legacy monolithic architecture with poor performance under high traffic</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Complex integration with multiple third-party services and payment gateways</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Need to migrate without disrupting ongoing business operations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Data migration complexity with 5+ years of customer and order history</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Tight deadline to complete before peak holiday shopping season</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="approach" className="space-y-6">
                  <Card className="border-none shadow-glow bg-card/50">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-primary mb-4">My Approach</h3>
                      <p className="mb-4">I developed a comprehensive migration strategy that balanced technical requirements with business continuity needs:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="font-medium text-primary/70 mb-2">Technical Assessment</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Conducted thorough audit of existing architecture and pain points</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Evaluated multiple platform options with stakeholder input</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Created detailed technical requirements and migration roadmap</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-primary/70 mb-2">Risk Mitigation</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Designed phased migration approach to minimize business disruption</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Implemented comprehensive testing strategy with automated regression tests</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Created detailed rollback plans for each migration phase</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Team Organization</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Structured team into specialized workstreams (frontend, backend, data migration)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Implemented agile methodology with 2-week sprints and daily standups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Created detailed documentation and knowledge sharing processes</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="execution" className="space-y-6">
                  <Card className="border-none shadow-glow bg-card/50">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-primary mb-4">Execution</h3>
                      <p className="mb-4">I led the implementation of the migration plan through carefully orchestrated phases:</p>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Phase 1: Foundation & Infrastructure</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Set up new cloud infrastructure with auto-scaling capabilities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Established CI/CD pipelines for automated testing and deployment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Created development environments and access controls</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Phase 2: Core Functionality Migration</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Rebuilt product catalog and inventory management system</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Implemented new checkout flow with improved payment processing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Developed customer account management and authentication</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Phase 3: Data Migration & Integration</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Executed historical data migration with validation checks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Integrated third-party services (shipping, taxes, analytics)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Implemented real-time data synchronization during transition period</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Phase 4: Testing & Launch</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Conducted comprehensive performance and load testing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Ran beta testing program with select customers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Executed staged rollout with traffic shifting</span>
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                          <h4 className="font-medium text-primary/70 mb-2">Performance Improvements</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Increased site performance by 45%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Reduced page load times from 4.2s to 1.8s</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Improved mobile conversion rate by 28%</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-primary/70 mb-2">Business Impact</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Reduced infrastructure costs by 30%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Decreased cart abandonment rate by 15%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Enabled expansion to 3 new international markets</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Project Success Metrics</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Completed migration 2 weeks ahead of schedule</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Zero downtime during transition with 99.99% uptime post-launch</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Successfully handled 3x normal traffic during holiday season</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Key Learnings</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Phased migration approach significantly reduced business risk</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Early stakeholder alignment was crucial for smooth decision-making</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Comprehensive testing strategy prevented potential issues at launch</span>
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

export default EcommerceReplatforming;