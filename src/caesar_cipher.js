const caesarCipher = (str, num) => {
  num %= 26;
  const lowerCaseStr = str.toLowerCase();
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet = alpha.split('');
  let newStr = '';
  for (let i = 0; i < lowerCaseStr.length; i += 1) {
    const currentLetter = lowerCaseStr[i];
    if (currentLetter === ' ' || !alpha.includes(currentLetter)){
      newStr += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex += 26;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
  return newStr;
};
export default caesarCipher;