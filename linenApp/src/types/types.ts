export interface Table {
  id: number;
  tableTitle: string;
}

export interface TableItem {
  id: number;
  name: string;
  isInStock: boolean;
  quantity: number;
  newItemPrice?: number;
  usedItemPrice?: number;
  boughtUsed?: boolean;
  categoryId: number;
}
