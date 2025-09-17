// you will get an array of numbers and an index, you have to return the index of least larger number than the number at given index, for example
// ( [4, 1, 3, 5, 6], 0 )
// 4 is the number at given index which is 0
// so what numbers are greater than 4 (5 and 6)
// but the least largest is 5 (so return the index of 5 which is 3)
// if you don't have any numbers greater than the number at the given index return -1
function leastLarger(a,i) {
    let arr = []
    // from the loop i checked which are the numbers larger than our number at index
    a.forEach(item => {
        if(item > a[i]){
            arr.push(item)
        }
    })
    // i applied this method to select the minimum number from the numbers larger than number at index
    arr = Math.min(...arr)
    // then i returned the index of the number
    const minNum = a.indexOf(arr)
    return minNum
  }
console.log(leastLarger( [4, 1, 3, 5, 6], 0 ))
  