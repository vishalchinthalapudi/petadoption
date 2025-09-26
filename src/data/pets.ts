import { Pet } from '../types';

export const pets: Pet[] = [
  {
    id: '1',
    name: 'Buddy',
    type: 'dog',
    breed: 'Golden Retriever',
    age: 'Young',
    size: 'large',
    gender: 'male',
    color: 'Golden',
    location: 'San Francisco, CA',
    shelter: 'Happy Paws Shelter',
    description: 'Buddy is a friendly and energetic Golden Retriever who loves playing fetch and meeting new people. He\'s great with children and other dogs, making him the perfect family companion. Buddy knows basic commands and is house-trained.',
    personality: ['Friendly', 'Energetic', 'Good with kids', 'Playful', 'Loyal'],
    healthRecords: {
      vaccinated: true,
      spayed: true,
      microchipped: true,
      lastCheckup: 'December 15, 2024',
      notes: 'Excellent health, up to date on all vaccinations'
    },
    photos: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/97082/golden-retriever-dog-golden-retriever-breed-97082.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    adoptionFee: 350,
    available: true,
    featured: true
  },
  {
    id: '2',
    name: 'Luna',
    type: 'cat',
    breed: 'Maine Coon',
    age: 'Adult',
    size: 'medium',
    gender: 'female',
    color: 'Silver Tabby',
    location: 'Oakland, CA',
    shelter: 'Bay Area Cat Rescue',
    description: 'Luna is a gorgeous Maine Coon with a gentle personality. She loves to curl up in sunny spots and enjoys gentle brushing. Luna is perfect for a quiet household and gets along well with other cats.',
    personality: ['Gentle', 'Calm', 'Independent', 'Affectionate', 'Quiet'],
    healthRecords: {
      vaccinated: true,
      spayed: true,
      microchipped: true,
      lastCheckup: 'December 10, 2024',
      notes: 'Healthy, regular dental care recommended'
    },
    photos: [
      'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    adoptionFee: 200,
    available: true,
    featured: false
  },
  {
    id: '3',
    name: 'Max',
    type: 'dog',
    breed: 'German Shepherd Mix',
    age: 'Adult',
    size: 'large',
    gender: 'male',
    color: 'Black & Tan',
    location: 'San Jose, CA',
    shelter: 'Silicon Valley Animal Shelter',
    description: 'Max is a loyal and intelligent German Shepherd mix who would thrive in an active household. He\'s well-trained, protective of his family, and loves outdoor adventures. Max would do best as the only pet.',
    personality: ['Intelligent', 'Loyal', 'Protective', 'Active', 'Obedient'],
    healthRecords: {
      vaccinated: true,
      spayed: true,
      microchipped: true,
      lastCheckup: 'December 5, 2024',
      notes: 'Minor hip dysplasia, managed with supplements'
    },
    photos: [
      'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    adoptionFee: 300,
    available: true,
    featured: false
  },
  {
    id: '4',
    name: 'Bella',
    type: 'cat',
    breed: 'Siamese Mix',
    age: 'Young',
    size: 'small',
    gender: 'female',
    color: 'Seal Point',
    location: 'Berkeley, CA',
    shelter: 'East Bay Feline Friends',
    description: 'Bella is a beautiful Siamese mix with striking blue eyes. She\'s very social and loves attention from her humans. Bella enjoys interactive toys and would love a home where she can be the center of attention.',
    personality: ['Social', 'Vocal', 'Playful', 'Attention-seeking', 'Smart'],
    healthRecords: {
      vaccinated: true,
      spayed: false,
      microchipped: true,
      lastCheckup: 'December 8, 2024',
      notes: 'Spay surgery scheduled for next week'
    },
    photos: [
      'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    adoptionFee: 175,
    available: true,
    featured: true
  },
  {
    id: '5',
    name: 'Charlie',
    type: 'dog',
    breed: 'Labrador Mix',
    age: 'Senior',
    size: 'medium',
    gender: 'male',
    color: 'Chocolate',
    location: 'Palo Alto, CA',
    shelter: 'Peninsula Pet Rescue',
    description: 'Charlie is a sweet senior dog who still has lots of love to give. He\'s calm, house-trained, and perfect for someone looking for a gentle companion. Charlie enjoys short walks and cozy naps.',
    personality: ['Calm', 'Gentle', 'Low-energy', 'Affectionate', 'Well-behaved'],
    healthRecords: {
      vaccinated: true,
      spayed: true,
      microchipped: true,
      lastCheckup: 'November 30, 2024',
      notes: 'Senior wellness check, some arthritis in joints'
    },
    photos: [
      'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    adoptionFee: 150,
    available: true,
    featured: false
  },
  {
    id: '6',
    name: 'Mia',
    type: 'rabbit',
    breed: 'Holland Lop',
    age: 'Young',
    size: 'small',
    gender: 'female',
    color: 'Brown & White',
    location: 'Fremont, CA',
    shelter: 'Small Animal Sanctuary',
    description: 'Mia is an adorable Holland Lop rabbit with the sweetest personality. She\'s litter trained and loves fresh vegetables. Mia would do well in a quiet home with plenty of space to hop around.',
    personality: ['Gentle', 'Curious', 'Quiet', 'Social', 'Easy-going'],
    healthRecords: {
      vaccinated: false,
      spayed: true,
      microchipped: false,
      lastCheckup: 'December 1, 2024',
      notes: 'Healthy, regular nail trims needed'
    },
    photos: [
      'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    adoptionFee: 125,
    available: true,
    featured: false
  },
  {
    id: '7',
    name: 'Sunny',
    type: 'bird',
    breed: 'Cockatiel',
    age: 'Adult',
    size: 'small',
    gender: 'male',
    color: 'Yellow & Gray',
    location: 'Santa Clara, CA',
    shelter: 'Feathered Friends Rescue',
    description: 'Sunny is a cheerful Cockatiel who loves to whistle and sing. He\'s social and enjoys interacting with people. Sunny would thrive in a home where he can get plenty of attention and mental stimulation.',
    personality: ['Vocal', 'Social', 'Intelligent', 'Playful', 'Curious'],
    healthRecords: {
      vaccinated: false,
      spayed: false,
      microchipped: false,
      lastCheckup: 'December 3, 2024',
      notes: 'Excellent health, wing clip recommended'
    },
    photos: [
      'https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1612461/pexels-photo-1612461.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    adoptionFee: 100,
    available: true,
    featured: false
  },
  {
    id: '8',
    name: 'Rosie',
    type: 'dog',
    breed: 'Pitbull Mix',
    age: 'Adult',
    size: 'medium',
    gender: 'female',
    color: 'Brindle',
    location: 'Richmond, CA',
    shelter: 'Second Chance Animal Rescue',
    description: 'Rosie is a loving Pitbull mix who adores people and just wants to be someone\'s best friend. She\'s energetic and would love an active family. Rosie is great with children but prefers to be the only pet.',
    personality: ['Loving', 'Energetic', 'People-focused', 'Loyal', 'Playful'],
    healthRecords: {
      vaccinated: true,
      spayed: true,
      microchipped: true,
      lastCheckup: 'December 12, 2024',
      notes: 'Perfect health, very active'
    },
    photos: [
      'https://images.pexels.com/photos/1629634/pexels-photo-1629634.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    adoptionFee: 275,
    available: true,
    featured: true
  }
];