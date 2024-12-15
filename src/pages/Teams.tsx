import { teams } from "../data/teams";
import TeamCard from "../components/teams/TeamCard";

export default function Teams() {
  return (
    <div className="pt-20 container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Teams</h1>
        <div className="flex space-x-4">
          <select className="rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>All Divisions</option>
            <option>Eastern</option>
            <option>Western</option>
          </select>
          <select className="rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>Sort by Rank</option>
            <option>Sort by Name</option>
            <option>Sort by Win %</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
