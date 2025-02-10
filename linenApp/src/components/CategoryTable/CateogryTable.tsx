import CategoryTableItem from "./CategoryTableItem";
import "./categoryTable.scss";
import { useEffect, useState } from "react";
import { TableItem } from "../../types/types";
import { setTableToLocalStorage } from "../../storage/localStorage";
import PlusIcon from "../../assets/icons/plusIcon.svg";
import AddItemModal from "./AddItemModal";
import { tableItems } from "../../data/tablesCategories";
import CategoryTableItemsContainer from "./CategoryTableItemsContainer";

interface Props {
  tableTitle: string;
  index: number;
}

const CategoryTable = ({ tableTitle, index }: Props) => {
  const [items, setItems] = useState<TableItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    setItems([...tableItems]);
  }, []);

  const deleteItem = (indexToDelete: number) => {
    setItems(items.filter((item, index) => indexToDelete !== index));
    setTableToLocalStorage(tableTitle, items);
  };

  const addItem = (itemToAdd: TableItem) => {
    setItems([...items, itemToAdd]);
    setTableToLocalStorage(tableTitle, items);
  };

  const handleChangeItem = (index: number) => {
    setItems((prevState) => {
      const copy = [...prevState];
      const itemCopy = { ...copy[index] };
      itemCopy.isInStock = !copy[index].isInStock;
      copy[index] = itemCopy;
      return copy;
    });
    setTableToLocalStorage(tableTitle, items);
  };

  return (
    <>
      {modalVisible && (
        <AddItemModal closeModal={() => setModalVisible(false)} />
      )}
      <div>
        <div className={"table__header"}>
          <div className={"table__title"}>{tableTitle}</div>
          <div className={"table__icon"} onClick={() => setModalVisible(true)}>
            <PlusIcon />
          </div>
        </div>
        <table>
          <CategoryTableItemsContainer>
            {items.map((item, index) => {
              return (
                <CategoryTableItem
                  key={item.id}
                  item={item}
                  index={index}
                  changeItem={(index) => handleChangeItem(index)}
                  deleteItem={(index) => deleteItem(index)}
                />
              );
            })}
          </CategoryTableItemsContainer>
        </table>
      </div>
    </>
  );
};

export default CategoryTable;
