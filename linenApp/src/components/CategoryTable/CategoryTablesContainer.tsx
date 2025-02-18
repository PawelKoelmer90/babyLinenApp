import CategoryTable from '../../Pages/CategoryTables/CateogryTable';
import { useContext } from 'react';
import { CategoriesContext } from '../../store/categoriesContext';

const CategoryTablesContainer = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <>
      {categories.map((item) => {
        return (
          <CategoryTable
            key={`table_${item.id}`}
            tableId={item.id}
            tableTitle={item.tableTitle}
          />
        );
      })}
    </>
  );
};

export default CategoryTablesContainer;
