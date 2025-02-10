import { TableItem } from '../types/types';

enum STORAGE_KEYS {
  TABLE = 'TABLE',
}

export const setTableToLocalStorage = (
  tableName: string,
  table: TableItem[]
) => {
  localStorage.setItem(
    `${tableName}_${STORAGE_KEYS.TABLE}`,
    JSON.stringify(table)
  );
};

export const getTableFromLocalStorage = (tableName: string) => {
  const table = localStorage.getItem(`${tableName}_${STORAGE_KEYS.TABLE}`);
  return table != null ? JSON.parse(table) : [];
};
