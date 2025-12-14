import { useState } from "react";
import { X, Send, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
        aria-label="Open chat"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L2 22l5.71-.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm2.07-7.75l-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
      </button>

      {/* Chat Dialog */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[600px] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a1f35] to-[#2d3555] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">ENHANCE Assistant</h3>
                <p className="text-gray-300 text-xs">Powered by ENHANCE TECH</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Date */}
          <div className="text-center py-3 text-muted-foreground text-sm border-b border-border">
            {today}
          </div>

          {/* Chat Content */}
          <div className="p-4 h-[320px] overflow-y-auto space-y-4 bg-muted/30">
            {/* Bot Message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <div className="flex-1">
                <div className="bg-background rounded-2xl rounded-tl-sm p-4 shadow-sm border border-border">
                  <p className="text-foreground text-sm leading-relaxed">
                    Hi there! I'm ENHANCE Assistant, your virtual guide to IT solutions and services. How can I help you today?
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span>{currentTime}</span>
                  <div className="flex items-center gap-1 ml-2">
                    <button className="hover:text-primary transition-colors p-1">
                      <ThumbsUp className="w-3.5 h-3.5" />
                    </button>
                    <button className="hover:text-primary transition-colors p-1">
                      <ThumbsDown className="w-3.5 h-3.5" />
                    </button>
                    <button className="hover:text-primary transition-colors p-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-border bg-background">
            <div className="flex flex-wrap gap-2 mb-3">
              <a
                href="/contact"
                className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
              >
                Talk to Sales
              </a>
              <a
                href="/demo"
                className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="/contact"
                className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
              >
                Get Support
              </a>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-border bg-background">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
              <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center mt-2">
              By using this chat, you agree to our Privacy Policy
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
