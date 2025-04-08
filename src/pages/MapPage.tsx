
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import Map from '@/components/Map';

const neighborhoods = [
  {
    id: "ban-phan-thom",
    name: "Ban Phan Thom",
    center: [100.5033, 13.7537] as [number, number]
  },
  {
    id: "khlong-ong-ang",
    name: "Khlong Ong Ang",
    center: [100.4980, 13.7450] as [number, number]
  },
  {
    id: "kudeejeen",
    name: "Kudeejeen",
    center: [100.4885, 13.7422] as [number, number]
  },
  {
    id: "talat-noi",
    name: "Talat Noi",
    center: [100.5153, 13.7372] as [number, number]
  }
];

const routes = [
  {
    name: "Ban Phan Thom Tour",
    duration: "45 min",
    stops: 8,
    difficulty: "Easy",
    waypoints: [
      { name: "Baan Bat Alms Bowl Village", coords: [100.5033, 13.7537] as [number, number] },
      { name: "Monk's Supply Market", coords: [100.5038, 13.7541] as [number, number] },
      { name: "Wat Saket (Golden Mount)", coords: [100.5060, 13.7531] as [number, number] },
      { name: "Local Food Market", coords: [100.5045, 13.7544] as [number, number] }
    ]
  },
  {
    name: "Little India Explorer",
    duration: "1h 15m",
    stops: 12,
    difficulty: "Medium",
    waypoints: [
      { name: "Pahurat Market Entrance", coords: [100.4980, 13.7450] as [number, number] },
      { name: "Punjab Sweets", coords: [100.4985, 13.7453] as [number, number] },
      { name: "Spice Market", coords: [100.4990, 13.7457] as [number, number] },
      { name: "Royal India Restaurant", coords: [100.4988, 13.7463] as [number, number] }
    ]
  }
];

const MapPage = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<typeof routes[0] | null>(null);

  // Center for the map
  const selectedCenter = neighborhoods.find(n => n.id === selectedNeighborhood)?.center || [100.5018, 13.7563];
  
  // All waypoints to display
  const allWaypoints = neighborhoods.map(n => ({
    name: n.name,
    coords: n.center as [number, number]
  }));

  // Display route waypoints if a route is selected
  const displayWaypoints = selectedRoute ? selectedRoute.waypoints : 
                          (selectedNeighborhood ? allWaypoints.filter(w => w.name === neighborhoods.find(n => n.id === selectedNeighborhood)?.name) : 
                          allWaypoints);

  return (
    <div className="container py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Interactive Map</h1>
        <p className="text-gray-600 mt-2">
          Explore Bangkok's hidden neighborhoods, discover points of interest, and plan your routes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="border border-gray-200 shadow-lg h-[600px]">
            <CardContent className="p-0 h-full">
              <Map
                waypoints={displayWaypoints}
                className="h-full w-full"
                center={selectedCenter as [number, number]}
                zoom={selectedNeighborhood ? 15 : 12}
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4">
          <Card className="border border-gray-200 shadow">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Selected Neighborhoods</h3>
              
              <div className="space-y-3">
                {neighborhoods.map((neighborhood) => (
                  <Button 
                    key={neighborhood.id}
                    variant={selectedNeighborhood === neighborhood.id ? "default" : "outline"} 
                    className={`w-full justify-start text-left ${selectedNeighborhood === neighborhood.id ? 'bg-thai-blue hover:bg-thai-blue/90' : ''}`}
                    onClick={() => {
                      setSelectedNeighborhood(neighborhood.id);
                      setSelectedRoute(null);
                    }}
                  >
                    <MapPin className={`h-4 w-4 mr-2 ${selectedNeighborhood === neighborhood.id ? 'text-white' : 'text-thai-blue'}`} />
                    {neighborhood.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Suggested Routes</h3>
              
              <div className="space-y-3">
                {routes.map((route, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{route.name}</h4>
                      <span className="text-xs bg-thai-blue/10 text-thai-blue py-1 px-2 rounded">{route.duration}</span>
                    </div>
                    
                    <div className="flex justify-between mt-2 text-xs text-gray-600">
                      <span>{route.stops} stops</span>
                      <span>Difficulty: {route.difficulty}</span>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant={selectedRoute?.name === route.name ? "default" : "ghost"}
                      className={`mt-2 h-8 ${selectedRoute?.name === route.name ? 
                        'bg-thai-blue text-white hover:bg-thai-blue/90' : 
                        'text-thai-blue hover:text-thai-blue/80 p-0'}`}
                      onClick={() => setSelectedRoute(route)}
                    >
                      <Navigation className="h-3 w-3 mr-1" />
                      {selectedRoute?.name === route.name ? 'Selected' : 'View Route'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Click on a neighborhood or route to view details on the map. Zoom and pan to explore different areas.</p>
      </div>
    </div>
  );
};

export default MapPage;
