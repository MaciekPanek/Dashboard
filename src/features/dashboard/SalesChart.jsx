import Chart from "react-google-charts";

function SalesChart() {
  const options = {
    title: "Sales for last month",
    curveType: "function",
    legend: { position: "bottom" },
  };
  const data = [];

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default SalesChart;
