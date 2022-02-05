import ScoreGauge from "../../components/ScoreGauge";
import MileageScore from "../../components/MileageDisplay";
import LoadingButton from "@mui/lab/LoadingButton";
import LineChart from "../../components/LineChart";
import MotAccordion from "../../components/Accordion";
import { GetServerSideProps } from "next";
import { MotApiCall } from "../../services/motCalls";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { MainContext } from "../../context/context";
import { taxApi } from "../../services/taxApi";
// @ts-ignore
import clientPromise from "../../services/mongo";

const style = {
  card: { textAlign: "center" as "center", marginTop: "30px" },
  taxCard: { display: "flex", justifyContent: "space-between", height: "30px" },
  inner: { display: "flex", justifyContent: "center" },
  header: { marginLeft: "30px", color: "white" },
  h2: {
    textAlign: "left",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    maxWidth: "800px",
  },
  startAgain: {
    width: "100vw",
    position: "absolute",
    textAlign: "right",
    color: "white",
    top: "60px",
    right: "5px",
  },
  aTag: { textDecoration: "none", color: "#f1c40f" },
};

interface ScoreProps {
  vehicleString: any;
  averageVehicle: any;
}

const Score: React.FC<ScoreProps> = ({ vehicleString, averageVehicle }) => {
  const router = useRouter();
  const { setError, setLoading, savedToggle } = useContext(MainContext);
  const {
    registration,
    engineSize,
    fuelType,
    make,
    model,
    motTests,
    primaryColour,
    firstUsedDate,
    motChartTests,
    score,
    taxStatus,
    taxDueDate,
    revenueWeight,
    wheelplan,
    dateOfLastV5CIssued,
    co2Emissions,
  } = vehicleString;

  const { averageMots, avgScore, avgScrapped, numberOfScrapped } =
    averageVehicle;

  const firstCard = {
    icon: "fas fa-car",
    firstCol: [
      { title: "Registration", value: registration },
      { title: "Make", value: make },
      { title: "Model", value: model },
    ],
    secondCol: [
      { title: "Fuel", value: fuelType },
      { title: "Colour", value: primaryColour },
      { title: "Engine", value: engineSize },
    ],
  };

  const secondCard = {
    icon: "fas fa-car",
    firstCol: [
      { title: "Taxed Status", value: taxStatus },
      { title: "Tax Due Date", value: taxDueDate },
    ],
    secondCol: [
      { title: "Co2 Emissions", value: co2Emissions },
      { title: "Tax Code", value: "12W" },
    ],
  };

  const thirdCard = {
    icon: "fas fa-car",
    firstCol: [
      { title: "Weight", value: revenueWeight + "kg" },
      { title: "Last V5 generated", value: dateOfLastV5CIssued },
    ],
    secondCol: [
      { title: "Wheel Base", value: wheelplan },
      { title: "Tax Code", value: "12W" },
    ],
  };

  useEffect(() => {
    if (!registration) {
      setLoading(false);
      setError(true);
      router.push("/");
    }
  }, []);

  const CarDetailsCard = (properties: any) => {
    return (
      <div className="scrore-card">
        <div
          style={{
            height: "105px",
            width: "105px",
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "",
            borderRadius: "60px",
            boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px",
          }}
        >
          <div style={{ padding: "26px" }}>
            <span className={`${properties.icon} fa-4x`}></span>
          </div>
        </div>
        <div
          className="flex space-between"
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <div>
            {properties.firstCol.map((details: any, index: number) => (
              <div style={style.card} key={index}>
                <h3>{details.title}</h3>
                <h3 className="text-light">{details.value}</h3>
              </div>
            ))}
          </div>

          <div>
            {properties.secondCol.map((details: any, index: number) => (
              <div style={style.card} key={index}>
                <h3>{details.title}</h3>
                <h3 className="text-light">{details.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mountain-background">
      <div className="mountain-filter">
        <div className="page-container">
          <div className="score-shelf">
            <div style={style.inner} className="inner-page">
              <div className="score-and-mileage-container">
                <div className="gauges">
                  <div style={{ justifyContent: "center", display: "flex" }}>
                    <ScoreGauge
                      duration={1}
                      average={avgScore}
                      percentage={score}
                      header="Your score"
                      subHeader=""
                    />
                  </div>
                </div>
                <MileageScore
                  mileage={avgScrapped}
                  numberOfScrapped={numberOfScrapped}
                />
              </div>
            </div>
          </div>
          <div className="score-container-chunk">
            <h2 className="score-headers" style={style.header}>
              {make} {model}{" "}
              <div className="inline-block text-light">{registration}</div>
            </h2>
            <div className="score-card-container">
              {CarDetailsCard(firstCard)}
              {CarDetailsCard(secondCard)}
              {CarDetailsCard(thirdCard)}
            </div>
          </div>
          <h2 className="score-headers" style={style.header}>
            {" "}
            How is your car doing?{" "}
          </h2>
          {motTests.length > 1 && (
            <div className="mot-container">
              <h3 className="text-centered">Last 5 year MOT scores</h3>

              <LineChart mots={motChartTests} averageMots={averageMots} />
              <div
                className="flex space-between"
                style={{
                  padding: "10px",
                }}
              >
                <p style={{ color: "#e74c3c" }}> -Your Score-</p>{" "}
                <p style={{ color: "black" }}>-Average Score-</p>
              </div>
            </div>
          )}
          <div className="mot-container">
            <h2>Your MOT History</h2>
            <div className="mot-entry-container">
              <MotAccordion mots={motTests} />
            </div>
          </div>
          <div className="know-car-container">
            <p>Know your car, save this information</p>
            <LoadingButton
              variant="contained"
              onClick={() => savedToggle({ vehicleString, averageVehicle })}
            >
              {" "}
              Save car
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    if (params.id) {
      const response = await MotApiCall(params.id.toString());
      const responseTax = await taxApi(params.id.toString());
      // @ts-ignore
      const client = await clientPromise;
      const db = client.db("cars");
      let fullResponse = response;
      if (responseTax) fullResponse = { ...response, ...responseTax };

      const vehicles = await db
        .collection("vehicles")
        .find({
          make: response.make,
          model: response.model,
          fuelType: response.fuelType,
        })
        .limit(12000)
        .toArray();

      const collectedVehicles = vehicles.map((vehicle: any) => ({
        ...vehicle,
        mots: JSON.parse(vehicle.mots).filter((mot: any) => mot !== false),
      }));

      const scrappedTotal: any[] = [];
      collectedVehicles.map((vehicle: any) => {
        if (vehicle.scrapped > 65000) scrappedTotal.push(vehicle.scrapped);
      });

      let scrappedTotalNum = 0;
      scrappedTotal.map((number) => {
        scrappedTotalNum += number;
      });
      const completeScrappedValue = scrappedTotalNum / scrappedTotal.length;
      const numberOfScrapped = scrappedTotal.length;

      let score = 0;

      const collectMots = fullResponse.motTests
        .map((mot: any, index: number) => {
          const currentYear = mot.completedDate.split(".")[0];
          let nextYear;
          if (fullResponse.motTests[index + 1]) {
            nextYear =
              fullResponse.motTests[index + 1].completedDate.split(".")[0];
          } else {
            return { ...mot, score, completedDate: currentYear };
          }
          if (currentYear === nextYear) {
            score += mot.score;
            return false;
          } else {
            return { ...mot, score, completedDate: currentYear };
          }
        })
        .filter((mot: any) => mot !== false);

      const motsWeWant = collectMots.map((mot: any) => mot.completedDate);

      const collection = motsWeWant.map((year: any) => {
        const collectedMotsOneYear = collectedVehicles.map((car: any) => ({
          ...car,
          mots: car.mots.filter((mot: any) => mot.completedDate === year),
        }));
        let sumOfMotScores = 0;
        collectedMotsOneYear.forEach((car: any) => {
          if (car.mots[0]) sumOfMotScores += car.mots[0].score;
        });
        return {
          completedDate: year,
          score: parseFloat(
            (sumOfMotScores / collectedMotsOneYear.length).toFixed(2)
          ),
          scrappedAverage: completeScrappedValue.toFixed(0),
          numberOfScrapped,
        };
      });

      let avgScore = 0;
      collection.map((mot: any) => (avgScore += mot.score));

      return {
        props: {
          vehicleString: { ...fullResponse, motChartTests: collectMots },
          averageVehicle: {
            averageMots: collection,
            avgScore: parseFloat((avgScore / collection.length).toFixed(2)),
            avgScrapped: collection[0].scrappedAverage,
            numberOfScrapped: collection[0].numberOfScrapped,
          },
        },
      };
    }
  }
  throw new Error("Required parameters not provided");
};

export default Score;
