import CountUp from "react-countup";

interface MileageDisplayProps {
  mileage: number;
  numberOfScrapped: number;
}

const MileageDisplay: React.FC<MileageDisplayProps> = ({
  mileage,
  numberOfScrapped,
}) => {
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      {mileage > 0 && (
        <>
          <div
            className="mileage-score-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {mileage
              .toString()
              .split("")
              .map((number, index) => (
                <div key={index} className="mileage-display-number">
                  {
                    <CountUp
                      start={0}
                      end={parseInt(number)}
                      duration={2}
                      decimals={0}
                    />
                  }
                </div>
              ))}
          </div>
          <p className="mileage-sub-text">Average Life Expectancy (mi)</p>
          <p className="mileage-sub-text">
            *Based off {numberWithCommas(numberOfScrapped * 10)} scrapped cars
          </p>
        </>
      )}
    </div>
  );
};

export default MileageDisplay;
