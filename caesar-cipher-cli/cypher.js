module.exports.cypher = (action, text, shift) => {
  const cypher = (text, shift) => {
    let cypheredText = '';
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        cypheredText += String.fromCharCode((code - 65 + Number(shift)) % 26 + 65);
      } else if (code >= 97 && code <= 122) {
        cypheredText += String.fromCharCode((code - 97 + Number(shift)) % 26 + 97);
      } else {
        cypheredText += letter;
      }
    }
    return cypheredText;
  }
  
  const decypher = (text, shift) => {
    let decypheredText = '';
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        decypheredText += String.fromCharCode((code - 65 - Number(shift)) % 26 + 65);
      } else if (code >= 97 && code <= 122) {
        decypheredText += String.fromCharCode((code - 97 - Number(shift)) % 26 + 97);
      } else {
        decypheredText += letter;
      }
    }
    return decypheredText;
  }

  if (action === 'encode') {
    return cypher(text, shift)
  } else if (action === 'decode') {
    return decypher(text, shift)
  }
}
