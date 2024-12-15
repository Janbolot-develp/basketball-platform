import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: "player-rankings",
    iconName: 'Trophy',
    title: "Player Rankings",
    description: "Track your performance and climb the leaderboards with our comprehensive ranking system.",
    details: {
      benefits: [
        "Real-time performance tracking",
        "Historical statistics analysis",
        "Position-based rankings",
        "Tournament performance metrics",
        "Seasonal achievements tracking"
      ],
      features: [
        "Weekly ranking updates",
        "Performance comparison tools",
        "Custom stat tracking",
        "Achievement badges",
        "Progress visualization"
      ]
    }
  },
  {
    id: "team-management",
    iconName: 'Users',
    title: "Team Management",
    description: "Create or join teams, organize practices, and coordinate game schedules effortlessly.",
    details: {
      benefits: [
        "Centralized team communication",
        "Practice schedule management",
        "Player availability tracking",
        "Team statistics dashboard",
        "Equipment inventory management"
      ],
      features: [
        "Team chat system",
        "Practice planner",
        "Game strategy board",
        "Player roster management",
        "Team performance analytics"
      ]
    }
  },
  {
    id: "tournament-schedule",
    iconName: 'Calendar',
    title: "Tournament Schedule",
    description: "Stay updated with upcoming tournaments and never miss a game with our scheduling system.",
    details: {
      benefits: [
        "Real-time schedule updates",
        "Tournament registration system",
        "Venue information and maps",
        "Automatic reminders",
        "Score tracking"
      ],
      features: [
        "Calendar integration",
        "Mobile notifications",
        "Tournament brackets",
        "Live score updates",
        "Weather updates for outdoor courts"
      ]
    }
  },
  {
    id: "performance-analytics",
    iconName: 'BarChart',
    title: "Performance Analytics",
    description: "Analyze your game statistics and track your improvement over time.",
    details: {
      benefits: [
        "Advanced statistics tracking",
        "Performance trend analysis",
        "Skill development tracking",
        "Comparative analysis",
        "Goal setting and monitoring"
      ],
      features: [
        "Interactive dashboards",
        "Custom report generation",
        "Video analysis integration",
        "Training recommendations",
        "Progress sharing"
      ]
    }
  },
  {
    id: "training-programs",
    iconName: 'Dumbbell',
    title: "Training Programs",
    description: "Access personalized training programs and drills to improve your skills.",
    details: {
      benefits: [
        "Customized workout plans",
        "Skill-specific drills",
        "Progress tracking",
        "Expert coaching tips",
        "Video tutorials"
      ],
      features: [
        "Workout library",
        "Training schedule builder",
        "Exercise demonstrations",
        "Progress assessments",
        "Training group formation"
      ]
    }
  },
  {
    id: "community",
    iconName: 'Users',
    title: "Basketball Community",
    description: "Connect with players, coaches, and teams in your area.",
    details: {
      benefits: [
        "Local player networking",
        "Team recruitment",
        "Event organization",
        "Knowledge sharing",
        "Community support"
      ],
      features: [
        "Player profiles",
        "Team discovery",
        "Event calendar",
        "Discussion forums",
        "Skill exchange"
      ]
    }
  }
];