function solution(str){
  let arr = str.match(/(..?)/g)
  let odd;
  if(arr[arr.length - 1].length % 2 !== 0){
      odd = arr[arr.length - 1] + '_';
      arr.pop();
      arr.push(odd)
  } 
  return arr;
} 
console.log(solution('abcd'))