import React, { useState } from 'react';
import { ForumHeader } from '../components/community/ForumHeader';
import { ForumCategories } from '../components/community/ForumCategories';
import { ForumTopics } from '../components/community/ForumTopics';
import { NewTopicModal } from '../components/community/NewTopicModal';
import { TopicView } from '../components/community/TopicView';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { CommunityProvider } from '../contexts/CommunityContext';
import type { ForumPost } from '../types/community';

export function Community() {
  const [showNewTopicModal, setShowNewTopicModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<ForumPost | null>(null);

  return (
    <CommunityProvider>
      <div className="max-w-7xl mx-auto py-8">
        <ForumHeader onNewTopic={() => setShowNewTopicModal(true)} />
        
        <Tabs defaultValue="topics" className="mt-8">
          <TabsList>
            <TabsTrigger value="topics">Latest Topics</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="topics">
            <ForumTopics onTopicClick={setSelectedTopic} />
          </TabsContent>
          
          <TabsContent value="categories">
            <ForumCategories />
          </TabsContent>
        </Tabs>

        {showNewTopicModal && (
          <NewTopicModal onClose={() => setShowNewTopicModal(false)} />
        )}

        {selectedTopic && (
          <TopicView
            post={selectedTopic}
            onClose={() => setSelectedTopic(null)}
          />
        )}
      </div>
    </CommunityProvider>
  );
}