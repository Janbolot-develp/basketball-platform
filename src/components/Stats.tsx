import StatCard from "./StatCard";
import { stats } from "../data/stats";

export default function Stats() {
  return (
    <div className="bg-indigo-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
