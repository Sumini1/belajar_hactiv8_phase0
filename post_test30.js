
// Soal:
// Buatlah fungsi bernama addMatrices yang menerima dua parameter berupa 
// matriks dua dimensi. Fungsi ini harus mengembalikan hasil penjumlahan
// kedua matriks tersebut. Pastikan untuk memeriksa apakah kedua matriks
// memiliki ukuran yang sama sebelum dilakukan penjumlahan.

/*
Expected Output:
[
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]
]
*/

// Jawaban:
function addMatrices(matrix1, matrix2) {
  //write your code here
  // mengecek apakah kedua matriks memiliki ukuran yg sama
  const rows1 = matrix1.length;
  const cols1 = matrix1[0].length;
  const rows2 = matrix2.length;
  const cols2 = matrix2[0].length;

  if (rows1 !== rows2 || cols1 !== cols2) {
    return "Ukuran matriks tidak sama, penjumlahan tidak dapat dilakukan";
  }
  // penjumlahan kedua matriks
  const result = [];
  for (let i = 0; i < rows1; i++) {
    const row = [];
    for (let j = 0; j < cols1; j++) {
      row.push(matrix1[i][j] + matrix2[i][j]);
    }
    result.push(row);
  }
  return result;
}

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

console.log(addMatrices(matrix1, matrix2));
