/**
 * @name toWords
 * @description Converts a number into words.
 * @param number The number to convert.
 * @returns A string representing the number in words.
 *
 * @example
 * const words = toWords(123); //one hundred twenty three
 * 
 */

function numberToWords(number: number): string {
  // If the number is less than 10, return the word for that number.
  if (number < 10) {
    return ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][number];
  }

  // If the number is less than 20, return the word for the teens.
  if (number < 20) {
    return ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"][number - 10];
  }

  // If the number is less than 100, return the word for the tens place plus the word for the ones place.
  if (number < 100) {
    const tens = Math.floor(number / 10);
    const ones = number % 10;
    return numberToWords(tens) + " " + numberToWords(ones);
  }

  // If the number is less than 1000, return the word for the hundreds place plus the word for the tens and ones places.
  if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const tensAndOnes = number % 100;
    return numberToWords(hundreds) + " hundred " + numberToWords(tensAndOnes);
  }

  // If the number is greater than 1000, recursively convert the number to words.
  return numberToWords(Math.floor(number / 1000)) + " thousand " + numberToWords(number % 1000);
}


export default numberToWords;
