import { useState, useEffect } from "react";
import CountUp from "react-countup";

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const scoreMaker = (percentage: number) => {
  switch (true) {
    case percentage < 0.3:
      return 100 - percentage * 30 - 0.1;
    case percentage < 0.6:
      return 100 - percentage * 35;
    case percentage < 0.9:
      return 100 - percentage * 35;
    case percentage < 1.3:
      return 100 - percentage * 35;
    case percentage < 1.6:
      return 55 - percentage * 2;
    case percentage < 1.9:
      return 55 - percentage * 3;
    case percentage < 2.4:
      return 55 - percentage * 5;
    case percentage < 3.2:
      return 55 - percentage * 7;
    case percentage < 4:
      return 55 - percentage * 4;
    case percentage >= 4 && percentage <= 6:
      return 30 - percentage;
    case percentage > 6 && percentage <= 10:
      return 26 - percentage;
    case percentage > 10:
      return 0.4;
    default:
      return percentage;
  }
};

const getValues = (percent: number) => {
  const score = percent * 10;
  switch (true) {
    case score < 438:
      return { header: "Poor", colour: "#e67e22" };
    case score >= 438 && score < 530:
      return { header: "Fair", colour: "#f1c40f" };
    case score >= 530 && score < 670:
      return { header: "Good", colour: "#7bed9f" };
    case score >= 670 && score < 810:
      return {
        header: "Very Good",
        colour: "#2ecc71",
      };
    case score > 810:
      return {
        header: "Excellent",
        colour: "#27ae60",
      };
    default:
      return { colour: "#27ae60", header: "None" };
  }
};

interface ScoreGaugeSmallProps {
  percentage: number;
  duration: number;
  header: string;
  subHeader: string;
  noDelay?: boolean;
  average: any;
  car?: string;
}

const ScoreGaugeSmall: React.FC<ScoreGaugeSmallProps> = ({
  percentage,
  duration,
  header,
  subHeader,
  noDelay,
  average,
  car,
}) => {
  const circ = 2 * Math.PI * 70;
  const circTwo = 2 * Math.PI * 65;
  const [Percent, setPercent] = useState(1);
  const [PercentTwo, setPercentTwo] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setPercent(scoreMaker(cleanPercentage(percentage)));
      setPercentTwo(scoreMaker(cleanPercentage(average)));
    }, 10);
  }, []);

  const colour = getValues(Percent);
  const strokePct = ((100 - Percent) * circ) / 100;

  const strokePctSecond = ((100 - PercentTwo) * circTwo) / 100;
  const positive = (Percent - PercentTwo) * 10 > 0;
  return (
    <>
      {header && (
        <div className="score-gauge">
          <svg width={150} height={170}>
            <g transform={`rotate(-90 ${"80 75"})`}>
              <circle
                r={70}
                cx={70}
                cy={70}
                fill="rgba(0, 0, 0, 0.274)"
                strokeLinecap="round"
                style={{
                  stroke: colour.colour,
                  transition: noDelay ? "" : "all 1.5s",
                  strokeWidth: "0.2rem",
                  strokeDasharray: circ,
                  strokeDashoffset: strokePct,
                }}
              ></circle>
            </g>
            <g transform={`rotate(-90 ${"80 70"})`}>
              <circle
                r={65}
                cx={65}
                cy={65}
                fill="rgba(0, 0, 0, 0.274)"
                strokeLinecap="round"
                style={{
                  stroke: "white",
                  transition: noDelay ? "" : "all 1.5s",
                  strokeWidth: "0.2rem",
                  strokeDasharray: circTwo,
                  strokeDashoffset: strokePctSecond,
                }}
              ></circle>
            </g>
          </svg>
          <div className="score-gauge-header-small">{header || header}</div>
          <div
            className="score-gauge-text-small"
            style={{ color: colour.colour }}
          >
            <div
              style={{ display: "flex", fontWeight: "400", marginLeft: "15px" }}
            >
              {" "}
              <CountUp
                start={0}
                end={Percent * 10}
                duration={duration || 0.001}
                decimals={0}
              />
              {Percent - PercentTwo !== 0 && (
                <div
                  style={{
                    fontSize: "12px",
                    color: positive ? "#1abc9c" : "red",
                    marginLeft: "-10px",
                    marginTop: "-7px",
                    fontWeight: "400",
                  }}
                >
                  {positive && "+"}
                  {((Percent - PercentTwo) * 10).toFixed(0)}
                </div>
              )}
            </div>
            <p
              style={{
                fontSize: "14px",
                textAlign: "center",
                fontWeight: "300",
                marginTop: 0,
                marginBottom: "4px",
              }}
            >
              {colour.header}
            </p>
            {!subHeader && (
              <div
                style={{
                  fontSize: "12px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "300",
                }}
              >
                {car && car} Average Score <br />
                <CountUp
                  start={0}
                  end={PercentTwo * 10}
                  duration={duration || 0.001}
                  decimals={0}
                />
              </div>
            )}
          </div>

          <div
            className="score-gauge-subheader-small"
            style={{ textAlign: "center" }}
          >
            {subHeader || subHeader}
          </div>
        </div>
      )}
    </>
  );
};

export default ScoreGaugeSmall;
