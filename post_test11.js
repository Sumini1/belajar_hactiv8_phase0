//Soal 3

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
function charCount(word) {
  //write your code here
  // buat objek kosong untuk menyimpan jumlah katrakter
  let newChar = {};

  // ubah semua karakter menjadi huruf kecil
  word = word.toLowerCase();
  // loop melalui setiap karakter dalam kata
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
// cek apakah karakter merupakan karakter huruf atau spasi
    if (char.match(word[i])) {
        //jika  karakter sudah ada dalam objek newChar,tambahkan jumlahnya
      if (newChar[char]) {
        newChar[char]++;
      } else {
        // jika karakter belum ada dalam objek newChar, inisialisasi jumlahnya dengan satu
        newChar[char] = 1;
      }
    }
  }
  //kembalikan objek yg berisi jumlah karakter  
  return newChar;
}
//
console.log(charCount("Dibimbing di"))
console.log(charCount("Software"))
console.log(charCount("Frontend"))