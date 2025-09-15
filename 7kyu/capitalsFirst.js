function capitalsFirst(str){
    let arr = str.split(' ');
    let newArr = []
    let revArr = []
    arr.forEach(item => {
        if(item.charAt(0) !== item.charAt(0).toUpperCase()){
            newArr.push(item);
        } else{
            revArr.unshift(item);
        }
    })
          revArr.reverse()
        newArr.unshift(...revArr)
        return newArr.join(' ')
  }
  console.log(capitalsFirst("hey You, Sort me Already!"))