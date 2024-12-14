import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface UserProfile {
  name: string;
  email: string;
  avatarUrl?: string;
}

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Mock user data - in a real app, this would come from your auth system
  const userProfile: UserProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    navigate('/admin');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
      >
        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center overflow-hidden">
          {userProfile.avatarUrl ? (
            <img
              src={userProfile.avatarUrl}
              alt={userProfile.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <User className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-dark-800 ring-1 ring-black ring-opacity-5">
          <div className="p-4 border-b border-gray-200 dark:border-dark-700">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center overflow-hidden">
                {userProfile.avatarUrl ? (
                  <img
                    src={userProfile.avatarUrl}
                    alt={userProfile.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-6 w-6 text-gray-400" />
                )}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">{userProfile.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{userProfile.email}</div>
              </div>
            </div>
          </div>
          <div className="py-1">
            <button
              onClick={handleProfileClick}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
            >
              <Settings className="h-4 w-4 mr-3" />
              Profile Settings
            </button>
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-dark-700"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}