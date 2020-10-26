import capitalize from '../src/capitalize';

test('takes string and return the string with the first char capitalized', () => {
  expect(capitalize('mamuu')).toBe('Mamuu');
});