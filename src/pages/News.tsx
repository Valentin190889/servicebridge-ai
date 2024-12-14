import React, { useState } from 'react';
import { NewsHeader } from '../components/news/NewsHeader';
import { NewsList } from '../components/news/NewsList';
import { TrendingTopics } from '../components/news/TrendingTopics';
import { NewsCategories } from '../components/news/NewsCategories';
import { ArticleModal } from '../components/news/ArticleModal';
import { SubscribeModal } from '../components/news/SubscribeModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { NewsProvider } from '../contexts/NewsContext';
import type { NewsArticle } from '../types/news';

export function News() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  return (
    <NewsProvider>
      <div className="max-w-7xl mx-auto py-8">
        <NewsHeader onSubscribe={() => setShowSubscribeModal(true)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <Tabs defaultValue="latest">
              <TabsList>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
              </TabsList>
              
              <TabsContent value="latest">
                <NewsList onArticleClick={setSelectedArticle} />
              </TabsContent>
              
              <TabsContent value="trending">
                <NewsList filter={{ timeframe: 'week' }} onArticleClick={setSelectedArticle} />
              </TabsContent>
              
              <TabsContent value="following">
                <NewsList filter={{ tag: 'following' }} onArticleClick={setSelectedArticle} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <TrendingTopics />
            <NewsCategories />
          </div>
        </div>

        {selectedArticle && (
          <ArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}

        {showSubscribeModal && (
          <SubscribeModal onClose={() => setShowSubscribeModal(false)} />
        )}
      </div>
    </NewsProvider>
  );
}