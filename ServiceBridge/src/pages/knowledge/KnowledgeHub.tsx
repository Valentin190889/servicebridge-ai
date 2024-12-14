import React from 'react';
import { Search, Filter, Play, Book, Video, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { ArticleList } from '../../components/knowledge/ArticleList';
import { CategoryList } from '../../components/knowledge/CategoryList';
import { WebinarList } from '../../components/knowledge/WebinarList';
import { VideoList } from '../../components/knowledge/VideoList';
import { KnowledgeStats } from '../../components/knowledge/KnowledgeStats';
import { FeaturedContent } from '../../components/knowledge/FeaturedContent';

export function KnowledgeHub() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Knowledge Hub</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Explore our comprehensive library of resources, webinars, and expert content
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="search"
              placeholder="Search resources..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <KnowledgeStats />
      </div>

      <div className="mb-12">
        <FeaturedContent />
      </div>

      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList className="flex space-x-2 border-b border-gray-200 dark:border-dark-700 w-full">
          <TabsTrigger value="articles" className="flex items-center space-x-2">
            <Book className="h-4 w-4" />
            <span>Articles</span>
          </TabsTrigger>
          <TabsTrigger value="webinars" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Webinars</span>
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center space-x-2">
            <Video className="h-4 w-4" />
            <span>Videos</span>
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex items-center space-x-2">
            <Play className="h-4 w-4" />
            <span>Categories</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles">
          <ArticleList />
        </TabsContent>
        
        <TabsContent value="webinars">
          <WebinarList />
        </TabsContent>
        
        <TabsContent value="videos">
          <VideoList />
        </TabsContent>
        
        <TabsContent value="categories">
          <CategoryList />
        </TabsContent>
      </Tabs>
    </div>
  );
}