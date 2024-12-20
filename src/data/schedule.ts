import { Game, Tournament } from "../types";

export const tournaments: Tournament[] = [
  {
    id: 1,
    name: "Summer Championship",
    startDate: "2024-06-01",
    endDate: "2024-06-15",
    location: "Madison Square Garden",
    status: "upcoming",
    teams: 16,
  },
  {
    id: 2,
    name: "Winter League",
    startDate: "2024-12-01",
    endDate: "2024-12-20",
    location: "Staples Center",
    status: "upcoming",
    teams: 12,
  },
  {
    id: 3,
    name: "Spring Tournament",
    startDate: "2024-03-15",
    endDate: "2024-03-30",
    location: "TD Garden",
    status: "upcoming",
    teams: 8,
  },
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
    status: "scheduled",
  },
  {
    id: 2,
    tournament: "Summer Championship",
    homeTeam: "Boston Celtics",
    awayTeam: "Miami Heat",
    date: "2024-06-01",
    time: "17:30",
    court: "Court 1",
    status: "scheduled",
  },
  {
    id: 3,
    tournament: "Summer Championship",
    homeTeam: "Brooklyn Nets",
    awayTeam: "Chicago Bulls",
    date: "2024-06-02",
    time: "14:00",
    court: "Court 2",
    status: "scheduled",
  },
  {
    id: 4,
    tournament: "Summer Championship",
    homeTeam: "Phoenix Suns",
    awayTeam: "Dallas Mavericks",
    date: "2024-06-02",
    time: "16:30",
    court: "Court 2",
    status: "scheduled",
  },
  {
    id: 5,
    tournament: "Summer Championship",
    homeTeam: "Milwaukee Bucks",
    awayTeam: "Philadelphia 76ers",
    date: "2024-06-03",
    time: "15:00",
    court: "Court 1",
    status: "scheduled",
  },
];
