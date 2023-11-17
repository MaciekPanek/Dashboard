import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { useSales } from '../../hooks/useSales';
import Loader from '../../ui/Loader';
import SummaryTemplate from '../../ui/SummaryTemplate';

export function SalesSummary() {
  const { sales } = useSales();

  if (!sales) return <Loader />;

  const currentDate = new Date(new Date().getFullYear(), 10, 17);

  const last30DaysSales = sales.filter((sale) => {
    const arrivalDate = new Date(sale.arrivalDate);
    return arrivalDate <= currentDate && arrivalDate >= new Date().setDate(currentDate.getDate() - 30);
  });

  const totalSalesValue = last30DaysSales.reduce((total, sale) => total + sale.cost, 0);
  return (
    <SummaryTemplate data={totalSalesValue} title='Sales' currency='$'>
      <LiaMoneyBillWaveSolid className='text-[70px] text-[#308f59] ' />
    </SummaryTemplate>
  );
}
