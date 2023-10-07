// healthIndicator.test.js
import { sortHeroesByHealth } from '../healthIndicator';

describe('sortHeroesByHealth', () => {
  it('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  it('should handle an empty array', () => {
    const heroes = [];
    const sortedHeroes = sortHeroesByHealth(heroes);
    expect(sortedHeroes).toEqual([]);
  });

  it('should handle an array with a single hero', () => {
    const heroes = [{ name: 'воин', health: 50 }];
    const sortedHeroes = sortHeroesByHealth(heroes);
    expect(sortedHeroes).toEqual([{ name: 'воин', health: 50 }]);
  });

  it('should handle ties in health by maintaining original order', () => {
    const heroes = [
      { name: 'воин', health: 70 },
      { name: 'маг', health: 60 },
      { name: 'лучник', health: 70 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'воин', health: 70 },
      { name: 'лучник', health: 70 },
      { name: 'маг', health: 60 },
    ]);
  });
});
