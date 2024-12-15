import { Stat } from "../types";

export default function StatCard({ number, label }: Stat) {
  return (
    <div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-indigo-200">{label}</div>
    </div>
  );
}
