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

  const currentDate = new Date();
  const isCurrentDateInRange =
    currentDate >= new Date(arrivalDate) &&
    currentDate <= new Date(departureDate);

  const invalidDate = new Date(departureDate) < currentDate;
  const awaitingArrivalDate = new Date(arrivalDate) > currentDate;

  return (
    <div
      className={`flex gap-1 flex-col w-[500px] bg-neutral-200 p-3 border border-neutral-400  rounded-xl min-h-[150px] italic border-b-[6px] text-neutral-600 ${
        isCurrentDateInRange && " border-b-green-500  "
      } ${invalidDate && "border-b-red-500"} ${
        awaitingArrivalDate && "border-b-sky-500"
      }`}
    >
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

      {/* <div className="mt-5">
       <p className="text-sm">{notes ? "Notes:" : ""} </p>
        <p>{notes}</p>
      </div> */}
    </div>
  );
}

export default Guest;
