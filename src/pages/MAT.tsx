import { useEffect, useRef } from "react";
import { Megaphone, LineChart, PenTool, Search } from "lucide-react";

const MAT = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  const services = [
    {
      icon: Megaphone,
      title: "Marketing Strategy",
      description: "Comprehensive marketing strategies tailored to your brand goals"
    },
    {
      icon: LineChart,
      title: "Market Research",
      description: "Data-driven insights to understand your market and competitors"
    },
    {
      icon: PenTool,
      title: "Creative Campaigns",
      description: "Innovative advertising campaigns that capture attention"
    },
    {
      icon: Search,
      title: "Brand Analysis",
      description: "Deep analysis of brand performance and market positioning"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-hero mb-8">
            MAT
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Marketing Architecture and Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete marketing, marcom, advertising, and research solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-service text-center group">
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our MAT Solutions</h2>
            <div className="space-y-8">
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Integrated Marketing Communications</h3>
                <p className="text-muted-foreground mb-4">
                  We create cohesive marketing communications that speak with one voice across all channels and touchpoints.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Multi-channel campaign development</li>
                  <li>Brand messaging consistency</li>
                  <li>Cross-platform optimization</li>
                </ul>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Digital Marketing Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Leverage the power of digital channels to reach your audience where they spend their time.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Social media marketing</li>
                  <li>Search engine optimization</li>
                  <li>Content marketing strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MAT;