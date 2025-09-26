import React, { useState } from 'react';
import { ArrowLeft, FileText, Home, Clock, Heart, Users, Phone, CheckCircle } from 'lucide-react';
import { Pet, User } from '../types';

interface AdoptionFormProps {
  pet: Pet;
  user: User;
  onBack: () => void;
  onSubmit: () => void;
}

export function AdoptionForm({ pet, user, onBack, onSubmit }: AdoptionFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    experience: '',
    housing: '',
    workSchedule: '',
    otherPets: '',
    veterinarian: '',
    references: '',
    emergencyContact: '',
    additionalInfo: ''
  });

  const steps = [
    { id: 1, title: 'Experience & Housing', icon: Home },
    { id: 2, title: 'Lifestyle & Care', icon: Clock },
    { id: 3, title: 'References & Contact', icon: Users },
    { id: 4, title: 'Review & Submit', icon: CheckCircle }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      onSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Previous pet experience (required)
              </label>
              <textarea
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Tell us about your experience with pets, including types of pets you've owned and for how long..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Housing situation (required)
              </label>
              <textarea
                value={formData.housing}
                onChange={(e) => setFormData({ ...formData, housing: e.target.value })}
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Describe your living situation: house/apartment, rent/own, yard size, pet policies, etc..."
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Work schedule & pet care plan (required)
              </label>
              <textarea
                value={formData.workSchedule}
                onChange={(e) => setFormData({ ...formData, workSchedule: e.target.value })}
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Describe your daily schedule and how you plan to care for your pet..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Other pets in household
              </label>
              <textarea
                value={formData.otherPets}
                onChange={(e) => setFormData({ ...formData, otherPets: e.target.value })}
                className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="List any other pets you have, their ages, and how they get along with other animals..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Veterinarian information
              </label>
              <input
                type="text"
                value={formData.veterinarian}
                onChange={(e) => setFormData({ ...formData, veterinarian: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Veterinary clinic name and phone number (if you have one)"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                References (required)
              </label>
              <textarea
                value={formData.references}
                onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Please provide 2-3 references (name and phone number) who can speak to your character and ability to care for pets..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Emergency contact (required)
              </label>
              <input
                type="text"
                value={formData.emergencyContact}
                onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Emergency contact name and phone number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Additional information
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Anything else you'd like us to know about you or your interest in this pet..."
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Summary</h3>
              <div className="space-y-3 text-sm">
                <div><span className="font-medium">Applicant:</span> {user.name}</div>
                <div><span className="font-medium">Pet:</span> {pet.name} ({pet.breed})</div>
                <div><span className="font-medium">Adoption Fee:</span> ${pet.adoptionFee}</div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Next Steps
              </h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Background check will be conducted within 24-48 hours</li>
                <li>• Shelter will review your application and contact references</li>
                <li>• Meet & greet appointment will be scheduled if approved</li>
                <li>• Final adoption can be completed after successful meeting</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Important Notes
              </h4>
              <p className="text-sm text-orange-800">
                By submitting this application, you agree to our adoption policies and understand that
                all adoptions are subject to approval. A non-refundable application fee may apply.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          {currentStep === 1 ? 'Back to Pet Details' : 'Previous Step'}
        </button>

        {/* Pet Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-6">
            <img
              src={pet.photos[0]}
              alt={pet.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{pet.name}</h1>
              <p className="text-gray-600">{pet.breed} • {pet.age} • {pet.location}</p>
              <p className="text-orange-600 font-semibold">Adoption Fee: ${pet.adoptionFee}</p>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                      isActive
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : isCompleted
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300 bg-white text-gray-400'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="ml-4 hidden sm:block">
                    <div className={`text-sm font-semibold ${
                      isActive ? 'text-orange-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      Step {step.id}
                    </div>
                    <div className={`text-xs ${
                      isActive || isCompleted ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-px mx-4 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {steps[currentStep - 1].title}
          </h2>
          
          {renderStepContent()}

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </div>
            <div className="flex gap-4">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
              >
                {currentStep === 4 ? 'Submit Application' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}