import { useEffect, useRef } from "react";
import { TrendingUp, Target, Users, BarChart3 } from "lucide-react";

const BAT = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-hero mb-8">
            BAT
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Brand Architecture and Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help brands operate effectively in a crowded market.
          </p>
        </div>
      </section>

      {/* Competitive Positioning Infographic */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-service text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
              <p className="text-muted-foreground">
                Deep dive into market trends and competitive landscape
              </p>
            </div>
            
            <div className="card-service text-center">
              <Target className="w-12 h-12 text-accent mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-4">Strategic Positioning</h3>
              <p className="text-muted-foreground">
                Define your unique position in the marketplace
              </p>
            </div>
            
            <div className="card-service text-center">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-4">Brand Architecture</h3>
              <p className="text-muted-foreground">
                Structure your brand portfolio for maximum impact
              </p>
            </div>
            
            <div className="card-service text-center">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <p className="text-muted-foreground">
                Track and optimize brand performance indicators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our BAT Approach</h2>
            <div className="space-y-8">
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Brand Strategy Development</h3>
                <p className="text-muted-foreground">
                  We work with you to develop a comprehensive brand strategy that aligns with your business objectives and resonates with your target audience.
                </p>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Technology Integration</h3>
                <p className="text-muted-foreground">
                  Leveraging cutting-edge technology to ensure your brand architecture is scalable, measurable, and future-ready.
                </p>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Continuous Optimization</h3>
                <p className="text-muted-foreground">
                  Our data-driven approach ensures your brand strategy evolves with market changes and consumer behavior patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BAT;