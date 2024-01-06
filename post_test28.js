
/* 

Buatlah fungsi untuk mencari pasangan terbesar (dua angka yang berhimpitan yang nilainya paling besar)

Contoh 1 :
input : 641573
output: 73

Contoh 2 :
input : 12783456
output: 83
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

function pasanganTerbesar(number){
  // Mengubah  angka menjadi string
  const numberStr = String(number);

  // inisialisasi variabel untuk menyiompan pasangan terbesar
  let maxPair = 0;

  //loop untuk mengecek pasangan2 angka
  for (let i = 0; i < numberStr.length; i++) {
    // menggabungkan dua digit berurutan menjadi angka

    const pair = Number(numberStr[i] + numberStr[i + 1]);

    // membandingkan dengan pasangan terbesar sebelumnya
    if (pair > maxPair) {
        maxPair = pair
    }
    
  }
  return maxPair;
}

console.log(pasanganTerbesar(8782931))

// Expected Output: 93


