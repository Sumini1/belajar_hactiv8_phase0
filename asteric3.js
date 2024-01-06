/*
   --> Menyusun Barisan tangga bintang dengan nested looping
    Pada tugas ini kamu dimunta untuk melakukan looping dalam javascript
    untuk menampilkan di console barisan asteric (bintang) dalam
    bentuk tangga. Setiap baris memiliki jumlah simbool '*' sesuai 
    dengan nomor baris. Baris pertama, hanya ada satu bintang.
    Baris kedua, dua bintang, baris ketiga, tiga bintang, dan seterusnya.
    Manfaatkan 'nested loop' atau loop di dalam loop untuk menyelesaikan kasus ini.

    Skeleton Code 
    let rows3; // input the number of row

    // do loop to display asteric in the console

*/

/*
     Output
     *
     **
     ***
     ****
     *****
*/

// 0 1 2 3 4
let rows3 = 5



for (let i = 0; i < rows3; i++) {
    let str = "";
for (let j = 0; j < i + 1; j++) {
  str += "*";
}
console.log(str);
}

