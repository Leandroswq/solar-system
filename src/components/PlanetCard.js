import React from 'react';
import PropTypes from 'prop-types';

class PlanetCards extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        data-testid="planet-card"
        className="planet-card"
      >
        <p data-testid="planet-name">{planetName}</p>
        {/* Combining Diacritical Marks[1] */}
        <div>
          <img
            className={planetName.toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')}
            src={planetImage}
            alt={`Planeta ${planetName}`} />
        </div>
      </div>
    );
  }
}

PlanetCards.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCards;
