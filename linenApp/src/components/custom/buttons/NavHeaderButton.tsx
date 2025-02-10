import './navHeaderButton.scss';
import { useNavigate } from 'react-router';

interface Props {
  buttonTitle: string;
  page: string;
}

const navHeaderButton = ({ buttonTitle, page }: Props) => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(`${page}`)}>{buttonTitle}</button>;
};

export default navHeaderButton;
