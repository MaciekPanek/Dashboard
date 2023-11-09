import Chart from "react-google-charts";
import { useSales } from "../../hooks/useSales";

function SalesChart() {
  const { sales } = useSales();

  if (!sales) return null;

  // Function to aggregate sales by day
  const aggregateSalesByDay = (sales) => {
    const aggregatedSales = {};

    sales.forEach((sale) => {
      const day = new Date(sale.created_at).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      });
      if (!aggregatedSales[day]) {
        aggregatedSales[day] = 0;
      }
      aggregatedSales[day] += sale.cost;
    });

    return aggregatedSales;
  };

  const aggregatedSales = aggregateSalesByDay(sales);

  const last30Days = Array.from({ length: 30 }, (_, index) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - index);
    return currentDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
  }).reverse();

  // Iterate over the array, summing up the sales for each day
  const chartData = last30Days.map((day) => [day, aggregatedSales[day] || 0]);

  const options = {
    // title: "Sales for last 30 days",
    curveType: "function",
    series: [{ color: "#7d7d7d" }],
    intervals: { style: "area" },
    legend: "none",
    backgroundColor: "#e5e5e5",
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={[["Day", "Sales"], ...chartData]}
      options={options}
    />
  );
}

export default SalesChart;
