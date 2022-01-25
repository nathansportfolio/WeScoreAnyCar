import { useEffect, useState } from "react";
import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface LineChartsProps {
  mots: any;
}

const LineCharts: React.FC<LineChartsProps> = ({ mots }) => {
  const [mobile, setMobile] = useState(false);
  //TODO - Count advisories per mot and transform data for dates
  const data = mots
    .map((mot: any) => ({
      name: mot.completedDate.split(".")[0],
      'Your Score': mot.rfrAndComments.length,
      'Average Score': Math.floor(Math.random() * 7),
      amt: 2,
    }));

  useEffect(() => {
    if (window !== undefined) {
      setMobile(window.innerWidth < 640);
    }
  }, []);

  return (
    <Chart
      width={mobile ? 340 : 800}
      height={mobile ? 300 : 370}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      <Line
        type="monotone"
        dataKey='Average Score'
        stroke="blue"
        strokeWidth={3}
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Your Score" stroke="green" strokeWidth={3} />
    </Chart>
  );
};

export default LineCharts;
