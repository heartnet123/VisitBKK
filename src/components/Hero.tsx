
import React from 'react';
import { Button } from "@/components/ui/button";
import { Map, MessageSquare } from "lucide-react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582642880426-55809a6c2e96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white px-4">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold animate-fadeIn">
            Discover Bangkok's<br/>
            <span className="text-thai-gold">Hidden Gems</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Explore authentic local neighborhoods and experience the real Bangkok beyond the tourist attractions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-thai-blue hover:bg-thai-blue/90 text-white px-8 py-6 text-lg">
              <Link to="/map" className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                <span>Explore Map</span>
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/chatbot" className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <span>Ask Our AI</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
