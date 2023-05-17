import { Line } from "react-chartjs-2";
import { hexToRgb } from "./utils";
import { appColor } from "../../../../utils/style";

export const LineChart = ({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
}) => {
  const Lineoption = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        data,
        borderColor: hexToRgb(appColor.purple),
      },
    ],
  };
  return <Line options={Lineoption} data={chartData} />;
};
