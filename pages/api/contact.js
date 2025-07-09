
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
const connectDB = await MongoClient.connect(
   process.env.DATABASE_URL
  );
 if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (!email || !name || !text) {
      return res.status(200).json({
        success: false,
        message: "Enter correct data.",
      });
    }

    const newComment = {
      name,
      email,
      text,
    };
 
    const db = connectDB.db();

    await db.collection("comments").insertOne(newComment);
    connectDB.close();

   return res.status(200).json({
      success :true ,
      data :newComment
    });
  }
}
