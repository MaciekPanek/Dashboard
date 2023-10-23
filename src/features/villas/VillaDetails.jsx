import { useParams } from "react-router-dom";
import { useVillas } from "../../hooks/useVillas";
import EditVilla from "./EditVilla";
import Loader from "../../ui/Loader";
import VillaDescription from "./VillaDescription";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

function VillaDetails() {
  const { villaId } = useParams();
  const { isLoading, villas } = useVillas();
  const numericVillaId = parseInt(villaId, 10);
  const selectedVilla = villas?.find((villa) => villa?.id === numericVillaId);

  if (isLoading) return <Loader />;

  return (
    <section className="bg-stone-100 min-h-screen p-20 flex flex-col gap-20 ">
      <VillaDescription selectedVilla={selectedVilla} />
      <div className="flex gap-4 justify-end ">
        <button className="rounded-full px-6 py-2 bg-neutral-400 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300 ">
          Edit villa <HiOutlinePencilSquare />
        </button>
        <button className="rounded-full px-6 py-2 bg-neutral-400 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300 ">
          Delete villa <HiOutlineTrash />
        </button>
      </div>
      <div className="flex justify-center ">
        <EditVilla selectedVilla={selectedVilla} />
      </div>
    </section>
  );
}

export default VillaDetails;
