import NavHeaderButton from '../custom/buttons/NavHeaderButton';
import './navigationHeader.scss';

const NavigationHeader = ({ ...props }) => {
  return (
    <div>
      <header className={'header__nav-container'}>
        <NavHeaderButton buttonTitle={'Home Page'} page={'/'} />
        <NavHeaderButton buttonTitle={'Kategorie'} page={'/'} />
        <NavHeaderButton buttonTitle={'Podsumowanie'} page={'/'} />
        <NavHeaderButton buttonTitle={'do kupienia'} page={'/'} />
        <NavHeaderButton buttonTitle={'lista prezentowa'} page={'/'} />
      </header>
      {props.children}
    </div>
  );
};

export default NavigationHeader;
