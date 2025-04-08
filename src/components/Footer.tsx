import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Navigation className="h-6 w-6 text-thai-gold" />
              <span className="text-xl font-bold text-white">Visit BKK</span>
            </div>
            <p className="text-sm text-gray-400">
              Discover authentic local experiences in Bangkok's hidden neighborhoods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-thai-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/neighborhoods" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">Neighborhoods</Link>
              </li>
              <li>
                <Link to="/map" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">Interactive Map</Link>
              </li>
              <li>
                <Link to="/itineraries" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">Suggested Itineraries</Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">AI Assistant</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Featured Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/neighborhoods/ban-phan-thom" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">Ban Phan Thom</Link>
              </li>
              <li>
                <Link to="/neighborhoods/khlong-ong-ang" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">Khlong Ong Ang (Little India)</Link>
              </li>
              <li>
                <Link to="/neighborhoods/kudeejeen" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">Kudeejeen</Link>
              </li>
              <li>
                <Link to="/neighborhoods/talat-noi" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">Talat Noi</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-thai-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">info@hiddenbangkok.com</span>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/feedback" className="text-sm text-gray-400 hover:text-thai-gold transition-colors">Submit Feedback</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Visit BKK. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-thai-gold transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-thai-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
