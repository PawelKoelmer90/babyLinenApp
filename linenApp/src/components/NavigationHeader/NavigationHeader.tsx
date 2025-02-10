import NavHeaderButton from '../custom/buttons/NavHeaderButton';

const NavigationHeader = ({ ...props }) => {
  return (
    <div>
      <header>
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
