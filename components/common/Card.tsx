import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, image, description }) => (
  <div>
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <p>{description}</p>
  </div>
);

export default Card;
