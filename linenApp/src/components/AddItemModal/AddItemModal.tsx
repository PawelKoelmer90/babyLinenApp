import './addItemModal.scss';
import React, { useEffect, useRef } from 'react';
import AddItemForm from './AddItemForm';

interface Props {
  categoryId: string | undefined;
  closeModal: () => void;
}

const AddItemModal = ({ closeModal, categoryId }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    closeModal();
    dialogRef.current?.close();
  };

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
    let rect = event.currentTarget.getBoundingClientRect();
    if (
      rect.left > event.clientX ||
      rect.right < event.clientX ||
      rect.top > event.clientY ||
      rect.bottom < event.clientY
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClick={(event) => {
        handleBackdropClick(event);
      }}
      className={'dialog__container'}
    >
      <div
        className={'dialog__modal-body'}
        onClick={(e) => e.stopPropagation()}
      >
        <AddItemForm categoryId={categoryId} closeModal={() => handleClose()} />
      </div>
    </dialog>
  );
};

export default AddItemModal;
