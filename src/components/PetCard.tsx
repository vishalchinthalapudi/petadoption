import React from 'react';
import { Heart, MapPin, Calendar, Award } from 'lucide-react';
import { Pet } from '../types';

interface PetCardProps {
  pet: Pet;
  onSelect: (pet: Pet) => void;
  onAdopt: (pet: Pet) => void;
  featured?: boolean;
}

export function PetCard({ pet, onSelect, onAdopt, featured = false }: PetCardProps) {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group ${
        featured ? 'ring-2 ring-orange-200 shadow-lg' : ''
      }`}
      onClick={() => onSelect(pet)}
    >
      {featured && (
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center py-2">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <Award className="h-4 w-4" />
            Featured Pet
          </div>
        </div>
      )}
      
      <div className="relative">
        <img
          src={pet.photos[0]}
          alt={pet.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAdopt(pet);
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200 group-hover:opacity-100 opacity-0"
        >
          <Heart className="h-5 w-5 text-orange-500" />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            pet.type === 'dog' ? 'bg-blue-100 text-blue-700' :
            pet.type === 'cat' ? 'bg-purple-100 text-purple-700' :
            pet.type === 'rabbit' ? 'bg-green-100 text-green-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{pet.name}</h3>
            <p className="text-gray-600 text-sm">{pet.breed}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-orange-600">${pet.adoptionFee}</div>
            <div className="text-xs text-gray-500">adoption fee</div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            {pet.age} • {pet.size} • {pet.gender}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            {pet.location}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {pet.personality.slice(0, 3).map((trait, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {trait}
            </span>
          ))}
          {pet.personality.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
              +{pet.personality.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onAdopt(pet);
          }}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 hover:shadow-md"
        >
          Start Adoption Process
        </button>
      </div>
    </div>
  );
}