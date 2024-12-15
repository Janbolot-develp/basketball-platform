import { Game } from "../../types";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const getStatusColor = (status: Game["status"]) => {
    switch (status) {
      case "live":
        return "text-red-500";
      case "completed":
        return "text-gray-500";
      default:
        return "text-green-500";
    }
  };

  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold">{game.tournament}</h3>
            <span className={`text-sm ${getStatusColor(game.status)}`}>
              {game.status.toUpperCase()}
            </span>
          </div>
          <p className="text-gray-600">
            {game.homeTeam} vs {game.awayTeam}
          </p>
        </div>
        <div className="text-right">
          <div className="font-bold">{game.time}</div>
          <div className="text-sm text-gray-600">{game.court}</div>
        </div>
      </div>
    </div>
  );
}
