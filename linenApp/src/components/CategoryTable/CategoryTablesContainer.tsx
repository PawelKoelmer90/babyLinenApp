import CategoryTable from './CateogryTable';
import { tablesCategories } from '../../data/tablesCategories';

const CategoryTablesContainer = () => {
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
