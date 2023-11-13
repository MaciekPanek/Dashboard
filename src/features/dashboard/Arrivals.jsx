import { useArrivalsAndDepartures } from "../../hooks/useArrivalsAndDepartures";
import Loader from "../../ui/Loader";
import Arrival from "./Arrival";
import NoActivity from "./NoActivity";

function Arrivals() {
  const { arrivals } = useArrivalsAndDepartures();

  if (!arrivals) return <Loader />;

  const currentDate = new Date().toISOString().split("T")[0];
  // console.log(currentDate);

  const todayArrivals = arrivals.filter(
    (arrival) => arrival.arrivalDate.slice(0, 10) === currentDate
  );

  return (
    <div className="flex flex-col gap-1">
      {todayArrivals.length === 0 && <NoActivity>No arrivals today</NoActivity>}
      {todayArrivals.map((arrival) => (
        <Arrival arrival={arrival} key={Math.random()} />
      ))}
    </div>
  );
}

export default Arrivals;
