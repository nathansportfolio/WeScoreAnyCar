import { useContext } from "react";
import { MotApiCall } from "../services/motCalls";
import { GetServerSideProps } from "next";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import { MainContext } from "../context/context";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const style: any = {
  inner: {
    display: "flex",
    marginTop: "50px",
  },
  h3: { color: "white" },
  button: { backgroundColor: "#34495e", color: "white", marginLeft: "10px" },
  buttonFb: { backgroundColor: "#3498db", color: "white", marginLeft: "10px" },
  buttonGl: { backgroundColor: "#e74c3c", color: "white", marginLeft: "10px" },
  card: {
    padding: "10px",
    width: "350px",
    backgroundColor: "white",
    borderRadius: "3px",
    maxWidth: "90%",
    textAlign: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
};

interface RegistrationProps {
  vehicle: any;
}

const Registration: React.FC<RegistrationProps> = (props) => {
  const { setVehicle } = useContext(MainContext);
  setVehicle(props.vehicle);

  return (
    <div className="mountain-background">
      <div className="page-container">
        <div className="inner-page" style={style.inner}>
          <div style={style.card}>
            <h1>Registration</h1>
            <TextField
              label="Email"
              type="email"
              variant="filled"
              color="success"
              sx={{ color: "white", width: "250px" }}
              // value={state.registration}
              // onChange={(e) =>
              //   setState({ registration: e.target.value.toUpperCase() })
              // }
            />
            <TextField
              label="First Name"
              type="fn"
              variant="filled"
              color="success"
              sx={{ color: "white", width: "250px" }}
              // value={state.registration}
              // onChange={(e) =>
              //   setState({ registration: e.target.value.toUpperCase() })
              // }
            />
            <TextField
              label="Last Name"
              type="ln"
              variant="filled"
              color="success"
              sx={{ color: "white", width: "250px" }}
              // value={state.registration}
              // onChange={(e) =>
              //   setState({ registration: e.target.value.toUpperCase() })
              // }
            />
            <TextField
              label="Password"
              type="password"
              variant="filled"
              color="success"
              sx={{ color: "white", width: "250px" }}
              // value={state.registration}
              // onChange={(e) =>
              //   setState({ registration: e.target.value.toUpperCase() })
              // }
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="filled"
              color="success"
              sx={{ color: "white", width: "250px", marginBottom: "29px" }}
              // value={state.registration}
              // onChange={(e) =>
              //   setState({ registration: e.target.value.toUpperCase() })
              // }
            />
            <LoadingButton
              variant="contained"
              component="span"
              sx={{ width: "250px" }}
              // onClick={submitHandler}
              // loading={state.loading}
              // size="large"
              // disabled={!state.registration}
              style={style.button}
            >
              Register
            </LoadingButton>
            <p style={{ marginBottom: "40px" }}>
              Already have an account?{" "}
              <a style={{ color: "red" }} href="/login">
                Sign in
              </a>
            </p>
            <p>Or why not sign straight in with:</p>
            <LoadingButton
              endIcon={<FacebookIcon />}
              variant="contained"
              sx={{ width: "250px", marginBottom: "10px" }}
              style={style.buttonFb}
            >
              Facebook
            </LoadingButton>
            <LoadingButton
              endIcon={<GoogleIcon />}
              variant="contained"
              sx={{ width: "250px", marginBottom: "10px" }}
              style={style.buttonGl}
            >
              Google
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await MotApiCall("BD63SOE");

  return { props: { vehicle: JSON.stringify(response) } };
};

export default Registration;
