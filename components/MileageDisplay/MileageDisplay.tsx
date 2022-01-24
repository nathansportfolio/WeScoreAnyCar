interface MileageDisplayProps {}

const MileageDisplay: React.FC<MileageDisplayProps> = () => {
  return (
    <div>
      <div className="mileage-score-container">
        <div className="mileage-text">999,999</div>
      </div>
      <p className="mileage-sub-text">Average Life Expectancy</p>
    </div>
  );
};

export default MileageDisplay;
