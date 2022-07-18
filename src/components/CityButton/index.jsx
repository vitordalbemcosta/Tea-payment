import * as Styles from './styles';

function CityButton({ city, isSelected, onClick }) {
  function handleClick() {
    onClick(city);
  }

  return (
    <Styles.Fragment>
      <Styles.Button onClick={handleClick} isSelected={isSelected}>
        {city.name}
      </Styles.Button>
    </Styles.Fragment>
  );
}

export default CityButton;