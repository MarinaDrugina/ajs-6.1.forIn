import sortCharacters from '../app.js';

test('test for correct characters sorting', () => {
  const charObj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sortingWay = ['name', 'level'];
  const result = sortCharacters(charObj, sortingWay);
  const standart = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(result).toEqual(standart);
});

test('object not has own properties', () => {
  expect(() => {
    function Character() { }
    Character.prototype.type = 'human';
    const charObj = new Character();
    const sortingWay = ['name', 'level'];
    return sortCharacters(charObj, sortingWay);
  }).toThrow(new Error('Not properties found!'));
});
