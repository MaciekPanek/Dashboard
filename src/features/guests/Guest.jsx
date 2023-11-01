function Guest({ guest }) {
  const {
    arrivalDate,
    departureDate,
    guestsNum,
    notes,
    cost,
    Villas: { name: villaName },
    Guests: { fullName, email, flag, country, phoneNumber, id },
  } = guest;

  return (
    <div className="flex gap-1 flex-col w-[500px] bg-stone-200 p-3 border border-neutral-400  rounded-xl min-h-[200px] italic  text-neutral-600">
      <div className="flex justify-between items-center ">
        <p className="text-2xl  ">
          {fullName}
          {flag} <span className="text-xs">({country})</span>
        </p>
        <p className="text-lg   "> Rented villa: {villaName}</p>
      </div>
      <div className="flex gap-10 items-center ">
        <p>{email}</p>
        <p className="text-sm">{phoneNumber}</p>
      </div>
      <div className="flex gap-10">
        <p>
          Paid ${cost * -1} for {guestsNum} {guestsNum > 1 ? "guests" : "guest"}
        </p>
      </div>

      <div className="mt-5">
        <p className="text-sm">{notes ? "Notes:" : ""} </p>
        <p>{notes}</p>
      </div>
    </div>
  );
}

export default Guest;
