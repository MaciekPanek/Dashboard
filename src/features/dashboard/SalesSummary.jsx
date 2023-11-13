import { useSales } from '../../hooks/useSales';
import Loader from '../../ui/Loader';

export function SalesSummary() {
  const { sales } = useSales();

  if (!sales) return <Loader />;

  const currentDate = new Date();

  const last30DaysSales = sales.filter((sale) => {
    const arrivalDate = new Date(sale.arrivalDate);
    return arrivalDate <= currentDate && arrivalDate >= new Date().setDate(currentDate.getDate() - 30);
  });

  const totalSalesValue = last30DaysSales.reduce((total, sale) => total + sale.cost, 0);
  return (
    <div
      className='w-1/4 rounded-xl  border
         border-neutral-400 bg-neutral-200'>
      <h2 className=' px-4 py-2 italic text-neutral-600 '>Sales</h2>
      <p className='px-4 py-2 text-neutral-800'>${totalSalesValue}</p>
    </div>
  );
}
