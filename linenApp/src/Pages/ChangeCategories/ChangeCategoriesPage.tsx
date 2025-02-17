import { useEffect, useMemo, useRef, useState } from 'react';
import { Table } from '../../types/types';
import CustomInput from '../../components/custom/inputs/CustomInput';
import DeleteIcon from '../../assets/icons/deleteIcon.svg';
import './changeCategoryPage.scss';

const ChangeCategoriesPage = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [listOfCategories, setListOfCategories] = useState<Table[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories').then((res) =>
      res.json().then((data) => setListOfCategories(data))
    );
  }, []);

  const getFreshListOfCategories = () => {
    fetch('http://localhost:3000/categories')
      .then((res) => res.json())
      .then((data) => setListOfCategories(data));
  };

  const handleAddCategory = async (categoryName: string) => {
    await fetch('http://localhost:3000/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tableTitle: categoryName }),
    });
  };

  const handleDeleteCategoryItem = async (categoryId: number) => {
    await fetch(`http://localhost:3000/categories/${categoryId}`, {
      method: 'DELETE',
    });
  };

  const renderCategories = useMemo(() => {
    return (
      <ol>
        {listOfCategories.map((category) => (
          <li className={'list__element'} key={category.id}>
            {category.tableTitle}
            <div
              onClick={() => {
                handleDeleteCategoryItem(category.id).then(() => {
                  getFreshListOfCategories();
                });
              }}
            >
              <DeleteIcon />
            </div>
          </li>
        ))}
      </ol>
    );
  }, [listOfCategories.length]);
  // submitButton={true}
  // submitButtonText={'Dodaj kategorię'}
  // submitButtonFunction={(categoryName) => {
  //
  // }}
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
              handleAddCategory(ref.current.value).then(() =>
                getFreshListOfCategories()
              );
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
