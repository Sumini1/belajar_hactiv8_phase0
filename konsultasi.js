// Soal 1
// Seorang frontend developer diminta untuk membuat fitur like posting pada suatu web artikel
// API untuk mendapatkan list likes dari suatu artikel mereturn data berbentuk array string.

// Contoh response:
// {
//     id:"HJKdsJbjbj124",
//     status:"200",
//     likes:["Jacob", "Alex"]
//     createAt: "Monday 27 Sept 2021"
// }

// Ada pun expected output secara data adalah
// []                                -->  menampilkan "no one like this"
// ["Peter"]                         -->  menampilkan  "Peter like this"
// ["Jacob", "Alex"]                 -->  menampilkan "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  menampilkan "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  menampilkan  "Alex, Jacob and 2 others like this"

// Buatlah function yang menghasilkan/mereturn output sesuai dengan expected output
// Tidak boleh langsung print expected output

// Expected Output :
// no one likes this
// Peter likes this
// Jacob and Alex like this
// Max, John and Mark like this
// Alex, Jacob and 2 others like this

// NOTE : berikan comment penjelasan pada baris kode yang menurut anda penting

/*
// Jawaban:
function likes(names) {
// // write your code here

  if (names.length === 0) {
    return 'no one like this'
  }
  if (names.length === 1) {
    return `${names[0]} like this`
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this `
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }

}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Nina", "Reni"]));
*/

//Soal 2
/*
let row2 = 5;
function a(jumlah) {
  for (let i = 0; i < jumlah; i++) {
    let hasil = "";
    for (let j = 0; j < jumlah; j++) {
      //console.log({i, j})
      if (i % 2 === 0 || i === 0) { // untuk baris genap atau nilai i yg 0
        if ((jumlah + 1) / 2 === i + 1) {
          if (j === 0 || j === jumlah - 1) {
            hasil += "# ";
          } else {
            hasil += "= ";
          }
        } else {
          hasil += "# ";
        }
      } else { // untuk baris ganjil
        if (j === 0 || j === jumlah - 1) {
          hasil += "# ";
        } else {
          hasil += '  '
        }
      }
    }
    console.log(hasil);
  }
}

a(row2);
*/
/*
  OUTPUT:
  # # # # # // 0
  #       # // 1
  # = = = # // 2
  #       # // 3
  # # # # # // 4
*/

let row3 = 5;
/*
  OUTPUT:
  # # # # #
  #   !   #
  #   !   #
  #   !   #
  # # # # #
*/

let row4 = 5;

/*
  OUTPUT:
  # # # # #
  #   !   #
  # = = = #
  #   !   #
  # # # # #
*/

// PATTERN - 2;

let row6 = 5;
/*
  OUTPUT:
  #
  ##
  ###
  ####
  #####
*/

let row7 = 4;
/*
  OUTPUT:
  ####
  ###
  ##
  #
*/

let row8 = 5;
/*
  OUTPUT:
      #
     ##
    ###
   ####
  #####
*/

let row9 = 4;
/*
  OUTPUT:
  ####
   ###
    ##
     #
*/

// Soal 3

// Soal: Hitunglah jumlah masing masing karakter yang terdapat pada kata berikut
// karakter yang berupa huruf kapital maupun huruf kecil dihitung sama
// Contoh:
// Dibimbing di| karakter  contoh  d:2, i: 4 dst.....
// Software  | karakter  contoh   s:1, e: 1 dst.....
// Frontend  | karakter  contoh  f:1, r: 1 dst.....

// Expected Output:
// { d: 2, i: 4, b: 2, m: 1, n: 1, g: 1, ' ': 1 }
// { s: 1, o: 1, f: 1, t: 1, w: 1, a: 1, r: 1, e: 1 }
// { f: 1, r: 1, o: 1, n: 2, t: 1, e: 1, d: 1 }

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting
// Gunakan Object/Array dan juga perulangan
// Jawaban:
// function charCount( word) {
//write your code here
// }
//
// console.log(charCount("Dibimbing di"))
// console.log(charCount("Software"))
// console.log(charCount("Frontend"))

//soal 4

// Soal:
// Pada suatu toko terdapat beberapa kaos kaki
// warna biru dinyatakan dengan 1
// warna hijau dinyatakan dengan 3
// warna hitam dinyatakan dengan 5
// warna merah dinyatakan denga 8
// koleksi kaos kaki pada toko dinyatakan dengan array [1, 1, 3, 3, 5, 5, 5, 5]
// disebut sebagai sepasang kaos kaki apabila kaos kaki tersebut memiliki pasangan
// contoh :
// [1,3,3,3] => pada array ini, ada 1 kaos kaki biru, dan 3 kaos kaki hijau. Maka hasilnya ada sepasang(2) kaos kaki hijau dan masing2 1 kaos kaki biru dan 1 kaos kaki hijau lainnya yang tidak memiliki pasangan

// Expected Output :
// 4
// 2

// Berapa pasang kaos kaki kah yang tersedia?
// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pad baris kode yang dirasa penting
// Clue : Gunakan array, perulangan dan pengkondisian

// Jawaban:
// function sockMerchant(word) {

//write your code here
// }
//
// console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]))
// console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]))
//
//
//
