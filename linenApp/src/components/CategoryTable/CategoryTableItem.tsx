import { TableItem } from "../../types/types";
import "./categoryItem.scss";
import Checkbox from "../custom/Checkbox";

interface Props {
  item: TableItem;
  index: number;
  changeItem: (index: number) => void;
  deleteItem: (index: number) => void;
}

const CategoryTableItem = ({ item, index, changeItem, deleteItem }: Props) => {
  return (
    <tr className="row__category-item">
      <th scope={"row"}>{item.name}</th>
      <td>{item.quantity}</td>
      <td>{item?.newItemPrice}</td>
      <td>{item?.secondHandItemPrice}</td>
      <td className={"item__checkbox-container"}>
        <Checkbox
          isChecked={item.isInStock}
          changeChecked={() => changeItem(index)}
        />
      </td>
      {/*<th className={"item__delete-icon"} onClick={() => deleteItem(index)}>*/}
      {/*  <DeleteIcon />*/}
      {/*</th>*/}
    </tr>
  );
};

export default CategoryTableItem;
