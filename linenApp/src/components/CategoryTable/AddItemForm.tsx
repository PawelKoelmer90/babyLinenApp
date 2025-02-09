import { useForm } from "react-hook-form";
import "./addItemForm.scss";

const AddItemForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form className={"form__container"}>
      <input placeholder={"Nazwa"} className={""} {...register("name")} />
      <input placeholder={"Ile sztuk"} className={""} {...register("amount")} />
      <input
        placeholder={"Cena za nowy"}
        className={""}
        {...register("price")}
      />
      <input
        placeholder={"Cena za używany"}
        className={""}
        {...register("secondHandPrice")}
      />
      <input
        placeholder={"Cena za używany"}
        className={""}
        {...register("secondHandPrice")}
      />
    </form>
  );
};

export default AddItemForm;
