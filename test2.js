console.log("-----------------------------second---------------------------");
//second problem
function isValidBrackets(s) {
  const match = [];
  const vaildSet = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (vaildSet[char]) {
      console.log("match:" + match);
      const temp = match.pop();
      console.log('second-pair' + temp);
      console.log('second-pair' + char);

      console.log("vaildSet[char]" + vaildSet[char]);
      if (temp !== vaildSet[char]) return false;
    }else {
      match.push(char);
    }
  }
  return match.length == 0? true : false;
}

const s = '([]{})';
console.log(isValidBrackets(s));