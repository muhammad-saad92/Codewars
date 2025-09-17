function capitalsFirst(str){
    let arr = str.split(' ');
    let newArr = []
    let revArr = []
    arr.forEach(item => {
      let code = item.charCodeAt(0)
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
           if(item.charAt(0) !== item.charAt(0).toUpperCase()){
            newArr.push(item);
        } else{
            revArr.unshift(item);
        } 
        }
    })
          revArr.reverse()
        newArr.unshift(...revArr)
        return newArr.join(' ')
  }