import { useState, useEffect } from "react";
import CountUp from "react-countup";

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const getValues = (percent: number) => {
  const score = percent * 10;
  switch (true) {
    case score < 438:
      return { header: "Poor", colour: "#e67e22" };
      break;
    case score >= 438 && score < 530:
      return { header: "Fair", colour: "#f1c40f" };
      break;
    case score >= 530 && score < 670:
      return { header: "Good", colour: "#7bed9f" };
      break;
    case score >= 670 && score < 810:
      return {
        header: "Very Good",
        colour: "#2ecc71",
      };
      break;
    case score > 810:
      return {
        header: "Excellent",
        colour: "#27ae60",
      };
      break;
    default:
      return { colour: "#27ae60", header: "None" };
  }
};

interface ScoreGaugeProps {
  percentage: number;
  duration: number;
  header: string;
  subHeader: string;
  noDelay?: boolean
}

const ScoreGauge: React.FC<ScoreGaugeProps> = ({
  percentage,
  duration,
  header,
  subHeader,
  noDelay
}) => {
  const circ = 2 * Math.PI * 100;
  const [Percent, setPercent] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setPercent(cleanPercentage(percentage));
    }, 10);
  }, []);

  const colour = getValues(Percent);
  const strokePct = ((100 - Percent) * circ) / 100;

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      {header && (
        <div className="score-gauge">
          <svg width={230} height={230}>
            <g transform={`rotate(-90 ${"113 100"})`}>
              <circle
                r={100}
                cx={100}
                cy={100}
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
          </svg>
          <div className="score-gauge-header">{header || header}</div>
          <div className="score-gauge-text">
            <CountUp
              start={0}
              end={Percent * 10}
              duration={duration || 0.001}
              decimals={0}
            />
          </div>
          <div
            className="score-gauge-subheader"
            style={{ textAlign: "center" }}
          >
            {subHeader || subHeader}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreGauge;
