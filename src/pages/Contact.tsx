import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [meetingForm, setMeetingForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setMeetingForm(prev => ({ ...prev, [field]: value }));
  };

  const handleMeetingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Meeting request sent!",
      description: "We'll confirm your meeting within 2 hours.",
    });
    setMeetingForm({ name: "", email: "", date: "", time: "", message: "" });
  };

  const phoneNumbers = [
    { label: "Main Office", number: "+91 9876543210" },
    { label: "Business Development", number: "+91 9876543211" },
    { label: "Support", number: "+91 9876543212" }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-hero mb-8 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your brand? Get in touch with us today and let's start building something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Information & Forms */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="card-service">
                  <MapPin className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Office Location</h3>
                  <p className="text-muted-foreground">
                    123 Anna Salai, T. Nagar<br />
                    Chennai, Tamil Nadu 600017<br />
                    India
                  </p>
                </div>
                
                <div className="card-service">
                  <Mail className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">hello@gobrand.com</p>
                  <p className="text-muted-foreground">info@gobrand.com</p>
                </div>
                
                <div className="card-service">
                  <Phone className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <div className="space-y-2">
                    {phoneNumbers.map((phone, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{phone.label}:</span>
                        <a 
                          href={`tel:${phone.number}`}
                          className="text-primary hover:text-primary-glow transition-colors font-medium"
                        >
                          {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-service">
                  <Clock className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Meeting Booking Form */}
            <div>
              <div className="card-premium">
                <h2 className="text-2xl font-bold mb-6">Book a Meeting</h2>
                
                <form onSubmit={handleMeetingSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name">Your Name *</Label>
                    <Input
                      id="contact-name"
                      value={meetingForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={meetingForm.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="meeting-date">Preferred Date</Label>
                      <Input
                        id="meeting-date"
                        type="date"
                        value={meetingForm.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="meeting-time">Preferred Time</Label>
                      <Input
                        id="meeting-time"
                        type="time"
                        value={meetingForm.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="meeting-message">Message</Label>
                    <Textarea
                      id="meeting-message"
                      value={meetingForm.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project and goals..."
                      className="mt-2"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="btn-hero w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Meeting
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="card-premium">
            <div className="w-full h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map integration coming soon</p>
                <p className="text-sm text-muted-foreground mt-2">
                  123 Anna Salai, T. Nagar, Chennai, Tamil Nadu 600017
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;