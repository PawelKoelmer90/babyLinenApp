import { Table } from '../../types/types';

interface Props {
  value: string | undefined;
  onChange: (value: string) => void;
  categories: Table[];
}

const SelectCategory = ({ categories, onChange, value }: Props) => {
  return (
    <select
      defaultValue={value}
      className={'select__container'}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {categories.map((category) => {
        return (
          <option value={category.id} key={category.id}>
            {category.tableTitle}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCategory;
