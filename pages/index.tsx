import { useState, useContext } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ScoreGauge from "../components/ScoreGauge";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { MainContext } from "../context/context";

const style:any = {
  inner: {
    display: "inherit",
    marginTop: "50px",
  },
  h3: { color: "white" },
  button: {
    backgroundColor: "white",
    color: "black",
    marginLeft: "10px",
    maxHeight: "60px",
  },
};

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { setError, error } = useContext(MainContext);
  const router = useRouter();
  const [registration, setRegistration] = useState("");

  const HandleSubmit = async () => {
    setError(false);
    router.push(`/score/${registration}`);
  };

  return (
    <div className="mountain-background">
      <div className="page-container">
        <div className="inner-page" style={style.inner}>
          <ScoreGauge
            duration={0}
            percentage={88}
            header="Get a score"
            subHeader="Based on the health of your car"
            noDelay={true}
          />
          <h3
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "100px",
            }}
          >
            It's like a credit score...<br></br> but for your car
          </h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              id="outlined-basic"
              label="Enter Registration"
              variant="filled"
              sx={{ backgroundColor: "rgb(0.2, 0.3, 2, 0.6)", borderRadius: '5px' }}
              value={registration}
              onChange={(e) => setRegistration(e.target.value.toUpperCase())}
              helperText={error ? "No MOT Records Found to score" : ""}
              error={error}
            />
            <LoadingButton
              endIcon={<DoubleArrowIcon />}
              variant="contained"
              component="span"
              onClick={() => HandleSubmit()}
              disabled={!registration}
              style={style.button}
            >
              Get Score
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
