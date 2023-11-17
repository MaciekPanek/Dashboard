// import { useSales } from '../../hooks/useSales';
// import Loader from '../../ui/Loader';
import { BookingsSummary } from './BookingsSummary';
import { CurrentlyBookedSummary } from './CurrentlyBookedSummary';
import { SalesSummary } from './SalesSummary';

function DashboardTopChart() {
  return (
    <div className='flex flex-col xl:flex-row gap-5 min-h-[100px] '>
      <div className='flex flex-col w-full lg:flex-row gap-5'>
        <SalesSummary />
        <BookingsSummary />
      </div>
      <div className='flex flex-col w-full lg:flex-row gap-5'>
        <CurrentlyBookedSummary />
      </div>
    </div>
  );
}

export default DashboardTopChart;
