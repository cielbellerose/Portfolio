import { GitHubIcon } from "../../assets/Icons";

export interface CardProps {
  title: string;
  subtitle?: string;
  dates?: string;
  desc?: string | React.ReactNode;
  tags?: string[];
  githubUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  logoUrl?: string;
  logoAlt?: string;
  modalContent?: React.ReactNode;
  isClickable?: boolean;
  modalImages?: string[];
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  dates,
  desc,
  //   tags,
  githubUrl,
  //   imageUrl,
  //   imageAlt = "",
  //   logoUrl,
  //   logoAlt = "",
  //   modalContent,
  //   isClickable,
  //   modalImages,
}) => {
  return (
    <>
      <div className="bg-bg border-purple relative flex h-50 min-h-50 w-full min-w-50 flex-col rounded-[10px] border-4 p-2">
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{dates}</div>
        <div>{desc}</div>
        <div className="text-purple absolute right-3 bottom-3 h-10 w-10 transition-all duration-200 hover:scale-105">
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
    </>
  );
};

export default Card;
