
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div>
      <div className="bg-thai-blue text-white py-16">
        <div className="container px-4">
          <h1 className="text-4xl font-bold">About Our Project</h1>
          <p className="text-xl mt-4 max-w-3xl">
            Learn about our mission to promote community-based tourism in Bangkok's hidden neighborhoods.
          </p>
        </div>
      </div>
      
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p>
              Our project aims to promote sustainable community-based tourism in Bangkok by highlighting lesser-known neighborhoods that offer authentic local experiences. 
              By incorporating these areas into tourist itineraries, we can help distribute tourism revenue to local communities rather than concentrating it in major tourist attractions.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10">The Problem We're Solving</h2>
            <p>
              Bangkok tourism is heavily concentrated in a few major attractions, leaving many fascinating local neighborhoods undiscovered by visitors. 
              These hidden gems hold rich cultural heritage, authentic experiences, and unique stories that most tourists never get to experience.
            </p>
            <p>
              Additionally, current tourism resources often provide insufficient information about these neighborhoods, with unclear directions, limited attraction listings, 
              and inadequate context about what makes these areas special.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10">Our Solution</h2>
            <p>
              We've created an AI-powered platform that offers:
            </p>
            <ul>
              <li>Detailed information about Bangkok's hidden neighborhoods</li>
              <li>Interactive maps showing points of interest and optimized routes</li>
              <li>An AI chatbot providing personalized recommendations and real-time assistance</li>
              <li>Curated content from both local residents and experienced travelers</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10">Our Research Approach</h2>
            <p>
              We collect data through:
            </p>
            <ul>
              <li>Surveys with foreign tourists and domestic Thai tourists to understand information-seeking behaviors and challenges</li>
              <li>Interviews with Bangkok residents about their favorite spots in various neighborhoods</li>
              <li>Analysis of existing tourism platforms and their limitations</li>
              <li>Collaboration with local communities and businesses in featured neighborhoods</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10">Our Team</h2>
            <p>
              We are a group of students passionate about sustainable tourism, technology, and cultural preservation. Our team combines expertise in tourism management, 
              artificial intelligence, web development, and urban studies to create an innovative solution for exploring Bangkok's hidden gems.
            </p>
          </div>
          
          <div>
            <Card className="sticky top-6 border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-6">
                  We'd love to hear from you! If you have any questions, suggestions, or would like to contribute to our project, please get in touch.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-thai-blue focus:border-thai-blue"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-thai-blue focus:border-thai-blue"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button className="w-full bg-thai-blue hover:bg-thai-blue/90 text-white py-2 px-4 rounded-md transition-colors">
                    Send Message
                  </button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Project Information</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Project Type:</span> Final Year Project
                    </p>
                    <p>
                      <span className="font-medium">Inspired By:</span>{' '}
                      <a href="https://www.visitbruges.be/en" className="text-thai-blue hover:underline" target="_blank" rel="noopener noreferrer">
                        Visit Bruges
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">University:</span> [Your University Name]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
