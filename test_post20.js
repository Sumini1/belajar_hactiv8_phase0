// soal:
// Tidak boleh langsung print expected output
// carilah string paling panjang dari array berikut

const arr = [
  "this random text.",
  "He drank life before spitting it out.",
  "There's a reason that roses have thorns.",
  "He waited for the stop sign to turn to a go sign.",
  "Karen believed all.",
];
// expected output berupa string :
// He waited for the stop sign to turn to a go sign

// NOTE : Berikan comment penjelasan fungsi kode pada baris kode yang dirasa penting

// jawaban
const longestString = (arr) => {
  // write your code here
  let longest = ""; // inisialisasi string terpanjang dengan string kosong
  for (const str of arr) {
    if (str.length > longest.length) {
      longest = str; // jikaa panjang string saat ini lebih panjang, maka perbaharui nilai terpanjang
    }
  }

  return longest; // mengembalikan string terpanjang  setelah iterasi selesaai
};

console.log(longestString(arr));
