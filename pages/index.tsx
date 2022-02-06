import { useState, useContext } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ScoreGauge from "../components/ScoreGauge";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { MainContext } from "../context/context";
import Spinner from "../components/Spinner";
import {event} from '../services/ga';

const style: any = {
  inner: {
    display: "inherit",
    marginTop: "50px",
    minHeight: "92vh",
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
 
    let response = await fetch(
      "/api/vehicle/" + registration,
      {
        method: "GET",
      }
    );

    console.log('res', response)
    const { message } = await response.json();
    console.log('res', message)
    if (message.registration) {
      event(message.registration)
      router.push(`/score/${registration.replace(/\s/g, "")}`);
    } else {
      setError(true);
      setLoading(false);
    }
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
          <div
            style={{
              width: "100%",
              backgroundColor: "lightgrey",
              position: "absolute",
              left: "0",
              padding: "15px",
              fontWeight: "300",
              paddingBottom: "100px",
            }}
          >
            <h2 style={{ fontWeight: "300" }}>How the scoring works</h2>
            <div>
              1. We take all of the MOT history of your vehicle, and score each
              MOT using our special algorithm, that has been specially designed
              to accurately display how well a MOT test went.
            </div>{" "}
            <br />
            <div>
              2. We then total all of the MOT scores and get an average to
              generate your vehicles overall score.
            </div>
            <h2 style={{ fontWeight: "300" }}>How average score works</h2>
            <div>
              1. We generate a score for every vehicle in our database
              (Approximately 56 million vehicles).
            </div>{" "}
            <br />
            <div>
              2. Then we compare your score to all the vehicles we have of the
              same Make, Model, Year, Engine & Fuel, and calculate an average
              across all the scores returned.
            </div>
            <h2 style={{ fontWeight: "300" }}>How life expectancy works</h2>
            <div>
              1. We have a database full of scrapped vehicles (Not from
              accidents), which all have final mileages assigned to them.
            </div>{" "}
            <br />
            <div>
              2. When you search for a score, we quickly fetch all the same
              Make, Model, Engine & Fuel vehicles (Scrapped). We then work out
              an average across all of the returned vehicles, to give you a life
              expectancy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
