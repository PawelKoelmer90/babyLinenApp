import './CategoryTableItemContainer.scss';
import TableHeader from './TableHeader';

const CategoryTableItemsContainer = ({ ...props }) => {
  return (
    <table>
      <TableHeader />
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default CategoryTableItemsContainer;
