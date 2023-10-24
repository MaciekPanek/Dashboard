import { HiXMark } from "react-icons/hi2";
import { useVillaDetails } from "../../context/VillaDetailsContext";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useDeleteVilla } from "../../hooks/useDeleteVilla";
import { useNavigate } from "react-router-dom";

function DeleteModal({ villaId }) {
  const navigate = useNavigate();
  const { isDeleteModalVisible, handleClose } = useVillaDetails();
  const { isDeleting, deleteVilla } = useDeleteVilla();

  function handleDelete(villaId) {
    deleteVilla(villaId);
    handleClose();
    navigate(-1);
  }

  const ref = useOutsideClick(handleClose);

  if (!isDeleteModalVisible) {
    return null; // Don't render the modal if it's not visible
  }

  return createPortal(
    <div className="modal-container">
      <div
        ref={ref}
        className="w-[30%] h-[300px] bg-stone-100 border border-neutral-400  relative rounded-3xl  "
      >
        <HiXMark
          onClick={handleClose}
          className=" absolute top-3 right-3 text-3xl text-neutral-500 font-black hover:cursor-pointer "
        />
        <p className="text-[40px] italic text-neutral-500 text-center mt-20 ">
          Are you sure you want to delete this villa?
        </p>
        <div className="absolute bottom-3 right-3 flex gap-3 ">
          <button
            onClick={handleClose}
            className="rounded-full px-6 py-2 bg-neutral-400 border-solid border-neutral-400  text-neutral-50 flex items-center gap-2 hover:scale-105 duration-300 text-2xl "
          >
            Close
          </button>
          <button
            onClick={() => handleDelete(villaId)}
            className="bg-red-500  py-2 px-5 rounded-full text-2xl text-red-200 hover:scale-105 duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default DeleteModal;
