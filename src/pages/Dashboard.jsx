import DashboardMiddleChart from '../features/dashboard/DashboardMiddleChart';
import DashboardTopChart from '../features/dashboard/DashboardTopChart';
import DashboardBottomChart from '../features/dashboard/DashboardBottomChart';

function Dashboard() {
  return (
    <section className=' bg-stone-100 min-h-screen p-10 '>
      <h1 className='text-[50px] text-neutral-500 pb-5 '>Dashboard for last 30 days</h1>
      <div className='flex flex-col gap-5 '>
        <DashboardTopChart />
        <DashboardMiddleChart />
        <DashboardBottomChart />
      </div>
    </section>
  );
}

export default Dashboard;
