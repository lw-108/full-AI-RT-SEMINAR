import React, { useEffect } from "react";
import ChromaGrid from '@/components/ChromaGrid'

const items = [
  {
    image: "/shadcn.png", // Use absolute path from public folder
    title: "Shadcn UI",
    subtitle: "Reusable Components",
    handle: "@shadcn",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://ui.shadcn.com/"
  },
  {
    image: "/reactbits.png",
    title: "React Bits",
    subtitle: "Patterns & Examples",
    handle: "@reactbits",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://reactbits.dev"
  },
  {
    image: "/magic.png",
    title: "Magic UI",
    subtitle: "Animated Components",
    handle: "@magicui",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://magicui.design"
  },
  {
    image: "/ant.jpg",
    title: "Ant Design",
    subtitle: "Enterprise Components",
    handle: "@antdesign",
    borderColor: "#EF4444",
    gradient: "linear-gradient(145deg, #EF4444, #000)",
    url: "https://ant.design"
  },
  {
    image: "/chakra.png",
    title: "Chakra UI",
    subtitle: "Modular Components",
    handle: "@chakraui",
    borderColor: "#319795",
    gradient: "linear-gradient(145deg, #319795, #000)",
    url: "https://chakra-ui.com"
  },
  {
    image: "/ace.png",
    title: "Ace Design",
    subtitle: "Customizable UI",
    handle: "@aceternity",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://ui.aceternity.com/"
  },
  {
    image: "/radix.png",
    title: "Radix UI",
    subtitle: "Primitives & Icons",
    handle: "@radixui",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://radix-ui.com"
  },
  {
    image: "/hero.jpg",
    title: "Hero UI",
    subtitle: "Mordern Upgraded UI library",
    handle: "@hero",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://www.heroui.com/"
  },
  {
    image: "/mvp.png",
    title: "MVP Blocks",
    subtitle: "Red Focused UI Library",
    handle: "@mvpblocks",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://blocks.mvp-subha.me/"
  },
  {
    image: "/kibo.webp",
    title: "Framer Motion",
    subtitle: "Animations Library",
    handle: "@framermotion",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://www.kibo-ui.com/"
  },
  {
    image: "/skiper.png",
    title: "Skiper Uncommon",
    subtitle: "Animations Library",
    handle: "@skiper",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://skiper-ui.com/"
  },
];

const ReactComps = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "50px" // Add margin to prevent early triggering
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-background transition-colors duration-300 relative overflow-hidden" 
      id="react-comps"
      style={{ isolation: 'isolate' }} // Creates new stacking context
    >
      {/* Background with proper z-index */}
      <div className="absolute inset-0 bg-background -z-10" />
      
      <main className="relative z-10 pt-20">
        <section className="py-16 bg-background">
          <div className="section-container opacity-0 animate-on-scroll">
            {/* Header Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="pulse-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">⚛️</span>
                <span>React Components</span>
              </div>
            </div>

            {/* Title Section */}
            <div className="mb-12">
              <h1 className="text-5xl font-display font-bold mb-8 text-foreground">
                React UI Components Library
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Explore our collection of reusable React components built with TypeScript and TailwindCSS. 
                Discover amazing UI libraries and tools to enhance your development workflow.
              </p>
            </div>

            {/* ChromaGrid Container - Now scrollable */}
            <div 
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-sm border border-border/50"
              style={{ 
                height: '600px', 
                minHeight: '600px',
                maxHeight: '80vh'
              }}
            >
              {/* Scrollable wrapper for ChromaGrid */}
              <div className="w-full h-full overflow-auto">
                <div className="min-w-full min-h-full flex items-center justify-center">
                  <ChromaGrid
                    items={items}
                    radius={280}
                    damping={0.4}
                    fadeOut={0.7}
                    ease="power3.out"
                  />
                </div>
                
                {/* Overlay gradient for better visual separation */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/10 via-transparent to-background/5" />
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                Click and drag to explore different React UI libraries and frameworks
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Spacer to ensure proper separation from next section */}
      <div className="h-16 bg-background" />
    </div>
  );
};

export default ReactComps;