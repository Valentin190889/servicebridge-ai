import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './config/auth';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Login } from './pages/auth/Login';
import { Pricing } from './pages/auth/Pricing';
import { AiCo } from './pages/AiCo';
import { KnowledgeHub } from './pages/knowledge/KnowledgeHub';
import { AdminCenter } from './pages/admin/AdminCenter';
import { News } from './pages/News';
import { Experts } from './pages/Experts';
import { Community } from './pages/Community';
import { Support } from './pages/Support';
import { useAuth } from './contexts/AuthContext';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/aico" />} />
        <Route path="/aico" element={<AiCo />} />
        <Route path="/knowledge" element={<KnowledgeHub />} />
        <Route path="/news" element={<News />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/community" element={<Community />} />
        <Route path="/support" element={<Support />} />
        <Route path="/admin" element={<AdminCenter />} />
        <Route path="*" element={<Navigate to="/aico" />} />
      </Routes>
    </DashboardLayout>
  );
}

export default function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </MsalProvider>
  );
}