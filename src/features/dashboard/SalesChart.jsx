import Chart from 'react-google-charts';
import { useSales } from '../../hooks/useSales';
import { useDarkMode } from '../../context/DarkModeContext';

function SalesChart() {
  const { sales } = useSales();
  const { isDarkMode } = useDarkMode();

  if (!sales) return null;

  // Function to aggregate sales by day
  const aggregateSalesByDay = (sales) => {
    const aggregatedSales = {};

    sales.forEach((sale) => {
      const day = new Date(sale.created_at).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
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
    return currentDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
    });
  }).reverse();

  // Iterate over the array, summing up the sales for each day
  const chartData = last30Days.map((day) => [day, aggregatedSales[day] || 0]);

  const options = {
    // title: "Sales for last 30 days",
    curveType: 'function',
    series: [{ color: '#d6af00' }],
    intervals: { style: 'area' },
    legend: 'none',
    backgroundColor: `${isDarkMode ? '#525252' : '#e5e5e5'}`,
    hAxis: {
      textStyle: {
        color: isDarkMode ? '#CCCCCC' : '#333333', // Adjust the text color for the horizontal axis
      },
    },
    vAxis: {
      textStyle: {
        color: isDarkMode ? '#CCCCCC' : '#333333', // Adjust the text color for the horizontal axis
      },
    },
  };

  return (
    <Chart
      chartType='LineChart'
      graph_id='chart1'
      id='chart1'
      width='100%'
      height='400px'
      data={[['Day', 'Sales'], ...chartData]}
      options={options}
    />
  );
}

export default SalesChart;
