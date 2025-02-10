import { Table, TableItem } from '../types/types';

export const tablesCategories: Table[] = [
  { id: 1, tableTitle: 'Wyprawka do szpitala dla Mamy' },
  { id: 2, tableTitle: 'Akcesoria/Przydatne gadżety' },
  { id: 3, tableTitle: 'Karmienie: Karmienie piersią/Akcesoria/Butelki' },
  { id: 4, tableTitle: 'Poza domem: przydatne akcesoria' },
  { id: 5, tableTitle: 'pokój dziecięcy/kącik niemowlęcy' },
  { id: 6, tableTitle: 'Higiena/Pielęgnacja/Apteczka' },
  { id: 7, tableTitle: 'Pierwsze zabawki/Przytulanki' },
  {
    id: 8,
    tableTitle:
      'Tkaniny- kocyki, otulacze, pieluszki, prześcieradełka, śpiworki',
  },
  { id: 9, tableTitle: 'Garderoba noworodka' },
];

export const tableItems: TableItem[] = [
  {
    id: 1,
    name: 'Baby Stroller',
    isInStock: true,
    quantity: 5,
    newItemPrice: 150,
    secondHandItemPrice: 100,
  },
  {
    id: 2,
    name: 'Crib',
    isInStock: false,
    quantity: 0,
    newItemPrice: 300,
    secondHandItemPrice: 180,
  },
  {
    id: 3,
    name: 'High Chair',
    isInStock: true,
    quantity: 8,
    newItemPrice: 75,
    secondHandItemPrice: 50,
  },
  {
    id: 4,
    name: 'Diaper Bag',
    isInStock: true,
    quantity: 10,
    newItemPrice: 45,
  },
  {
    id: 5,
    name: 'Baby Monitor',
    isInStock: true,
    quantity: 3,
    newItemPrice: 120,
    secondHandItemPrice: 80,
  },
];
