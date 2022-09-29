import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <div data-testid="mission-name">{name}</div>
        <div data-testid="mission-year">{year}</div>
        <div data-testid="mission-country">{country}</div>
        <div data-testid="mission-destination">{destination}</div>
      </div>
    );
  }
}
export default MissionCard;
