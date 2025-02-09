import Checkbox from "../custom/Checkbox";
import { TableItem } from "../../types/types";
import DeleteIcon from "../../assets/icons/deleteIcon.svg"
import "./categoryItem.scss";

interface Props {
  item: TableItem;
  index: number;
  lastItem: boolean;
  changeItem: (index: number) => void;
  deleteItem: (index: number) => void;
}

const CategoryTableItem = ({
  item,
  index,
  lastItem,
  changeItem,
  deleteItem,
}: Props) => {
  return (
    <div className={`item__container ${lastItem && "bottom-border"}`}>
      <div className={"item__name"}>{item.name}</div>
      <div>{item.quantity}</div>
      <div>{item?.newItemPrice}</div>
      <div>{item?.secondHandItemPrice}</div>
      <div className={"item__checkbox-container"}>
        <Checkbox
          isChecked={item.isInStock}
          changeChecked={() => changeItem(index)}
        />
      </div>
      <div className={"item__delete-icon"} onClick={() => deleteItem(index)}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CategoryTableItem;
