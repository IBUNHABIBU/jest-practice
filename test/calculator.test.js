import calc from '../src/calculator';

test('addition of 4 + 8 gives 12', ()=> {
  const sum = calc.add(4,8);
  expect(sum).toBe(12)
});

test('substruction of 14 - 8 gives 6', ()=> {
  const reduce = calc.subtract(14,8);
  expect(reduce).toBe(6)
});

test('multiplication of 4 * 8 gives 12', ()=> {
  const product = calc.multiply(4,8);
  expect(product).toBe(32)
});

test('division of 4 / 8 gives 12', ()=> {
  const result = calc.div(4,8);
  expect(result).toBe(0.5)
});