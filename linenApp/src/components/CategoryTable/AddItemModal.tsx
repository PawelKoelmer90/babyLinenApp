import './addItemModal.scss';
import { useEffect, useRef } from 'react';
import AddItemForm from './AddItemForm';

interface Props {
  categoryId: number | undefined;
  closeModal: () => void;
}

const AddItemModal = ({ closeModal, categoryId }: Props) => {
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
        <AddItemForm />
      </div>
    </dialog>
  );
};

export default AddItemModal;
