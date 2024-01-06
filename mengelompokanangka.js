/* 
    Diberikan sebuah function mengelompoakan angka yang menerim satu 
    parameter berupa array yg berisi angka-angka. Function ini akan 
    mengembalikan multidimensi array, dmana array tersebut berisikan
    3 kategori/kelompok.

    Tiap angka harus masuk ke dalam satu kelompok aja
    - diutamakan adalah masuk ke kelompok kelipatan 3, sisanya baru ke genap atau ganjil
    - kelompok pertama (baris pertama) merupakan angka-angka genap
    - kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
    - kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
    Satu angka hanya masuk ke dalam satu kelompok.


*/

/* jawaban rizki

function mengelompokkanAngka(arr) {
  // write your code here
  let penampung1 = []
  let penampung2 = []
  let penampung3 = []
  for ( i = 0; i<arr.length;i++) {
    //console.log(arr[i]);
    if ( arr[i] % 3 === 0){
      penampung1.push(arr[i])
      //return penampung1
    } else if ( arr[i] % 2 === 0){
      penampung2.push(arr[i])
      //return penampung2
    } else if ( arr[i % 2 === 1]){
      penampung3.push(arr[i])
      //return penampung3
    }
  }
  //console.log(penampung1,penampung2,penampung3);
  return [penampung2,penampung3,penampung1]
  //return {penampung1, penampung2,penampung3}
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
 console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
 console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
 console.log(mengelompokkanAngka([])); // [ [], [], [] ]

*/

function mengelompokkanAngka(arr) {
  let ganjil = [];
  let genap = [];
  let kelipatanTiga = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      kelipatanTiga.push(arr[i]);
    } else if (arr[i] % 2 === 1) {
      ganjil.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      genap.push(arr[i]);
    }
  }
  result.push(kelipatanTiga, ganjil, genap);
  return result;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
