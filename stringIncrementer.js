// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  let arr = strng.split('');
  let alphabetArr = [];
  let numArr = [];
  let completedArr;

  // Check if last character is a number
  if (!isNaN(Number(arr[arr.length - 1]))) {

    // Instead of splitting all, we separate only trailing numbers
    let i = arr.length - 1;

    // Collect digits from the end
    while (i >= 0 && !isNaN(Number(arr[i]))) {
      numArr.unshift(arr[i]); // build number from the end
      i--;
    }

    // Everything before the number part is alphabets/symbols
    alphabetArr = arr.slice(0, i + 1);

    // Save the original length of numeric part
    let originalLength = numArr.length;

    // Increment the numeric part
    let num = Number(numArr.join('')) + 1;

    // Convert back to string
    let numStr = String(num);

    // Preserve leading zeros if needed
    while (numStr.length < originalLength) {
      numStr = "0" + numStr;
    }

    // Combine parts
    completedArr = alphabetArr.join('') + numStr;

  } else {
    // If string ends with no number, just add "1"
    completedArr = strng + "1";
  }

  return completedArr;
}


  console.log(incrementString('foo042'))