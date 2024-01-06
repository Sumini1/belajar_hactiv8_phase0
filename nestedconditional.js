/*
CASE
kegiatan seorang pengembara dapat dapat ditentukan berdasarkan 
relasi antara rasa lapar dan uang yg dimilikinya saat itu.

Relasi tersebut adalah sbb:
- Jika lapar, maka pengembara akan:
    - makan : jika memilik uang
    - Tidur : jika tidak memiliki uang

- jika tidak lapa, maka pengembara akan:
    - minum jus : jika memiliki uang
    - minum air : jika tidak memiliki uang 
*/

// var lapar = true
// var uang = true

// if (lapar) {
//     if (uang) {
//         console.log("makan")
//     } else {
//         console.log("tidur")
//     }
// } else {
//     if (uang) {
//         console.log("minum jus")
//     } else {
//         console.log("minum air")
//     }
// }
// console.log(lapar);

var belajar = true
var semangat = true

if (belajar) {
    if (semangat) {
        console.log("tekun, insya Allah berhasil")
    } else {
        console.log("Bingung, keteteran")
    }
} else {
    if (semangat) {
        console.log("Semoga Allah mudahkan, Small steps are better than no steps")
    } else {
        console.log("say good bye, dan tertinggal")
    }
}
console.log(belajar);
console.log(`${semangat} - Semoga Allah mudahkan`);


