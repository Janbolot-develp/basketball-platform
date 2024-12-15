import { useParams, Link } from "react-router-dom";
import { features } from "../data/features";
import FeatureIcon from "../components/FeatureIcon";

export default function FeatureDetails() {
  const { id } = useParams();
  const feature = features.find((f) => f.id === id);

  if (!feature) {
    return (
      <div className="pt-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Feature Not Found</h1>
        <Link to="/" className="text-indigo-600 hover:text-indigo-700">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-indigo-600 mb-6">
            <FeatureIcon name={feature.iconName} />
          </div>
          <h1 className="text-4xl font-bold mb-4">{feature.title}</h1>
          <p className="text-gray-600 mb-8">{feature.description}</p>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="text-gray-600">
              Detailed explanation of the feature and its benefits...
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Benefit 1</li>
                <li>Benefit 2</li>
                <li>Benefit 3</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
