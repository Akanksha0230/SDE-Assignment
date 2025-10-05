function processData(data) {
  const totalCodes = data.length;
  const normalizedValidCodes = [];

  function isCharacter(char) {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }

  function isNumerical(char) {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
  }

  function isValidandNormalize(code) {
    if (code.length !== 7) return null;

    let letters = code.slice(0, 3);
    let digits = code.slice(3);

    for (let i = 0; i < 3; i++) {
      if (!isCharacter(letters[i])) return null;
    }

    for (let i = 0; i < 4; i++) {
      if (!isNumerical(digits[i])) return null;
    }

    return letters.toUpperCase() + digits;
  }

  for (let code of data) {
    const normalized = isValidandNormalize(code);
    if (normalized) {
      normalizedValidCodes.push(normalized);
    }
  }

  normalizedValidCodes.sort();

  return {
    totalCodes: totalCodes,
    validCodes: normalizedValidCodes.length,
    invalidCodes: totalCodes - normalizedValidCodes.length,
    normalizedValidCodes: normalizedValidCodes,
  };
}

module.exports = { processData };




