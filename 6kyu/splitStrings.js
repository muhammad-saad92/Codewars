function solution(str){
    let arr = [];
    for(let i = 0; i < str.length; i += 2){
      arr.push(str.substring(i, i + 2));
    }
    
    let odd = str += '_'
    
    
    if(arr[arr.length - 1].length % 2 !== 0){
      return odd
    }
   
 
 } 
 console.log(solution('abc'))