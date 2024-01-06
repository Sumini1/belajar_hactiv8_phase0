/*

Cek apakah terdapat 'o' dan 'x' dengan jumlah yang sama dalam string
method harus mengembalikan nilai boolean
program tidak case sensitive. (huruf kapital tidak berpengaruh)
String dapat mengandung semua char (tidak hanya 'x' atau 'o')

contoh input dan expected output:
XO("oooxx") => false
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // apabila tidak ada 'x' dan 'o' di dalam string maka program akan mengembalikan nilai true
*/

const XO = (str) => {
  // write your code here
  const lowerStr = str.toLowerCase(); // merubag string menjadi huruf kecil

  // hitung jumlah kemunculan 'x' dan 'o'
  const countX = (lowerStr.match(/x/g) || []).length;
  const countO = (lowerStr.match(/o/g) || []).length;

  // periksa apakah jumlaah 'x' dan 'o' sama
  return countX === countO;
};

console.log(XO("oooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
