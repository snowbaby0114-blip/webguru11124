
function chunk(array, size) {
  let result = [];
  let cnt = 0;
  for (let i = 0; i<array.length; i++){
    if(i !== 0 && (i+1) % size == 0){
      console.log(i);
      let sub = [];
      let temp = 0;
      for(let j = cnt; j < i+1; j++){
        sub[temp] = array[j];
        temp ++;
        cnt ++;
      }
      result[i/size - 1] = sub;
    }
  }
  if(cnt < array.length){
    let sub = [];
    for(let j = cnt; j < array.length; j++){
      sub.push(array[j]);
    }
    result.push(sub);
  }
  return result;
}

const arry = [1, 2, 3, 4, 5];
const size = 2;

console.log(chunk(arry, size));