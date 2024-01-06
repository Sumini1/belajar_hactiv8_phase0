/*
function ladder(word) {
  //your code here
  let output = []
  for ( let j = 0; j < word.length; j++){
    let result = []
    for ( let i = 0; i < word.length - j; i++){
      result.push(word[i]) 
    }
    
    //console.log(result);
    output.push(result)
  }
  return output
  }
  */
/*
function ladder(word) {
  let result = []; // untuk menamoung array bagian luar
  let temp = []; // untuk menampung array bagian dalam

  for (let i = 0; i < word.length; i++) {  // looping setiap huruf ke bawah
    for (let j = 0; j < word.length - i; j++) { // looping setiap huruf krsamping
      temp.push(word[i]); // masukan setiap huruf ke temp
    }
    result.push(temp); // masukan temp ke result
    temp = [];  // untuk menampung resut
  }

  return result; // kembaikan ke result
}

// DRIVER CODE
console.log(ladder("hacktiv8"));
// [
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]

// [
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
// ]
*/

function ladder(word) {
  let result = []; // untuk menampung data array yg paling luar
  let temp = []; // untuk menampung data array yg paling dalam

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length - i; j++) {
      temp.push(word[i]);
    }
    result.push(temp);
    temp = [];
  }
  return result;
}
console.log(ladder("hactiv8"));
