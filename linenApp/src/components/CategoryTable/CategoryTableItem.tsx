import Checkbox from "../custom/Checkbox";
import { TableItem } from "../../types/types";
import "./categoryItem.scss";

interface Props {
  item: TableItem;
  index: number;
  changeItem: (index: number) => void;
  deleteItem: (index: number) => void;
}

const CategoryTableItem = ({ item, index, changeItem, deleteItem }: Props) => {
  return (
    <tr>
      <th className={"item__name"}>{item.name}</th>
      <th>{item.quantity}</th>
      <th>{item?.newItemPrice}</th>
      <th>{item?.secondHandItemPrice}</th>
      <th className={"item__checkbox-container"}>
        <Checkbox
          isChecked={item.isInStock}
          changeChecked={() => changeItem(index)}
        />
      </th>
      {/*<th className={"item__delete-icon"} onClick={() => deleteItem(index)}>*/}
      {/*  <DeleteIcon />*/}
      {/*</th>*/}
    </tr>
  );
};

export default CategoryTableItem;
