import UserModel from "./models/user";
import dbConnect from "../services/newMongo";

export default async function newUser() {
  dbConnect();
  let user = UserModel;

  let response = await new user({
    email: "nathan_doore@outlook.com",
    saved: [],
  });
  response.save();
}
