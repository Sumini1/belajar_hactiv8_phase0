/*
  Function tersebut menerima 2 parameter 
  - Parameter pertama bernama pesan bertipe array 
  - Parameter kedua bersama coloum bertipe number 
  Function akan mengembalikan array multidimensin yang mengatur  
  tempat duduk berdasarkan jumlah coloum. Dimana jika orang tidak cukup untuk mengisi 
  coloum teersebut maka diisi dengan value 'Kursi Kosong'
  
  ASUMSI
  -variabel coloumn harus minimal bernilai 1, jika kurang dari itu 
  maka tuliskan 'Invalid Number' 

*/

/* jawaban rizki

function sittingArrangement(person, column) {
  // Your code here
  if (column === 0) {
    return "Invalid Data";
  }
  let index = 0;
  let meja = Math.ceil(person.length / column);
  let result = [];
  for (let i = 0; i < meja; i++) {
    let arr = [];
    for (let j = 0; j < column; j++) {
      if (person[index] === undefined) {
        arr.push("kursi kosong");
      } else {
        arr.push(person[index]);
      }
      index++;
    }
    result.push(arr);
  }
  return result;
}

//DRIVER CODE

console.log(sittingArrangement(["A", "B", "C"], 0)); //Invalid number
console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement(["Yosia", "Asrawi", "Andru"], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(
  sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4)
);
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]

*/

/*
function sittingArrangement(person, coloumn) {
  if (coloumn < 1) {
    return "Invailed Number";
  }
  let result = [];
  let temp = [];
  let count = 0;
  for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < coloumn; j++) {
      if (person[i + j + count]) {
        temp.push(person[i + j + count]);
      } else {
        temp.push("Kursi kosong");
      }
    }
    count++;
    if (!person[i + coloumn]) {
      break;
    }
    result.push(temp);
    temp = [];
  }

  // let no = 0;
  // while (true) {
  //   for (let i = 0; i < coloumn; i++) {
  //     if (!person[no]) {
  //       temp.push("Kursi Kosong");
  //     } else {
  //       temp.push(person[no]);
  //     }
  //     no++;
  //   }
  //   result.push(temp);
  //   temp = [];
  //   if (!person[no]) {
  //     break;
  //   }
  // }
  return result;
}

//DRIVER CODE

//console.log(sittingArrangement(["A", "B", "C"], 0)); //Invalid number
console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
//console.log(sittingArrangement(["Yosia", "Asrawi", "Andru"], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
//console.log(
//   sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4)
// );
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]

*/

// soal 2

// Soal:
// You've arrived at a carnival and head straight for the duck shooting tent. Why wouldn't you?
// You will be given a set amount of ammo, and an aim rating of between 1 and 0. No your aim is not always perfect
// Anyway your task is to calculate how many successful shots you will be able to make given the available ammo and your aim score,
// then return a string representing the pool of ducks, with those ducks shot marked with 'X' and those that survived left unchanged.

// You will always shoot left to right.

// Example of start and end duck string with two successful shots:
// Current duck condition : |~~~~~22~2~~~~~|
// Then you'll do the shot twice with aim = 1 (perfect aim)..
// Result of the ducks after the shot : |~~~~~XX~2~~~~~|
// With perfect aim, the ducks exactly down by 2 because we only have 2 ammo

// Example of start and end duck string with two shots with aim value 0.5 :
// Current duck condition : |~~~~~22~2~~~~~|
// Then you'll do the shot twice with aim = 0.5 ..
// Result of the ducks after the shot : |~~~~~X2~2~~~~~|
// With aim value 0.5, the ducks only down by 1

// All inputs will be correct type and never empty

// aim
// 4 * 0.64 = 2,...
// 9 * 0.22 = 1,8...
// 6 * 0.4 =  2,4

// Program Example :
// 1. input : duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|')
//    output : '|~~X~~~X2~2~~22~2~~~~2~~~|'
// 2. input : duckShoot(9, 0.22, '|~~~~~~~2~2~~~|')
//    output : '|~~~~~~~X~2~~~|'
// 3. input : duckShoot(6, 0.4, '|~~~~~22~2~~~~~|')
//    output : '|~~~~~XX~2~~~~~|'

// Expected Output
// |~~X~~~X2~2~~22~2~~~~2~~~|
// |~~~~~~~X~2~~~|
// |~~~~~XX~2~~~~~|

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : hasil perkalian dibulatkan ke bawah, manfaatkan perulangan

// // Jawaban:
function duckShoot(ammo, aim, ducks){
 // write your code here
 console.log(Math.floor(ammo * aim));
 let result = "";
 let hit = Math.floor(ammo * aim)
for (let i = 0; i < ducks.length; i++) {
  if (ducks.charAt(i) === '2') {
    if (hit > 0) {
      result += '2'
      hit--
    } else {
      result += ducks.charAt(i);
    }
  } else {
    result += ducks.charAt(i);
  }
  
}
return result
}


console.log(duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|'));
console.log(duckShoot(9, 0.22, '|~~~~~~~2~2~~~|'));
console.log(duckShoot(6, 0.4, '|~~~~~22~2~~~~~|'));
