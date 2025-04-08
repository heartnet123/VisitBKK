
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Bangkok tourism AI assistant. How can I help you discover Bangkok's hidden gems today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI response (would be replaced with real AI integration)
    setTimeout(() => {
      let responseText = "I'm still learning about Bangkok's hidden gems. This feature will be fully implemented in the future to provide you with personalized recommendations!";
      
      // Simple pattern matching for demo purposes
      if (input.toLowerCase().includes('ban phan thom')) {
        responseText = "Ban Phan Thom is a historic area with authentic Thai handicrafts and traditional houses. It's best visited in the morning when craft workshops are active. You can reach it via the MRT Sam Yot station.";
      } else if (input.toLowerCase().includes('khlong ong ang') || input.toLowerCase().includes('little india')) {
        responseText = "Khlong Ong Ang, also known as Bangkok's Little India, is filled with vibrant shops, spices, and authentic cuisine. Don't miss the weekend walking street market along the canal!";
      } else if (input.toLowerCase().includes('food') || input.toLowerCase().includes('eat')) {
        responseText = "Bangkok's hidden neighborhoods offer amazing culinary experiences! You might enjoy the street food at Talat Noi, the Indian cuisine in Khlong Ong Ang, or the Portuguese-influenced desserts in Kudeejeen.";
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="container py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bangkok AI Assistant</h1>
          <p className="text-gray-600 mt-2">
            Ask me anything about Bangkok's neighborhoods, attractions, or get personalized recommendations!
          </p>
        </div>
        
        <Card className="border border-gray-200 shadow-lg">
          <CardHeader className="bg-thai-blue/5 border-b border-gray-200">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-thai-blue" />
              AI Tourism Chatbot
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[500px] overflow-y-auto p-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user' 
                      ? 'bg-thai-blue text-white' 
                      : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 p-3 bg-gray-50">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Bangkok's hidden gems..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-thai-blue hover:bg-thai-blue/90">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Our AI is currently in development and will be enhanced with more detailed information about Bangkok's hidden neighborhoods.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
