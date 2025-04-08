
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const neighborhoods = [
  {
    id: "ban-phan-thom",
    name: "Ban Phan Thom",
    description: "A historic area with authentic Thai handicrafts and traditional houses.",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 12,
    type: "Cultural"
  },
  {
    id: "khlong-ong-ang",
    name: "Khlong Ong Ang",
    description: "Bangkok's vibrant Little India, filled with shops, spices, and authentic cuisine.",
    image: "https://images.unsplash.com/photo-1569273568309-37d60120a1bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 15,
    type: "Food & Shopping"
  },
  {
    id: "kudeejeen",
    name: "Kudeejeen",
    description: "A riverside community with Portuguese-Thai heritage and traditional bakeries.",
    image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 10,
    type: "Heritage"
  },
  {
    id: "talat-noi",
    name: "Talat Noi",
    description: "A charming Chinese community with antique shops and street food vendors.",
    image: "https://images.unsplash.com/photo-1588684986780-9dc7c2ae8438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 14,
    type: "Cultural & Food"
  }
];

const FeaturedNeighborhoods = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Neighborhoods</h2>
            <p className="mt-2 text-lg text-gray-600 max-w-2xl">Discover local communities that offer authentic Thai experiences beyond the tourist hotspots.</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <Link to="/neighborhoods" className="flex items-center gap-2">
              View All Neighborhoods
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((neighborhood) => (
            <Card key={neighborhood.id} className="neighborhood-card overflow-hidden border-none shadow-lg">
              <div className="relative h-48">
                <img 
                  src={neighborhood.image} 
                  alt={neighborhood.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 px-2 py-1 rounded">
                    {neighborhood.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-block bg-thai-blue/90 backdrop-blur-sm text-xs font-medium text-white px-2 py-1 rounded">
                    {neighborhood.attractions} Attractions
                  </span>
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold text-xl">{neighborhood.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{neighborhood.description}</p>
                <Button variant="ghost" className="mt-3 p-0 h-auto text-thai-blue hover:text-thai-blue/80">
                  <Link to={`/neighborhoods/${neighborhood.id}`} className="flex items-center gap-1">
                    Explore
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNeighborhoods;
