import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="solar-system" />
        <Title headline="Planetas" />
        <div>
          {planets.map((param) => (<PlanetCard
            key={ param.name }
            planetName={ param.name }
            planetImage={ param.image }
          />))}

        </div>
      </div>
    );
  }
}
export default SolarSystem;
