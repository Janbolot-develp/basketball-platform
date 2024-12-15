import { useParams, Link } from "react-router-dom";
import { topPlayers } from "../data/rankings";
import { Trophy, Award } from "lucide-react";

export default function PlayerDetails() {
  const { id } = useParams();
  const player = topPlayers.find((p) => p.id === Number(id));

  if (!player) {
    return (
      <div className="pt-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Player Not Found</h1>
        <Link to="/rankings" className="text-indigo-600 hover:text-indigo-700">
          Return to Rankings
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="relative h-64 bg-indigo-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={player.image}
                alt={player.name}
                className="w-48 h-48 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Player Info */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">{player.name}</h1>
              <p className="text-xl text-gray-600">
                {player.team} | #{player.number} | {player.position}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {player.stats.points}
                </div>
                <div className="text-sm text-gray-600">PPG</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {player.stats.assists}
                </div>
                <div className="text-sm text-gray-600">APG</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {player.stats.rebounds}
                </div>
                <div className="text-sm text-gray-600">RPG</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {player.stats.efficiency}
                </div>
                <div className="text-sm text-gray-600">EFF</div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Biography</h2>
              <p className="text-gray-600">{player.bio}</p>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-indigo-600" />
                Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {player.achievements.map((achievement, index) => (
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

            {/* Personal Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Height: {player.height}</p>
                  <p className="text-gray-600">Weight: {player.weight}</p>
                </div>
                <div>
                  <p className="text-gray-600">College: {player.college}</p>
                  <p className="text-gray-600">Current Rank: #{player.rank}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
