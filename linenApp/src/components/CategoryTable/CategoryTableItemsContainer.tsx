const CategoryTableItemsContainer = ({ ...props }) => {
  return (
    <>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Ilość do kupienia</th>
          <th>Cena nowego</th>
          <th>Cena używanego</th>
          <th>Kupione</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </>
  );
};

export default CategoryTableItemsContainer;
