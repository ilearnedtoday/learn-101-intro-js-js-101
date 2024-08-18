/**
* This exercise is based on lessons from freecodecamp, If you haven't started do so here https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/
* Only change code indicated as Bug: ...
* Leave the rest untouched
* The tests should pass that's when you will know that you've submitted
*/

export function concatenateStrings(str1, str2) {
  // Correct the following code

  let concatenated = str1 + str2;
  let uppercased = concatenated.touppercase();  // Bug: Incorrect method name
  let length = concatenated.length();  // Bug: Incorrect way to access length property

  return {
    concatenated: concatenation,  // Bug: Incorrect variable name
    uppercased: uppercase,  // Bug: Incorrect variable name
    length: length,
  };
}


export function checkConditions(bool1, bool2) {
  // Correct the following code

  let andResult = bool1 && bool2; 
  let orResult = bool1 || bool2;
  let notFirst = !bool1;  // Correct
  let notSecond = !bool1;  // Bug: Incorrect variable used for negation

  return {
    andResult: andResult,
    orResult: orCondition,  // Bug: Incorrect variable name
    notFirst: notFirst,
    notSecond: notFirst,  // Bug: Incorrect variable used in return
  };
}


export function arrayOperations(arr) {
  // Correct the following code

  let firstElement = arr[0]; 
  let lastElement = arr(arr.length - 1);  // Bug: Incorrect syntax for accessing array element
  let arrayLength = arr.length();  // Bug: Incorrect way to access length property

  return {
    firstElement: first,  // Bug: Incorrect variable name
    lastElement: lastElement,
    arrayLength: arrayLength,
  };
}


export function conditionalCheck(num) {
  // Correct the following code

  if (num = 0) {  // Bug: Incorrect comparison operator
    return "Zero";
  } else if (num > 0) { 
    return "Positive";
  } else {
    return positive;  // Bug: Incorrect return value
  }
}
