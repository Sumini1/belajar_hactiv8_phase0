/*
  ASUMSI
    karaktr 'a', pasti akan seelalu ada dan hanya akan ada 1

    CONTOH
    Jika arr adalah ['x,'','o','','','x'], maka jarak terdekat dari 'o' ke 'x'
    adalah 2. Jika tidak ditemukan 'x' sama sekali,function akan me return nilai 0.

*/

/* jawaban rizki

function targetTerdekat(arr) {
  // you can only write your code here!
  let penampung1 = ''
  for ( i =0; i <arr.length; i++){
    if ( arr[index] === "o"){
      //console.log(arr[i]);
    }
  }
  //console.log(arr[i]);
  return penampung1
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

*/

function targetTerdekat(arr) {
  let indexO = 0;
  let indexX = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      indexO = i;
    } else if (arr[i] === "x") {
      indexX.push(i);
    }
  }
  if (indexX.length === 0) {
    return 0;
  } else {
    let closest = Math.abs(indexX[0] - indexO); // supaya hasilnya yg negative menjadi positif, dan positif tetap positif
    for (let i = 0; i < arr.length; i++) {
      if (closest > Math.abs(indexX[i] - indexO)) {
        closest = Math.abs(indexX[i] - indexO);
      }
    }
    return closest;
  }
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
