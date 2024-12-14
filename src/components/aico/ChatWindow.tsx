import React, { useEffect, useRef } from 'react';
import { Bot, User } from 'lucide-react';
import type { Message } from '../../types/chat';
import ReactMarkdown from 'react-markdown';

interface ChatWindowProps {
  messages: Message[];
}

export function ChatWindow({ messages }: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-dark-900">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="bg-white dark:bg-dark-800 rounded-lg p-8 shadow-lg max-w-md">
            <Bot className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              How can I help you today?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              I'm your AI assistant, ready to help with business analysis, strategy planning, and more.
            </p>
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.role === 'assistant' ? 'bg-white dark:bg-dark-800' : ''
            } p-4 rounded-lg`}
          >
            <div className={`flex-shrink-0 rounded-full p-2 ${
              message.role === 'assistant' 
                ? 'bg-primary-100 dark:bg-primary-900' 
                : 'bg-gray-100 dark:bg-dark-700'
            }`}>
              {message.role === 'assistant' ? (
                <Bot className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              ) : (
                <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900 dark:text-white">
                  {message.role === 'assistant' ? 'AI Assistant' : 'You'}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}