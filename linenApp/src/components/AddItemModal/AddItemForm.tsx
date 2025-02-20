import { SubmitHandler, useForm } from 'react-hook-form';
import './addItemForm.scss';
import CustomInput from '../custom/inputs/CustomInput';
import { useFetchData } from '../../hooks/useFetchData';
import { CategoriesContext } from '../../store/categoriesContext';
import { useContext, useState } from 'react';
import SelectCategory from './SelectCategory';
import { Table } from '../../types/types';
import { ItemsContext } from '../../store/itemsContext';

type Inputs = {
  name: string;
  quantity: number;
  newItemPrice: number;
  usedItemPrice: number;
};

interface Props {
  categoryId: string | undefined;
  closeModal: () => void;
}

const AddItemForm = ({ categoryId, closeModal }: Props) => {
  const { postItem } = useFetchData();
  const { addItem } = useContext(ItemsContext);
  const { categories } = useContext(CategoriesContext);
  const [pickedCategory, setPickedCategory] = useState<Table>(
    categories.filter((item) => categoryId === item.id)[0]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      addItem({
        ...data,
        categoryId: pickedCategory.id,
        boughtUsed: false,
        isInStock: false,
      });
      closeModal();
    } catch (e) {
      console.error(e);
      closeModal();
    }
  };

  return (
    <form className={'form__container'} onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        placeholder={'Name'}
        className={'form__input'}
        {...register('name', { required: true })}
      />
      <CustomInput
        placeholder={'quantity'}
        className={'form__input'}
        {...register('quantity', { required: true })}
      />
      <CustomInput
        placeholder={'Price for new'}
        className={'form__input'}
        {...register('newItemPrice', { required: true })}
      />
      <CustomInput
        placeholder={'Price for used'}
        className={'form__input'}
        {...register('usedItemPrice')}
      />
      <SelectCategory
        categories={categories}
        value={pickedCategory.id}
        onChange={(pickedId) =>
          setPickedCategory(
            categories.filter((item) => pickedId === item.id)[0]
          )
        }
      />
      <CustomInput type={'submit'} className={'form__submit'} />
    </form>
  );
};

export default AddItemForm;
