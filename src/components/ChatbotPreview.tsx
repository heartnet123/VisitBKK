
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { Link } from 'react-router-dom';

const ChatbotPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">AI-Powered Tour Guide</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get personalized recommendations and real-time assistance from our AI chatbot, designed to enhance your Bangkok experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-xl text-gray-900">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Our AI analyzes your preferences to suggest attractions, restaurants, and activities that match your interests.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-xl text-gray-900">Real-Time Answers</h3>
              <p className="text-gray-600">
                Ask questions about local customs, transportation options, opening hours, or anything else you need to know while exploring.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-xl text-gray-900">Authentic Local Insights</h3>
              <p className="text-gray-600">
                Discover hidden spots and authentic experiences recommended by Bangkok residents and experienced travelers.
              </p>
            </div>
            
            <Button className="mt-6 bg-thai-blue hover:bg-thai-blue/90">
              <Link to="/chatbot" className="flex items-center gap-2">
                Try the AI Assistant
                <MessageSquare className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="lg:col-span-3">
            <Card className="shadow-xl border-gray-200">
              <CardContent className="p-6">
                <div className="bg-gray-100 p-3 rounded-t-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-2 text-sm text-gray-500">Bangkok AI Assistant</div>
                  </div>
                </div>
                
                <div className="py-4 px-2 h-72 overflow-y-auto">
                  <div className="flex mb-4">
                    <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-700">I'm interested in exploring Bangkok's local neighborhoods. Any recommendations?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-4">
                    <div className="bg-thai-blue text-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">
                        I'd recommend visiting Ban Phan Thom for authentic Thai handicrafts or Khlong Ong Ang (Bangkok's Little India) for amazing food and shopping experiences. Both are less touristy and offer genuine local culture!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-700">How do I get to Ban Phan Thom from the city center?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-4">
                    <div className="bg-thai-blue text-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">
                        From the city center, you can take the MRT to Sam Yot station and then walk about 10 minutes. I can show you the exact walking route on our interactive map if you'd like!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-700">What's the best time to visit?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-thai-blue text-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">
                        For Ban Phan Thom, weekday mornings are best to avoid crowds. Many shops open around 9AM. The craft workshops are most active during weekdays, and local markets are liveliest on Saturday mornings!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex items-center">
                    <input 
                      type="text" 
                      className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-thai-blue focus:border-transparent" 
                      placeholder="Ask about Bangkok's hidden gems..."
                      disabled
                    />
                    <Button size="sm" className="ml-2 bg-thai-blue hover:bg-thai-blue/90">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPreview;
