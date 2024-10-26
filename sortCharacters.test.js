
import { sortCharactersByHealth } from './sortCharacters';

describe('sortCharactersByHealth', () => {
  test('sorts characters by health in descending order', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortCharactersByHealth(input);
    expect(result).toEqual(expected); 
  });

  test('does not mutate the original array', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const inputCopy = [...input]; 

    sortCharactersByHealth(input);
    expect(input).toEqual(inputCopy); 
  });
});
