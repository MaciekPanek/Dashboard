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

  return (
    <div className="bg-stone-200">
      <div>
        <div>{fullName}</div>
        <div>{flag}</div>
        <div>{arrivalDate}</div>
        <div>{departureDate}</div>
      </div>
    </div>
  );
}

export default Booking;
