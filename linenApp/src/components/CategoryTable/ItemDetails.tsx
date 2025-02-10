import { useParams } from 'react-router';

const ItemDetails = () => {
  const { id } = useParams();
  return (
    <>
      <div>{id}</div>
    </>
  );
};

export default ItemDetails;
