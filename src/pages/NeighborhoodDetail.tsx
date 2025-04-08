
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Navigation, Star, MessageSquare, ArrowLeft } from "lucide-react";
import Map from '@/components/Map';

// Sample neighborhood data
const neighborhoodsData = {
  "ban-phan-thom": {
    name: "Ban Phan Thom",
    description: "Ban Phan Thom is a historic area in Bangkok's old town known for its authentic Thai handicrafts and traditional houses. This neighborhood preserves many aspects of traditional Thai culture and is home to skilled artisans who continue to practice age-old crafts.",
    fullDescription: "Ban Phan Thom is one of Bangkok's oldest communities, dating back to the early Rattanakosin period. Located in the heart of the old city, this neighborhood represents the authentic Thai way of life that has survived amid rapid urban development. Visitors can experience traditional Thai crafts being made by skilled artisans, explore narrow lanes filled with historic wooden houses, and discover local markets that have served residents for generations. The area is particularly known for its almsbow-making tradition, handmade monk supplies, and traditional Thai desserts that are increasingly rare to find elsewhere in the city.",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    attractionCount: 12,
    type: "Cultural",
    highlights: ["Traditional craft workshops", "Ancient wooden houses", "Local markets"],
    attractions: [
      {
        name: "Baan Bat Alms Bowl Village",
        description: "One of the last communities in Thailand still handcrafting monk's alms bowls using traditional methods.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
      },
      {
        name: "Monk's Supply Shops",
        description: "Shops selling handmade items specifically for Buddhist monks, from robes to ceremonial fans.",
        image: "https://images.unsplash.com/photo-1580889240911-2cb0bfd20897?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.3
      },
      {
        name: "Traditional Thai Dessert Shops",
        description: "Family-run shops making authentic Thai desserts using recipes passed down through generations.",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8
      }
    ],
    routes: [
      {
        name: "Cultural Heritage Walk",
        duration: "45 minutes",
        stops: 7,
        difficulty: "Easy",
        description: "Explore Ban Phan Thom's rich cultural heritage by visiting traditional craft workshops, historic temples, and local shops.",
        waypoints: [
          { name: "Baan Bat Alms Bowl Village", coords: [100.5033, 13.7537] as [number, number], description: "Start your journey at this historic community making traditional monk bowls" },
          { name: "Monk's Supply Market", coords: [100.5038, 13.7541] as [number, number], description: "Browse through shops selling traditional monk supplies" },
          { name: "Wat Saket (Golden Mount)", coords: [100.5060, 13.7531] as [number, number], description: "Visit this historic temple for panoramic views" },
          { name: "Local Food Market", coords: [100.5045, 13.7544] as [number, number], description: "Sample authentic Thai snacks and desserts" },
          { name: "Handicraft Workshop", coords: [100.5039, 13.7547] as [number, number], description: "Watch artisans create traditional handcrafted items" },
          { name: "Historic Wooden Houses", coords: [100.5028, 13.7539] as [number, number], description: "Admire the traditional architecture" },
          { name: "Community Rest Area", coords: [100.5035, 13.7535] as [number, number], description: "End your tour at this local relaxation spot" }
        ]
      },
      {
        name: "Artisan Workshop Tour",
        duration: "1.5 hours",
        stops: 5,
        difficulty: "Easy",
        description: "Visit the workshops of traditional Thai artisans and learn about their craft techniques passed down through generations.",
        waypoints: [
          { name: "Traditional Fabric Shop", coords: [100.5031, 13.7538] as [number, number], description: "Start here to see traditional Thai textiles" },
          { name: "Alms Bowl Workshop", coords: [100.5033, 13.7537] as [number, number], description: "Learn how monks' alms bowls are handcrafted" },
          { name: "Woodcarving Studio", coords: [100.5042, 13.7540] as [number, number], description: "Watch expert woodcarvers create intricate pieces" },
          { name: "Thai Dessert Kitchen", coords: [100.5045, 13.7538] as [number, number], description: "See how traditional Thai sweets are made" },
          { name: "Community Craft Center", coords: [100.5037, 13.7536] as [number, number], description: "End your tour at this hub of local artisanship" }
        ]
      }
    ]
  },
  "khlong-ong-ang": {
    name: "Khlong Ong Ang",
    description: "Khlong Ong Ang, also known as Bangkok's Little India, is a vibrant area filled with colorful textile shops, spice vendors, and authentic Indian restaurants. The canal-side walking street offers a unique cultural experience.",
    fullDescription: "Khlong Ong Ang has evolved into Bangkok's vibrant Little India, where visitors can experience the rich cultural heritage of the Indian community in Thailand. The area is centered around Pahurat Road and extends to the recently revitalized Khlong Ong Ang canal, which has been transformed into a weekend walking street. The neighborhood buzzes with activity as shops sell everything from colorful textiles and fabrics to traditional Indian sweets and spices. The area represents one of Bangkok's most diverse cultural enclaves and provides a fascinating glimpse into the city's multicultural character. Recent revitalization efforts have made the canal area more accessible and appealing to visitors while preserving the area's unique identity.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    attractionCount: 15,
    type: "Food & Shopping",
    highlights: ["Indian textiles and fabrics", "Authentic Indian cuisine", "Weekend market", "Canal-side walking street"],
    attractions: [
      {
        name: "Pahurat Textile Market",
        description: "A labyrinth of shops selling beautiful fabrics, textiles, and clothing materials at wholesale prices.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
      },
      {
        name: "Khlong Ong Ang Walking Street",
        description: "A revitalized canal-side walking street featuring food vendors, street performances, and local art on weekends.",
        image: "https://images.unsplash.com/photo-1526139334526-f591a54b477c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
      },
      {
        name: "Sri Guru Singh Sabha Temple",
        description: "The largest Sikh temple in Thailand, offering a glimpse into the Sikh community's religious practices.",
        image: "https://images.unsplash.com/photo-1542055753-38b888c27f3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9
      }
    ],
    routes: [
      {
        name: "Little India Food Tour",
        duration: "2 hours",
        stops: 6,
        difficulty: "Easy",
        description: "Savor the flavors of Little India with authentic cuisine, sweet shops, and spice markets. A culinary journey through Bangkok's Indian community.",
        waypoints: [
          { name: "Pahurat Market Entrance", coords: [100.4980, 13.7450] as [number, number], description: "Begin your tour at the entrance to Little India" },
          { name: "Punjab Sweets", coords: [100.4985, 13.7453] as [number, number], description: "Try traditional Indian sweets and snacks" },
          { name: "Spice Market", coords: [100.4990, 13.7457] as [number, number], description: "Explore fragrant spices from across India" },
          { name: "Royal India Restaurant", coords: [100.4988, 13.7463] as [number, number], description: "Enjoy authentic North Indian cuisine" },
          { name: "South Indian Canteen", coords: [100.4982, 13.7461] as [number, number], description: "Sample delicious dosas and other South Indian specialties" },
          { name: "India Emporium Food Court", coords: [100.4975, 13.7455] as [number, number], description: "End your tour with a variety of Indian street foods" }
        ]
      },
      {
        name: "Canal and Market Explorer",
        duration: "1 hour",
        stops: 14,
        difficulty: "Easy",
        description: "Walk along the revitalized Khlong Ong Ang canal and explore the local markets featuring traditional Thai food, shops, and scenic viewpoints.",
        waypoints: [
          { name: "MRT หัวลำโพง (Hua Lamphong)", coords: [100.5170, 13.7373] as [number, number], description: "Start your journey at this major transit hub" },
          { name: "จุดชมวิวคลองโอ่งอ่าง (Khlong Ong Ang Viewpoint)", coords: [100.5005, 13.7475] as [number, number], description: "Enjoy the scenic views of the revitalized canal" },
          { name: "สถานีสะพานหัน (Saphan Han Station)", coords: [100.5010, 13.7480] as [number, number], description: "Visit this historic area with its traditional architecture" },
          { name: "เจ้บ๊วย สะพานหัน (Jae Buay Saphan Han)", coords: [100.5015, 13.7485] as [number, number], description: "Try delicious local snacks at this famous spot" },
          { name: "ส้มตำป้าจ่อย (Som Tam Pa Joy)", coords: [100.5020, 13.7490] as [number, number], description: "Taste authentic Isaan-style papaya salad" },
          { name: "ข้าวแกงแม่อ้อน (Mae On Rice & Curry)", coords: [100.5025, 13.7495] as [number, number], description: "Enjoy traditional Thai rice and curry dishes" },
          { name: "Nirvana Restaurant", coords: [100.5030, 13.7500] as [number, number], description: "Sample Indian cuisine in a comfortable setting" },
          { name: "Mama's Indian Cuisine", coords: [100.5035, 13.7505] as [number, number], description: "Experience home-style Indian cooking" },
          { name: "Mama Restaurant", coords: [100.5040, 13.7510] as [number, number], description: "Try a variety of Thai and international dishes" },
          { name: "Tony's Restaurant", coords: [100.5045, 13.7515] as [number, number], description: "Enjoy fusion cuisine in a relaxed atmosphere" },
          { name: "ปากคลองตลาด (Pak Khlong Talat Flower Market)", coords: [100.5050, 13.7520] as [number, number], description: "Explore Bangkok's famous flower market" },
          { name: "จุดชมวิวสะพานพุทธ (Phra Phuttha Yodfa Bridge Viewpoint)", coords: [100.5055, 13.7525] as [number, number], description: "Take in stunning views of the Chao Phraya River and Memorial Bridge" },
          { name: "ลาน ร.1 (King Rama I Monument Plaza)", coords: [100.5060, 13.7530] as [number, number], description: "Visit this historic monument and relax in the plaza" },
          { name: "จุดชมวิวสวนลอยฟ้าเจ้าพระยา (Chao Phraya Sky Park Viewpoint)", coords: [100.5070, 13.7540] as [number, number], description: "End your tour at Bangkok's elevated park with panoramic river views" }
        ]
      }
    ]
  }
};

