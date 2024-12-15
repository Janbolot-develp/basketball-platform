import { useParams, Link } from "react-router-dom";
import { teams } from "../data/teams";
import { Trophy, MapPin, Calendar, Award } from "lucide-react";

export default function TeamDetails() {
  const { id } = useParams();
  const team = teams.find((t) => t.id === Number(id));

  if (!team) {
    return (
      <div className="pt-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Team Not Found</h1>
        <Link to="/teams" className="text-indigo-600 hover:text-indigo-700">
          Return to Teams
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div
            className="h-64 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${team.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
                <p className="text-xl">
                  <MapPin className="inline-block w-5 h-5 mr-1" />
                  {team.city}, {team.state}
                </p>
              </div>
            </div>
          </div>

          {/* Team Info */}
          <div className="p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {team.stats.pointsPerGame}
                </div>
                <div className="text-sm text-gray-600">Points Per Game</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {team.wins}-{team.losses}
                </div>
                <div className="text-sm text-gray-600">Win-Loss Record</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  #{team.rank}
                </div>
                <div className="text-sm text-gray-600">Current Rank</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About the Team</h2>
              <p className="text-gray-600">{team.description}</p>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-indigo-600" />
                Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {team.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <Award className="w-5 h-5 text-indigo-600 mr-2" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                  Home Venue
                </h3>
                <p className="text-gray-600">{team.homeVenue}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                  Founded
                </h3>
                <p className="text-gray-600">{team.founded}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
