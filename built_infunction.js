// Built- in function Challanges 1, methode push untuk menambahkan
// data baru di belakang array

/*
function antrian(line, person) {
    line.push(person);
    return line
}


let line = ['Rhaegar'] //data pertama cuma 1 data
console.log(antrian(line, 'Snow')); // output ['Rhaegar', 'Snow']
*/

// Cara menghapus data di depan array, yaitu menggunakan shhift
/*
function panggilAntrian(line, person) {
  line.shift(person)
  return line
}

let line = ['Rhaeger', 'Snow', 'doni'] //data pertama 
console.log(panggilAntrian(line)); //output ['Snow', 'doni']
*/

// Cara menambahkan satu data di awal array dg unshift()
/*
function tumpukan(line, title) {
    line.unshift(title)
    return line
}
let line = ['doni', 'lia', 'iklim']
console.log(tumpukan(line, 'sumini'));
*/

//TES CASES
//console.log(ganjilGenap(plat));
/*
let plat = "2341;3429;864;1309;1276";
function ganjilGenap(plat) {
  let arr = [];
  let text = "";
  for (let i = 0; i < plat.length + 1; i++) {
    if (plat[i] === ";" || i === plat.length) {
      arr.push(text);
      text = "";
    } else {
      text += plat[i];
    }
  }
  let jumlahGanjil = 0;
  let jumlahGenap = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      jumlahGenap++;
    } else {
      jumlahGanjil++;
    }
  }
  if (jumlahGenap === 0) {
    return `plat ganjil sebanyak ${jumlahGanjil} dan plat genap tidak ditemukan`;
  } else if (jumlahGanjil === 0) {
    return `plat genap sebanyak ${jumlahGenap} dan plat ganjil tidak ditemukan`;
  } else {
    return `plat genap sebanyak ${jumlahGenap} dan plat ganjil sebanyak ${jumlahGanjil}`;
  }
}
console.log(ganjilGenap(plat));
*/

let plat = "2341;3429;864;1309;1276";
function ganjilGenap(plat) {
  // inisialisasi buat menampung arraynya ketika sudah di looping dan ketemu ;
  let arr = [];
  let text = "";
  for (let i = 0; i < plat.length + 1; i++) {
    if (plat[i] === ";" || i === plat.length) {
      arr.push(text);
      text = "";
    } else {
      text += plat[i];
    }
  }
  let jumlahGenap = 0;
  let jumlahGanjil = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) {
      jumlahGenap++;
    } else {
      jumlahGanjil++;
    }
  }
  if (jumlahGenap === 0) {
    return `plat genap sebanyak ${jumlahGenap} dan plat ganjil tidak diitemukan`;
  } else if (jumlahGanjil === 0) {
    return `plat ganjil sebanyak ${jumlahGanjil} dan plat genap tidak ditemukan`;
  } else {
    return `plat genap sebanyak ${jumlahGenap} dan plat ganjil sebanyak ${jumlahGanjil}`;
  }
}
console.log(ganjilGenap(plat));
