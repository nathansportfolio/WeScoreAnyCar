import SavedCard from "../components/SavedCard";
import { useContext } from "react";
import { MainContext } from "../context/context";

interface SavedProps {}

const Saved: React.FC<SavedProps> = () => {
  const { saved } = useContext(MainContext);
  const style: any = {
    inner: {
      marginTop: "50px",
    },
  };

  return (
    <div className="mountain-background">
      <div className="mountain-filter">
        <div className="page-container">
          <div className="inner-page" style={style.inner}>
            {saved.map((vehicle: any) => (
              <SavedCard
                score={vehicle.score}
                avgScore={vehicle.avgScore}
                registration={vehicle.registration}
                make={vehicle.make}
                model={vehicle.model}
                engineSize={vehicle.engineSize}
                fuelType={vehicle.fuelType}
                primaryColour={vehicle.primaryColour}

              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
