import { useParams } from "react-router-dom";
// import { useVillaDetails } from "../../context/VillaDetailsContext";
import { useVillas } from "../../hooks/useVillas";
import EditVilla from "./EditVilla";
import Loader from "../../ui/Loader";

function VillaDetails() {
  // const { villaDetails } = useVillaDetails();
  const { villaId } = useParams();
  const { isLoading, villas } = useVillas();

  const numericVillaId = parseInt(villaId, 10);
  const selectedVilla = villas?.find((villa) => villa?.id === numericVillaId);

  if (isLoading) return <Loader />;

  if (!selectedVilla) {
    return <Loader />;
  }

  const { name, capacity, price, image, id, description } = selectedVilla;

  return (
    <section className="bg-stone-100 min-h-screen p-20 flex flex-col gap-20 ">
      <div className="flex gap-10 ">
        <div className="">
          <img src={image} className="max-h-[400px]" />
        </div>
        <div className="w-1/2">
          <div>{name}</div>
          <div>{capacity}</div>
          <div>{price}</div>
          <div>{description}</div>
        </div>
      </div>
      <div className="flex justify-center ">
        <EditVilla />
      </div>
    </section>
  );
}

export default VillaDetails;
