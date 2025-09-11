import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

export default Button;
