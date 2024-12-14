import React from 'react';
import { ChallengeList } from '../components/workspace/ChallengeList';
import { TaskBoard } from '../components/workspace/TaskBoard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';

export function Workspace() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Workspace</h1>
      </div>

      <Tabs defaultValue="challenges">
        <TabsList className="mb-8">
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="tasks">Task Board</TabsTrigger>
        </TabsList>
        
        <TabsContent value="challenges">
          <ChallengeList />
        </TabsContent>
        
        <TabsContent value="tasks">
          <TaskBoard />
        </TabsContent>
      </Tabs>
    </div>
  );
}