import './navHeaderButton.scss';
import { Link } from 'react-router';

interface Props {
  buttonTitle: string;
  page: string;
}

const navHeaderButton = ({ buttonTitle, page }: Props) => {
  return (
    <Link className={'button__nav-button'} to={`${page}`}>
      {buttonTitle}
    </Link>
  );
};

export default navHeaderButton;
