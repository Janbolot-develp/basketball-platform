import * as LucideIcons from "lucide-react";
import { FC } from "react"; // Импортируем FC для компонентного типа

interface FeatureIconProps {
  name: keyof typeof LucideIcons;
}

export default function FeatureIcon({ name }: FeatureIconProps) {
  const Icon = LucideIcons[name] as FC<{ className?: string }>; // Указываем тип как FC

  return <Icon className="h-8 w-8" />;
}
