/*
  DERET GEOMEETRI
    -

*/

/*
  jawaban rizki

function tentukanDeretGeometri(arr) {
  // write your code 
  let selisih = arr[1] / arr[0]
  //Contoh 3/1, 4/2, 6/2 dll
  for (i = 1; i < arr.length; i++) {
    //console.log(arr[i]);
    let indexSblmnya = arr[i - 1]
    let index = arr[i]
    if(index / indexSblmnya !== selisih){
    return false
    }
  }
  return true
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

 * ketika ada opsi lain, maka outputnya jangan langsung return true,
  jika return true langsung maka langkah selanjutnya tidak aka di eksekusi
*/

/*

function tentukanDeretGeometri(arr) {
  let jarak = arr[1] / arr[0]; // untuk mengetahui  geometri index ke-1 dibagi index ke-0
  for (let i = 0; i < arr.length - 1; i++) {
    // looping setiap deretnya kemudian kurangi 1, agar tidak dibandingkan dg undefined
    if (arr[i] * jarak !== arr[i + 1]) {
      // jika indeks ke-i dikali jarak tidak sama dg jumlah jarak selanjutnya
      return false; // maka keluar false
    }
  }
  return true; // jika sama maka true
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
*/

function tentukanDeretGeometri(arr) {
  let jarak = arr[1] / arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] * jarak !== arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
