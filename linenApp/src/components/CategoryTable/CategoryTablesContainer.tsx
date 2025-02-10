import CategoryTable from './CateogryTable';
import { Table } from '../../types/types';
import { useEffect, useState } from 'react';

const CategoryTablesContainer = () => {
  const [tables, setTables] = useState<Table[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories').then((res) =>
      res.json().then((data) => setTables(data))
    );
  }, []);

  return (
    <>
      {tables.map((item, index) => {
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
