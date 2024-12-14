import React, { useState } from 'react';
import { TicketList } from '../components/support/TicketList';
import { NewTicketModal } from '../components/support/NewTicketModal';
import { TicketStats } from '../components/support/TicketStats';
import { TicketView } from '../components/support/TicketView';
import { TicketStatusFilter } from '../components/support/TicketStatusFilter';
import { Search } from 'lucide-react';
import type { Ticket, TicketStatus } from '../types/support';

export function Support() {
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<TicketStatus | null>(null);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Support Center</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Get help and track your support requests
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="search"
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
            />
          </div>
          <TicketStatusFilter onFilterChange={setStatusFilter} />
          <button
            onClick={() => setShowNewTicketModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <span>New Ticket</span>
          </button>
        </div>
      </div>

      <TicketStats />
      
      <TicketList
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        onTicketClick={setSelectedTicket}
      />

      {showNewTicketModal && (
        <NewTicketModal onClose={() => setShowNewTicketModal(false)} />
      )}

      {selectedTicket && (
        <TicketView
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
}