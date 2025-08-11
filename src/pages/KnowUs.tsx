import { useEffect, useRef } from "react";
import { Award, Users, MapPin, Clock } from "lucide-react";

const KnowUs = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & Creative Director",
      experience: "15+ years in brand strategy",
      specialization: "Brand architecture and creative leadership"
    },
    {
      name: "Priya Sharma",
      position: "Head of Marketing Technology",
      experience: "12+ years in digital marketing",
      specialization: "Marketing automation and analytics"
    },
    {
      name: "Arjun Patel",
      position: "Chief Technology Officer",
      experience: "10+ years in tech innovation",
      specialization: "Technology integration and development"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-hero mb-8">
            Know Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the team behind GoBrand's success stories and learn about our journey in transforming brands across South India.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-service text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-4">Management Excellence</h3>
              <p className="text-muted-foreground">
                Experienced leadership with proven track record in brand transformation
              </p>
            </div>
            
            <div className="card-service text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Diverse expertise spanning technology, creativity, and strategy
              </p>
            </div>
            
            <div className="card-service text-center">
              <Clock className="w-12 h-12 text-secondary mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-4">Long-term Relationships</h3>
              <p className="text-muted-foreground">
                Building lasting partnerships with clients for sustained growth
              </p>
            </div>
            
            <div className="card-service text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-4">Regional Expertise</h3>
              <p className="text-muted-foreground">
                Deep knowledge of Chennai & South India markets and culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-premium text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.position}</p>
                <p className="text-muted-foreground mb-3">{member.experience}</p>
                <p className="text-sm text-muted-foreground">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="space-y-8">
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Innovation-Driven Approach</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead of the competition.
                </p>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Client-Centric Focus</h3>
                <p className="text-muted-foreground">
                  Every strategy and solution is tailored to meet our clients' unique needs and business objectives.
                </p>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Cultural Understanding</h3>
                <p className="text-muted-foreground">
                  Our deep understanding of South Indian markets enables us to create culturally relevant and impactful campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowUs;