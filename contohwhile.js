/*
Apa itu iterasi ?
 - perulangan

 Kapan menggunakan iterasi ?
 - membutuhkan suatu proses atau metode yanhg digunakan secara 
   berulangan-ulang

Struktur iterasi
- inisialisasi - Batas(Kondisi)
- Eksekusi iterasi

Pseudocode
for i from 0 to 9 by 1
    DISPLAY 'Hello'
END FOR

Cara membuat iterasi
- for (var i = 0; i < 10; i++)
    Aksi



*/


// contoh While loop
//let  x = 0;
// while (x < 5) {
    // console.log(`${x}  Mari belajar bersama kami`);
    // x++
// }


//while itu, cek kobdisinya dulu, kalau true baru akan dijalankan
// let sudahCapek = true;  //while digunakan ketika kita tidak mengetahui sampai berapanya kita harus ngulang. 

// while (sudahCapek === false) {
    // console.log("push up");
// }

        // let aku = Math.ceil(Math.random() * 5);
        // console.log(aku);
        // if (aku === 5) {
            // sudahCapek = true;
        // }
// 
//Contoh do while
// 
// let kamu = 5; // biasa dipake buat game. // apapun kondisinya dia akan jalankan satu kali dulu, baru di cek apakah sesuai atau tidak
// do {
    // kamu = Math.ceil(Math.random() * 5);
    // console.log(kamu);
// } while (kamu !== 5);
// 

let str = "Hello Jony"
console.log(str.length);


let angka = 50;
for (let i = 0; i < angka; i++) {
    console.log(i);
    
}