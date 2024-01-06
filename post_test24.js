// soal
// buat segitiga siku-siku dari angka 1 ke n
// manfaatkan metode perulangan secara increment & rekursif
// gunakan fungsi cetak untuk menampilkan segitiga

// Input : 5
/* Expected output :
1
1 2
1 2 3
1 2 3 4 
1 2 3 4 5
*/

// Tidak boleh langsung print expected output
// NOTE : berikan comment penjelasan pada baris kode yang dirasa penting

// jawaban
const cetakSegitiga = (baris) => {

// loop untuk mencetak angka dari 1 sampai baris
  for (let kolom = 1; kolom <= baris; kolom++) {
    process.stdout.write(`${kolom} `); // menampilkan angka pada baris tsb
  }
  console.log(); // pindah baris berikutnya setelah baris selesai
};

// fungsi untuk menghaslkan segitiga siku-siku
const generatePyramid = (n) => {
  // write your code here
  // loop untuk setiap baris dari 1 hingga n
  for (let i = 1; i <= n; i++) {
    cetakSegitiga(i);
  }
};

generatePyramid(5);
