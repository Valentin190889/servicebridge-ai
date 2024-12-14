import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { DashboardHeader } from '../components/layout/DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-800 transition-colors">
      <Sidebar />
      <div className="pl-64">
        <DashboardHeader />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}