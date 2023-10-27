function Guest({ guest }) {
  const {
    arrivalDate,
    departureDate,
    guestNum,

    notes,
    cost,
    Villas: { name },
    Guests: { fullName, email, flag, country, phoneNumber, id },
  } = guest;
  return (
    <div className="flex gap-10 ">
      <div>{fullName}</div>
      <div>{email}</div>
      <div>{flag}</div>
      <div>{country}</div>
      <div>{phoneNumber}</div>
      <div>{cost}</div>
      <div>{notes}</div>
      <div>{guestNum}</div>
      <div>{name}</div>
    </div>
  );
}

export default Guest;
