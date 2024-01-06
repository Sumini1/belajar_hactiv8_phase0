/*
    DIRECTION
    - Lanjutkan kode berikut hingga dapat menampilkan nilai/output
    yang diminta. Buatlah sebuah  fungsi bernama shoutOut(). yang 
    mengembalikan nilai berupa 'Hallo Function'. yang kemudian akan
    ditampilkan di consolee.
    
*/



// function shoutOut() {
//     return 'Halo Function'
// }
// console.log('Halo function');



// TASK CASES 2
// // CalculateMultiply
function calculateMultiply(num1, num2) {
    let total = num1 * num2;
    return total
}

let num1 = 6;
let num2 = 4;

let hasilPerkalian = calculateMultiply(num1, num2)
console.log(hasilPerkalian);


// TASK 3
/*
    Direction
    - Lanjutan kodee berikut ini hngga dapat menampilkan nilai/output
    yang diminta. Buatlah sebuah fungsi bernama prosessSentence().
    yang akan memproses seluruh parametter yg diinput.

    Misal
    --> Nama saya [Name], umur sayaa [Age] tahun, alamat saya di [Address], 
    dan saya punya hobby yaitu [hobby]

*/

function prosessSentence(name, age, address, hobby) {
    return ` Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}
    dan saya punya hobby yaitu ${hobby}`;
}

console.log(prosessSentence("sumini", 30, "Bekasi", "Belajar"));