/*
I Love Coding
    Objective
        - Mengerti cara menggunakan while
    Direction
        - While
        Pada tugas ini kamu diminta untk melakukan looping daalam javascript
        dengan menggunakan syntax while.
        Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat 
        suatu looping yg menghitung maju dan menghitung mundur. jangan lupa tampilkan di console juga 
        judul "LLOPING WHILE PERTAMA" dan "LOOPING WHILE KEDUA"

*/

//  Contoh While
console.log("LOOPING PERTAMA");
let a = 3;
while (a <= 20) {
  console.log(`${a} - aku suka belajar`);
  a += 3;
}

console.log("LOOPING KEDUA");
let b = 20;
while (b >= 3) {
  console.log(`${b} - belajar meembuat kita berilmu`);
  b -= 3;
}




// Contoh Looping for
console.log('LOOPING PERTAMA');
for (let i = 0; i < 5; i++) {
   console.log(`${i}  - I love Coding`);
    
}

console.log('LOOPING KEDUA');
for (let j = 5; j >= 0; j--) {
   console.log(`${j} - i will become frontend development`);
    
}