
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Calendar, Linkedin, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Web Application",
  "Mobile App",
  "Data Integration",
  "E-commerce",
  "Internal Tool",
  "Other"
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/20">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Let's Work Together</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to bring your project to life with clear processes and expert management?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-xl shadow-glow">
            <h3 className="text-xl font-semibold mb-6 text-card-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-1 block text-foreground">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-input text-foreground"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-1 block text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-input text-foreground"
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="text-sm font-medium mb-1 block text-foreground">
                  Project Type
                </label>
                <Select value={formData.projectType} onValueChange={handleSelectChange}>
                  <SelectTrigger className="bg-input text-foreground">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover text-popover-foreground">
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-1 block text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project and how I can help"
                  rows={5}
                  required
                  className="bg-input text-foreground"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Connect Directly</h3>
              <div className="space-y-6">
                <a 
                  href="mailto:letsbuild@projectsbydarlene.com" 
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email Me</p>
                    <p className="text-sm text-foreground/70">letsbuild@projectsbydarlene.com</p>
                  </div>
                </a>

                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Schedule a Call</p>
                    <p className="text-sm text-foreground/70">Book a 30-minute consultation</p>
                  </div>
                </a>

                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Connect on LinkedIn</p>
                    <p className="text-sm text-foreground/70">Let's expand our network</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 p-6 bg-primary/10 rounded-lg">
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Looking for my resume?</h4>
                  <p className="text-sm text-foreground/70 mb-4">
                    Download my full resume to see my project history and technical skills.
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Download Resume (PDF)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

