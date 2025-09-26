import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, MapPin, Calendar, Ruler, User, Shield, Syringe, Award, MessageSquare } from 'lucide-react';
import { Pet, User as UserType } from '../types';

interface PetDetailProps {
  pet: Pet;
  onBack: () => void;
  onAdopt: () => void;
  user: UserType | null;
}

export function PetDetail({ pet, onBack, onAdopt, user }: PetDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Search
        </button>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="lg:flex">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={pet.photos[currentImageIndex]}
                  alt={pet.name}
                  className="w-full h-96 lg:h-full object-cover"
                />
                {pet.photos.length > 1 && (
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {pet.photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
                {pet.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Featured
                  </div>
                )}
              </div>
            </div>

            {/* Pet Information */}
            <div className="lg:w-1/2 p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{pet.name}</h1>
                  <p className="text-xl text-gray-600">{pet.breed}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-3 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors">
                    <Heart className="h-5 w-5 text-orange-600" />
                  </button>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Age</div>
                    <div className="font-semibold">{pet.age}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Ruler className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Size</div>
                    <div className="font-semibold">{pet.size}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <User className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Gender</div>
                    <div className="font-semibold">{pet.gender}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-semibold">{pet.location}</div>
                  </div>
                </div>
              </div>

              {/* Adoption Fee */}
              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-orange-600 font-semibold">Adoption Fee</div>
                    <div className="text-3xl font-bold text-orange-700">${pet.adoptionFee}</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Includes initial vaccinations,<br />
                    spay/neuter, and microchip
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={onAdopt}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors hover:shadow-lg"
                >
                  Start Adoption Process
                </button>
                {user && (
                  <button className="px-6 py-4 border-2 border-gray-300 hover:border-gray-400 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Message Shelter
                  </button>
                )}
              </div>

              {/* Shelter Info */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Listed by</h3>
                <p className="text-gray-600">{pet.shelter}</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="p-8 border-t border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* About */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About {pet.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{pet.description}</p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Personality Traits</h4>
                <div className="flex flex-wrap gap-2">
                  {pet.personality.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Health Records */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-500" />
                  Health Records
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Syringe className="h-5 w-5 text-green-500" />
                      <span>Vaccinations</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      pet.healthRecords.vaccinated ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {pet.healthRecords.vaccinated ? 'Up to date' : 'Needs attention'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Spayed/Neutered</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      pet.healthRecords.spayed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {pet.healthRecords.spayed ? 'Yes' : 'Scheduled'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Microchipped</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      pet.healthRecords.microchipped ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {pet.healthRecords.microchipped ? 'Yes' : 'No'}
                    </span>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Last Checkup</div>
                    <div className="font-semibold">{pet.healthRecords.lastCheckup}</div>
                    {pet.healthRecords.notes && (
                      <div className="text-sm text-gray-600 mt-2">{pet.healthRecords.notes}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}