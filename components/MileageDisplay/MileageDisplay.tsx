interface MileageDisplayProps {}

const MileageDisplay: React.FC<MileageDisplayProps> = () => {
  return (
    <div>
      <div className="mileage-score-container">
        <div className="mileage-text">000,000</div>
      </div>
      <p className="mileage-sub-text">Average Life Expectancy</p>
      <p className="mileage-sub-text" style={{ color: "red" }}>
        COMING SOON...
      </p>
    </div>
  );
};

export default MileageDisplay;
