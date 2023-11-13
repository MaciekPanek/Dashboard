function DashboardTopChart() {
  return (
    <div className='flex gap-5 h-[100px] '>
      <div
        className='w-1/4 rounded-xl  border
         border-neutral-400 bg-neutral-200'>
        <h2 className=' px-4 py-2 italic text-neutral-600 '>Sales</h2>
      </div>
      <div
        className='w-1/4 rounded-xl  border
         border-neutral-400 bg-neutral-200'>
        <h2 className=' px-4 py-2 italic text-neutral-600 '>Bookings</h2>
      </div>
      <div
        className='w-1/4 rounded-xl  border
         border-neutral-400 bg-neutral-200'>
        <h2 className=' px-4 py-2 italic text-neutral-600 '>Currently booked</h2>
      </div>
      <div
        className='w-1/4 rounded-xl  border
         border-neutral-400 bg-neutral-200'>
        <h2 className=' px-4 py-2 italic text-neutral-600 '>Occupacy rate</h2>
      </div>
    </div>
  );
}

export default DashboardTopChart;
