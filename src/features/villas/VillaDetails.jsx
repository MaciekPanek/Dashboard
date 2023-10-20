import { useParams } from "react-router-dom";
// import { useVillaDetails } from "../../context/VillaDetailsContext";
import { useVillas } from "../../hooks/useVillas";

function VillaDetails() {
  // const { villaDetails } = useVillaDetails();
  const { villaId } = useParams();
  const { isLoading, villas } = useVillas();

  const numericVillaId = parseInt(villaId, 10);
  const selectedVilla = villas?.find((villa) => villa.id === numericVillaId);

  const { name, capacity, price, image, id, description } = selectedVilla;

  if (!selectedVilla) {
    return <div>Villa not found</div>;
  }

  return (
    <section className="bg-stone-100 min-h-screen auto-rows-max p-20 flex flex-col  ">
      <div className="flex ">
        <img src={image} />
        <div>
          <div>{name}</div>
          <div>{capacity}</div>
          <div>{price}</div>
          <div>{description}</div>
        </div>
      </div>
      <div>abc</div>
    </section>
  );
}

export default VillaDetails;
