function Departure({ arrival }) {
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
    <div className="flex bg-red-400 rounded-lg text-neutral-600 text-center italic px-5 ">
      <p className="flex gap-3 w-1/3 ">
        <span>{flag}</span>
        <span>{fullName}</span>
      </p>
      <p className="w-1/4">Villa {name}</p>
      <p className="w-1/4">{guestsNum} guests</p>
      <p className="w-1/4">{days} days</p>
    </div>
  );
}

export default Departure;
