import { createContext, useEffect, useReducer } from 'react';
import { TableItem } from '../types/types';
import { FetchLink, useFetchData } from '../hooks/useFetchData';

export type ItemsContextType = {
  items: TableItem[];
  addItem: (item: TableItem) => void;
  deleteItem: (id: string | undefined) => void;
  updateIsInStock: (id: string | undefined, item: TableItem) => void;
};

enum itemActionType {
  LOAD_ITEMS = 'LOAD_ITEMS',
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  CHANGE_IS_IN_STOCK = 'CHANGE_IS_IN_STOCK',
}

export const ItemsContext = createContext<ItemsContextType>({
  items: [],
  addItem: (item: TableItem) => {},
  deleteItem: (id: string | undefined) => {},
  updateIsInStock: (id: string | undefined, item: TableItem) => {},
});

const itemsReducer = (state: TableItem[], action: any) => {
  switch (action.type) {
    case 'LOAD_ITEMS': {
      return [...action.payload];
    }
    case 'ADD_ITEM': {
      return [...state, action.payload];
    }
    case 'DELETE_ITEM': {
      return [...state.filter((item) => item.id !== action.payload)];
    }
    case 'CHANGE_IS_IN_STOCK': {
      const copy = [...state];
      const index = state.findIndex((item) => item.id === action.payload.id);
      const itemCopy = {
        ...copy[index],
      };
      itemCopy.isInStock = !copy[index].isInStock;
      copy[index] = itemCopy;
      return copy;
    }
    default:
      return [...state];
  }
};

export const ItemsContextProvider = ({ ...props }) => {
  const [itemsState, itemsDispatch] = useReducer(itemsReducer, []);
  const { fetchData, postItem, deleteItem, updateTableItem } = useFetchData();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await fetchData(FetchLink.ITEMS);
      itemsDispatch({ type: itemActionType.LOAD_ITEMS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeIsInStock = async (
    id: string | undefined,
    item: TableItem
  ) => {
    try {
      await updateTableItem(id, item);
      itemsDispatch({
        type: itemActionType.CHANGE_IS_IN_STOCK,
        payload: { id },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddItem = async (item: TableItem) => {
    try {
      await postItem(FetchLink.ITEMS, item);
      itemsDispatch({ type: itemActionType.ADD_ITEM, payload: item });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteItem = async (id: string | undefined) => {
    try {
      await deleteItem(FetchLink.ITEMS, id);
      itemsDispatch({ type: itemActionType.DELETE_ITEM, payload: id });
    } catch (err) {
      console.error(err);
    }
  };

  const contextValue = {
    items: itemsState,
    addItem: handleAddItem,
    deleteItem: handleDeleteItem,
    updateIsInStock: handleChangeIsInStock,
  };
  return (
    <ItemsContext.Provider value={contextValue}>
      {props.children}
    </ItemsContext.Provider>
  );
};
