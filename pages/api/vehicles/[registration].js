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

function generateScrapped(cleanedMotVehicles) {
  const scrappedTotal = cleanedMotVehicles.filter(
    (vehicle) => vehicle.scrapped > 65000
  );
  let scrappedTotalNum = 0;
  scrappedTotal.map((vehicle) => {
    scrappedTotalNum += vehicle.scrapped;
  });
  const completeScrappedValue = scrappedTotalNum / scrappedTotal.length;
  const numberOfScrapped = scrappedTotal.length;
  return { completeScrappedValue, numberOfScrapped };
}

function generateMotScoresByYear(mots) {
  let scoreGen = 0;
  return mots
    .map((mot, index) => {
      const currentYear = mot.completedDate.split(".")[0];
      let nextYear;
      if (mots[index + 1]) {
        nextYear = mots[index + 1].completedDate.split(".")[0];
      } else {
        return { ...mot, scoreGen, completedDate: currentYear };
      }
      if (currentYear === nextYear) {
        scoreGen += mot.scoreGen;
        return false;
      } else {
        return { ...mot, scoreGen, completedDate: currentYear };
      }
    })
    .filter((mot) => mot !== false);
}

function generateAverageMots(motYears, cleanedMotVehicles) {
  return motYears.map((year) => {
    const collectedMotsOneYear = cleanedMotVehicles.map((car) => ({
      ...car,
      mots: car.mots.filter((mot) => mot.completedDate === year),
    }));
    let sumOfMotScores = 0;
    collectedMotsOneYear.forEach((car) => {
      if (car.mots[0]) sumOfMotScores += car.mots[0].score;
    });
    return {
      completedDate: year,
      score: parseFloat(
        (sumOfMotScores / collectedMotsOneYear.length).toFixed(2)
      ),
    };
  });
}

async function getVehicleData(req, res) {
  const { registration } = req.query;
  const [motResponse, taxResponse, connected] = await Promise.all([
    MotApiCall(registration),
    taxApi(registration),
    connectToDatabase(),
  ]);
  const response = { ...motResponse, ...taxResponse };
  const vehicles = await connected.db
    .collection("vehicles")
    .find({
      make: response.make,
      model: response.model,
      fuelType:
        response.fuelType.charAt(0).toUpperCase() +
        response.fuelType.slice(1).toLowerCase(),
    })
    .limit(5000)
    .toArray();

  const cleanedMotVehicles = vehicles.map((vehicle) => ({
    ...vehicle,
    mots: JSON.parse(vehicle.mots).filter((mot) => mot !== false),
  }));

  const { completeScrappedValue, numberOfScrapped } =
    generateScrapped(cleanedMotVehicles);
  const collectMotsScoresByYear = generateMotScoresByYear(response.motTests);
  const motYears = collectMotsScoresByYear.map((mot) => mot.completedDate);
  const collection = generateAverageMots(motYears, cleanedMotVehicles);

  let avgScoreCounter = 0;
  collection.map((mot) => (avgScoreCounter += mot.score));

  const props = {
    vehicleString: { ...response, motChartTests: collectMotsScoresByYear },
    averageVehicle: {
      averageMots: collection,
      avgScore: parseFloat((avgScoreCounter / collection.length).toFixed(2)),
      avgScrapped: completeScrappedValue.toFixed(0),
      numberOfScrapped,
    },
  };

  return res.json({
    message: JSON.parse(JSON.stringify(props)),
    success: true,
  });
}
