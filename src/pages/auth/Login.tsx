import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Brain, PlayCircle, ArrowRight } from 'lucide-react';

export function Login() {
  const { login, demoLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login();
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleDemoLogin = () => {
    demoLogin();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-dark-800 dark:to-dark-900 flex flex-col justify-center relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-3 rounded-2xl shadow-lg">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome to ServiceBridge
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Your AI-powered business transformation platform
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-dark-800 py-8 px-4 shadow-xl rounded-lg border border-gray-100 dark:border-dark-700 sm:px-10">
            <div className="space-y-4">
              <button
                onClick={handleLogin}
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transform transition-all duration-200 hover:scale-[1.02]"
              >
                Sign in with Azure AD
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <button
                onClick={handleDemoLogin}
                className="w-full flex justify-center items-center px-4 py-3 border-2 border-primary-400 rounded-lg text-sm font-medium text-primary-700 dark:text-primary-400 bg-transparent hover:bg-primary-50 dark:hover:bg-primary-900/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transform transition-all duration-200 hover:scale-[1.02]"
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                Try Demo Version
              </button>
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-dark-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-dark-800 text-gray-500 dark:text-gray-400">
                    New to ServiceBridge?
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/pricing"
                  className="w-full flex justify-center items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 border border-gray-200 dark:border-dark-600 transform transition-all duration-200 hover:scale-[1.02]"
                >
                  View Pricing & Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700">
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4">
                <Brain className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI-Powered</h3>
              <p className="text-gray-600 dark:text-gray-400">Advanced AI solutions for business transformation</p>
            </div>
            <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                <PlayCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-400">Intuitive interface for seamless experience</p>
            </div>
            <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700">
              <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mb-4">
                <ArrowRight className="h-5 w-5 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Get Started</h3>
              <p className="text-gray-600 dark:text-gray-400">Quick setup with immediate results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}