import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PetGrid } from './components/PetGrid';
import { PetDetail } from './components/PetDetail';
import { AuthModal } from './components/AuthModal';
import { AdoptionForm } from './components/AdoptionForm';
import { ShelterDashboard } from './components/ShelterDashboard';
import { MessageCenter } from './components/MessageCenter';
import { UserProfile } from './components/UserProfile';
import { pets } from './data/pets';
import { Pet, User } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'pet-detail' | 'adoption-form' | 'shelter' | 'messages' | 'profile'>('home');
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    breed: '',
    age: '',
    size: '',
    location: ''
  });

  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !filters.type || pet.type === filters.type;
    const matchesBread = !filters.breed || pet.breed === filters.breed;
    const matchesAge = !filters.age || pet.age === filters.age;
    const matchesSize = !filters.size || pet.size === filters.size;
    const matchesLocation = !filters.location || pet.location.includes(filters.location);

    return matchesSearch && matchesType && matchesBread && matchesAge && matchesSize && matchesLocation;
  });

  const handlePetSelect = (pet: Pet) => {
    setSelectedPet(pet);
    setCurrentView('pet-detail');
  };

  const handleAdopt = (pet: Pet) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setSelectedPet(pet);
    setCurrentView('adoption-form');
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'pet-detail':
        return selectedPet ? (
          <PetDetail 
            pet={selectedPet}
            onBack={() => setCurrentView('home')}
            onAdopt={() => handleAdopt(selectedPet)}
            user={user}
          />
        ) : null;
      case 'adoption-form':
        return selectedPet ? (
          <AdoptionForm
            pet={selectedPet}
            user={user!}
            onBack={() => setCurrentView('pet-detail')}
            onSubmit={() => setCurrentView('messages')}
          />
        ) : null;
      case 'shelter':
        return user?.type === 'shelter' ? (
          <ShelterDashboard
            user={user}
            onBack={() => setCurrentView('home')}
          />
        ) : null;
      case 'messages':
        return user ? (
          <MessageCenter
            user={user}
            onBack={() => setCurrentView('home')}
          />
        ) : null;
      case 'profile':
        return user ? (
          <UserProfile
            user={user}
            onBack={() => setCurrentView('home')}
            onUpdate={setUser}
          />
        ) : null;
      default:
        return (
          <>
            <Hero onSearch={setSearchTerm} />
            <PetGrid
              pets={filteredPets}
              onPetSelect={handlePetSelect}
              onAdopt={handleAdopt}
              searchTerm={searchTerm}
              filters={filters}
              onFiltersChange={setFilters}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        user={user}
        onLogin={() => setShowAuthModal(true)}
        onLogout={handleLogout}
        onNavigate={setCurrentView}
        currentView={currentView}
      />
      
      {renderCurrentView()}
      
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;