import { villas } from "../data/villas";
import Villa from "../features/villas/Villa";

function Villas() {
  return (
    <section className="grid grid-cols-fluid gap-10  bg-stone-100 min-h-screen p-20">
      {villas.map((villa) => (
        <Villa villa={villa} key={villa.name} />
      ))}
    </section>
  );
}

export default Villas;
