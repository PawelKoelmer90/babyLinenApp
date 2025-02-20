import CategoryTableItem from '../../components/CategoryTable/CategoryTableItem';
import './categoryTable.scss';
import { useContext, useMemo, useState } from 'react';
import PlusIcon from '../../assets/icons/plusIcon.svg';
import AddItemModal from '../../components/AddItemModal/AddItemModal';
import CategoryTableItemsContainer from '../../components/CategoryTable/CategoryTableItemsContainer';
import { ItemsContext } from '../../store/itemsContext';

//TODO Paginacja ?
//TODO Responsive design
//Todo widoki RWD -> zmiana typu z wielkością urządzenia
//Todo Categorie z lewej strony zaiweszone
//Todo Ekran logowania -> symulacja logowania
//Todo Akcja wylogowania
//Todo konfiguracja ENV

interface Props {
  tableTitle: string;
  tableId: string | undefined;
}

const CategoryTable = ({ tableTitle, tableId }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { items, deleteItem, updateIsInStock } = useContext(ItemsContext);

  const renderItems = useMemo(() => {
    return items
      .filter((item) => item.categoryId === tableId)
      .map((item, index) => {
        return (
          <CategoryTableItem
            key={item.id}
            item={item}
            index={index}
            changeItemIsInStock={() => {
              updateIsInStock(item.id, item);
            }}
            deleteItem={() => deleteItem(item.id)}
          />
        );
      });
  }, [items]);

  return (
    <>
      {modalVisible && (
        <AddItemModal
          closeModal={() => setModalVisible(false)}
          categoryId={tableId}
        />
      )}
      <div>
        <div className={'table__header'}>
          <div className={'table__title'}>{tableTitle}</div>
          <div className={'table__icon'} onClick={() => setModalVisible(true)}>
            <PlusIcon />
          </div>
        </div>
        <CategoryTableItemsContainer>{renderItems}</CategoryTableItemsContainer>
      </div>
    </>
  );
};

export default CategoryTable;
