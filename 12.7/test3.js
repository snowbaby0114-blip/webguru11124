
function deepFlatten(value) {
  const result = [];
  result.push(temp(value));
  return result;
}

function temp(value) {
  if (Array.isArray(value)) {
    for (const item of value) {
      temp(item);
    }
    return;
  }
  if (typeof value === "object") {
    for (const key in value) {
      temp(value[key]);
    }
    return;
  }
}

console.log(deepFlatten({
  a: [1, 2],
  b: { c: [3, 4], d: 5 },
  e: [[6], [7, [8]]]
}))