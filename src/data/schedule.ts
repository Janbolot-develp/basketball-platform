import { Game, Tournament } from '../types';

export const tournaments: Tournament[] = [
  {
    id: 1,
    name: "Summer Championship",
    startDate: "2024-06-01",
    endDate: "2024-06-15",
    location: "Madison Square Garden",
    status: "upcoming",
    teams: 16
  },
  // Add more tournaments...
];

export const games: Game[] = [
  {
    id: 1,
    tournament: "Summer Championship",
    homeTeam: "Golden State Warriors",
    awayTeam: "LA Lakers",
    date: "2024-06-01",
    time: "15:00",
    court: "Court 1",
    status: "scheduled"
  },
  // Add more games...
];