import { useEffect, useRef, useState } from "react";
import { Palette, Camera, Video, Sparkles } from "lucide-react";

const CAT = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  const portfolioItems = [
    {
      title: "Brand Identity Design",
      description: "Complete visual identity systems that tell your brand story",
      color: "from-primary to-primary-glow"
    },
    {
      title: "Digital Campaigns",
      description: "Eye-catching digital campaigns that drive engagement",
      color: "from-secondary to-accent"
    },
    {
      title: "Video Production",
      description: "Professional video content that captures attention",
      color: "from-accent to-primary"
    },
    {
      title: "Print Design",
      description: "Traditional print materials with modern flair",
      color: "from-primary-glow to-secondary"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-hero mb-8">
            CAT
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Creative Architecture and Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Effective, tailor-made, super-charged creative work for our clients.
          </p>
        </div>
      </section>

      {/* Creative Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-service text-center group">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-4">Design Excellence</h3>
              <p className="text-muted-foreground">
                Stunning visual designs that capture your brand essence
              </p>
            </div>
            
            <div className="card-service text-center group">
              <Camera className="w-12 h-12 text-accent mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-4">Photography</h3>
              <p className="text-muted-foreground">
                Professional photography that tells your story
              </p>
            </div>
            
            <div className="card-service text-center group">
              <Video className="w-12 h-12 text-secondary mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-4">Video Production</h3>
              <p className="text-muted-foreground">
                Engaging video content for all platforms
              </p>
            </div>
            
            <div className="card-service text-center group">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Cutting-edge creative solutions that inspire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Creative Portfolio</h2>
          
          {/* Portfolio Navigation */}
          <div className="flex justify-center mb-8 space-x-4">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index ? 'bg-primary scale-125' : 'bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          {/* Active Portfolio Item */}
          <div className="max-w-4xl mx-auto">
            <div className={`card-premium text-center bg-gradient-to-r ${portfolioItems[activeProject].color} p-12 rounded-xl`}>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {portfolioItems[activeProject].title}
              </h3>
              <p className="text-lg text-white/90">
                {portfolioItems[activeProject].description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CAT;