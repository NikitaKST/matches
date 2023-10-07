// healthIndicator.js
export const checkHealthStatus = (character) => {
    const { health } = character;
  
    if (health > 50) {
      return 'Green';
    } else if (health >= 15) {
      return 'Yellow';
    } else {
      return 'Red';
    }
  };
  