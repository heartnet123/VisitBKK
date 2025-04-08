
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

const neighborhoods = [
  {
    id: "ban-phan-thom",
    name: "Ban Phan Thom",
    description: "A historic area with authentic Thai handicrafts and traditional houses.",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 12,
    type: "Cultural",
    highlights: ["Traditional craft workshops", "Ancient houses", "Local markets"]
  },
  {
    id: "khlong-ong-ang",
    name: "Khlong Ong Ang",
    description: "Bangkok's vibrant Little India, filled with shops, spices, and authentic cuisine.",
    image: "https://images.unsplash.com/photo-1569273568309-37d60120a1bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 15,
    type: "Food & Shopping",
    highlights: ["Indian textiles and fabrics", "Authentic Indian cuisine", "Weekend market", "Canal-side walking street"]
  },
  {
    id: "kudeejeen",
    name: "Kudeejeen",
    description: "A riverside community with Portuguese-Thai heritage and traditional bakeries.",
    image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 10,
    type: "Heritage",
    highlights: ["Santa Cruz Church", "Portuguese-Thai bakeries", "Riverside views", "Cultural museums"]
  },
  {
    id: "talat-noi",
    name: "Talat Noi",
    description: "A charming Chinese community with antique shops and street food vendors.",
    image: "https://images.unsplash.com/photo-1588684986780-9dc7c2ae8438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 14,
    type: "Cultural & Food",
    highlights: ["Chinese shrines", "Auto parts markets", "Street food stalls", "Heritage buildings"]
  },
  {
    id: "nang-loeng",
    name: "Nang Loeng",
    description: "One of Bangkok's oldest markets with a rich culinary heritage and performing arts tradition.",
    image: "https://images.unsplash.com/photo-1516211881327-e5120a941edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 8,
    type: "Food & Culture",
    highlights: ["100-year-old market", "Traditional Thai desserts", "Dance performances", "Colonial architecture"]
  },
  {
    id: "charoen-krung",
    name: "Charoen Krung",
    description: "Bangkok's oldest paved road, now a creative district with art galleries and cafes.",
    image: "https://images.unsplash.com/photo-1564452615084-e5952614dbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: 18,
    type: "Arts & Lifestyle",
    highlights: ["Contemporary art spaces", "Third-wave coffee shops", "Historic buildings", "Creative studios"]
  }
];

const NeighborhoodsPage = () => {
  return (
    <div>
      <div className="bg-thai-blue text-white py-16">
        <div className="container px-4">
          <h1 className="text-4xl font-bold">Explore Bangkok's Hidden Neighborhoods</h1>
          <p className="text-xl mt-4 max-w-3xl">
            Discover authentic local communities beyond the tourist hotspots and experience the real Bangkok.
          </p>
        </div>
      </div>
      
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood) => (
            <Card key={neighborhood.id} className="overflow-hidden border-none shadow-lg neighborhood-card">
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
              
              <CardContent className="p-4">
                <h2 className="font-bold text-xl">{neighborhood.name}</h2>
                <p className="text-gray-600 mt-2">{neighborhood.description}</p>
                
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900">Highlights:</h3>
                  <ul className="mt-2 space-y-1">
                    {neighborhood.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-3 w-3 text-thai-blue mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <Button className="bg-thai-blue hover:bg-thai-blue/90">
                    <Link to={`/neighborhoods/${neighborhood.id}`}>
                      Explore More
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <Link to="/map" className="flex items-center">
                      View on Map
                      <MapPin className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodsPage;
