import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    res.status(201).json({ message: "Meetup created!" });
  }
};

export default handler;
