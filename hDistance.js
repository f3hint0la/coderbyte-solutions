function hDistance(strArr) {
  var str1 = strArr[0];
  var str2 = strArr[1];
  var distance = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance;
}

const input = ["abcdef", "defabc"];
console.log(hDistance(input));
