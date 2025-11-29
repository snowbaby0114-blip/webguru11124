
//first problem
console.log("-----------------------------first---------------------------");

function groupAnagrams(strs) {
  const map = new Map();
  for (let str of strs) {
    console.log("first-str :" + str);
    const key = str.split('').sort().join('');
    console.log("first-key :" + key);
    if (!map.has(key)) {
      console.log("first-haskey :" + key);
      map.set(key, []);

      console.log("first-map :" + map);
    }
    map.get(key).push(str);
    console.log("first-map.get(key).push :" + map);
  }
  //only value out
  return Array.from(map.values());
}
const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));