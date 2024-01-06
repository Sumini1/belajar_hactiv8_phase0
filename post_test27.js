/* 

Buatlah fungsi kalkulasi poin

Input merupakan sebuah array of number yang di representasikan sebagai variable arr dan terdiri dari N yang merupakan panjang array yang akan diikuti element array di bawahnya

findTotal merupakan sebuah fungsi yang akan mencetak jumlah poin berdasarkan:
1. Tambah 2 poin untuk setiap bilangan genap
2. Tambah 3 poin untuk setiap bilangan ganjil, kecuali bilangan "7"
3. Tambah 6 poin untuk setiap bilangan "7" muncuk di dalam array

return boolean false jika tidak ada

Contoh 1 :
input : findTotal([1,2,3])
output: 8

Contoh 2 :
input : findTotal([4,7])
output: 8

Testcase 1
input : findTotal([1,2,3,4,5,6,7])
output: 21

Testcase 2
input : findTotal([27,37,47,57])
output: 12
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const findTotal = (arr) => {
  // inisialisasi variabel untuk menyimpan jumlah point
  let totalPoints = 0;

  // memeriksa apakah array tidsk kosong
  if (arr.length === 0) {
    return false; // mengembalikan false jika array kosong
  }
  // iterasi melalui setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    // tambah 2 point untuk setiap bilangan genap
    if (currentNumber % 2 === 0) {
      totalPoints += 2;
    }
    // tambah 3 point untuk setiap bilangan ganjil, kecuali bilangan "7"
    else if (currentNumber % 2 !== 0 && currentNumber !== 7) {
      totalPoints += 3;
    }
    // tambah 6 poin untuk setiap bilangan "7" yg muncul di dalam array
    else if (currentNumber === 7) {
      totalPoints += 6;
    }
  }
  return totalPoints;
};

let arr1 = [1, 2, 3]
console.log(findTotal(arr1));

let arr2 = [4, 7];
console.log(findTotal(arr2));

let arr3 = [1, 2, 3, 4, 5, 6, 7];
console.log(findTotal(arr3));

let arr4 = [27, 37, 47, 57];
console.log(findTotal(arr4));
