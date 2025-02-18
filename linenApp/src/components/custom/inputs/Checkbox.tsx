import './checkbox.scss';

interface Props {
  isChecked: boolean;
  changeChecked: () => void;
}

const Checkbox = ({ isChecked, changeChecked }: Props) => {
  //TODO add function to update element in table
  return (
    <>
      <input
        type={'checkbox'}
        onClick={(e) => {
          e.stopPropagation();
          changeChecked();
        }}
        checked={isChecked}
        onChange={() => console.log('xxx')}
      />
    </>
  );
};

export default Checkbox;
