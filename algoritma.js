/*
 Variable = untk menyimpan nilai, merepresentasikan sebuah nilai
 | let haga + 1000; // nilai 1000 direpresentasikan oleh harga untuk
 olah / modifikasi nilainya

 Dinamis dan Flexibel
*/


/*
let permen = 1200;
let apel = 1600;

console.log("Mart");
console.log("permen : " + permen);
console.log("Apel : " + apel);
console.log("Total belanja: " + (permen + apel));// contoh Concatulation
console.log(`Total belanja :${permen + apel} `); //Contoh templet literal
//concatulation (""))adalah penjumlahan antar data string
//Template literal (``)= penulisan spesial dimana kita bisa menyisipkan
//suatu variable ke dalam sebuah kalimat text (string)

*/

/*
let textTampil = "User" ; // User telah membeli ayam
let beliAyam = true;
let beliTempe = false;
    if (beliAyam) {
        textTampil += " telah beli ayam"
    } else {
        textTampil += " tidak membeli ayam" // textTampil = textTampil + "tidak membeli tempe"
    }

    if (beliTempe) {
      textTampil += " telah beli tempe";
    } else {
      textTampil += " tidak membeli tempe";
    }


console.log(textTampil);

*/

//let kalimat = "Hallo";
//console.log(kalimat -  "Hallo"); // angka selain concatanation ga ada jadi hasilnya NaN(Not a Number)





//? length and substring
/*
length itu built in propetrties yg menghasil panjang dari sebuah
string tsb
*/

// let str = "Hello Sumini"; // .length -> panjangnya ada 5 huruf, termasuk spasi juga dihitung kee dalamnya
// console.log(str.length);

// /*
// Substring -> Bisa kita akses masing-masing huruf menggunakan sebuah syntax
// [<index>]
// index -> urutan hitung komputer, mulai 0
// */

// console.log(str[9]);
// let helloSumini = str[8] + str[3] + str[1]; // cara mengambil huruf tertentu yg kita mau dalam string
// console.log(helloSumini);



//? Empty string ?
// let str = "";

// console.log(str.length);

// if (str === "") { //false
//     console.log("Kosong");
// }


// Cara mengimplementasi algoritma dan pseudocode
/*
input -> let detik = 88

output -> maka output adalah 1:28
Menit : detik

*/

/* Algoritmanya
1. Cek input, dia menerima tipe dat number, angka detiknya
2. Outputnya -> Menit : Detik, kita dari detik harus tau dia menjadi berapa 
menit dan sisa detik berapa
3. Cari sisa detikterlebih dahulu agar pembagian menit bulat
5. karena 1 menit adalah 60 detik, kita bisa bagi untuk mendapat menit
6. kalau menitnya sudah dapat, kita kita bisa hitung sisa detiknya
7. Tampilin

**Pseudocode
STORE detik WITH ANY NUMBER
//STORE sisaDetik AS NUMBER

//CALCULATE detik MODULUS 60
//SET sisaDetik WITH CALCULATION RESULT

STORE sisaDetik WITH detik MODUKUS 60
CALCULATE detik MINUS sisaDetik
STORE menit WITH CALCULATION RESULT DIVIDE 60

DISPLAY menit CONCAT WITH ":" CONCAT WITH sisaDetik

*/

// let detik = 1400
// // varable bantuan


//  let sisaDetik = detik % 60;
//  let menit = (detik - sisaDetik) / 60;
// console.log(`${menit}:  ${sisaDetik}`);




//? Kapan kita harus pake Switch dan If?
/*
If ketika kita perlu perbandingan kompkek -> ketika menggunakan operator,
comparison maupun logical operation
Switch, ketika sebuah variable itu memiliki banyak kemungkinan / alternatif
*/
// let lampu = "Merah";

// switch (lampu) {
//   case "Merah":
//         break;
// }

// let lampu2 = "Hijau";
// if (lampu === "Merah" && lampu2 === "Hijau") {
//     console.log("Jalur 2 maju");
// }


// let angka = 10;
// let str = "Hello";

// // ? Whai is this? += (x =+ y | x = x + y)  ?
// // ini hanya berlaku untuk string
// angka += 2;
// angka -= 5;
// angka *= 4;
// angka %= 7

// str += "Hello";

// console.log(angka, str);



