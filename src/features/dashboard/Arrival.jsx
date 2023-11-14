function Arrival({ arrival }) {
  const {
    guestsNum,
    Guests: { fullName, flag },
    Villas: { name },
  } = arrival;

  const arrivalDate = new Date(arrival.arrivalDate);
  const departureDate = new Date(arrival.departureDate);
  const timeDifference = departureDate - arrivalDate;
  const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div className='flex bg-green-400 rounded-lg text-neutral-600 text-center italic px-5 '>
      <p className='flex gap-3 w-1/3 '>
        <span>{flag}</span>
        <span>{fullName}</span>
      </p>
      <p className='w-1/4'>Villa {name}</p>
      <p className='w-1/4'>
        {guestsNum} {`${guestsNum > 1 ? 'guests' : 'guest'}`}
      </p>
      <p className='w-1/4'>
        {days} {`${days > 1 ? 'nights' : 'night'}`}
      </p>
    </div>
  );
}

export default Arrival;
