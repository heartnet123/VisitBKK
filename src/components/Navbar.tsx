
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Map, MessageSquare, Navigation } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Navigation className="h-6 w-6 text-thai-blue" />
            <span className="text-xl font-bold text-thai-blue">Visit BKK</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-thai-blue transition-colors">Home</Link>
          <Link to="/neighborhoods" className="text-sm font-medium hover:text-thai-blue transition-colors">Neighborhoods</Link>
          <Link to="/map" className="text-sm font-medium hover:text-thai-blue transition-colors">Interactive Map</Link>
          <Link to="/chatbot" className="text-sm font-medium hover:text-thai-blue transition-colors">AI Assistant</Link>
          <Link to="/about" className="text-sm font-medium hover:text-thai-blue transition-colors">About Us</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-thai-blue">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="outline" className="hidden sm:flex">
            <Link to="/chatbot" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>Ask AI</span>
            </Link>
          </Button>
          <Button className="bg-thai-blue hover:bg-thai-blue/90">
            <Link to="/map" className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              <span>Explore Map</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
