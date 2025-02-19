import { createContext, useEffect, useReducer } from 'react';
import { Table } from '../types/types';
import { FetchLink, useFetchData } from '../hooks/useFetchData';

export type CategoriesContextType = {
  categories: Table[];
  addNewCategory: (title: string) => void;
  deleteCategory: (id: string | undefined) => void;
};

enum tableActionType {
  REFRESH_CATEGORY = 'REFRESH_CATEGORY',
  ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
}

const tableCategoriesReducer = (
  state: Table[],
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'REFRESH_CATEGORY': {
      return [...action.payload];
    }
    case 'ADD_NEW_CATEGORY': {
      return [...state, action.payload];
    }
    case 'DELETE_CATEGORY': {
      return [...state.filter((item) => item.id !== action.payload)];
    }
    default:
      return state;
  }
};

export const CategoriesContext = createContext<CategoriesContextType>({
  categories: [],
  addNewCategory: (title: string) => {},
  deleteCategory: (id: string | undefined) => {},
});

export const CategoriesContextProvider = ({ ...props }) => {
  const [tableCategoriesState, tableCategoriesDispatch] = useReducer(
    tableCategoriesReducer,
    []
  );
  const { fetchData, postItem, deleteItem } = useFetchData();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await fetchData(FetchLink.CATEGORIES);
      tableCategoriesDispatch({ type: 'REFRESH_CATEGORY', payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const addNewCategory = async (title: string) => {
    const id = new Date().getTime().toString();
    try {
      await postItem(FetchLink.CATEGORIES, {
        tableTitle: title,
        id,
      });
      tableCategoriesDispatch({
        type: tableActionType.ADD_NEW_CATEGORY,
        payload: {
          tableTitle: title,
          id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCategory = async (id: string | undefined) => {
    try {
      await deleteItem(FetchLink.CATEGORIES, id);
      tableCategoriesDispatch({
        type: tableActionType.DELETE_CATEGORY,
        payload: id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = {
    categories: tableCategoriesState,
    addNewCategory: addNewCategory,
    deleteCategory: deleteCategory,
  };

  return (
    <CategoriesContext.Provider value={contextValue}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
