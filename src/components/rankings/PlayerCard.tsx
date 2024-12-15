import { Link } from "react-router-dom";
import { Player } from "../../types";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const rankChange = player.previousRank - player.rank;

  const RankIndicator = () => {
    if (rankChange > 0) return <ArrowUp className="w-4 h-4 text-green-500" />;
    if (rankChange < 0) return <ArrowDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  return (
    <Link to={`/player/${player.id}`} className="block">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-indigo-600">
            #{player.rank}
          </span>
          <img
            src={player.image}
            alt={player.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{player.name}</h3>
            <p className="text-gray-600">{player.team}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2">
            <span className="font-bold">{player.stats.points} PPG</span>
            <RankIndicator />
          </div>
          <div className="text-sm text-gray-600">
            Last Week: #{player.previousRank}
          </div>
        </div>
      </div>
    </Link>
  );
}
