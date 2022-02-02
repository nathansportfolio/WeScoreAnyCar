import ScoreGauge from "../../components/ScoreGauge";
import Button from "@mui/material/Button";

interface SavedCardProps {
    average?: number;
    percentage?: number;
    registration?: string;
    make?: string;
    model?: string;
    mileage?: string
}

const SavedCard: React.FC<SavedCardProps> = (props) => {
    const {average = 0.6, percentage = 0.3, registration, make, model, mileage} = props
  return (
    <div className="saved-card flex">
    <ScoreGauge
      duration={1}
      average={average}
      percentage={percentage}
      header="Your score"
      subHeader=""
    />
    <div style={{position: 'relative', width: "100%",}}>
      <div style={{  padding: "10px", textAlign: "center", fontWeight: '300' }}>
        <p>BD63SOE</p>
        <p>Audi</p>
        <p>A3</p>
        <p>83,000mi</p>
        <Button variant="outlined">View</Button>
      </div>
    </div>
  </div>
  );
};

export default SavedCard;
