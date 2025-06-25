import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Phone, Clock, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
interface ITSupportChatProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'joshua' | 'michael';
  timestamp: Date;
  agent?: {
    name: string;
    avatar: string;
    initials: string;
  };
}

const agents = {
  joshua: {
    name: "Joshua",
    avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM0Rjk2RkYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0yMCA2TDkgMTdMMTUgMTEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo8L3N2Zz4K",
    initials: "JL",
    specialty: "Network & Security",
    status: "online"
  },
  michael: {
    name: "Michael",
    avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMyOUI2RjYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiA3VjNhMSAxIDAgMCAwLTEtMUg5YTEgMSAwIDAgMC0xIDF2NGEyIDIgMCAwIDAtMiAydjZhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWOWEyIDIgMCAwIDAtMi0yeiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cjwvc3ZnPgo=",
    initials: "MJ",
    specialty: "Software & Hardware",
    status: "online"
  }
};

export default function ITSupportChat({ isOpen, onClose }: ITSupportChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Joshua from Puzzle Intelligence IT Support. How can I help you today?",
      sender: 'joshua',
      timestamp: new Date(),
      agent: agents.joshua
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [activeAgent, setActiveAgent] = useState<'joshua' | 'michael'>('joshua');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    const currentInput = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Get AI-powered response
    try {
      const response = await fetch('/api/support-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          agent: activeAgent
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: activeAgent,
        timestamp: new Date(),
        agent: agents[activeAgent]
      };

      setMessages(prev => [...prev, agentMessage]);
    } catch (error) {
      // Fallback response if AI fails
      const fallbackResponses = {
        joshua: "I'm here to help with network and security issues. For immediate assistance, please contact our support team at info@puzzlebusinessgroup.com",
        michael: "I specialize in software and hardware support. For detailed help, reach out to our team at info@puzzlebusinessgroup.com"
      };
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponses[activeAgent] || fallbackResponses.joshua,
        sender: activeAgent,
        timestamp: new Date(),
        agent: agents[activeAgent]
      };

      setMessages(prev => [...prev, agentMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const switchAgent = (agent: 'joshua' | 'michael') => {
    if (agent === activeAgent) return;
    
    setActiveAgent(agent);
    const switchMessage: Message = {
      id: Date.now().toString(),
      text: `Hi! I'm ${agents[agent].name}. I'll be taking over from here. How can I assist you?`,
      sender: agent,
      timestamp: new Date(),
      agent: agents[agent]
    };
    setMessages(prev => [...prev, switchMessage]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] h-[600px] p-0 flex flex-col">
        <DialogHeader className="p-4 pb-2 border-b">
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-blue-600" />
            Free IT Support Chat
          </DialogTitle>
          <div className="flex gap-2 mt-2">
            {Object.entries(agents).map(([key, agent]) => (
              <div
                key={key}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                  activeAgent === key 
                    ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => switchAgent(key as 'joshua' | 'michael')}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={agent.avatar} alt={agent.name} />
                  <AvatarFallback>{agent.initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{agent.name}</span>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">{agent.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender !== 'user' && message.agent && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={message.agent.avatar} alt={message.agent.name} />
                    <AvatarFallback>{message.agent.initials}</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] rounded-lg px-3 py-2 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {message.sender !== 'user' && message.agent && (
                    <div className="text-xs font-medium mb-1 opacity-70">
                      {message.agent.name}
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              <Clock className="h-3 w-3 mr-1" />
              Free Support - Response within minutes
            </Badge>
          </div>
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your IT question here..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="sm" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            Our IT experts are here to help with any technical questions
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}