//Contoh Soal 1
/* * TOTAL GAJI BERSIH
diketahui dalam sebuah perusahaan Z, total bersih gaji karyawan 
dihitung dari gaji pokok sesuai posisi, ditambahkan dengan tunjangan karyawan
dan dikurangi angsuran hutang ke perusahaan

Setiap posisi memiliki gaji pokok yang berbeda

- Frontend Developer = 11_0000_000
- Backend dveloper = 10_000_000

*Tunjangan karyawan hanya diberikan kepada karyawan yang sudah menikah
sebesar 300_000
*Apabila karyawan sudah memiliki anak, maka per 1 anak diberikan tunjangan
sebesar 100_000
*Angsuran karyawan sebesar 150_000

! Buat algoritma yang akan menentukan total gaji bersih karyawan yang
diterima karyawan setelah dikurangi angsuran hutang, dan anlisa variabel apa
saja yang dibutuhkan

! Setelah membuat algoitma, buat program berdasarkan algoritma yang telah dibuat

! Expected output
*Gaji bersih paiman adalah Rp 10.350.000,00


*/
//inputan
// Backend developer, paiman, manikah, 2 anak

// Algoritma
/*
1. Input
  - Nama
  - Posisi karyawan -> Gaji pokok
  - status nikah -> 300 rb
        -> punya anak per anak 100 rb
- Angsuran hutang 150 rb
2. Output -> Teks gaji bersih dengan tipe data string
    - Gaji bersih Paiman adalah Rp 10.350.000,00
3. Direction / Permintaan / Proses
    - Cek posisi untuk mengetahui gaji pokok
    - Cek status pernikahan jika menikah mendapat tunjangan
    - Cek status anak jika punya anak mendapat tunjangan
    - Untuk gaji bersih jangan lupa dikurang dengan angsuran

*/
    // Inputan
    let nama = "Paiman";
    let posisi = "Backend developer";
    let statusMenikah = true;
    let anak = 2;

    // Bantuan
    let gajiBersih = 0;
    let gajiPokok = 0;
    let tunjangan = 0;
    const angsuran = 150_000;


    // Cek Posisi
    if (posisi === "Frontend developer") {
      gajiPokok = 11_000_000
    } else  if(posisi === "Backend developer") {
      gajiPokok = 10_000_000;
    }
//console.log(gajiPokok);
 if (statusMenikah) {
    tunjangan += 300_000;
 }
 if (anak) {
    tunjangan += anak * 100_000;
 }

 gajiBersih = (gajiPokok + tunjangan) - angsuran;
 console.log(`Gaji bersih ${nama} adalah Rp ${gajiBersih}`);


 // Contoh soal 2
 /*
    Generasi XYZ

    Berikut adalah beberapa istilah generasi berdasarkan tahun kelahirannya:

    - Babby boomer, kelahiran 1944 s.d 1964
    - Generasi X, kelahiran 1965 s.d 1979
    - Generasi Y (Millenials), kelahiran 1980 s.d 1994
    - Generasi Z, kelahiran 1995 s.d 2015

    ! Buat algoritma untuk mencetak nama user yg di inputkan beserta kategori
    geenerasinya berdasarkan tahun kelahirannya (seperti output yang
      diharapkan). Analisa variabel apa saja yang dibutuhkan
    ! Setelah membuat algoritma, buat program berdasarkan algoritma yang telah dibuat

    ! Expected output
    "Generasi X, kalian lahir di tahun 1989 dan anda termasuk Generasi Y (Milenials)"

 */

    // Input
    // let name = "Nico Robin";
    // let tahunLahir = 1989;

    // Output
    //"Nico Robin, anda lahir di tahun 1989 dan anda termasuk Generasi Y (Milenials)";

      // Algoritma
      /*
      1. Input
          - Nama
          - Tahun lahir
      2. Output
          "Nico Robin, anda lahir di tahun 1989 dan anda termasuk Generasi Y (Milenials)";
      3. Prosesnya
          - Cek tahun lahir, tergantung kelahirannya dia memiliki generasi yang berbeda

      */

          // Inputan
//           let name = "Nico Robin";
//           let tahunLahir = 1989;

//           // Bantuan
//           let generasi = "";

//           if (tahunLahir >= 1944 && tahunLahir <= 1964) {
//             generasi = "Baby boomer"
//           } else if (tahunLahir >= 1965 && tahunLahir <= 1979) {
//             generasi = "Generasi X";
//           } else if (tahunLahir >= 1980 && tahunLahir <= 1994) {
//             generasi = "Generasi Y (Millenials)";
//           } else if (tahunLahir >= 1995 && tahunLahir <= 2015) {
//             generasi = "Generasi Z"
//           }
//  console.log(
//    `${name}, anda lahir di tahun ${tahunLahir} dan anda termasuk ${generasi})`
//  );