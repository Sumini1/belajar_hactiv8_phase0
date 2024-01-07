/*

Konsep Penyelesaian :
- decelare variable (misal let count = 0)
- menggunakan infinity looping, mulai dari 0 sampai tak  hingga 
- disetiap looping cek apakah ada data pada array di index tersebut?
    - jika ada, count++
    - jika tidak ada, stop loping menggunakan break


*/

const countManual = (arr) => {
  // tulis code di sini
let i = 0; // untik mengecek index array, ada ga item array di index tersebut.
let count = 0;
  // initial value
let continueLooping = true;
while (continueLooping) {
    // break, if...(item is undefined)
    if (arr[i] === undefined) {
        continueLooping = false;
    } else {
        count++;
        i++;
    }
} 

  return count;
};
let data_array = [1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 3, 6, 2, 6, 7, 5, 5, 5, 1];

console.log(countManual(data_array));
