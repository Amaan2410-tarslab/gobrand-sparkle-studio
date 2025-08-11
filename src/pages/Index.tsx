import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, Palette, TrendingUp, Shuffle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slogans = [
    "Uncomplicate. Untangle. Target.",
    "More With Less. Create Impact. Sell. Repeat."
  ];

  const services = [
    {
      title: "BAT",
      subtitle: "Brand Architecture & Technology",
      description: "Operate effectively in a crowded market",
      icon: TrendingUp,
      color: "from-primary to-primary-glow",
      path: "/bat"
    },
    {
      title: "MAT",
      subtitle: "Marketing Architecture & Technology", 
      description: "Complete marketing and advertising solutions",
      icon: Zap,
      color: "from-secondary to-accent",
      path: "/mat"
    },
    {
      title: "CAT",
      subtitle: "Creative Architecture & Technology",
      description: "Tailor-made, super-charged creative work",
      icon: Palette,
      color: "from-accent to-primary",
      path: "/cat"
    },
    {
      title: "SAT",
      subtitle: "Sales Architecture & Technology",
      description: "Campaigns that generate awareness and sales",
      icon: TrendingUp,
      color: "from-primary-glow to-secondary",
      path: "/sat"
    },
    {
      title: "HAT",
      subtitle: "Hybrid Architecture & Technology",
      description: "Mix & match strategies to surprise the market",
      icon: Shuffle,
      color: "from-secondary to-primary-glow",
      path: "/hat"
    },
    {
      title: "PAT",
      subtitle: "People Architecture & Technology",
      description: "Connect deeply with your audience",
      icon: Heart,
      color: "from-accent to-secondary",
      path: "/pat"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlogan((prev) => (prev + 1) % slogans.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-6xl md:text-8xl font-bold text-hero mb-8 animate-fade-in-up">
            GoBrand-360!
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-12 max-w-4xl mx-auto">
            The right spot for brands that want to do everything just right!
          </p>
          
          {/* Animated Slogans */}
          <div className="h-16 mb-12 flex items-center justify-center">
            <p 
              className={`text-xl md:text-2xl text-muted-foreground transition-all duration-300 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
            >
              {slogans[currentSlogan]}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="btn-hero">
              <Link to="/questionnaire">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild className="btn-accent">
              <Link to="/know-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Our Comprehensive Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={service.title}
                to={service.path}
                className="group"
              >
                <div className={`card-service h-full bg-gradient-to-br ${service.color} p-8 text-white hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                     style={{ animationDelay: `${index * 100}ms` }}>
                  <service.icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <h4 className="text-lg font-semibold mb-4 opacity-90">{service.subtitle}</h4>
                  <p className="opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                  <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-card/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of successful brands that have leveraged our 360-degree approach to achieve remarkable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="btn-hero">
              <Link to="/contact">
                <Users className="mr-2 w-5 h-5" />
                Schedule a Consultation
              </Link>
            </Button>
            <Button asChild className="btn-primary">
              <Link to="/questionnaire">Start Questionnaire</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
