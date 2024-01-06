function urutkanAbjad(str) {
  // you can only write your code here!
  let total = "";
  for (let i = str.length - 1; i >= 0; i--) {
    total += str[i];
    console.log(str[i]);
  }
  return str;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'

//do not change the code below
//module.exports = urutkanAbjad;
 