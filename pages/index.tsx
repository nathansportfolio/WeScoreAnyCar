import { useState, useContext } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ScoreGauge from "../components/ScoreGauge";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { MainContext } from "../context/context";
import Spinner from "../components/Spinner";

const style: any = {
  inner: {
    display: "inherit",
    marginTop: "50px",
  },
  button: {
    backgroundColor: "white",
    color: "black",
    marginLeft: "10px",
    maxHeight: "60px",
  },
};

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { setError, error, setLoading, loading } = useContext(MainContext);
  const router = useRouter();
  const [registration, setRegistration] = useState("");

  const HandleSubmit = async () => {
    setError(false);
    setLoading(true);
    router.push(`/score/${registration}`);
  };

  return (
    <div className="mountain-background">
      <div className="mountain-filter">
        {loading && <Spinner />}
        <div className="page-container">
          <div className="inner-page" style={style.inner}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <ScoreGauge
                duration={0}
                percentage={0.2}
                header="Get a score"
                subHeader=""
                noDelay={true}
                average={1.2}
              />
            </div>
            <h3
              className="text-white text-centered"
              style={{
                marginBottom: "100px",
              }}
            >
              It's like a credit score...<br></br> but for your car
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "200px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Enter Registration"
                variant="filled"
                sx={{
                  backgroundColor: "rgb(0.2, 0.3, 2, 0.6)",
                  borderRadius: "5px",
                }}
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
    </div>
  );
};

export default Home;
