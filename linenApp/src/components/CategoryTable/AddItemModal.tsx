import './addItemModal.scss';
import { useEffect, useRef } from 'react';
import AddItemForm from './AddItemForm';

interface Props {
  closeModal: () => void;
}

const AddItemModal = ({ closeModal }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    closeModal();
    dialogRef.current?.close();
  };

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
      className={'dialog__container'}
      style={{
        padding: 0,
        border: 0,
      }}
    >
      <div
        className={'dialog__modal-body'}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <AddItemForm />
          <button>Dodaj</button>
        </div>
      </div>
    </dialog>
  );
};

export default AddItemModal;
