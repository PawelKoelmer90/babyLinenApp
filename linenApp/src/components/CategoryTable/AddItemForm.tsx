import { useForm } from 'react-hook-form';
import './addItemForm.scss';
import CustomInput from '../custom/inputs/CustomInput';

const AddItemForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form className={'form__container'}>
      <CustomInput
        placeholder={'Nazwa'}
        className={'form__input'}
        {...register('name')}
      />
      <CustomInput
        placeholder={'Ile sztuk'}
        className={'form__input'}
        {...register('amount')}
      />
      <CustomInput
        placeholder={'Cena za nowy'}
        className={'form__input'}
        {...register('price')}
      />
      <CustomInput
        placeholder={'Cena za używany'}
        className={'form__input'}
        {...register('secondHandPrice')}
      />
      <CustomInput
        placeholder={'Cena za używany'}
        className={'form__input'}
        {...register('secondHandPrice')}
      />
    </form>
  );
};

export default AddItemForm;
