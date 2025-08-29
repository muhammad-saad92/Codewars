function solution(string) {
    let spacedString = '';
  for(let i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase()){
          spacedString += ' ' + string[i];
      } else{
          spacedString += string[i]
      }
  }
  return spacedString;
}
console.log(solution("camelCasingCase"))