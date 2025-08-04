// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
    let arr = string.split(' ')
    console.log(arr[2].length)
    let itemsRet = arr.forEach((item, index) => {
        if(arr[index].length >= 5){
            console.log(item.split('').reverse().join(''))
        } else{
            console.log(item)
        }
    })

}

(spinWords('Hey fellow warriors'))