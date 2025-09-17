// interfaces/index.ts

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface CardProps {
  title: string;
  image: string;
  description: string;
}
