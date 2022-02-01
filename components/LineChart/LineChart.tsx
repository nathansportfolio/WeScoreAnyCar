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
  averageMots: any;
}

function add(accumulator: number, a: number) {
  return accumulator + a;
}

const LineCharts: React.FC<LineChartsProps> = ({ mots, averageMots }) => {
  console.log("mots", mots);
  // console.log("averageMots", averageMots);

  //TODO - Count advisories per mot and transform data for dates
  const data = mots.map((mot: any) => {
    const avgMot = averageMots.map((newMot: any, index: number) => {
      if (newMot.completedDate === mot.completedDate.split(".")[0]) {
        return newMot.score;
      }
      return 0;
    });

    const finalSum = avgMot.reduce(add, 0);

    return {
      name: mot.completedDate.split(".")[0],
      "Your Score": mot.motScore,
      "Average Score": finalSum || 0,
      amt: 2,
    };
  });

  return (
    <div>
      <Chart
        width={330}
        height={270}
        data={data.splice(0, 5).reverse()}
        margin={{
          top: 5,
          right: 30,
          left: -30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" stroke="black" />
        <XAxis dataKey="name" stroke="black" />
        <YAxis stroke="black" />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="Average Score"
          stroke="black"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Your Score"
          stroke="#e74c3c"
          strokeWidth={3}
        />
      </Chart>
    </div>
  );
};

export default LineCharts;
