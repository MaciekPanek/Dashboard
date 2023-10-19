// import { villas } from "../data/villas";
import { NavLink } from "react-router-dom";
import Villa from "../features/villas/Villa";
import { useVillas } from "../hooks/useVillas";

function Villas() {
  const { isLoading, villas } = useVillas();

  if (isLoading || villas === undefined) {
    return <div>Loading...</div>; // or render a loading indicator
  }

  return (
    <section className="grid grid-cols-fluid gap-10  bg-stone-100 min-h-screen auto-rows-max p-20">
      {villas.map((villa) => (
        <Villa villa={villa} key={villa.id} />
      ))}

      <NavLink
        to={"/villas/newvilla"}
        className="w-[400px] hover:scale-105 h-[300px] ease-in-out duration-300 hover:cursor-pointer "
      >
        <div>
          <div className=" rounded-xl min-w-[400px]  h-[300px] border-dashed border-neutral-400 border-[3px] flex justify-center items-center text-2xl  ">
            <span className="text-neutral-500 italic">Add new Villa...</span>
          </div>
        </div>
      </NavLink>
    </section>
  );
}

export default Villas;
