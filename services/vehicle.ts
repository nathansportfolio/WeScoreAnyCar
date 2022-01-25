import mongoose from "mongoose";

let vehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  firstUsedDate: String,
  fuelType: String,
  engineSize: String,
  passed: Number,
  failed: Number,
  score: Number,
  mots: String,
}, { typeKey: '$type' });

export default mongoose.model("Vehicle", vehicleSchema);
