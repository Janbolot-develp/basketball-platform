import { Team } from '../types';

export const teams: Team[] = [
  {
    id: 1,
    name: "Golden State Warriors",
    city: "San Francisco",
    state: "California",
    players: 15,
    rank: 1,
    wins: 40,
    losses: 15,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
    stats: {
      pointsPerGame: 118.5,
      assistsPerGame: 27.8,
      reboundsPerGame: 45.2
    },
    description: "The Golden State Warriors are known for their revolutionary approach to basketball, emphasizing three-point shooting and dynamic offense.",
    achievements: [
      "6 NBA Championships",
      "7 Conference Titles",
      "12 Division Titles"
    ],
    homeVenue: "Chase Center",
    founded: 1946
  },
  {
    id: 2,
    name: "Los Angeles Lakers",
    city: "Los Angeles",
    state: "California",
    players: 15,
    rank: 2,
    wins: 38,
    losses: 17,
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&h=300&fit=crop",
    stats: {
      pointsPerGame: 116.8,
      assistsPerGame: 26.5,
      reboundsPerGame: 44.8
    },
    description: "The Los Angeles Lakers are one of the most storied franchises in NBA history, known for their showtime style and numerous championships.",
    achievements: [
      "17 NBA Championships",
      "32 Conference Titles",
      "24 Division Titles"
    ],
    homeVenue: "Crypto.com Arena",
    founded: 1947
  },
  {
    id: 3,
    name: "Boston Celtics",
    city: "Boston",
    state: "Massachusetts",
    players: 15,
    rank: 3,
    wins: 37,
    losses: 18,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    stats: {
      pointsPerGame: 117.2,
      assistsPerGame: 26.9,
      reboundsPerGame: 44.5
    },
    description: "The Boston Celtics are a cornerstone franchise of the NBA, known for their defensive excellence and rich basketball tradition.",
    achievements: [
      "17 NBA Championships",
      "22 Conference Titles",
      "32 Division Titles"
    ],
    homeVenue: "TD Garden",
    founded: 1946
  }
];