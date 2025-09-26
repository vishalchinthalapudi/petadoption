export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'rabbit' | 'bird';
  breed: string;
  age: string;
  size: 'small' | 'medium' | 'large';
  gender: 'male' | 'female';
  color: string;
  location: string;
  shelter: string;
  description: string;
  personality: string[];
  healthRecords: {
    vaccinated: boolean;
    spayed: boolean;
    microchipped: boolean;
    lastCheckup: string;
    notes: string;
  };
  photos: string[];
  adoptionFee: number;
  available: boolean;
  featured: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'adopter' | 'shelter';
  phone?: string;
  address?: string;
  profilePicture?: string;
  shelterInfo?: {
    name: string;
    license: string;
    address: string;
    description: string;
  };
}

export interface AdoptionApplication {
  id: string;
  petId: string;
  adopterId: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  personalInfo: {
    experience: string;
    housing: string;
    workSchedule: string;
    otherPets: string;
    veterinarian: string;
    references: string;
  };
  backgroundCheck: {
    completed: boolean;
    status: 'pending' | 'approved' | 'rejected';
  };
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  petId?: string;
  content: string;
  timestamp: string;
  read: boolean;
}