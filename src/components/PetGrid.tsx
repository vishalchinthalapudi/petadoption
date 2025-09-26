import React from 'react';
import { PetCard } from './PetCard';
import { SearchFilters } from './SearchFilters';
import { Pet } from '../types';

interface PetGridProps {
  pets: Pet[];
  onPetSelect: (pet: Pet) => void;
  onAdopt: (pet: Pet) => void;
  searchTerm: string;
  filters: {
    type: string;
    breed: string;
    age: string;
    size: string;
    location: string;
  };
  onFiltersChange: (filters: any) => void;
}

export function PetGrid({ pets, onPetSelect, onAdopt, searchTerm, filters, onFiltersChange }: PetGridProps) {
  const featuredPets = pets.filter(pet => pet.featured);
  const regularPets = pets.filter(pet => !pet.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SearchFilters
        filters={filters}
        onFiltersChange={onFiltersChange}
        resultCount={pets.length}
      />

      {featuredPets.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Pets</h2>
            <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              Special attention needed
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredPets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                onSelect={onPetSelect}
                onAdopt={onAdopt}
                featured={true}
              />
            ))}
          </div>
        </section>
      )}

      {regularPets.length > 0 ? (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Available Pets</h2>
            <span className="text-gray-500 text-lg">
              {regularPets.length} pet{regularPets.length !== 1 ? 's' : ''} found
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularPets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                onSelect={onPetSelect}
                onAdopt={onAdopt}
              />
            ))}
          </div>
        </section>
      ) : pets.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🐾</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">No pets found</h3>
          <p className="text-gray-500 mb-6">
            {searchTerm ? `No pets match your search for "${searchTerm}"` : 'Try adjusting your search filters'}
          </p>
          <button
            onClick={() => onFiltersChange({ type: '', breed: '', age: '', size: '', location: '' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : null}
    </div>
  );
}