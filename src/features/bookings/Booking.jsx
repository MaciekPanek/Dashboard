function Booking({ booking }) {
  const {
    arrivalDate,
    departureDate,
    Guests: { fullName, flag },
  } = booking;

  const currentDate = new Date(new Date().getFullYear(), 10, 17);
  const isCurrentDateInRange = currentDate >= new Date(arrivalDate) && currentDate <= new Date(departureDate);

  const invalidDate = new Date(departureDate) < currentDate;
  const awaitingArrivalDate = new Date(arrivalDate) > currentDate;

  const formattedArrivalDate = new Date(arrivalDate).toLocaleDateString('en-GB').replace(/\//g, '-');

  const formattedDepartureDate = new Date(departureDate).toLocaleDateString('en-GB').replace(/\//g, '-');

  return (
    <div
      className={`flex gap-5 justify-center rounded-lg text-center mb-1 ${isCurrentDateInRange && 'bg-green-400'} ${
        invalidDate && 'bg-red-400'
      } ${awaitingArrivalDate && 'bg-sky-400'} `}>
      <p className='w-1/5 italic text-neutral-600  '>
        {fullName}
        <span>{flag}</span>
      </p>
      <p className='w-1/5 italic text-neutral-600  '>From -- {formattedArrivalDate}</p>
      <p className='w-1/5 italic text-neutral-600  '>To -- {formattedDepartureDate}</p>
    </div>
  );
}

export default Booking;
