// Soal:
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings representing directions to walk
// (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

// cartesius
//             north
//               x
//               |
//               |
//               |
//  west   ------o------y  east
//               |
//               |
//               |
//             south

// Expeceted Output :
// true
// false
// false
// false

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang penting
// CLUE : Manfaatkan perulangan dan pengkondisian

// Jawaban:
function isValidWalk(walk) {
  if (walk.length !== 10) return false; // memeriksa panjang array tidak sama dengan 10

  let north = 0; //inisialisasi code dg 0, masing2 arah
  let south = 0;
  let east = 0;
  let west = 0;

  for (i = 0; i < walk.length; i++) {
    // looping perulangan melalui array walk
    if (walk[i] == "n") north++; // jika elemen adalah "n" akan ditambahkan
    else if (walk[i] == "s") south++; // jika 's' akan ditambahkan
    else if (walk[i] == "e") east++; // jika 'e' akan ditambahkan
    else if (walk[i] == "w") west++; // jika 'w' akan ditambahkan
  }

  // jika kedua kondisi terpenuhi maka berarti jalan tersebut akan kembali ke titik awal
  // sehingga fungsi menembalikan true, jika tidak maka false
  if (north == south && west == east) return true;
  return false;
}

// Test cases provided by Codewars

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
