import { useEffect, useRef, useState } from "react";
import { Shuffle, Zap, Users, Lightbulb } from "lucide-react";

const HAT = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mergeAnimation, setMergeAnimation] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in-up");
    }

    // Trigger merge animation
    const timer = setTimeout(() => {
      setMergeAnimation(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-hero mb-8">
            HAT
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Hybrid Architecture and Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mix & match strategies, styles, and customer profiles to surprise the market.
          </p>
        </div>
      </section>

      {/* Hybrid Approach */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-service text-center group">
              <Shuffle className="w-12 h-12 text-primary mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-4">Mix Strategies</h3>
              <p className="text-muted-foreground">
                Combine different approaches for unique solutions
              </p>
            </div>
            
            <div className="card-service text-center group">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-4">Dynamic Styles</h3>
              <p className="text-muted-foreground">
                Adapt visual styles to match market expectations
              </p>
            </div>
            
            <div className="card-service text-center group">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-4">Customer Profiles</h3>
              <p className="text-muted-foreground">
                Merge different customer segments for broader appeal
              </p>
            </div>
            
            <div className="card-service text-center group">
              <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-4">Market Surprise</h3>
              <p className="text-muted-foreground">
                Unexpected combinations that capture attention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Merge Animation */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Creative Fusion in Action</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center space-x-8 mb-12">
              <div className={`card-premium text-center transition-all duration-1000 ${
                mergeAnimation ? 'transform translate-x-4' : ''
              }`}>
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">Style A</h3>
                <p className="text-muted-foreground">Traditional Approach</p>
              </div>
              
              <div className={`text-4xl text-primary transition-all duration-1000 ${
                mergeAnimation ? 'scale-125 rotate-180' : ''
              }`}>
                +
              </div>
              
              <div className={`card-premium text-center transition-all duration-1000 ${
                mergeAnimation ? 'transform -translate-x-4' : ''
              }`}>
                <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary-glow rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">Style B</h3>
                <p className="text-muted-foreground">Modern Innovation</p>
              </div>
            </div>
            
            {mergeAnimation && (
              <div className="card-premium text-center animate-fade-in-up">
                <div className="w-24 h-24 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold mb-4">Hybrid Solution</h3>
                <p className="text-muted-foreground">
                  The perfect blend of traditional reliability and modern innovation, 
                  creating something entirely new that surprises and delights the market.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HAT;