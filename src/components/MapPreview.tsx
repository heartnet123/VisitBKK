
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { Link } from 'react-router-dom';
import Map from './Map';

const MapPreview = () => {
  // Sample waypoints for the preview
  const previewWaypoints = [
    { name: "Ban Phan Thom", coords: [100.5033, 13.7537] as [number, number] },
    { name: "Khlong Ong Ang", coords: [100.4980, 13.7450] as [number, number] },
    { name: "Kudeejeen", coords: [100.4885, 13.7422] as [number, number] },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900">Interactive Map Experience</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore hidden gems across Bangkok with our interactive map. Discover points of interest, 
              walking routes, and local recommendations to create your perfect itinerary.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-thai-blue/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-thai-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Points of Interest</h3>
                  <p className="text-gray-600">Discover local attractions, restaurants, shops, and cultural sites in each neighborhood.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-thai-blue/10 p-2 rounded-full">
                  <Navigation className="h-5 w-5 text-thai-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Walking & Cycling Routes</h3>
                  <p className="text-gray-600">Get optimized routes with estimated travel times to explore the neighborhoods efficiently.</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-thai-blue hover:bg-thai-blue/90">
              <Link to="/map" className="flex items-center gap-2">
                Explore Full Map
                <Navigation className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
              <div className="aspect-video">
                <Map 
                  waypoints={previewWaypoints}
                  className="h-full w-full"
                  interactive={false}
                  showNavigation={false}
                />
                
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/30 pointer-events-none"></div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs text-center">
                    <p className="text-gray-600 text-sm">Interactive map preview</p>
                    <p className="font-medium text-thai-blue">Click to explore the full map experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPreview;
