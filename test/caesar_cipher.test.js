import caesarCipher from '../src/caesar_cipher';

test('caesar cipher of a string wraping from z to a ', () => {
  const result = caesarCipher('z', 1);
  expect(result).toBe('a');
});

test('caesar cipher of string with a mixed case', () => {
  const result = caesarCipher('Kcfy oh Vcas', -14);
  expect(result).toBe('Work at Home');
});

test('caesar cipher of string having punctuation', () => {
  const result = caesarCipher('ABC!.abc', 2);
  expect(result).toBe('CDE!.cde')
})