import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

const SAT = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [counters, setCounters] = useState({
    awareness: 0,
    sales: 0,
    engagement: 0,
    roi: 0
  });

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in-up");
    }

    // Animate counters
    const timer = setTimeout(() => {
      setCounters({
        awareness: 95,
        sales: 230,
        engagement: 150,
        roi: 340
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-hero mb-8">
            SAT
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Sales Architecture and Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our campaigns generate awareness and sales—constantly evolving with market response.
          </p>
        </div>
      </section>

      {/* KPI Counters */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-service text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
              <div className="text-3xl font-bold text-primary mb-2">
                {counters.awareness}%
              </div>
              <h3 className="text-xl font-semibold mb-2">Brand Awareness</h3>
              <p className="text-muted-foreground">Average increase in brand recognition</p>
            </div>
            
            <div className="card-service text-center">
              <DollarSign className="w-12 h-12 text-accent mx-auto mb-4 animate-float" />
              <div className="text-3xl font-bold text-accent mb-2">
                {counters.sales}%
              </div>
              <h3 className="text-xl font-semibold mb-2">Sales Growth</h3>
              <p className="text-muted-foreground">Average sales increase for clients</p>
            </div>
            
            <div className="card-service text-center">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4 animate-float" />
              <div className="text-3xl font-bold text-secondary mb-2">
                {counters.engagement}%
              </div>
              <h3 className="text-xl font-semibold mb-2">Engagement</h3>
              <p className="text-muted-foreground">Higher customer engagement rates</p>
            </div>
            
            <div className="card-service text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
              <div className="text-3xl font-bold text-primary mb-2">
                {counters.roi}%
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI</h3>
              <p className="text-muted-foreground">Return on marketing investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Solutions */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our SAT Methodology</h2>
            <div className="space-y-8">
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Data-Driven Campaigns</h3>
                <p className="text-muted-foreground">
                  Every campaign is built on solid data foundations, ensuring maximum impact and measurable results.
                </p>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Real-Time Optimization</h3>
                <p className="text-muted-foreground">
                  We continuously monitor and adjust campaigns based on real-time performance data and market response.
                </p>
              </div>
              
              <div className="card-premium">
                <h3 className="text-xl font-semibold mb-4">Multi-Channel Integration</h3>
                <p className="text-muted-foreground">
                  Seamless integration across all sales channels to create a unified customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAT;