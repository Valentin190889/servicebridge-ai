import React, { useState } from 'react';
import { ExpertList } from '../components/experts/ExpertList';
import { ExpertProfile } from '../components/experts/ExpertProfile';
import { ExpertFilters } from '../components/experts/ExpertFilters';
import { Search } from 'lucide-react';
import type { Expert } from '../types/expert';

export function Experts() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Expert Network</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Connect with industry experts and get personalized guidance
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="search"
              placeholder="Search experts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
            />
          </div>
          <ExpertFilters />
        </div>
      </div>

      <ExpertList onExpertClick={setSelectedExpert} searchQuery={searchQuery} />

      {selectedExpert && (
        <ExpertProfile expert={selectedExpert} onClose={() => setSelectedExpert(null)} />
      )}
    </div>
  );
}