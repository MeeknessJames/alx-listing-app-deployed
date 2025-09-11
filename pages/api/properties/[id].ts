import type { NextApiRequest, NextApiResponse } from "next";

const properties = [
  {
    id: 1,
    title: "Cozy Apartment",
    location: "Lagos, Nigeria",
    price: 45,
    description: "A nice cozy apartment in the city.",
    imageUrl: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Beach House",
    location: "Port Harcourt, Nigeria",
    price: 120,
    description: "A beautiful beach house with sea view.",
    imageUrl: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "Luxury Villa",
    location: "Abuja, Nigeria",
    price: 250,
    description: "A luxury villa with all amenities.",
    imageUrl: "https://via.placeholder.com/400x300",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  if (method === "GET") {
    const property = properties.find((p) => p.id === Number(id));
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
