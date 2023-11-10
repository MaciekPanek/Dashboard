import Arrivals from "../features/dashboard/Arrivals";
import Departures from "../features/dashboard/Departures";
import SalesChart from "../features/dashboard/SalesChart";
import StaysChart from "../features/dashboard/StaysChart";

function Dashboard() {
  return (
    <section className=" bg-stone-100 min-h-screen p-10 ">
      <h1 className="text-[50px] text-neutral-500 ">Dashboard</h1>
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-5 ">
          <div className="w-1/2 flex flex-col gap-5 ">
            <div
              className="rounded-xl overflow-hidden border
         border-neutral-400 bg-neutral-200 h-1/2 "
            >
              <h2 className=" px-4 py-2 italic text-neutral-600 ">
                Arrivals today
              </h2>
              <Arrivals />
            </div>
            <div
              className="rounded-xl overflow-hidden border
         border-neutral-400 bg-neutral-200 h-1/2 "
            >
              <h2 className=" px-4 py-2 italic text-neutral-600 ">
                Departures today
              </h2>
              <Departures />
            </div>
          </div>

          <div
            className="rounded-xl w-1/2 overflow-hidden border
         border-neutral-400 bg-neutral-200 "
          >
            <h2 className=" text-3xl px-4 py-2 text-center italic text-neutral-600 ">
              Stay duration summary
            </h2>
            <StaysChart />
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-neutral-400 bg-neutral-200 ">
          <h2 className=" text-3xl px-4 py-2 text-center italic text-neutral-600 ">
            Sales for last 30 days
          </h2>
          <SalesChart />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
