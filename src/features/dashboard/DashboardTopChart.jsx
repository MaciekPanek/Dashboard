// import { useSales } from '../../hooks/useSales';
// import Loader from '../../ui/Loader';
import { BookingsSummary } from './BookingsSummary';
import { CurrentlyBookedSummary } from './CurrentlyBookedSummary';
import { SalesSummary } from './SalesSummary';

function DashboardTopChart() {
  return (
    <div className='flex gap-5 h-[100px] '>
      <SalesSummary />
      <BookingsSummary />
      <CurrentlyBookedSummary />
    </div>
  );
}

export default DashboardTopChart;
