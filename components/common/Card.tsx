import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => (
  <div>
    <h2>{title}</h2>
    <Image
      src={image}
      alt={title}
      width={400}
      height={250}
      className="rounded-md object-cover"
    />
    <p>{description}</p>
  </div>
);

export default Card;
