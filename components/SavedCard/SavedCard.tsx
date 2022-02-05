import ScoreGauge from "../../components/ScoreGauge";
import Button from "@mui/material/Button";
import {  useContext } from "react";
import { MainContext } from "../../context/context";
import { useRouter } from "next/router";

interface SavedCardProps {
  avgScore?: number;
  score?: number;
  registration?: string;
  make?: string;
  model?: string;
  mileage?: string;
  engineSize?: string;
  fuelType?: string;
  primaryColour?: string;
}

const SavedCard: React.FC<SavedCardProps> = (props) => {
  const {
    avgScore = 0.6,
    score = 0.3,
    registration,
    make,
    model,
    mileage,
    engineSize,
    fuelType,
    primaryColour
  } = props;
  const { removeSaved } = useContext(MainContext);
const router = useRouter()

  const handler = () => {
    removeSaved({avgScore,
      score,
      registration,
      make,
      model,
      mileage,
      engineSize,
      fuelType,
      primaryColour})
  }

  return (
    <div className="saved-card flex">
      <ScoreGauge
        duration={1}
        average={avgScore}
        percentage={score}
        header="Your score"
        subHeader=""
      />
      <div style={{ position: "relative", width: "100%" }}>
        <div
          style={{ padding: "10px", textAlign: "center", fontWeight: "300" }}
        >
          <p>{registration}</p>
          <p>{make}</p>
          <p>{model}</p>
          <p>83,000mi</p>
          <Button variant="outlined" onClick={() => router.push('/score/'+registration)}>View</Button>
          <Button variant="outlined" color="warning" onClick={handler}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
