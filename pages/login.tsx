import { useContext, useState } from "react";
import { MotApiCall } from "../services/motCalls";
import { GetServerSideProps } from "next";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import { MainContext } from "../context/context";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const style = {
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

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useContext(MainContext);

  const handleSubmit = () => {
    const response = login(email, password);
    if (response) {
    }
  };

  return (
    <div className="mountain-background">
      <div className="page-container">
        <div className="inner-page" style={style.inner}>
          <div style={style.card}>
            <h1>Login</h1>
            <TextField
              label="Email"
              type="email"
              variant="filled"
              color="success"
              sx={{ color: "white", width: "250px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="filled"
              color="success"
              sx={{ color: "white", width: "250px", marginBottom: "40px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoadingButton
              variant="contained"
              component="span"
              sx={{ width: "250px" }}
              onClick={() => handleSubmit()}
              loading={loading}
              loadingPosition="start"
              disabled={loading}
              style={style.button}
            >
              Login
            </LoadingButton>
            <p style={{ marginBottom: "29px" }}>
              No account?{" "}
              <a style={{ color: "red" }} href="/register">
                Sign up
              </a>
            </p>
            <p>Or why not login with:</p>
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

export default Login;
