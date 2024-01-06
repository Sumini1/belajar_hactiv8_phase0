/* 

Buatlah fungsi untuk menghitung perolehan medali dari setiap negara 
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

function perolehan_medali(arr_medali) {
  //write your code here
  let perolehan = {};

  // iterasi melalui array medali
  for (let i = 0; i < arr_medali.length; i++) {
    // mendapatkan negara dan jenis medali dari setiap entri
    let negara = arr_medali[i][0];
    let medali = arr_medali[i][1];

    // jika negara belum ada dalam objek perolehan, inisialisasi dg 0 emas, 0 perak,  dan 0 perunggu
    if (!perolehan[negara]) {
      perolehan[negara] = { emas: 0, perak: 0, perunggu: 0 };
    }
    // Menambahkan medali yg sesuai jenisnya ke negara yg bersangkutan
    if (medali === "emas") {
      perolehan[negara].emas++;
    } else if (medali === "perak") {
      perolehan[negara].perak++;
    } else if (medali === "perunggu") {
      perolehan[negara].perunggu++;
    }
  }
  // mengonversi objek perolehan menjadi array untuk output yg diinginkan
  let result = [];
  for (let negara in perolehan) {
    result.push({
      negara: negara,
      emas: perolehan[negara].emas,
      perak: perolehan[negara].perak,
      perunggu: perolehan[negara].perunggu,
    });
  }
  return result;
}

let data_medali = [
  ["Indonesia", "emas"],
  ["India", "perak"],
  ["Korea Selatan", "emas"],
  ["India", "perak"],
  ["India", "emas"],
  ["Indonesia", "perak"],
  ["Indonesia", "emas"],
  ["India", "perunggu"],
];

console.log(perolehan_medali(data_medali));

/* 

Expected Output:
[
    { negara: "Indonesia", emas: 2, perak: 1, perunggu: 0 },
    { negara: "India", emas: 1, perak: 2, perunggu: 1 },
    { negara: "Korea Selatan", emas: 1, perak: 0, perunggu: 0 },
]

*/
