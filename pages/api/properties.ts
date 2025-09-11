import { NextApiRequest, NextApiResponse } from "next";

const properties = [
  { id: 1, title: "Modern Apartment", price: 1200, location: "New York" },
  { id: 2, title: "Cozy Cottage", price: 800, location: "Vermont" },
  { id: 3, title: "Beach House", price: 2500, location: "California" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(properties);
}
