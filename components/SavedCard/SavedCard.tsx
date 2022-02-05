import ScoreGaugeSmall from "../../components/ScoreGaugeSmall";
import Button from "@mui/material/Button";
import { useContext } from "react";
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
    primaryColour,
  } = props;
  const { removeSaved, setLoading } = useContext(MainContext);
  const router = useRouter();

  const handler = () => {
    removeSaved({
      avgScore,
      score,
      registration,
      make,
      model,
      mileage,
      engineSize,
      fuelType,
      primaryColour,
    });
  };

  return (
    <div className="saved-card flex">
      <ScoreGaugeSmall
        key={registration}
        duration={1}
        average={avgScore}
        percentage={score}
        header="Your score"
        subHeader=""
      />
      <div style={{ position: "relative" }}>
        <div
          style={{
            fontWeight: "400",
            marginBottom: "10px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {make} {model}
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ padding: "10px", fontWeight: "300" }}>
            <b>{registration}</b>
            <div>{engineSize}</div>
            <div>{fuelType}</div>
            <div style={{ marginBottom: "15px" }}>{primaryColour}</div>
            <div>{mileage}mi</div>
          </div>
          <div
            style={{
              display: "block",
              width: "100px",
              textAlign: "center",
              marginTop: "auto",
              marginBottom: "auto",
              marginRight: "20px",
            }}
          >
            <Button
              variant="outlined"
              color="warning"
              sx={{ marginBottom: "20px" }}
              onClick={handler}
            >
              Remove
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setLoading(true);
                router.push("/score/" + registration);
              }}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
