// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

// For example:

// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'


// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'


// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'
// If the feeling can be formed once - plus one to the answer.

// If the feeling can be formed several times from different letters - plus one to the answer.

function countFeelings(string, feelings) {
    let result = 0;
  
    for (let feeling of feelings) {
      let strArr = string.split(''); // copy of string letters
      let canForm = true;
  
      for (let ch of feeling) {
        let idx = strArr.indexOf(ch);
        if (idx === -1) {
          canForm = false;
          break;
        } else {
          strArr.splice(idx, 1); // use the letter once
        }
      }
  
      if (canForm) result++;
    }
  
    return `${result} feeling${result !== 1 ? 's' : ''}.`;
  }
  