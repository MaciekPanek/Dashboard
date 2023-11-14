import { useParams } from 'react-router-dom';
import { useVillas } from '../../hooks/useVillas';
import EditVilla from './EditVilla';
import Loader from '../../ui/Loader';
import VillaDescription from './VillaDescription';
import { HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2';
import { useVillaDetails } from '../../context/VillaDetailsContext';
import DeleteModal from './DeleteModal';
import { useState, useEffect } from 'react';
import NotFound from '../../ui/NotFound';

function VillaDetails() {
  const { villaId } = useParams();
  const { isLoading, villas } = useVillas();
  const numericVillaId = parseInt(villaId, 10);
  const selectedVilla = villas?.find((villa) => villa?.id === numericVillaId);

  const { isEditModalVisible, isDeleteModalVisible, handleClose, handleOpen, handleEditModalToggle } =
    useVillaDetails();

  const [editData, setEditData] = useState(null);

  useEffect(() => {
    setEditData(selectedVilla);
  }, [selectedVilla]);

  if (isLoading) return <Loader />;
  if (!selectedVilla) return <NotFound />;

  return (
    <section className='bg-stone-100  dark:bg-dark-600 min-h-screen p-20 flex flex-col gap-20 '>
      <VillaDescription selectedVilla={selectedVilla} />
      <div className='flex gap-4 justify-end '>
        <button
          onClick={() => {
            handleEditModalToggle();
            setEditData(selectedVilla);
          }}
          className='buttonStyle'>
          Edit villa <HiOutlinePencilSquare />
        </button>
        <button onClick={() => handleOpen()} className='buttonStyle'>
          Delete villa <HiOutlineTrash />
        </button>
        {isDeleteModalVisible && <DeleteModal onClose={handleClose} villaId={villaId} />}
      </div>
      <div className='flex justify-center '>
        {isEditModalVisible && editData ? <EditVilla selectedVilla={editData} /> : null}
      </div>
    </section>
  );
}

export default VillaDetails;
