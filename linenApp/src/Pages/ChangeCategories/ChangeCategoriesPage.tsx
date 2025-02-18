import { useEffect, useMemo, useRef, useState } from 'react';
import { Table } from '../../types/types';
import CustomInput from '../../components/custom/inputs/CustomInput';
import DeleteIcon from '../../assets/icons/deleteIcon.svg';
import './changeCategoryPage.scss';
import { FetchLink, useFetchData } from '../../hooks/useFetchData';

const ChangeCategoriesPage = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [listOfCategories, setListOfCategories] = useState<Table[]>([]);
  const { fetchData, deleteItem, postItem } = useFetchData();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetchData(FetchLink.CATEGORIES);
      setListOfCategories(data);
    };
    fetchCategories();
  }, []);

  const getFreshListOfCategories = async () => {
    const data = await fetchData(FetchLink.CATEGORIES);
    console.log(data);
    setListOfCategories(data);
  };

  const handleAddItem = async (title: string) => {
    await postItem(FetchLink.CATEGORIES, {
      tableTitle: title,
    });
    await getFreshListOfCategories();
  };

  const renderCategories = useMemo(() => {
    return (
      <ol>
        {listOfCategories.map((category) => (
          <li className={'list__element'} key={category.id}>
            {category.tableTitle}
            <div
              onClick={() => {
                deleteItem(FetchLink.CATEGORIES, category.id);
                getFreshListOfCategories();
              }}
            >
              <DeleteIcon />
            </div>
          </li>
        ))}
      </ol>
    );
  }, [listOfCategories]);

  return (
    <>
      <CustomInput
        placeholder={'Category name'}
        className={'add-category__input'}
        type={'text'}
        ref={ref}
      />
      <button
        onClick={() => {
          if (ref.current != null) {
            ref.current.value.trim().length > 0 &&
              handleAddItem(ref.current.value);

            ref.current.value = '';
          }
        }}
      >
        Add category
      </button>
      {renderCategories}
    </>
  );
};

export default ChangeCategoriesPage;
