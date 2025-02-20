import CategoryTable from '../../Pages/CategoryTables/CateogryTable';
import { useContext } from 'react';
import { CategoriesContext } from '../../store/categoriesContext';
import './categoryTablesContainer.scss';
import CategoriesPanel from '../leftPanelNavigation/CategoriesPanel';

const CategoryTablesContainer = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className={'container'}>
      <CategoriesPanel />
      <div className={'container__tables'}>
        {categories.map((item) => {
          return (
            <CategoryTable
              key={`table_${item.id}`}
              tableId={item.id}
              tableTitle={item.tableTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTablesContainer;
