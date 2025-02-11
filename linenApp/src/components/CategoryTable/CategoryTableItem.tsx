import { TableItem } from '../../types/types';
import './categoryItem.scss';
import Checkbox from '../custom/inputs/Checkbox';
import { useNavigate } from 'react-router';

interface Props {
  item: TableItem;
  index: number;
  changeItem: (index: number) => void;
  deleteItem: (index: number) => void;
}

const CategoryTableItem = ({ item, index, changeItem, deleteItem }: Props) => {
  const navigate = useNavigate();
  return (
    <tr
      className="row__category-item"
      onClick={() => navigate(`/category/${item.id}`)}
    >
      <th scope={'row'}>{item.name}</th>
      <td>{item.quantity}</td>
      <td>{item?.newItemPrice}</td>
      <td>{item?.usedItemPrice}</td>
      <td className={'item__checkbox-container'}>
        <Checkbox
          isChecked={item.isInStock}
          changeChecked={() => changeItem(index)}
        />
      </td>
    </tr>
  );
};

export default CategoryTableItem;
