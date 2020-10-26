const caesarCipher = (str, num) => {
  num %= 26;
  const lowerCaseStr = str.toLowerCase();
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet = alpha.split('');
  const newStr = '';
  for(let i = 0; i < lowerCaseStr.length; i++){
    const currentLetter = lowerCaseStr[i];
    if (currentLetter == ' ' || !alpha.includes(currentLetter)){
      newStr += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num; 
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
  return newStr;
};
export default caesarCipher;