/*
Diberikan sebuah variable kata bertipe string

--> Buatlah program dimana program tersebut akan menghitung jumlah karakter
    x dan jumlah karakter o. 
    Setelah perhitungan selesai maka tampilkan true jika jumlah karakter o 
    dan x sama dan false jika tidak.

    Contoh 1
    var kata = 'xoxoxo'
    maka outputnya adalah true

    contoh  2:
    var kata = oxooxox
    maka output adalah false

*/


let kata1 = 'xoxoxo';
//let kata2 = 'oxooxox';

let jumlahX = 0;
let jumlahO = 0;

for (let i = 0; i < kata1.length; i++) {
  if (kata1[i] === 'x') {
    jumlahX++
  }
  if (kata1[i] === 'o') {
    jumlahO++
  }
    
}
console.log(jumlahX, jumlahO);
// if (!jumlahX && !jumlahO) { //bandingkan true atau false nya
//     console.log(false);
// } else if(jumlahX === jumlahX) {
// console.log(true);
// } else {
//     console.log(false);
// }
if (jumlahX === jumlahO) {
    console.log(true);
} else {
    console.log(false);
}
    
