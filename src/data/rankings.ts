import { Player, RankingCategory } from '../types';

export const rankingCategories: RankingCategory[] = [
  { id: 'overall', name: 'Overall', description: 'Overall player performance ranking' },
  { id: 'points', name: 'Points', description: 'Top scorers in the league' },
  { id: 'assists', name: 'Assists', description: 'Best playmakers' },
  { id: 'rebounds', name: 'Rebounds', description: 'Top rebounders' },
  { id: 'blocks', name: 'Blocks', description: 'Best shot blockers' },
  { id: 'steals', name: 'Steals', description: 'Steals leaders' },
  { id: 'efficiency', name: 'Efficiency', description: 'Player efficiency rating' },
  { id: 'three-points', name: '3-Point %', description: 'Best three-point shooters' }
];

export const topPlayers: Player[] = [
  {
    id: 1,
    name: "Stephen Curry",
    team: "Golden State Warriors",
    position: "Point Guard",
    number: "30",
    stats: {
      points: 32.5,
      assists: 6.3,
      rebounds: 6.2,
      blocks: 0.8,
      steals: 2.3,
      efficiency: 31.7,
      threePointPercentage: 42.5
    },
    rank: 1,
    previousRank: 1,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop",
    bio: "Stephen Curry is widely considered the greatest shooter in NBA history. His ability to make long-range three-pointers has revolutionized the game.",
    achievements: [
      "4x NBA Champion",
      "2x NBA MVP",
      "8x NBA All-Star"
    ],
    height: "6'3\"",
    weight: "185 lbs",
    college: "Davidson"
  },
  {
    id: 2,
    name: "LeBron James",
    team: "LA Lakers",
    position: "Small Forward",
    number: "23",
    stats: {
      points: 30.1,
      assists: 8.5,
      rebounds: 8.1,
      blocks: 1.1,
      steals: 1.8,
      efficiency: 30.2,
      threePointPercentage: 36.8
    },
    rank: 2,
    previousRank: 3,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop",
    bio: "LeBron James is considered one of the greatest basketball players of all time, known for his versatility, athleticism, and basketball IQ.",
    achievements: [
      "4x NBA Champion",
      "4x NBA MVP",
      "19x NBA All-Star"
    ],
    height: "6'9\"",
    weight: "250 lbs",
    college: "None"
  },
  {
    id: 3,
    name: "Kevin Durant",
    team: "Phoenix Suns",
    position: "Power Forward",
    number: "35",
    stats: {
      points: 29.8,
      assists: 5.2,
      rebounds: 7.5,
      blocks: 1.5,
      steals: 1.0,
      efficiency: 28.5,
      threePointPercentage: 38.9
    },
    rank: 3,
    previousRank: 2,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop",
    bio: "Kevin Durant is one of the most skilled scorers in NBA history, known for his shooting ability and length.",
    achievements: [
      "2x NBA Champion",
      "1x NBA MVP",
      "13x NBA All-Star"
    ],
    height: "6'10\"",
    weight: "240 lbs",
    college: "Texas"
  }
];