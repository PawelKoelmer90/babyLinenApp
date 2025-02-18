import NavHeaderButton from '../custom/buttons/NavHeaderButton';
import './navigationHeader.scss';

const NavigationHeader = ({ ...props }) => {
  return (
    <>
      <header className={'header__nav-container'}>
        <NavHeaderButton buttonTitle={'Home Page'} page={'/'} />
        <NavHeaderButton
          buttonTitle={'Categories'}
          page={'/change-categories'}
        />
        <NavHeaderButton buttonTitle={'Summary'} page={'/'} />
        <NavHeaderButton buttonTitle={'To buy'} page={'/'} />
        <NavHeaderButton buttonTitle={'Present list'} page={'/'} />
      </header>
      {props.children}
    </>
  );
};

export default NavigationHeader;
