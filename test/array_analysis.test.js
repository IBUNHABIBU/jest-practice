import analyze from '../src/array_analysis';

beforeEach(()=> object)
const object = analyze([1,8,3,4,2,6]);
test('Takes an array of numbers and return an object', () => {
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('finds the lenght of an array', () => {
  expect(object.length).toBe(6);
});

test('finds the average of an array', () => {
  expect(object.average).toBe(4);
});

test('finds the minimum value of an array', () => {
  expect(object.min).toBe(1);
})

test('finds the maximum value of an array', () => {
  expect(object.max).toBe(8);
})