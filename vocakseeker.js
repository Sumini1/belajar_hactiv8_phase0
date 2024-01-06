/* jawaban rizki
function vocalSeeker(board) {
  let Hurufvokal = 'AaIiUuEeOo'
  let penampung =[]
  // Write your code here'
  for (let r = 0; r < Hurufvokal.length; r++){
    for (let i = 0; i < board.length; i++) {
      for ( let j = 0;j < board.length; j++){
        //console.log(board[j]);
        if (Hurufvokal[r] === board[i][j]){
          penampung.push(board[i][j])
          //penampung = board
        }
        
      }
    }
  }

  return `Vokal ditemukan ${penampung.length} dan kumpulan vokal adalah ${penampung}`
}

//DRIVER CODE

let board = [
  ["*", "*", "*", 10],
  ["*", "*", -5, -10, "*", 100],
  ["a", "A", "o", "b"],
];

console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo


module.exports = vocalSeeker;
*/

function vocalSeeker(board) {
  let hurufVocal = "AaIiUuEeOo";
  let penampung = "";

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        for (let k = 0; k < hurufVocal.length; k++) {
            if (board[i][j] === hurufVocal[k]) {
                penampung += hurufVocal[k]
                break;
            }
        }
        
    }
    
  }
  return `vokal ditemukan ${penampung.length} dan kumpulan vokal adalah ${penampung}`;
}

//DRIVER CODE

let board = [
  ["*", "*", "*", 10],
  ["*", "*", -5, -10, "*", 100],
  ["a", "A", "o", "b"],
];

console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo
