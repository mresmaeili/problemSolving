// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//function reverse(str) {
//  let reversed = '';
//for (let char of str) {
//reversed = char + reversed;
//}
//return reversed;
//}

//module.exports = reverse;

//Solution One
//function reverse(str) {
//const arr = str.split('');
///  arr.reverse();
//return arr.join('');
//}
//module.exports = reverse;

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
module.exports = reverse;
