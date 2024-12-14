import React, { useState } from 'react';
import { MessageSquare, Settings, Search, Clock, Trash2 } from 'lucide-react';
import { ChatSettings } from './ChatSettings';

export function ChatSidebar() {
  const [showSettings, setShowSettings] = useState(false);
  const [recentChats] = useState([
    { id: '1', title: 'Project Planning Discussion', timestamp: '2024-02-20T10:00:00Z' },
    { id: '2', title: 'Technical Requirements', timestamp: '2024-02-19T15:30:00Z' },
    { id: '3', title: 'Market Analysis', timestamp: '2024-02-18T09:15:00Z' },
  ]);

  const handleClearHistory = () => {
    // Implement clear history logic
    console.log('Clearing chat history');
  };

  return (
    <div className="w-80 border-r border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-dark-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="search"
            placeholder="Search chats..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Recent Chats
          </h2>
        </div>
        <div className="space-y-1">
          {recentChats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-700 group"
            >
              <div className="flex-1 min-w-0 cursor-pointer">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {chat.title}
                    </p>
                    <div className="flex items-center mt-1">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(chat.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                className="p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-100 dark:hover:bg-dark-600 rounded transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle delete
                }}
              >
                <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-dark-700">
        <button 
          onClick={() => setShowSettings(true)}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white w-full px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </div>

      {showSettings && (
        <ChatSettings
          onClose={() => setShowSettings(false)}
          onClearHistory={handleClearHistory}
        />
      )}
    </div>
  );
}