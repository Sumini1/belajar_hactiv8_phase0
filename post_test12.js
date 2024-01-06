// Soal 4

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
function sockMerchant(word) {
  //write your code here
  // buat objek untuk menghitung berapa banyak setiap jenis kaos kaki
  let sockHitung = {};

  //inisialisasi jumlah pasangan kaos kaki
  let total = 0;

  // loop melalui array kaos kaki
  for (let i = 0; i < word.length; i++) {
    let sock = word[i];

    // jika jenis kaos kaki sudah ada dalam objek sockHitung,tambahkan jumlahnya
    if (sockHitung[sock]) {
      sockHitung[sock]++;

      //jika belum ada , inisialisasi jumlahnya dengan 1
    } else {
      sockHitung[sock] = 1;
    }
  }
  // loop melalui oobject sockHitung
  for (let key in sockHitung) {
    // hitung berapa banyak pasangan kaos kaki dari jenis tertentu yang ada
    total += Math.floor(sockHitung[key] / 2);
  }
  //kembalikan jumlah pasangan kaos kaki
  return total;
}

//
console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]));
console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]));
