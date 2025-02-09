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
  secondHandItemPrice?: number;
}
