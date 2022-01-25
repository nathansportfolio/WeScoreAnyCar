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
import { getVehicle} from '../../services/fetchCars'
import {taxApi} from '../../services/taxApi'

const style = {
  card: { display: "flex", justifyContent: "space-between", height: "30px" },
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
}

const Score: React.FC<ScoreProps> = ({ vehicleString }) => {
  const router = useRouter();
  const { setError } = useContext(MainContext);
  const {
    registration,
    engineSize,
    fuelType,
    make,
    model,
    motTests,
    primaryColour,
    firstUsedDate,
    score,
    taxStatus,
    taxDueDate,
    revenueWeight,
    wheelplan,
    dateOfLastV5CIssued,
    co2Emissions
  } = vehicleString;

  useEffect(() => {
    if (!registration) {
      setError(true);
      router.push("/");
    }
  }, []);

  const CarDetailsCard = () => {
    return (
      <div className="scrore-card">
        <div style={style.card}>
          <h3>Registration:</h3>
          <h3>{registration}</h3>
        </div>
        <div style={style.card}>
          <h3>Make:</h3>
          <h3>{make}</h3>
        </div>
        <div style={style.card}>
          <h3>Model:</h3>
          <h3>{model}</h3>
        </div>
        <div style={style.card}>
          <h3>Fuel:</h3>
          <h3>{fuelType}</h3>
        </div>
        <div style={style.card}>
          <h3>Colour:</h3>
          <h3>{primaryColour}</h3>
        </div>
        <div style={style.card}>
          <h3>Engine:</h3>
          <h3>{engineSize}cc</h3>
        </div>
      </div>
    );
  };

  const CarTaxCard = () => {
    return (
      <div className="scrore-card">
        <div style={style.card}>
          <h3>Taxed Status:</h3>
          <h3>{taxStatus}</h3>
        </div>
        <div style={style.card}>
          <h3>Tax Due Date:</h3>
          <h3>{taxDueDate}</h3>
        </div>
        <div style={style.card}>
          <h3>Tax Amount:</h3>
          <h3>£149p/y</h3>
        </div>
        <div style={style.card}>
          <h3>Tips:</h3>
        </div>
      </div>
    );
  };

  const CarExtraDetailsCard = () => {
    return (
      <div className="scrore-card">
        <div style={style.card}>
          <h3>Weight:</h3>
          <h3>{revenueWeight}kg</h3>
        </div>
        <div style={style.card}>
          <h3>Wheel Plan:</h3>
          <h3>{wheelplan}</h3>
        </div>
        <div style={style.card}>
          <h3>Last V5 Produced:</h3>
          <h3>{dateOfLastV5CIssued}</h3>
        </div>
        <div style={style.card}>
          <h3>co2 Emissions:</h3>
          <h3>{co2Emissions}</h3>
        </div>
        <div style={style.card}>
          <h3>Tax Price (P/Y):</h3>
          <h3>£999</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="mountain-background">
      <div className="page-container">
        <div className="score-shelf">
          <div style={style.inner} className="inner-page">
            <div className="score-and-mileage-container">
              <ScoreGauge
                duration={1}
                percentage={score}
                header="Get a score"
                subHeader="Based on the health of your car"
              />
              <MileageScore />
            </div>
          </div>
        </div>
        <div className="score-container-chunk">
          <h2 className="score-headers" style={style.header}>
            {registration}
          </h2>
          <div className="score-card-container">
            <CarDetailsCard />
            <CarTaxCard />
            <CarExtraDetailsCard />
          </div>
        </div>
        <h2 className="score-headers" style={style.header}>
          {" "}
          How is your car doing?{" "}
        </h2>
        <div className="mot-container">
          <div className="line-chart-container">
            <LineChart mots={motTests} />
          </div>
          <h2>Your MOT History</h2>
          <div className="mot-entry-container">
            <MotAccordion mots={motTests} />
          </div>
        </div>
        <div className="know-car-container">
          <p>Know your car, save this information</p>
          <LoadingButton variant="contained"> Save car</LoadingButton>
        </div>
      </div>
      <div className="footer"> Footer here</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    if (params.id) {
      const response = await MotApiCall(params.id.toString());
      const responseTax = await taxApi(params.id.toString())
      const fullResponse = {...response, ...responseTax}
      return { props: { vehicleString: fullResponse } };
    }
  }
  throw new Error("Required parameters not provided");
};

export default Score;

