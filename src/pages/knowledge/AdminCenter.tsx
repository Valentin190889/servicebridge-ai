import React from 'react';
import { Plus, Settings } from 'lucide-react';
import { ArticleEditor } from '../../components/knowledge/ArticleEditor';
import { CategoryManager } from '../../components/knowledge/CategoryManager';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';

export function AdminCenter() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Knowledge Hub Admin</h1>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Plus className="h-5 w-5" />
            <span>New Article</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      <Tabs defaultValue="articles">
        <TabsList className="mb-8">
          <TabsTrigger value="articles">Manage Articles</TabsTrigger>
          <TabsTrigger value="categories">Manage Categories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles">
          <ArticleEditor />
        </TabsContent>
        
        <TabsContent value="categories">
          <CategoryManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}