import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { AccountInfo, InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from '../config/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  user: AccountInfo | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  demoLogin: () => void;
  isDemoUser: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { instance, accounts, inProgress } = useMsal();
  const [user, setUser] = useState<AccountInfo | null>(null);
  const [isDemoUser, setIsDemoUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (accounts.length > 0) {
          setUser(accounts[0]);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (inProgress === InteractionStatus.None) {
      initializeAuth();
    }
  }, [accounts, inProgress]);

  const login = async () => {
    try {
      setIsLoading(true);
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      setIsDemoUser(false);
      await instance.logoutPopup();
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const demoLogin = () => {
    setIsDemoUser(true);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: accounts.length > 0 || isDemoUser,
      user,
      login,
      logout,
      demoLogin,
      isDemoUser,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}