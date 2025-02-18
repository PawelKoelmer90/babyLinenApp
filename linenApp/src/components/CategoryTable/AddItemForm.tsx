import { SubmitHandler, useForm } from 'react-hook-form';
import './addItemForm.scss';
import CustomInput from '../custom/inputs/CustomInput';
import { FetchLink, useFetchData } from '../../hooks/useFetchData';

type Inputs = {
  name: string;
  quantity: number;
  newItemPrice: number;
  usedItemPrice: number;
};

interface Props {
  categoryId: string | undefined;
}

const AddItemForm = ({ categoryId }: Props) => {
  const { postItem } = useFetchData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await postItem(FetchLink.ITEMS, {
      ...data,
      categoryId,
      boughtUsed: false,
      isInStock: false,
    });
    console.log(categoryId);
    console.log(data);
  };

  return (
    <form className={'form__container'} onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        placeholder={'Nazwa'}
        className={'form__input'}
        {...register('name', { required: true })}
      />
      <CustomInput
        placeholder={'Ile sztuk'}
        className={'form__input'}
        {...register('quantity', { required: true })}
      />
      <CustomInput
        placeholder={'Cena za nowy'}
        className={'form__input'}
        {...register('newItemPrice', { required: true })}
      />
      <CustomInput
        placeholder={'Cena za używany'}
        className={'form__input'}
        {...register('usedItemPrice')}
      />
      <CustomInput type={'submit'} className={'form__submit'} />
    </form>
  );
};

export default AddItemForm;
