/*
Buatlah sebuah loop untuk menegecek setiap 3 angka dari 1 - 100 lalu cetak
angka tersebut dan menuliskan apakah bilangan terseebut ganjil  atau genap.

*/
console.log("LOOPING WHILE KE - 1");
let a = 1
while (a <= 20) {
    if (a % 2 === 0) {
        console.log(`${a} - genap`);
    } else {
        console.log(`${a} - ganjil`);
    }
    a += 5
}


 
 console.log("LOOPING WHILE KE -2");
let b = 20
while (b >= 1) {
    if (b % 2 === 0) {
        console.log(`${b} - genap`);
    } else {
        console.log(`${b} - ganjil`);
    }
    b -= 3
}