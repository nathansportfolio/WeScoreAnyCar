import mongoose from "mongoose";
import UserModel from "../../../services/user";
import clientPromise from "../../../services/mongo";

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getSaved(req, res);
    }
  }
}

async function getSaved(req, res) {
  const { email } = req.query;
  await mongoose.connect(
    "mongodb+srv://james:Jamied123@cars.natt5.mongodb.net/cars?retryWrites=true&w=majority"
  );

  try {
    const client = await clientPromise;
    const db = client.db("cars");

    const user = await db.collection("users").findOne({
      email,
    });

    return res.json({
      message: JSON.parse(JSON.stringify(user)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
