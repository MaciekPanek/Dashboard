import SalesChart from "../features/dashboard/SalesChart";
import StaysChart from "../features/dashboard/StaysChart";

function Dashboard() {
  return (
    <section className=" bg-stone-100 min-h-screen p-20 ">
      <h1 className="text-[50px] text-neutral-500 ">Dashboard</h1>
      <div>
        <div className="rounded-xl overflow-hidden border border-neutral-400 bg-neutral-200 ">
          <StaysChart />
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
