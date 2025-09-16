// We all love the future president (or Führer or duce or sōtō as he could find them more fitting) donald trump, but we might fear that some of his many fans like John Miller or John Barron are not making him justice, sounding too much like their (and our as well, of course!) hero and thus risking to compromise him.

// For this reason we need to create a function to detect the original and unique rhythm of our beloved leader, typically having a lot of extra vowels, all ready to fight the establishment.

// The index is calculated based on how many vowels are repeated (case-insensitively) more than once in a row and dividing them by the total number of vowels a petty enemy of America would use.

// For example:
// "I will build a huge wall" --> 0 
// --> definitely not our trump: 0 on the trump score

// "HUUUUUGEEEE WAAAAAALL" --> 4
// --> 4 extra "U", 3 extra "E" and 5 extra "A" on 3 different vowels
// --> groups: 12/3 make for a trumpy trumping score of 4: not bad at all!

function trumpDetector(trumpySpeech){
    const splitSpeech = trumpySpeech.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let baseVowelCount = 0;
    
    const countObject = {};
    
    for (let i = 0; i < splitSpeech.length; i++) {
      const char = splitSpeech[i].toLowerCase();
      const nextChar =  splitSpeech[i + 1] ? splitSpeech[i + 1].toLowerCase() : null;
      
      if(vowels.includes(char)) {
        if(char === nextChar) {
          if(typeof countObject[char] === 'number') {
            countObject[char] = ++countObject[char];
          } else {
            countObject[char] = 1;
          }
        } else {
          baseVowelCount++;
        }
      }
    }
    
    if(!Object.values(countObject).length) return 0;
    
    return +(Object.values(countObject).reduce((a, b) => a + b) / baseVowelCount).toFixed(2);
  }