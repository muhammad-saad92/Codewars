function shorterReverseLonger(a,b){
    // return a.split('').reverse().join('');
    if(a.length > b.length || a.length === b.length){
        return(b + a.split('').reverse().join('') + b)
    } else if(b.length > a.length){
        return(a + b.split('').reverse().join('') + a)
    }
  }

  console.log(shorterReverseLonger('helolo', 'afdlsafj'));