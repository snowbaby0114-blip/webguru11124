console.log("------------------------------third--------------------------");
//third problem
function longestNonRepeating(s) {
  let j = 0;                 
  let stringSet = new Set(); 
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    while (stringSet.has(s[i])) {
      stringSet.delete(s[j]);
      j ++;
    }
    stringSet.add(s[i]);
    console.log("string set" + stringSet);

    maxLength = Math.max(maxLength, i - j + 1);
    console.log("maxlength" + maxLength);

  }

  return maxLength;
}
const thirdInput = "abcabcbb";
console.log( "maxLengthgth: " + longestNonRepeating(thirdInput));
