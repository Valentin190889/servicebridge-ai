import React from 'react';
import { Profile } from './Profile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';

export function AdminCenter() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Center</h1>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Profile />
        </TabsContent>
        
        <TabsContent value="security">
          {/* Security settings will be implemented later */}
          <div className="text-gray-500 dark:text-gray-400">Security settings coming soon</div>
        </TabsContent>
        
        <TabsContent value="billing">
          {/* Billing information will be implemented later */}
          <div className="text-gray-500 dark:text-gray-400">Billing information coming soon</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}