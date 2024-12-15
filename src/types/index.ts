export interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  isActive?: boolean;
}

export interface Feature {
  id: string;
  iconName: keyof typeof import('lucide-react');
  title: string;
  description: string;
  details: {
    benefits: string[];
    features: string[];
  };
}

export interface Stat {
  number: string;
  label: string;
}

export interface PlayerStats {
  points: number;
  assists: number;
  rebounds: number;
  blocks: number;
  steals: number;
  efficiency: number;
  threePointPercentage?: number;
}

export interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  number: string;
  stats: PlayerStats;
  rank: number;
  previousRank: number;
  image: string;
  bio: string;
  achievements: string[];
  height: string;
  weight: string;
  college: string;
}

export interface TeamStats {
  pointsPerGame: number;
  assistsPerGame: number;
  reboundsPerGame: number;
}

export interface Team {
  id: number;
  name: string;
  city: string;
  state: string;
  players: number;
  rank: number;
  wins: number;
  losses: number;
  image: string;
  stats: TeamStats;
  description: string;
  achievements: string[];
  homeVenue: string;
  founded: number;
}

export interface RankingCategory {
  id: string;
  name: string;
  description: string;
}

export interface Tournament {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  teams: number;
}

export interface Game {
  id: number;
  tournament: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  court: string;
  status: 'scheduled' | 'live' | 'completed';
}