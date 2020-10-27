import reverseString from '../src/reverse_string';

test('takes a string and return it reversed', () => {
  expect(reverseString('juma')).toBe('amuj');
});