import * as Styles from './styles';

function CityButton({ cityName, isSelected, onClick }) {
  const handleClick = () => onClick(cityName);

  return (
    <Styles.Button onClick={handleClick} isSelected={isSelected}>
      {cityName}
    </Styles.Button>
  );
}

export default CityButton;