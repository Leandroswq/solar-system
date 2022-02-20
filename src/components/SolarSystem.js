import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCards from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title
          headline="Planetas"
          classNameProp="title"
        />
        <div className="solar-system">
          {planets.map((item) => (<PlanetCards
            planetName={ item.name }
            planetImage={ item.image }
            key={ item.name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
