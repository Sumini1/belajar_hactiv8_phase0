/*
Apa itu nested loop?
Sebuah looping (perulangan) yang berada di dalam looping. Atau sebuah inner loop (loop dalam)
yang berada di dalam tubuh ouuter loop(loop luar)

Flaging -> ngasih tanda

*/

//  Nested for - for loop
/*
for (let a = 0; a <= 3; a++) {
    console.log(a, '<<< ini looping di a');
    
    for (let b = a; b <= 3; b++) {
        console.log(b, '<<< ini looping di b');
        
    }
}
*/

/*
let text = 'I love coding'
let vocal = 'aiueo'
let result = ''

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    switch (text[i]) {
      case "a":
      case "i":
      case "u":
      case "e":
      case "o":
        result += '@'
        break;
      default:
        result += text[i]
    }
}
console.log(result);
*/

// let text = "I love coding";
// let vocal = "aiueo";
// let result = "";
//
// for (let i = 0; i < text.length; i++) {
//console.log(text[i]);
//   let flag = false;
//   for (let j = 0; j < vocal.length; j++) {
// console.log(vocal[j] === text[i]);
// {
//   flag = true;
// }
//   }
//   if (flag === true) {
// result += "@";
//   } else {
// result += text[i];
//   }
// }



/* // Cara nested Looping
let text = "aku suka memasak";
let vocal = "aiueo";
let result = "";

for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
  flag = false;
  for (let j = 0; j < vocal.length; j++) {
    // console.log(vocal[j], 'ini vocal');
    // console.log(vocal[j] === text[i]);
    if (vocal[j] === text[i]) {
      flag = true;
    }
  }
 if (flag === true) {
    result += '@'
 } else {
    result += text[i]
 }
}
console.log(result);
*/



// Cara lebih dinamis menggunakan nested loop
/*
let text = "aku suka memasak";
let vocal = "aiueo";
let result = "";

for (let i = 0; i < text.length; i++) {
   // console.log(text[i]);
    flag = false
   for (let j = 0; j < vocal.length; j++) {
   // console.log(vocal[j]);

    if (vocal[j] === text[i]) {
        flag = true
    }
    
   }
   //console.log(flag, text[i]);
   if (flag === true) {
        result += '@'
   } else {
    result += text[i]
   }
}
console.log(result);
*/


// While for, digunakan pada saat kamu ga tahu berakhirnya kapan

// let a = 0
// while (a < 5) {
//   for (let b = 0; b < 5; b++) {
//   console.log(b, '--> ini looping di b');
    
//   }
//   console.log(a, '-->ini looping dia');
//   a++
// }

