import { useState } from "react";
import { rankingCategories, topPlayers } from "../data/rankings";
import PlayerCard from "../components/rankings/PlayerCard";
import { RankingCategory } from "../types";

export default function Rankings() {
  const [selectedCategory, setSelectedCategory] = useState<RankingCategory>(
    rankingCategories[0]
  );

  return (
    <div className="pt-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Player Rankings</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Players */}
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Top Players</h2>
              <div className="text-sm text-gray-600">
                Category: {selectedCategory.name}
              </div>
            </div>
            <div className="space-y-4">
              {topPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>

          {/* Rankings Categories */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              {rankingCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full p-4 text-left rounded-lg transition-colors ${
                    selectedCategory.id === category.id
                      ? "bg-indigo-50 text-indigo-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm text-gray-600">
                    {category.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
