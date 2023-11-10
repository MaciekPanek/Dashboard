import Chart from "react-google-charts";
import { useStays } from "../../hooks/useStays";

function StaysChart() {
  const { stays } = useStays();

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"50%"}
      height={"400px"}
    />
  );
}

export default StaysChart;
