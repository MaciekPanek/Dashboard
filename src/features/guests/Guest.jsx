function Guest({ guest }) {
  const {
    arrivalDate,
    departureDate,
    guestsNum,
    cost,
    Villas: { name: villaName },
    Guests: { fullName, email, flag, country, phoneNumber },
  } = guest;

  const currentDate = new Date(new Date().getFullYear(), 10, 17);
  const isCurrentDateInRange =
    currentDate >= new Date(arrivalDate) &&
    currentDate <= new Date(departureDate);

  const invalidDate = new Date(departureDate) < currentDate;
  const awaitingArrivalDate = new Date(arrivalDate) > currentDate;

  return (
    <div
      className={`flex gap-1 flex-col w-[500px] bg-neutral-200 dark:bg-neutral-600 min-w-[340px] p-3 border border-neutral-400  rounded-xl min-h-[150px] italic border-b-[6px] text-neutral-600 dark:text-neutral-300 ${
        isCurrentDateInRange && ' border-b-green-500  '
      } ${invalidDate && 'border-b-red-500'} ${
        awaitingArrivalDate && 'border-b-sky-500'
      }`}>
      <div className='flex justify-between items-center '>
        <p className='text-2xl  '>
          {fullName}
          {flag} <span className='text-xs'>({country})</span>
        </p>
        <p className='text-lg   '> Rented villa: {villaName}</p>
      </div>
      <div className='flex gap-10 items-center '>
        <p>{email}</p>
        <p className='text-sm'>{phoneNumber}</p>
      </div>
      <div className='flex gap-10'>
        <p>
          Paid ${cost} for {guestsNum} {guestsNum > 1 ? 'guests' : 'guest'}
        </p>
      </div>
    </div>
  );
}

export default Guest;
