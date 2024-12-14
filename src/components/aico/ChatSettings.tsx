import React, { useState } from 'react';
import { X, Trash2, Globe, Bot } from 'lucide-react';

interface ChatSettingsProps {
  onClose: () => void;
  onClearHistory: () => void;
}

export function ChatSettings({ onClose, onClearHistory }: ChatSettingsProps) {
  const [language, setLanguage] = useState('en');
  const [consultantType, setConsultantType] = useState('business');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' }
  ];

  const consultantTypes = [
    { id: 'business', name: 'Business Strategist', description: 'Focuses on business strategy and growth' },
    { id: 'technical', name: 'Technical Advisor', description: 'Specializes in technical implementation and architecture' },
    { id: 'financial', name: 'Financial Analyst', description: 'Expert in financial planning and analysis' },
    { id: 'marketing', name: 'Marketing Consultant', description: 'Focuses on marketing strategy and growth' }
  ];

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all chat history? This action cannot be undone.')) {
      onClearHistory();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-dark-800 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-dark-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Language Settings */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Language</span>
              </div>
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:border-dark-600 dark:text-white"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Consultant Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <div className="flex items-center space-x-2">
                <Bot className="h-4 w-4" />
                <span>Consultant Type</span>
              </div>
            </label>
            <div className="space-y-2">
              {consultantTypes.map((type) => (
                <label
                  key={type.id}
                  className="flex items-start p-3 border border-gray-200 dark:border-dark-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700"
                >
                  <input
                    type="radio"
                    name="consultantType"
                    value={type.id}
                    checked={consultantType === type.id}
                    onChange={(e) => setConsultantType(e.target.value)}
                    className="mt-1 text-primary-600 focus:ring-primary-500"
                  />
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {type.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {type.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Clear History */}
          <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
            <button
              onClick={handleClearHistory}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
              <span>Clear Chat History</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end space-x-4 p-6 border-t border-gray-200 dark:border-dark-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}