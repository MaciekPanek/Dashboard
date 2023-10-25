function Booking({ booking }) {
  console.log(booking);

  const {
    arrivalDate,
    departureDate,
    guestNum,
    id,
    notes,
    cost,
    Villas: { name },
    Guests: { fullName, email },
  } = booking;

  return (
    <div className="bg-stone-200">
      <div>
        {/* <div>{name}</div> */}
        <div>{fullName}</div>
        <div>{arrivalDate}</div>
        <div>{departureDate}</div>
        {/* <div>{guestNum}</div> */}
        {/* <div>{id}</div> */}
        {/* <div>{notes}</div> */}
        {/* <div>{cost}</div> */}
        {/* <div>{email}</div> */}
      </div>
    </div>
  );
}

export default Booking;
