
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedNeighborhoods from '@/components/FeaturedNeighborhoods';
import MapPreview from '@/components/MapPreview';
import ChatbotPreview from '@/components/ChatbotPreview';

const Index = () => {
  return (
    <div>
      <Hero />
      <FeaturedNeighborhoods />
      <MapPreview />
      <ChatbotPreview />
    </div>
  );
};

export default Index;
