// healthIndicator.test.js
import { checkHealthStatus } from '../healthIndicator';

describe('checkHealthStatus', () => {
  it('should return "Green" when health is more than 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(checkHealthStatus(character)).toBe('Green');
  });

  it('should return "Yellow" when health is between 15 and 50', () => {
    const character = { name: 'Маг', health: 30 };
    expect(checkHealthStatus(character)).toBe('Yellow');
  });

  it('should return "Red" when health is less than 15', () => {
    const character = { name: 'Маг', health: 10 };
    expect(checkHealthStatus(character)).toBe('Red');
  });
});
