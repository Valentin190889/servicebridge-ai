import React, { useState, useRef } from 'react';
import { Send, Mic, MicOff, Plus, Search } from 'lucide-react';
import { ChatWindow } from '../components/aico/ChatWindow';
import { ChatSidebar } from '../components/aico/ChatSidebar';
import type { Message } from '../types/chat';

export function AiCo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date().toISOString(),
      type: 'text',
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Thank you for your message. I am processing your request...',
        role: 'assistant',
        timestamp: new Date().toISOString(),
        type: 'text',
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const toggleRecording = () => {
    if (!isRecording) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          setIsRecording(true);
        })
        .catch((err) => {
          console.error('Error accessing microphone:', err);
        });
    } else {
      setIsRecording(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatSidebar />
      
      <div className="flex-1 flex flex-col bg-white dark:bg-dark-800">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-700">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Virtual Consultant</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Your AI-powered business assistant</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="search"
                placeholder="Search conversations..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setMessages([])}
              className="flex items-center space-x-2 px-4 py-2 text-white bg-primary-600 rounded-lg hover:bg-primary-700"
            >
              <Plus className="h-4 w-4" />
              <span>New Chat</span>
            </button>
          </div>
        </div>

        <ChatWindow messages={messages} />

        <div className="border-t border-gray-200 dark:border-dark-700 p-4 bg-white dark:bg-dark-800">
          <div className="max-w-4xl mx-auto flex items-end space-x-4">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="w-full resize-none rounded-lg border border-gray-300 dark:border-dark-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:bg-dark-700 dark:text-white p-3 pr-12 max-h-32"
                rows={1}
              />
              <button
                onClick={toggleRecording}
                className="absolute right-3 bottom-3 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {isRecording ? (
                  <MicOff className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
              </button>
            </div>
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
              className="flex-shrink-0 p-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}