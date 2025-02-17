import CategoryTable from '../../Pages/CategoryTables/CateogryTable';
import { Table } from '../../types/types';
import { useEffect, useState } from 'react';

const CategoryTablesContainer = () => {
  const [tables, setTables] = useState<Table[]>([]);

  //TODO poprawić dokończyć

  useEffect(() => {
    const fun = async () => {
      if (!!tables.length) return;
      try {
        const response = await fetch('http://localhost:3000/categories');
        const data = await response.json();
        setTables(data);
      } catch (err) {
        console.warn(err);
      }
    };
    fun();
  }, []);

  return (
    <>
      {tables.map((item) => {
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
