import "./checkbox.scss";

interface Props {
  isChecked: boolean;
  changeChecked: () => void;
}

const Checkbox = ({ isChecked, changeChecked }: Props) => {
  return (
    <>
      <input type={"checkbox"} onClick={changeChecked} />
    </>
  );
};

export default Checkbox;