const RouteDetail = ({ route, onClose }: { route: any, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">{route.name}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-3 w-3 mr-1" />
              <span>{route.duration}</span>
              <span className="mx-2">•</span>
              <span>{route.stops} stops</span>
              <span className="mx-2">•</span>
              <span>Difficulty: {route.difficulty}</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Back
          </Button>
        </div>
        
        <div className="p-4">
          <p className="text-gray-700 mb-6">{route.description}</p>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-gray-900 mb-2">Route Map</h4>
            <div className="aspect-video bg-gray-200 rounded relative">
              <Map
                waypoints={route.waypoints}
                className="h-full w-full"
                showNavigation={false}
              />
            </div>
          </div>
          
          <div className="relative pb-6">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-thai-blue/20"></div>
            
            {route.waypoints.map((waypoint: any, index: number) => (
              <div key={index} className="relative mb-6 pl-10">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-thai-blue flex items-center justify-center text-white text-xs">
                  {index + 1}
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900">{waypoint.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{waypoint.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end">
            <Button className="bg-thai-blue hover:bg-thai-blue/90">
              Get Full Directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NeighborhoodDetail = () => {
  const { id } = useParams();
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  
  // In a real application, you would fetch this data from an API
  // For now, we'll use our sample data and handle the case where the ID doesn't exist
  const neighborhood = id ? neighborhoodsData[id as keyof typeof neighborhoodsData] : null;
  
  if (!neighborhood) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Neighborhood not found</h1>
        <p className="mt-4 text-gray-600">The neighborhood you're looking for doesn't exist or hasn't been added yet.</p>
        <Button className="mt-6 bg-thai-blue hover:bg-thai-blue/90">
          <Link to="/neighborhoods">Back to All Neighborhoods</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      {selectedRoute && (
        <RouteDetail 
          route={selectedRoute} 
          onClose={() => setSelectedRoute(null)} 
        />
      )}
      
      <div className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${neighborhood.image}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        </div>
        
        <div className="relative container h-full flex items-end pb-10 px-4">
          <div className="text-white">
            <div className="flex items-center mb-2">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-medium text-white px-2 py-1 rounded mr-2">
                {neighborhood.type}
              </span>
              <span className="inline-block bg-thai-blue/90 backdrop-blur-sm text-xs font-medium text-white px-2 py-1 rounded">
                {neighborhood.attractionCount} Attractions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{neighborhood.name}</h1>
            <p className="mt-2 text-xl max-w-2xl">{neighborhood.description}</p>
          </div>
        </div>
      </div>
      
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">About {neighborhood.name}</h2>
              <p className="text-gray-700">{neighborhood.fullDescription}</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-12">Top Attractions</h2>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {neighborhood.attractions?.map((attraction, index) => (
                <Card key={index} className="overflow-hidden border border-gray-200">
                  <div className="h-48 relative">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{attraction.name}</h3>
                      <div className="flex items-center bg-amber-50 px-2 py-1 rounded text-amber-600">
                        <Star className="h-3 w-3 fill-amber-500 text-amber-500 mr-1" />
                        <span className="text-xs font-medium">{attraction.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Plan Your Visit</h3>
                
                <div className="space-y-4">
                  <Button className="w-full bg-thai-blue hover:bg-thai-blue/90">
                    <Link to="/map" className="flex items-center justify-center gap-2 w-full">
                      <MapPin className="h-4 w-4" />
                      View on Interactive Map
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Link to="/chatbot" className="flex items-center justify-center gap-2 w-full">
                      <MessageSquare className="h-4 w-4" />
                      Ask AI Assistant
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">Suggested Routes</h4>
                  
                  {neighborhood.routes?.map((route, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200 mb-3">
                      <div className="flex items-center justify-between">
                        <h5 className="font-medium text-sm">{route.name}</h5>
                        <div className="flex items-center text-thai-blue">
                          <Clock className="h-3 w-3 mr-1" />
                          <span className="text-xs">{route.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-2 text-xs text-gray-600">
                        <span>{route.stops} stops</span>
                        <span>Difficulty: {route.difficulty}</span>
                      </div>
                      
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="mt-2 h-8 text-thai-blue hover:text-thai-blue/80 p-0"
                        onClick={() => setSelectedRoute(route)}
                      >
                        <Navigation className="h-3 w-3 mr-1" />
                        View Route
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Getting There</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">By MRT:</span>
                    <p className="text-gray-600">Sam Yot station (Blue Line), then a 10-minute walk</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">By Bus:</span>
                    <p className="text-gray-600">Routes 53, 124, and 503 stop nearby</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">By Boat:</span>
                    <p className="text-gray-600">Phanfa Pier, then a 15-minute walk</p>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12">
          <Button variant="outline">
            <Link to="/neighborhoods" className="flex items-center gap-2">
              Back to All Neighborhoods
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodDetail;
