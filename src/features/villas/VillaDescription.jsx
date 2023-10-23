function VillaDescription({ selectedVilla }) {
  const { name, capacity, price, image, description } = selectedVilla;

  return (
    <div className="flex gap-10 ">
      <img src={image} className="max-h-[20vw] rounded-lg  " />

      <div className="w-1/2">
        <div className="text-neutral-600 text-3xl py-2 italic">
          Villa: {name}
        </div>
        <div className="text-neutral-600 text-xl py-2 italic leading-5 ">
          Price: ${price} per night{" "}
        </div>
        <div className="text-neutral-600 text-xl py-2 italic leading-5">
          Capacity: {capacity}
        </div>
        <div className="text-neutral-600 text-lg py-2 italic leading-5">
          {description}
        </div>
      </div>
    </div>
  );
}

export default VillaDescription;
