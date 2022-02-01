interface MileageDisplayProps {
  mileage: number
}

const MileageDisplay: React.FC<MileageDisplayProps> = ({mileage}) => {

  function numberWithCommas(x:number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div>
      {mileage > 0 && <><div className="mileage-score-container">
        <div className="mileage-text">{numberWithCommas(mileage)}mi</div>
      </div>
      <p className="mileage-sub-text">Average Life Expectancy</p></>}
    </div>
  );
};

export default MileageDisplay;
