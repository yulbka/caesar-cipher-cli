module.exports.cypher = (action, text, shift) => {
  const cypher = (text, shift) => {
    let cypheredText = '';
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      let code = text.charCodeAt(i);
      if (/[a-z]/i.test(letter)) {
        cypheredText += String.fromCharCode(code + Number(shift) % 26);
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
      if (/[a-z]/i.test(letter)) {
        decypheredText += String.fromCharCode(code - Number(shift) % 26);
      } else {
        decypheredText += letter;
      }
    }
    return decypheredText;
  }

  return action === 'encode' ? cypher(text, shift) : decypher(text, shift);
}