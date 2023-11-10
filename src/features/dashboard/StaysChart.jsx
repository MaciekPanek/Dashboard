import Chart from "react-google-charts";
import { useStays } from "../../hooks/useStays";
import Loader from "../../ui/Loader";

function StaysChart() {
  const { stays } = useStays();

  if (!stays) {
    return <Loader />;
  }

  // Filter stays that occurred in the last 30 days
  const last30DaysStays = stays.filter((stay) => {
    const stayCreatedAt = new Date(stay.created_at);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return stayCreatedAt >= thirtyDaysAgo;
  });

  // Count stays based on duration
  const staysCountByDuration = last30DaysStays.reduce((acc, stay) => {
    const durationDays = Math.ceil(
      (new Date(stay.departureDate) - new Date(stay.arrivalDate)) /
        (1000 * 60 * 60 * 24)
    );

    if (durationDays === 1) {
      acc["1 night"] = (acc["1 night"] || 0) + 1;
    } else if (durationDays === 2) {
      acc["2 nights"] = (acc["2 nights"] || 0) + 1;
    } else if (durationDays === 3) {
      acc["3 nights"] = (acc["3 nights"] || 0) + 1;
    } else if (durationDays >= 4 && durationDays <= 7) {
      acc["4-7 nights"] = (acc["4-7 nights"] || 0) + 1;
    } else if (durationDays >= 8 && durationDays <= 14) {
      acc["7-14 nights"] = (acc["7-14 nights"] || 0) + 1;
    } else {
      acc["15 and more nights"] = (acc["15 and more nights"] || 0) + 1;
    }

    return acc;
  }, {});

  // Convert staysCountByDuration object to the required data format for the chart
  const data = Object.entries(staysCountByDuration)
    .sort((a, b) => a[0].localeCompare(b[0])) // Sort legend by duration
    .map(([duration, count]) => [duration, count]);

  const options = {
    backgroundColor: "#e5e5e5",
    is3D: true,
    animation: {
      startup: true,
      duration: 1000, // Animation duration in milliseconds
      easing: "out",
    },
  };

  return (
    <Chart
      chartType="PieChart"
      graph_id="chart2"
      id="chart2"
      data={[["Duration", "Number of Bookings"], ...data]}
      options={options}
      width={"100%"}
      height={"300px"}
    />
  );
}

export default StaysChart;
