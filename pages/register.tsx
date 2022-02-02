import { useContext, useState } from "react";
import { MotApiCall } from "../services/motCalls";
import { GetServerSideProps } from "next";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import { MainContext } from "../context/context";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/router";

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
    marginBottom: "50px",
    borderRadius: "3px",
    maxWidth: "90%",
    textAlign: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
};

interface RegistrationProps {}

const Registration: React.FC<RegistrationProps> = () => {
  const { register, loading, googleLogin } = useContext(MainContext);
  const [state, setState] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Array<string>>([]);
  const router = useRouter();

  const submitHandler = async () => {
    setErrors([]);
    if (state.password !== state.confirmPassword) {
      setErrors(["Passwords do not match"]);
      return;
    }
    const response = await register(
      state.email,
      state.password,
      state.displayName
    );
    if (response) router.push("/");
  };

  const handleGoogle = async () => {
    setErrors([]);
    const error = await googleLogin();
    if (!error) router.push("/");
    else setErrors([error]);
  };

  return (
    <div className="mountain-background">
      <div className="mountain-filter">
        <div className="page-container">
          <div className="inner-page" style={style.inner}>
            <div style={style.card}>
              <h1>Registration</h1>
              {errors.length > 0 &&
                errors.map((error) => <p style={{ color: "red" }}>{error}</p>)}
              <TextField
                label="Email"
                type="email"
                variant="filled"
                color="success"
                sx={{ color: "white", width: "250px" }}
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
              <TextField
                label="Displayname"
                type="fn"
                variant="filled"
                color="success"
                sx={{ color: "white", width: "250px" }}
                value={state.displayName}
                onChange={(e) =>
                  setState({ ...state, displayName: e.target.value })
                }
              />
              <TextField
                label="Password"
                type="password"
                variant="filled"
                color="success"
                sx={{ color: "white", width: "250px" }}
                value={state.password}
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
              <TextField
                label="Confirm Password"
                type="password"
                variant="filled"
                color="success"
                sx={{ color: "white", width: "250px", marginBottom: "29px" }}
                value={state.confirmPassword}
                onChange={(e) =>
                  setState({ ...state, confirmPassword: e.target.value })
                }
              />
              <LoadingButton
                variant="contained"
                component="span"
                sx={{ width: "250px" }}
                onClick={submitHandler}
                loading={loading}
                size="large"
                disabled={!state.confirmPassword}
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
                endIcon={<GoogleIcon />}
                variant="contained"
                sx={{ width: "250px", marginBottom: "10px" }}
                style={style.buttonGl}
                onClick={handleGoogle}
              >
                Google
              </LoadingButton>
            </div>
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
