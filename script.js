function letterCombinations(input_digit) {
  //Complete the function
  if(input_digit.length === 0){
    return [];
  }

  const digitMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const combinations = [];

  function generateCombinations(current, index){

    if(index === input_digit.length){
      combinations.push(current);
      return;
    }

    const letters = digitMap[input_digit[index]];

    for(let i=0; i < letters.length; i++){
      generateCombinations(current + letters[i], index+1);
    }
    
  } 

  generateCombinations('', 0);

  return combinations.sort();
  
}

module.exports = letterCombinations;
