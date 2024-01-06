/* SOAL
    Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak
    angka tersebut dan menuliskan apakah bialngan tersebut ganjil atau genap

*/
// insert your code here
// Menggunakan fr looping
// for (let i = 1; i <= 100; i += 5) {
//   if (i % 2 === 0) {
//     console.log(i + "-" + "Genap");
//   } else if(i % 2 === 1) {
//     console.log(i + "-" + "Ganjil");
//   }
  
// }

// Menggunakan While
let a = 11;
while (a <= 100) {
  if (a % 2 === 1) {
    console.log(`${a} - Ganjil`);
  } else {
    console.log(`${a} - Genap`);
  }
  a += 11;
}







// for (i = 1; i <= 50; i += 5) {
//   if (i % 2 === 1) {
//     console.log(i + "-" + "Ganjil");
//   } else if (i % 2 === 0) {
//     console.log(i + "-" + "Genap");
//   }
// }

// for ( let j = 50; j<= 200; j= j+5 ){
//     if (j % 3 === 0) {
//         console.log(j + "-" + "Faktor 3");
//     }
//     else if ( j % 3 === 1){
//         console.log(j + "-" + "Tidak bisa dibagi 3");
//     }
// }

// for (let r = 100; r < 200 ; r+= 7) {
//     if (r % 8 === 0) {
//         console.log(r);
//     }

// }
