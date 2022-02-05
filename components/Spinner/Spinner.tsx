import { MutatingDots } from "react-loader-spinner";

interface SpinnerProps {}

const Spinner: React.FC<SpinnerProps> = ({}) => {
  return (
    <div className="spinner-bg">
      <div className="centered">
        <div style={{ color: "white", textAlign: "center" }}>
          <div
            style={{ marginLeft: "auto", marginRight: "auto", width: "100px" }}
          >
            <MutatingDots width="100" color="#3498db" ariaLabel="loading" />
          </div>
          <h2>Fetching your score...</h2>
          <h4 style={{ paddingTop: "20px" }}>(This can take 5-10 seconds)</h4>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
