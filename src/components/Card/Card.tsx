import { GitHubIcon } from "../../assets/Icons";

export type CardColor = "purple" | "blue" | "green";

const colorClasses: Record<CardColor, { border: string; icon: string }> = {
  purple: { border: "border-purple", icon: "text-purple" },
  blue: { border: "border-blue", icon: "text-blue" },
  green: { border: "border-green", icon: "text-green" },
};

export interface CardProps {
  title: string;
  subtitle?: string;
  dates?: string;
  desc?: string | React.ReactNode;
  tags?: string[];
  githubUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  color?: CardColor;
  heightClass?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  dates,
  desc,
  githubUrl,
  imageUrl,
  imageAlt = "",
  color = "purple",
  heightClass = "h-50 min-h-50",
}) => {
  const { border, icon } = colorClasses[color];

  return (
    <div
      className={`bg-bg relative flex w-full min-w-60 flex-col overflow-hidden rounded-[10px] border-4 p-2 ${border} ${heightClass}`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="mb-2 h-50 w-full shrink-0 rounded-[10px] object-cover"
        />
      )}
      <div className="text-lg font-bold">{title}</div>
      <div className="text-md">{subtitle}</div>
      <div className="text-md">{dates}</div>
      <div className="mt-1.5 line-clamp-3 text-sm">{desc}</div>
      <div
        className={`absolute right-3 bottom-3 h-10 w-10 transition-all duration-200 hover:scale-105 ${icon}`}
      >
        {githubUrl && (
          <div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
