import { useArrivalsAndDepartures } from "../../hooks/useArrivalsAndDepartures";
import Loader from "../../ui/Loader";
import Departure from "./Departure";
import NoActivity from "./NoActivity";

function Departures() {
  const { arrivals } = useArrivalsAndDepartures();

  if (!arrivals) return <Loader />;

  const currentDate = new Date().toISOString().split("T")[0];
  // console.log(currentDate);

  const todayDepartures = arrivals.filter(
    (arrival) => arrival.departureDate.slice(0, 10) === currentDate
  );

  return (
    <div className="flex flex-col gap-1 ">
      {todayDepartures.length === 0 && (
        <NoActivity>No departures today</NoActivity>
      )}

      {todayDepartures.map((arrival) => (
        <Departure arrival={arrival} key={Math.random()} />
      ))}
    </div>
  );
}

export default Departures;
