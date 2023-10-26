function Booking({ booking }) {
  const {
    arrivalDate,
    departureDate,
    guestNum,
    id,
    notes,
    cost,
    Villas: { name },
    Guests: { fullName, email, flag },
  } = booking;

  const formattedArrivalDate = new Date(arrivalDate)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

  const formattedDepartureDate = new Date(departureDate)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

  return (
    <div className="bg-stone-200">
      <div className="flex gap-5 ">
        <p className="w-[15%] bg-slate-300 ">
          {fullName}
          <span>{flag}</span>
        </p>
        <p className="w-1/5 bg-slate-300">{formattedArrivalDate}</p>
        <div className="w-1/5 bg-slate-300"> {formattedDepartureDate}</div>
      </div>
    </div>
  );
}

export default Booking;
