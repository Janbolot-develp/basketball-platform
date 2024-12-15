import { useState } from "react";
import { tournaments, games } from "../data/schedule";
import GameCard from "../components/schedule/GameCard";
import { Tournament } from "../types";

export default function Schedule() {
  const [selectedTournament, setSelectedTournament] =
    useState<Tournament | null>(null);

  return (
    <div className="pt-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Tournament Schedule</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tournament Selection */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Tournaments</h2>
            <div className="space-y-2">
              {tournaments.map((tournament) => (
                <button
                  key={tournament.id}
                  onClick={() => setSelectedTournament(tournament)}
                  className={`w-full p-4 text-left rounded-lg transition-colors ${
                    selectedTournament?.id === tournament.id
                      ? "bg-indigo-50 text-indigo-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="font-semibold">{tournament.name}</div>
                  <div className="text-sm text-gray-600">
                    {tournament.startDate} - {tournament.endDate}
                  </div>
                  <div className="text-sm text-gray-600">
                    {tournament.teams} Teams
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Games List */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {selectedTournament ? selectedTournament.name : "All Games"}
              </h2>
              <select className="rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>All Games</option>
                <option>Upcoming</option>
                <option>Live</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="space-y-4">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
