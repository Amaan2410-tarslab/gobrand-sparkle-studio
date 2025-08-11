import { useEffect, useRef } from "react";
import { Heart, Brain, Smartphone, MessageCircle } from "lucide-react";

const PAT = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  const personas = [
    {
      title: "Gen Z Digital Natives",
      description: "Understanding the digital-first mindset and communication preferences",
      color: "from-primary to-accent",
      icon: Smartphone
    },
    {
      title: "Millennial Professionals",
      description: "Balancing career ambitions with lifestyle aspirations",
      color: "from-secondary to-primary-glow",
      icon: Brain
    },
    {
      title: "Gen X Decision Makers",
      description: "Value-driven choices with brand loyalty considerations",
      color: "from-accent to-secondary",
      icon: Heart
    },
    {
      title: "Boomer Traditionalists",
      description: "Trust-based relationships and proven track records",
      color: "from-primary-glow to-primary",
      icon: MessageCircle
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-hero mb-8">
            PAT
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            People Architecture and Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand mindsets, lifestyles, Gen Z habits—helping brands talk their language and connect deeply.
          </p>
        </div>
      </section>

      {/* Interactive Personas */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Customer Personas We Understand</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {personas.map((persona, index) => (
              <div 
                key={index} 
                className={`card-service group cursor-pointer bg-gradient-to-r ${persona.color} p-8 hover:scale-105 transition-all duration-300`}
              >
                <persona.icon className="w-16 h-16 text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4 text-white text-center">{persona.title}</h3>
                <p className="text-white/90 text-center">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Process */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our PAT Methodology</h2>
            <div className="space-y-8">
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Deep Behavioral Analysis</h3>
                <p className="text-muted-foreground">
                  We dive deep into understanding the behavioral patterns, decision-making processes, and emotional triggers of your target audience.
                </p>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Cultural Context Mapping</h3>
                <p className="text-muted-foreground">
                  Understanding the cultural nuances and regional preferences that influence how people interact with brands.
                </p>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Technology-Enabled Insights</h3>
                <p className="text-muted-foreground">
                  Leveraging advanced analytics and AI to uncover hidden patterns in consumer behavior and preferences.
                </p>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Authentic Communication Strategies</h3>
                <p className="text-muted-foreground">
                  Developing communication strategies that feel natural and authentic to each target demographic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PAT;