/*

Anagram : Membandingkan 2 buah string apakah tersimpan/dibentuk dari huruf yg sama atau tidak

- string itu gabisa di sorting, yg bisa  disorting itu array

*/

const checkAnagram = (kata1, kata2) => {
    // code di sini
    return kata1.split('').sort().join('') === kata2.split('').sort().join('')

}

let kata_1 = "kamu";
let kata_2 = "muka";
let kata_3 = "maka";
let kata_4 = "kaum";

console.log(checkAnagram(kata_1, kata_2)); // "kamu" & "muka" => true
console.log(checkAnagram(kata_1, kata_3)); // "kamu" & "maka" => false
console.log(checkAnagram(kata_2, kata_3)); // "muka" & "kaum" => false
console.log(checkAnagram(kata_1, kata_4)); // "kamu" & "kaum" => true


// cara menyamakan string agar jadi huruf kecil semua
let paragraf = 'Artikel ilmiah';
let search = 'arTiKel';

let result = paragraf.toLowerCase().includes( search.toLowerCase())
console.log(result);
