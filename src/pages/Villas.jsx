import { villas } from "../data/villas";
import Villa from "../features/villas/Villa";

function Villas() {
  return (
    <section className="grid grid-cols-fluid gap-10  bg-stone-100 min-h-screen p-20">
      {villas.map((villa) => (
        <Villa villa={villa} key={villa.name} />
      ))}

      <div className="w-[400px]">
        <div>
          <div className=" rounded-xl min-w-[400px]  h-[300px] border-dashed border-neutral-400 border-[3px] flex justify-center items-center text-2xl  ">
            <span className="text-neutral-500 italic">Add new Villa...</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Villas;
