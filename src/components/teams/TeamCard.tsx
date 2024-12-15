import React from 'react';
import { Link } from 'react-router-dom';
import { Team } from '../../types';
import { Trophy } from 'lucide-react';

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link to={`/team/${team.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${team.image})` }}
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold">{team.name}</h2>
              <p className="text-gray-600">{team.city}, {team.state}</p>
            </div>
            {team.rank <= 3 && (
              <Trophy className={`w-6 h-6 ${
                team.rank === 1 ? 'text-yellow-400' :
                team.rank === 2 ? 'text-gray-400' :
                'text-orange-400'
              }`} />
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold">{team.stats.pointsPerGame}</div>
              <div className="text-xs text-gray-600">PPG</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">{team.wins}-{team.losses}</div>
              <div className="text-xs text-gray-600">W-L</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">#{team.rank}</div>
              <div className="text-xs text-gray-600">Rank</div>
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            View Team
          </button>
        </div>
      </div>
    </Link>
  );
}