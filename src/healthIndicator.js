/* eslint-disable import/prefer-default-export */
// healthIndicator.js
export const checkHealthStatus = (character) => {
  const { health } = character;

  if (health > 50) {
    return 'Green';
  } if (health >= 15) {
    return 'Yellow';
  }
  return 'Red';
};
