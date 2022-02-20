import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title
          headline="Missões"
          classNameProp="title"
        />
        <div
          className="missions"
        >
          {
            missions.map((item) => (<MissionCard
              key={ item.name }
              name={ item.name }
              year={ item.year }
              country={ item.country }
              destination={ item.destination }
            />))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
