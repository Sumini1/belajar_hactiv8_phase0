let rows1 = 9;
// do loops using rows1 variable to display asterisks in the console.
// insert your code here
for (let a = 0; a < rows1; a++) {
  let tamp = "*";
  //console.log(rows1);
  //if ( rows1 === a){
  //tamp += "#"
  //}
  console.log(tamp);
}
let rows2 = 3;
// do loops using rows2 variable to display asterisks in the console.
// insert your code here
let pager = "#";
for (let c = 0; c < rows2; c++) {
  let penampung = "";
  for (let d = 0; d < rows2; d++) {
    penampung += pager;
  }
  console.log(penampung);
}

let rows3 = 5;
// do loops using rows3 variable to display asterisks in the console.
// insert your code here
let dan = "&";
for (let q = 0; q < rows3; q++) {
  //console.log(rows3[q]);
  let kosong = "";
  for (let d = 0; d <= q; d++) {
    //pertama q satu lalu dua tiga dst
    kosong += dan;
  }
  console.log(kosong);
}

let rows4 = 5;
// do loops using rows4 variable to display asterisks in the console.
// insert your code here
let persen = "%";
for (let w = rows4; w >= 1; w--) {
  let strKosong = "";
  for (let z = 0; z < w; z++) {
    strKosong += persen;
  }
  console.log(strKosong);
}
