function isBalanced(srting) {
  let balanced = [];
  let sets = {')': '(','}': '{',']': '['};

  for (let char of srting) {
    if (char === ')' || char === '}' || char === ']') {
      if (balanced.length === 0 || balanced[balanced.length - 1] !== sets[char]) {
        return false;
      }
      balanced.pop();
    }else if (char === '(' || char === '{' || char === '[') {
      balanced.push(char);
    } 
  }

  return balanced.length == 0 ? true : false;
}

console.log(isBalanced("(((())))"));
console.log(isBalanced("([)]"));
console.log(isBalanced("[)"));