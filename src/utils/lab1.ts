export const isAlpha = (str: string) => /^[a-zA-Z]*$/.test(str);

function checkAndConvertInt(input: string): number | null {
  const num = parseInt(input, 10);
  const isIntegerString = /^\s*\d+\s*$/.test(input.trim());
  const isNaNResult = isNaN(num);
  const isOutOfRange = num < 1 || num > 25;

  if (isNaNResult || !isIntegerString || isOutOfRange) {
    return null;
  }

  return num;
}

export const encrypt = (key_str: string, word_str: string, chars: string[]): string => {
  let word = word_str.replace(/\s+/g, '');
  const key = checkAndConvertInt(key_str);

  if (!key) {
    alert('key must be 1-25');
    return '';
  }

  if (!isAlpha(word)) {
    alert('word must consist of A-Z or a-z');
    return '';
  } else {
    word = word.toUpperCase();
    const word_chr = [...word];
    const alphabetSize = chars.length; // 26

    return word_chr.map((char: string) => {
      const oldIndex = chars.indexOf(char);

      if (oldIndex === -1) {
        return char;
      }

      const newIndex = (oldIndex + key) % alphabetSize;
      return chars[newIndex];
    }).join('');
  }
}

export const decrypt = (key_str: string, cipher_str: string, chars: string[]): string => {
  let cipher = cipher_str.replace(/\s+/g, '');
  const key = checkAndConvertInt(key_str);

  if (!key) {
    alert('key must be 1-25');
    return '';
  }

  if (!isAlpha(cipher)) {
    alert('word must consist of A-Z or a-z');
    return '';
  } else {
    cipher = cipher.toUpperCase();
    const cipher_chr = [...cipher];
    const alphabetSize = chars.length; // 26

    return cipher_chr.map((char: string) => {
      const oldIndex = chars.indexOf(char);

      if (oldIndex === -1) {
        return char;
      }

      const newIndex = (oldIndex - key + alphabetSize) % alphabetSize;
      return chars[newIndex];
    }).join('');
  }
}
