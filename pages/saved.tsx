import SavedCard from "../components/SavedCard";
import { useContext, useState } from "react";
import { MainContext } from "../context/context";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Spinner from "../components/Spinner";

interface SavedProps {}

const Saved: React.FC<SavedProps> = () => {
  const { user, sortSaved, loading } = useContext(MainContext);
  const [selectValue, setSelectValue] = useState(0);
  const style: any = {
    inner: {
      marginBottom: "200px",
      maxWidth: "700px",
    },
  };

  return (
    <div className="mountain-background">
      <div className="mountain-filter">
        <div className="page-container">
          {loading && <Spinner />}
          <div className="inner-page" style={style.inner}>
            <div
              style={{
                width: "100%",
                borderBottom: "solid 1px white",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ fontWeight: "400", padding: "20px" }}>
                {user.saved && user.saved.length} Vehicle
                {user.saved && user.saved.length === 1 ? "" : "s"} saved
              </h3>
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 120, padding: "10px", maxWidth: 150 }}
              >
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={selectValue}
                  onChange={(e: any) => {
                    setSelectValue(e.target.value);
                    sortSaved(e.target.value);
                  }}
                  sx={{ backgroundColor: "white !important", padding: '2px', borderRadius: '5px' }}
                >
                  <MenuItem value={0}>
                    Sort By
                  </MenuItem>
                  <MenuItem value={"SH"}>Score (High - Low)</MenuItem>
                  <MenuItem value={"SL"}>Score (Low - High)</MenuItem>
                </Select>
              </FormControl>
            </div>
            {user.saved &&
              user.saved.length > 0 &&
              user.saved.map((vehicle: any, index: number) => (
                <SavedCard
                  key={index}
                  score={vehicle.score}
                  avgScore={vehicle.avgScore}
                  registration={vehicle.registration}
                  make={vehicle.make}
                  model={vehicle.model}
                  engineSize={vehicle.engineSize}
                  fuelType={vehicle.fuelType}
                  primaryColour={vehicle.primaryColour}
                  mileage={vehicle.mileage}
                />
              ))}
            {user.saved && user.saved.length < 1 && (
              <div style={{ color: "white", padding: "10px" }}>
                No Vehicles Saved
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
