import { useEffect, useMemo, useState } from 'react';
import { Table } from '../types/types';
import CustomInput from '../components/custom/inputs/CustomInput';
import DeleteIcon from '../assets/icons/deleteIcon.svg';
import './changeCategoryPage.scss';

const ChangeCategoriesPage = () => {
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
          <li className={'list__element'}>
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

  return (
    <>
      <CustomInput
        placeholder={'Dodaj kategorię'}
        className={'add-category__input'}
        type={'text'}
        submitButton={true}
        submitButtonText={'Dodaj kategorię'}
        submitButtonFunction={(categoryName) => {
          if (categoryName.trim().length > 0)
            handleAddCategory(categoryName).then(() =>
              getFreshListOfCategories()
            );
        }}
      />
      {renderCategories}
    </>
  );
};

export default ChangeCategoriesPage;
