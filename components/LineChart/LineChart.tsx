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

function add(accumulator:number, a:number) {
  return accumulator + a;
}

const LineCharts: React.FC<LineChartsProps> = ({ mots, averageMots }) => {
  // console.log("mots", mots);
  // console.log("averageMots", averageMots);

  //TODO - Count advisories per mot and transform data for dates
  const data = mots
    .sort(function (a:any, b:any) {
      return a.completedDate.split(".")[0] - b.completedDate.split(".")[0];
    })
    .map((mot: any) => {
      const avgMot = averageMots.map((newMot:any) => {
        if (newMot.completedDate === mot.completedDate.split(".")[0]) {
          return newMot.score;
        }
        return 0;
      });

      const finalSum = avgMot.reduce(add, 0);

      return {
        name: mot.completedDate.split(".")[0],
        "Your Score": mot.score,
        "Average Score": finalSum || 0,
        amt: 2,
      };
    });

  return (
    <div>
      <Chart
        width={data.length * 65}
        height={270}
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
          dataKey="Average Score"
          stroke="blue"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Your Score"
          stroke="green"
          strokeWidth={3}
        />
      </Chart>
    </div>
  );
};

export default LineCharts;
