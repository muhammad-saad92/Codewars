function makeNegative(num) {
    let arr = [];
    if(Math.sign(num) === 1){
      arr.push(num)
      arr.unshift('-')
      let fnl = arr.join('')
      return Number(fnl)
    } else{
        return num
    }
  }
  
  console.log(makeNegative(5));

  function makeNegative(num) {
    return num > 0 ? -num : num;
  }