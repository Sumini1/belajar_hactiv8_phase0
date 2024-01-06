/*
RESTRICTION
- tidak bolrh menggunakan built in function apapun

DIRECTION
-  Diberikan function attack(). damageCalculation().
- Function damageCalculation() menerima 2 parameter. numberOfAttacks.
dan damagePerAttack
- Function attack() akan menerima 1 parameter yaitu damage

Gunakan fuunction damageCalculation() untuk menghitung damage yang diterma
dan function attack() untuk mensimulasikan setiap attack dengan rumus damage -2 disetiap attack

Contoh 
damageCalculation(3, 10) akan mengembalikan nilai24. Karena attack akan
dikurangi 2. maka setiap attack akan menghasilkan damage 8

*/

/* jawaban rizki

function attack(damage) {
  // Code disini
  return damage - 2
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // Code disini
let result = 0;
result = numberOfAttacks * attack(damagePerAttack)
// 9 * -2(25)
return result
}


// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90

*/


/* jawaban sumini
function attack(damage) {
  // code here
  return damage - 2; //  contooh tes case ke-1 --> 25-2
}
function damageCalculation(numberOfAttacks, damagePerAttack) {
  // code here
  return numberOfAttacks * attack(damagePerAttack);
  // numberOfAttacks = 9
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
*/
function attack(damage) {
  return damage - 2;
}
function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack)
}


// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90