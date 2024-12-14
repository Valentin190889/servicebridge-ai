import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { ProjectList } from '../components/workspace/ProjectList';
import { ProjectModal } from '../components/workspace/ProjectModal';
import type { Project } from '../types/workspace';

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'AI Implementation Strategy',
    description: 'Develop and implement AI solutions for customer service automation',
    status: 'active',
    dueDate: '2024-06-30',
    teamMembers: ['1', '2', '3'],
    completedTasks: 8,
    totalTasks: 12,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Data Analytics Platform',
    description: 'Build a comprehensive data analytics platform for business insights',
    status: 'planning',
    dueDate: '2024-07-15',
    teamMembers: ['2', '4'],
    completedTasks: 0,
    totalTasks: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export function Workspace() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowNewProjectModal(true);
  };

  const handleSaveProject = (projectData: Partial<Project>) => {
    if (selectedProject) {
      setProjects(prev => prev.map(p => 
        p.id === selectedProject.id ? { ...p, ...projectData } : p
      ));
    } else {
      const newProject: Project = {
        id: Date.now().toString(),
        ...projectData as Omit<Project, 'id'>,
        teamMembers: [],
        completedTasks: 0,
        totalTasks: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as Project;
      setProjects(prev => [...prev, newProject]);
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Workspace</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage your projects and track progress
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="search"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
            />
          </div>
          <button
            onClick={() => {
              setSelectedProject(null);
              setShowNewProjectModal(true);
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <Plus className="h-5 w-5" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      <ProjectList
        projects={filteredProjects}
        onProjectClick={handleProjectClick}
      />

      {showNewProjectModal && (
        <ProjectModal
          project={selectedProject || undefined}
          onClose={() => {
            setShowNewProjectModal(false);
            setSelectedProject(null);
          }}
          onSave={handleSaveProject}
        />
      )}
    </div>
  );
}