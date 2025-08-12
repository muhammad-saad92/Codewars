function descendingOrder(n){
    let x = n.toString().split('').sort((a,b) => b - a).join('')
    return Number(x)
   }
   
   console.log(descendingOrder(54356))