import { useContext, useMemo, useRef } from 'react';
import CustomInput from '../../components/custom/inputs/CustomInput';
import DeleteIcon from '../../assets/icons/deleteIcon.svg';
import './changeCategoryPage.scss';
import { CategoriesContext } from '../../store/categoriesContext';

const ChangeCategoriesPage = () => {
  const { categories, addNewCategory, deleteCategory } =
    useContext(CategoriesContext);
  const ref = useRef<HTMLInputElement>(null);

  const handleAddItem = async (title: string) => {
    addNewCategory(title);
  };

  const handleDeleteItem = async (id: string | undefined) => {
    await deleteCategory(id);
  };

  const renderCategories = useMemo(() => {
    return (
      <ol>
        {categories.map((category) => (
          <li className={'list__element'} key={category.id}>
            {category.tableTitle}
            <div
              onClick={() => {
                handleDeleteItem(category.id);
              }}
            >
              <DeleteIcon />
            </div>
          </li>
        ))}
      </ol>
    );
  }, [categories]);

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
