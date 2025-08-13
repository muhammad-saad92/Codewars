function leastLarger(a,i) {
    let sorted = a.sort((a,b) => a-b)
    let max = a[i]
    let val;
    for(let index = 0; index < a.length; index++){
        if(max < sorted[index]){
            val = sorted[index]
            break;
        }
    }
    console.log(val)
  console.log()
  }
  