import { GitHubIcon } from "../../assets/Icons";
import styles from "./card.module.css";

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
      <div className={styles["card"]}>
        <div className={styles["card-title"]}>{title}</div>
        <div className={styles["card-subtitle"]}>{subtitle}</div>
        <div className={styles["card-dates"]}>{dates}</div>
        <div className={styles["card-desc"]}>{desc}</div>
        <div className={styles["github-icon"]}>
          {githubUrl && (
            <div className={styles["github"]}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon className={styles.githubIcon} />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
