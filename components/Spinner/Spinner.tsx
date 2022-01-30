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
          <h2>Working out your score...</h2>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
