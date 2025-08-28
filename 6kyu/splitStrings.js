function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
      let pair = str.slice(i, i + 2);
      if (pair.length === 1) pair += "_"; // add underscore if odd
      result.push(pair);
  }
  return result;
}
