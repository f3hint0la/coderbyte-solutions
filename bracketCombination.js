function bracketCombinations(str) {
  var leftBracket = 0;
  var rightBracket = 0;
  var leftSquare = 0;
  var rightSquare = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      leftBracket++;
    }

    if (str[i] === ")") {
      rightBracket++;
    }

    if (str[i] === "[") {
      leftSquare++;
    }

    if (str[i] === "]") {
      rightSquare++;
    }
  }

  if (leftBracket == rightBracket && leftSquare == rightSquare) {
    return 1 + " " + (leftBracket + leftSquare);
  } else return 0;
}

const input = "(coder)[byte)]";
console.log(bracketCombinations(input));
