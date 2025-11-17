import type { ReactNode } from "react";
import  styles from "./Card.module.css"

interface CardProps {
  src: string;
  alt?: string;
  heading?: string;
  description?: string;
  children?: ReactNode;
}

const Card = ({ src, alt, heading, description, children }: CardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={src} alt={alt} />
      <h3>{heading}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Card;
