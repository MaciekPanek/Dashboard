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

  const currentDate = new Date();
  const isCurrentDateInRange =
    currentDate >= new Date(arrivalDate) &&
    currentDate <= new Date(departureDate);

  const formattedArrivalDate = new Date(arrivalDate)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

  const formattedDepartureDate = new Date(departureDate)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

  return (
    <div
      className={`flex gap-5 justify-center rounded-lg ${
        isCurrentDateInRange && "bg-green-400"
      } `}
    >
      <p className="w-1/5 italic text-neutral-600  ">
        {fullName}
        <span>{flag}</span>
      </p>
      <p className="w-1/5 italic text-neutral-600  ">
        From -- {formattedArrivalDate}
      </p>
      <p className="w-1/5 italic text-neutral-600  ">
        To -- {formattedDepartureDate}
      </p>
    </div>
  );
}

export default Booking;
