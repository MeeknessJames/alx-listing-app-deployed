import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Just return the received data as confirmation
    res.status(200).json({ message: "Booking received", data: req.body });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
