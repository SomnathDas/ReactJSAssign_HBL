// To find the number of characters of the same letter
const countChar = (input) => {
  // A Map Object
  let charMap = new Map();
  // Removing whitespaces and capitalising all the characters of the string
  let cleanInput = input.replace(" ", "").toUpperCase();
  // Looping through each character present in the string
  for (let i = 0; i < cleanInput.length; i++) {
    // If charMap has that particular character
    if (charMap.has(cleanInput[i])) {
      // Setting the charMap with respective key and updated value
      charMap.set(cleanInput[i], charMap.get(cleanInput[i]) + 1);
    } else {
      // Else setting new key,value pair in charMap
      charMap.set(cleanInput[i], 1);
    }
  }
  // Returning charMap
  return charMap;
};
