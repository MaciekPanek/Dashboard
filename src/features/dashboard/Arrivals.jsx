import { useArrivalsAndDepartures } from "../../hooks/useArrivalsAndDepartures";
import Loader from "../../ui/Loader";
import Arrival from "./Arrival";

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
      {todayArrivals.map((arrival) => (
        <Arrival arrival={arrival} key={Math.random()} />
      ))}
    </div>
  );
}

export default Arrivals;
