import React, { useState } from 'react';
import { ArrowLeft, Plus, CreditCard as Edit3, Trash2, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import { User } from '../types';
import { pets } from '../data/pets';

interface ShelterDashboardProps {
  user: User;
  onBack: () => void;
}

export function ShelterDashboard({ user, onBack }: ShelterDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'pets' | 'applications'>('overview');
  
  // Mock data - in real app, this would come from API
  const shelterPets = pets.filter(pet => pet.shelter === user.shelterInfo?.name);
  const totalViews = shelterPets.reduce((acc, pet) => acc + Math.floor(Math.random() * 100 + 20), 0);
  const applications = 23;
  const adopted = 156;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'pets', label: 'My Pets', icon: Eye },
    { id: 'applications', label: 'Applications', icon: MessageSquare }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
          <div className="text-3xl font-bold text-blue-700">{shelterPets.length}</div>
          <div className="text-blue-600 text-sm font-semibold">Active Listings</div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
          <div className="text-3xl font-bold text-orange-700">{totalViews}</div>
          <div className="text-orange-600 text-sm font-semibold">Total Views</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
          <div className="text-3xl font-bold text-purple-700">{applications}</div>
          <div className="text-purple-600 text-sm font-semibold">Pending Applications</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
          <div className="text-3xl font-bold text-green-700">{adopted}</div>
          <div className="text-green-600 text-sm font-semibold">Successfully Adopted</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { type: 'application', pet: 'Buddy', applicant: 'Sarah Johnson', time: '2 hours ago' },
            { type: 'inquiry', pet: 'Luna', applicant: 'Mike Chen', time: '4 hours ago' },
            { type: 'adoption', pet: 'Charlie', applicant: 'Emma Davis', time: '1 day ago' },
            { type: 'view', pet: 'Max', count: '15 new views', time: '2 days ago' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'application' ? 'bg-purple-500' :
                  activity.type === 'inquiry' ? 'bg-blue-500' :
                  activity.type === 'adoption' ? 'bg-green-500' :
                  'bg-orange-500'
                }`}></div>
                <div>
                  <div className="font-medium text-gray-900">
                    {activity.type === 'application' && `New application for ${activity.pet}`}
                    {activity.type === 'inquiry' && `Message about ${activity.pet}`}
                    {activity.type === 'adoption' && `${activity.pet} was adopted!`}
                    {activity.type === 'view' && `${activity.pet} received ${activity.count}`}
                  </div>
                  {activity.applicant && (
                    <div className="text-sm text-gray-600">from {activity.applicant}</div>
                  )}
                </div>
              </div>
              <div className="text-xs text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPets = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Your Pet Listings</h3>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
          <Plus className="h-4 w-4" />
          Add New Pet
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {shelterPets.map((pet) => (
          <div key={pet.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex gap-4">
              <img
                src={pet.photos[0]}
                alt={pet.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{pet.name}</h4>
                    <p className="text-sm text-gray-600">{pet.breed}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    pet.available ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {pet.available ? 'Available' : 'Adopted'}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{Math.floor(Math.random() * 50 + 10)} views</span>
                  <span>{Math.floor(Math.random() * 5 + 1)} inquiries</span>
                </div>

                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit3 className="h-4 w-4" />
                    Edit
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderApplications = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Adoption Applications</h3>
      
      <div className="space-y-4">
        {[
          { id: '1', pet: 'Buddy', applicant: 'Sarah Johnson', submitted: '2 days ago', status: 'pending' },
          { id: '2', pet: 'Luna', applicant: 'Mike Chen', submitted: '3 days ago', status: 'approved' },
          { id: '3', pet: 'Max', applicant: 'Emma Davis', submitted: '1 week ago', status: 'interview' },
        ].map((app) => (
          <div key={app.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Application for {app.pet}
                </h4>
                <p className="text-gray-600 mb-2">from {app.applicant}</p>
                <p className="text-sm text-gray-500">Submitted {app.submitted}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  app.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                  app.status === 'approved' ? 'bg-green-100 text-green-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm">
                  Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Search
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Shelter Dashboard</h1>
            <p className="text-gray-600">{user.shelterInfo?.name}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'pets' && renderPets()}
        {activeTab === 'applications' && renderApplications()}
      </div>
    </div>
  );
}