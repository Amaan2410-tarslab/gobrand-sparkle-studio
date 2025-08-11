import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    challenge: "",
    goals: "",
    timeline: "",
    budget: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Thank you for your submission!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h1 className="text-3xl font-bold mb-4 text-gradient">Thank You!</h1>
          <p className="text-muted-foreground mb-6">
            Your questionnaire has been submitted successfully. Our team will review your information and get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="btn-primary">
            Submit Another Response
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-hero mb-8 animate-fade-in-up">
            Client Questionnaire
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your brand challenges and goals. We'll help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Questionnaire Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="card-premium">
              <h2 className="text-2xl font-bold mb-6 text-center">How Can We Help You?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => handleInputChange("industry", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <Label htmlFor="challenge">What's your biggest brand challenge? *</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => handleInputChange("challenge", e.target.value)}
                  required
                  className="mt-2"
                  rows={4}
                />
              </div>
              
              <div className="mt-6">
                <Label htmlFor="goals">What are your marketing goals?</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  className="mt-2"
                  rows={4}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                    placeholder="e.g., 3 months"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    placeholder="e.g., $10k - $50k"
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button type="submit" className="btn-hero">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Questionnaire
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Questionnaire;