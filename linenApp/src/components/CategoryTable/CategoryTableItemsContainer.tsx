import './CategoryTableItemContainer.scss';

const CategoryTableItemsContainer = ({ ...props }) => {
  return (
    <>
      <tbody>
        <tr>
          <th>Nazwa</th>
          <th>Ilość do kupienia</th>
          <th>Cena nowego</th>
          <th>Cena używanego</th>
          <th>Kupione</th>
        </tr>
        {props.children}
      </tbody>
    </>
  );
};

export default CategoryTableItemsContainer;
