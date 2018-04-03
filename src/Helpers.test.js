import Helpers from './Helpers';

it('headerToHash replaces spaces with dashes and converts to lower case', () => {
  const helpers = new Helpers();
  expect(helpers.headerToHash('My Header')).toBe('my-header');
});