import React from 'react';
import { Task } from '../../types/workspace';

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Analyze Customer Feedback',
    description: 'Review customer feedback and identify common pain points',
    status: 'todo',
    priority: 'high',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export function TaskBoard() {
  const columns = [
    { id: 'todo', title: 'To Do' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'done', title: 'Done' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map((column) => (
        <div key={column.id} className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {column.title}
          </h3>
          <div className="space-y-4">
            {mockTasks
              .filter((task) => task.status === column.id)
              .map((task) => (
                <div
                  key={task.id}
                  className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{task.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      task.priority === 'high' ? 'bg-red-100 text-red-800' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}