import SalesChart from './SalesChart';

function DashboardBottomChart() {
  return (
    <div className='rounded-xl overflow-hidden border border-neutral-400 bg-neutral-200 '>
      <h2 className=' text-3xl px-4 py-2 text-center italic text-neutral-600 '>Sales for last 30 days</h2>
      <SalesChart />
    </div>
  );
}

export default DashboardBottomChart;
