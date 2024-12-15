import { Link } from "react-router-dom";
import { Feature } from "../types";
import FeatureIcon from "./FeatureIcon";

export default function FeatureCard({
  iconName,
  title,
  description,
  id,
}: Feature) {
  return (
    <Link
      to={`/features/${id}`}
      className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="text-indigo-600 mb-4">
        <FeatureIcon name={iconName} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
