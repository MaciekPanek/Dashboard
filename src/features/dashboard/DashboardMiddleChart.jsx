import Arrivals from './Arrivals';
import Departures from './Departures';
import StaysChart from './StaysChart';

function DashboardMiddleChart() {
  return (
    <div className='flex gap-5 flex-col 2xl:flex-row '>
      <div className='2xl:w-1/2 flex flex-col gap-5 '>
        <div
          className='rounded-xl overflow-hidden border
         border-neutral-400 bg-neutral-200 dark:bg-neutral-600 h-1/2 '>
          <h2 className=' px-4 py-2 italic text-neutral-600 dark:text-neutral-300 '>Arrivals today</h2>
          <Arrivals />
        </div>
        <div
          className='rounded-xl overflow-hidden border
         border-neutral-400 bg-neutral-200 h-1/2 dark:bg-neutral-600 '>
          <h2 className=' px-4 py-2 italic text-neutral-600  dark:text-neutral-300 '>Departures today</h2>
          <Departures />
        </div>
      </div>

      <div
        className='rounded-xl 2xl:w-1/2 overflow-hidden border
         border-neutral-400 bg-neutral-200 dark:bg-neutral-600 '>
        <h2 className=' text-3xl px-4 py-2 text-center italic text-neutral-600 dark:text-neutral-300 '>
          Stay duration summary
        </h2>
        <StaysChart />
      </div>
    </div>
  );
}
export default DashboardMiddleChart;
