module.exports = function check(str, bracketsConfig) {
  const strArray = str.split("");
  let result = [];
  let openBrackets = ["(", "[", "{", '1', '3', '5', '7', '8'];
  let closeBrackets = [")", "]", "}", '2', '4', '6', '7', '8'];
  let openItem;
  let closeItem;

  if (strArray.length % 2 !== 0) {
    return false;
  } else {
    for (let i = 0; i < strArray.length; i++) {
      openItem = openBrackets.indexOf(strArray[i]);
      if (openItem !== -1) {
        result.push(openItem);
        continue;
      }

      closeItem = closeBrackets.indexOf(strArray[i]);

      if (closeItem !== -1) {
        openItem = result.pop();

        if (closeItem !== openItem) {
          return false;
        }
      }
    }
  }

  if (result.length !== 0) {
    return false;
  }

  return true;
};
