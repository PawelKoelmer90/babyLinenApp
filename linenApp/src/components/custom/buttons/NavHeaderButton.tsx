import './navHeaderButton.scss';
import { useNavigate } from 'react-router';

interface Props {
  buttonTitle: string;
  page: string;
}

const navHeaderButton = ({ buttonTitle, page }: Props) => {
  const navigate = useNavigate();
  //TODO stosowanie odpowiednio stylowanego Linka wtedy wypada hook i
  return (
    <button
      className={'button__nav-button'}
      onClick={() => navigate(`${page}`)}
    >
      {buttonTitle}
    </button>
  );
};

export default navHeaderButton;
