const isAlpha = (str: string) => /^[a-zA-Z]*$/.test(str);

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

    // Determine the size of the alphabet for the modulo operation
    const alphabetSize = chars.length; // 26

    // Use map to iterate over each character in word_chr and encrypt it
    return word_chr.map((char: string) => {
      // Find the 0-based index of the character in the alphabet
      const oldIndex = chars.indexOf(char);

      // This check is good, but based on the previous isAlpha check,
      // oldIndex should never be -1 for letters A-Z.
      if (oldIndex === -1) {
        return char;
      }

      // Calculate the new index by adding the key and applying modulo
      const newIndex = (oldIndex + key) % alphabetSize;

      // Return the character at the new index
      return chars[newIndex];
    }).join(''); // <--- JOIN THE ARRAY OF CHARACTERS BACK INTO A STRING
  }
}

export const decrypt = (key_str: string, cipher_str: string, chars: string[]): string => {
  let cipher = cipher_str.replace(/\s+/g, '');
  const key = checkAndConvertInt(key_str);

  if (!key) {
    alert('key must be 1-25');
    return '';
  }

  // Assuming the cipher text is already validated to be all uppercase letters
  // based on the output of your encrypt function, but we'll re-validate for safety.
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
        return char; // Return non-A-Z characters unchanged
      }

      // 1. Calculate the shifted index by SUBTRACTING the key.
      // 2. Add alphabetSize before the modulo operation. This ensures the result
      //    of (oldIndex - key) is always positive, even if it's a negative number.
      // 3. Apply modulo to wrap around the alphabet.
      const newIndex = (oldIndex - key + alphabetSize) % alphabetSize;

      return chars[newIndex];
    }).join('');
  }
}
