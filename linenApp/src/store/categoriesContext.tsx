import { createContext, useEffect, useState } from 'react';
import { Table } from '../types/types';
import { FetchLink, useFetchData } from '../hooks/useFetchData';

export type CategoriesContextType = {
  categories: Table[];
  addNewCategory: (title: string) => void;
  deleteCategory: (id: string | undefined) => void;
};

export const CategoriesContext = createContext<CategoriesContextType>({
  categories: [],
  addNewCategory: (title: string) => {},
  deleteCategory: (id: string | undefined) => {},
});

export const CategoriesContextProvider = ({ ...props }) => {
  const [tableCategories, setTableCategories] = useState<Table[]>([]);
  const { fetchData, postItem, deleteItem } = useFetchData();

  useEffect(() => {
    const fetchTables = async () => {
      const data = await fetchData(FetchLink.CATEGORIES);
      setTableCategories(data);
    };
    fetchTables();
  }, []);

  const refreshCategories = async () => {
    const data = await fetchData(FetchLink.CATEGORIES);
    setTableCategories(data);
  };

  const addNewCategory = async (title: string) => {
    await postItem(FetchLink.CATEGORIES, {
      tableTitle: title,
    });
    await refreshCategories();
  };

  const deleteCategory = async (id: string | undefined) => {
    await deleteItem(FetchLink.CATEGORIES, id);
    await refreshCategories();
  };

  const contextValue = {
    categories: tableCategories,
    addNewCategory: addNewCategory,
    deleteCategory: deleteCategory,
  };

  return (
    <CategoriesContext.Provider value={contextValue}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
