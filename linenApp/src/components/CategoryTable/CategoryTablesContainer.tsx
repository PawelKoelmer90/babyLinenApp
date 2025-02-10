import CategoryTable from './CateogryTable';
import { Table } from '../../types/types';

const CategoryTablesContainer = () => {
  const tablesCategories: Table[] = [];

  return (
    <>
      {tablesCategories.map((item, index) => {
        return (
          <CategoryTable
            key={`table_${item.id}`}
            index={index}
            tableTitle={item.tableTitle}
          />
        );
      })}
    </>
  );
};

export default CategoryTablesContainer;
