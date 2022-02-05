import mongoose from "mongoose";

const savedSchema = new mongoose.Schema({
  registration: {
    type: String,
    required: true,
  },
  engineSize: {
    type: String,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  primaryColour: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  avgScore: {
    type: Number,
    required: true,
  },
});

let userSchema = new mongoose.Schema(
  {
    email: String,
    saved: [savedSchema],
  },
  { typeKey: "$type" }
);

let user = mongoose.model("User", userSchema) || mongoose.model("User");

export default user;
