import { HiArrowLongRight } from "react-icons/hi2";

function Villa({ villa }) {
  const { name, capacity, price, image } = villa;

  return (
    <div className="w-[400px] hover:cursor-pointer hover:scale-105 ease-in-out duration-300 h-max ">
      <div>
        <img
          className=" rounded-xl min-w-[400px]  h-[300px] object-cover "
          src="photo.jpeg"
          alt={name}
        />
      </div>

      <div className=" w-[400px]  h-[200px">
        <p className="text-neutral-800 text-xl py-2 italic leading-5  ">
          Villa: {name}
        </p>
        <p className="text-neutral-600 text-lg font-light italic leading-6  ">
          Capacity: {capacity} people
        </p>
        <p className="text-neutral-600 text-lg font-light italic leading-6">
          Price: ${price} per night
        </p>
        <button className=" text-neutral-500 text-lg font-light italic flex flex-row items-center gap-2 ">
          See more details <HiArrowLongRight />
        </button>
      </div>
    </div>
  );
}

export default Villa;
