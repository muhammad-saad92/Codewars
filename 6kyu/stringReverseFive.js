// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


function spinWords(string){
    // This is splitting the string into an array
    let arr = string.split(' ')
    let reverseArr = []
    // Running forEach for all the items in array
    arr.forEach((item, index) => {
        // It is checking if any item in array has 5 or more than 5 letters
        if(arr[index].length >= 5){
            // Now we split the array item string into further array, reverse it and joining it again into a string and after it push the item into reverseArr
            reverseArr.push(item.split('').reverse().join(''))
        } else{
            // It just pushes the items which are less 5 characters long
            reverseArr.push(item)
        }
    })
    // After the loop, we join method to join the array into a string
    return(reverseArr.join(' '))
}
//  OR YOU CAN USE THIS SMALLER FUNCTION
function spinWords1(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }
(spinWords('Hey fellow warriors'))