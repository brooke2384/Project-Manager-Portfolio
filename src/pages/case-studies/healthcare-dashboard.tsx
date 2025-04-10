import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowLeft, Calendar, Users, Target, Lightbulb, Puzzle, Award } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const HealthcareDashboard = () => {
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
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&h=600" 
                  alt="Healthcare Data Analytics Dashboard" 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-30">
                  <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/20">Case Study</Badge>
                  <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent animate-gradient-shift bg-[length:200%_auto]">
                    Healthcare Data Analytics Dashboard
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
                      <p className="font-medium">Project Manager & Product Owner</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Timeline</h3>
                      </div>
                      <p>5 months (July - November 2022)</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Scope</h3>
                      </div>
                      <p>Coordinated 6-person remote team with healthcare stakeholders</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-accent" />
                        <h3 className="font-medium text-primary/70">Key Achievement</h3>
                      </div>
                      <p>Reduced reporting time by 75%</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium text-primary/70 mb-2">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Trello", "Miro", "Power BI", "Slack", "Azure", "SQL", "Python", "React", "HIPAA"].map((tool, index) => (
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
                      <p className="mb-4">A regional healthcare provider was struggling with fragmented data systems that made it difficult to generate timely insights for clinical and operational decision-making. Manual reporting processes were time-consuming and error-prone, while compliance with HIPAA regulations added another layer of complexity.</p>
                      
                      <h4 className="font-medium text-primary/70 mt-6 mb-2">Key Challenges:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Data siloed across multiple legacy systems with no unified view</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Manual reporting processes taking 20+ hours per week</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Strict HIPAA compliance requirements for all data handling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Limited technical resources and varying levels of data literacy among stakeholders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Need for real-time insights to support clinical decision-making</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="approach" className="space-y-6">
                  <Card className="border-none shadow-glow bg-card/50">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-primary mb-4">My Approach</h3>
                      <p className="mb-4">I implemented a user-centered approach that balanced technical requirements with the practical needs of healthcare professionals:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="font-medium text-primary/70 mb-2">Discovery & Requirements</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Conducted shadowing sessions with clinical and administrative staff</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Mapped data flows and identified critical metrics for decision-making</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Prioritized dashboard features based on impact and technical feasibility</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-primary/70 mb-2">Security & Compliance</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Collaborated with compliance team to ensure HIPAA requirements were met</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Implemented role-based access controls and data anonymization</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Designed secure data pipeline with encryption at rest and in transit</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Technical Architecture</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Designed cloud-based data warehouse to consolidate information from disparate systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Created automated ETL processes to reduce manual data handling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Implemented Power BI for visualization with custom security model</span>
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
                      <p className="mb-4">I led the implementation through an iterative, agile approach that delivered value incrementally:</p>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Phase 1: Data Foundation</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Established secure Azure-based data warehouse architecture</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Created data connectors for primary clinical and administrative systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Implemented data validation and quality assurance processes</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Phase 2: Core Dashboard Development</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Designed data models and relationships for optimal performance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Created initial dashboards for key operational metrics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Conducted usability testing with representative user groups</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Phase 3: Advanced Analytics & Refinement</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Implemented predictive models for patient flow and resource utilization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Added drill-down capabilities for detailed analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Refined visualizations based on user feedback and usage patterns</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Phase 4: Training & Rollout</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Developed role-specific training materials and documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Conducted hands-on training sessions for all user groups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Implemented phased rollout strategy with champions in each department</span>
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
                          <h4 className="font-medium text-primary/70 mb-2">Operational Improvements</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Reduced reporting time by 75% (from 20+ hours to 5 hours weekly)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Increased data accuracy from 92% to 99.8%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Enabled real-time monitoring of key performance indicators</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-primary/70 mb-2">Clinical Impact</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Improved resource allocation reduced average wait times by 18%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Enhanced visibility into clinical metrics improved care coordination</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span>Predictive analytics helped optimize staffing levels during peak periods</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Project Success Metrics</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Delivered HIPAA-compliant solution on time and budget</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Achieved 92% user adoption rate within three months of launch</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Solution expanded to three additional departments beyond initial scope</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-primary/70 mb-2">Key Learnings</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Early involvement of compliance team prevented potential regulatory issues</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>User-centered design approach led to high adoption rates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Phased implementation allowed for continuous improvement based on feedback</span>
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

export default HealthcareDashboard;