import React, { useEffect } from "react";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactSection from "@/components/ReactSection";

const ReactComponents = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* <Navbar /> */}
      <main className="pt-20">
        <ReactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ReactComponents;
