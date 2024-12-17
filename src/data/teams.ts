import { Team } from "../types";

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
    image:
      "https://th.bing.com/th/id/OIP.sDspc1ZvV0k2Nt8qxwixTAAAAA?rs=1&pid=ImgDetMain",
    stats: {
      pointsPerGame: 118.5,
      assistsPerGame: 27.8,
      reboundsPerGame: 45.2,
    },
    description:
      "The Golden State Warriors are known for their revolutionary approach to basketball, emphasizing three-point shooting and dynamic offense.",
    achievements: [
      "6 NBA Championships",
      "7 Conference Titles",
      "12 Division Titles",
    ],
    homeVenue: "Chase Center",
    founded: 1946,
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
    image:
      "https://th.bing.com/th/id/OIP.0s9rvWv__fl5ygj752hBdQAAAA?rs=1&pid=ImgDetMain",
    stats: {
      pointsPerGame: 116.8,
      assistsPerGame: 26.5,
      reboundsPerGame: 44.8,
    },
    description:
      "The Los Angeles Lakers are one of the most storied franchises in NBA history, known for their showtime style and numerous championships.",
    achievements: [
      "17 NBA Championships",
      "32 Conference Titles",
      "24 Division Titles",
    ],
    homeVenue: "Crypto.com Arena",
    founded: 1947,
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
    image:
      "https://th.bing.com/th?id=OIF.6%2fGA5hJsuNmsXfQ8aX%2b45w&rs=1&pid=ImgDetMain",
    stats: {
      pointsPerGame: 117.2,
      assistsPerGame: 26.9,
      reboundsPerGame: 44.5,
    },
    description:
      "The Boston Celtics are a cornerstone franchise of the NBA, known for their defensive excellence and rich basketball tradition.",
    achievements: [
      "17 NBA Championships",
      "22 Conference Titles",
      "32 Division Titles",
    ],
    homeVenue: "TD Garden",
    founded: 1946,
  },
  {
    id: 4,
    name: "Chicago Bulls",
    city: "Cleveland",
    state: "Illinois",
    players: 15,
    rank: 4,
    wins: 35,
    losses: 20,
    image:
      "https://th.bing.com/th/id/OIP.iYA9PGvn5TijsRdZKuZmTAHaHb?w=4986&h=5000&rs=1&pid=ImgDetMain",
    stats: {
      pointsPerGame: 112.2,
      assistsPerGame: 23.9,
      reboundsPerGame: 42.5,
    },
    description:
      "The Chicago Bulls are an iconic NBA franchise, defined by their six championships and the legendary Michael Jordan. Known for their competitive spirit and global influence, the Bulls have a rich legacy of excellence and winning tradition.",
    achievements: [
      "6 NBA Championships",
      "6 Conference Titles",
      "9 Division Titles",
    ],
    homeVenue: "United Center",
    founded: 1966,
  },
  {
    id: 5,
    name: "San Antonio Spurs",
    city: "San-Antonio",
    state: "Texas",
    players: 15,
    rank: 5,
    wins: 32,
    losses: 13,
    image:
      "https://www.oursportscentral.com/graphics/teams/glg_austin_spurs19.png",
    stats: {
      pointsPerGame: 111.5,
      assistsPerGame: 21.9,
      reboundsPerGame: 41.7,
    },
    description:
      "The San Antonio Spurs are a highly successful NBA franchise, with five championships and a legacy of teamwork, discipline, and sustained excellence under coach Gregg Popovich.",
    achievements: [
      "5 NBA Championships",
      "6 Conference Titles",
      "22 Division Titles",
    ],
    homeVenue: "Frost Bank Center",
    founded: 1967,
  },
];
