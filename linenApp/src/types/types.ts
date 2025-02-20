export interface Table {
  id?: string;
  tableTitle: string;
}

export interface TableItem {
  id?: string;
  name: string;
  isInStock: boolean;
  quantity: number;
  newItemPrice?: number;
  usedItemPrice?: number;
  boughtUsed?: boolean;
  categoryId?: string;
}
