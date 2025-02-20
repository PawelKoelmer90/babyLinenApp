import { CategoriesContext } from '../../store/categoriesContext';
import { useContext } from 'react';
import './categoriesPanel.scss';

const CategoriesPanel = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <>
      <ul className={'panel__container'}>
        {categories.map((item) => {
          return (
            <li
              className={'panel__container-item'}
              key={item.id}
              onClick={() => {
                const element = document.getElementById(`${item.id}`);
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }
              }}
            >
              {item.tableTitle}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoriesPanel;
