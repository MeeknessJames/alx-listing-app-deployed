import type { NextApiRequest, NextApiResponse } from "next";

const allReviews = {
  1: [
    { id: 1, reviewerName: "James", comment: "Great place!", rating: 5 },
    { id: 2, reviewerName: "Chloe", comment: "Very clean and cozy.", rating: 4 },
  ],
  2: [
    { id: 1, reviewerName: "Ade", comment: "Loved the view!", rating: 5 },
  ],
  3: [],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  if (method === "GET") {
    const reviews = allReviews[id as keyof typeof allReviews] || [];
    res.status(200).json(reviews);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
