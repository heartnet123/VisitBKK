
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ChatbotPage from "@/pages/ChatbotPage";
import MapPage from "@/pages/MapPage";
import NeighborhoodsPage from "@/pages/NeighborhoodsPage";
import NeighborhoodDetail from "@/pages/NeighborhoodDetail";
import AboutPage from "@/pages/AboutPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
      <Route path="/neighborhoods/:id" element={<NeighborhoodDetail />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
