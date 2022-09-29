import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((data) => (<MissionCard
          name={ data.name }
          year={ data.year }
          country={ data.country }
          destination={ data.destination }
        />))}
      </div>
    );
  }
}
export default Missions;
