import './navHeaderButton.scss';
import { Link } from 'react-router';

interface Props {
  buttonTitle: string;
  page: string;
}

const navHeaderButton = ({ buttonTitle, page }: Props) => {
  return (
    <Link
      className={'button__nav-button'}
      to={`${page}`}
      type={'string'}
      title={buttonTitle}
    >
      {buttonTitle}
    </Link>
  );
};

export default navHeaderButton;
