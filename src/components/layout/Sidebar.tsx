import React from 'react';
import { Brain, Users, BookOpen, Newspaper, Settings, UserCheck, LifeBuoy, Briefcase } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

function SidebarLink({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700 rounded-lg transition-colors duration-200 ${
          isActive ? 'bg-gray-100 text-primary-600 dark:bg-dark-700 dark:text-primary-400' : ''
        }`
      }
    >
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </NavLink>
  );
}

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white dark:bg-dark-900 border-r border-gray-200 dark:border-dark-700 fixed left-0 top-0 transition-colors">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="ServiceBridge" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">ServiceBridge</span>
          </div>
          <ThemeToggle />
        </div>
        
        <nav className="space-y-1">
          <SidebarLink to="/aico" icon={Brain}>
            AiCo
          </SidebarLink>
          <SidebarLink to="/news" icon={Newspaper}>
            News & Insights
          </SidebarLink>
          <SidebarLink to="/community" icon={Users}>
            Community.AI
          </SidebarLink>
          <SidebarLink to="/knowledge" icon={BookOpen}>
            Knowledge.Hub
          </SidebarLink>
          <SidebarLink to="/experts" icon={UserCheck}>
            Experts
          </SidebarLink>
          <SidebarLink to="/workspace" icon={Briefcase}>
            Workspace
          </SidebarLink>
          <SidebarLink to="/support" icon={LifeBuoy}>
            Support
          </SidebarLink>
          <SidebarLink to="/admin" icon={Settings}>
            Admin Center
          </SidebarLink>
        </nav>
      </div>
    </div>
  );
}