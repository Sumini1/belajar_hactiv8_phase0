/*
1. Menyusun Barisan Bintang

Pada tugas ini kamu diminta untuk melakukan looping dalam javascript 
untuk menampilkan console barisan asteric (bintang). Setiap baris memiliki
satu simbol'*'

Skeleton code 
let rowsl ; // input the numbers of rows

// do loops to display asteriks in the console
*/
// rows1 = 5
// for (let i = 0; i < 5; i++) {
//   console.log("*");
// }


/*
let rows2 = 5

// mengulangi proses di dalamnya sebanyak angka yg terdapat di rows2
for (let j = 0; j < rows2; j++) {
  // proses membuat 1 baris bintang dimana banyak bintangnya menyesuaikan
  // angka yg terdapat di rows2
  let str = "";
  
  for (let i = 0; i < rows2; i++) {
    str += "*";
  }
console.log(str);
}
*/


let rows2 = 5

for (let j = 0; j < rows2; j++) {
  let str = "";

  for (let i = 0; i < rows2; i++) {
    str += "*";
  }
 
   console.log(str);
 }
