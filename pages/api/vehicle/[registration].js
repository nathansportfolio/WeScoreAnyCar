import { MotApiCall } from "../../../services/motCalls";
import { taxApi } from "../../../services/taxApi";
import connectToDatabase from "../../../services/newMongo";
export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getVehicleData(req, res);
    }
  }
}

async function getVehicleData(req, res) {
  const { registration } = req.query;
  const motResponse = await MotApiCall(registration);

  return res.json({
    message: JSON.parse(JSON.stringify(motResponse)),
    success: true,
  });
}
