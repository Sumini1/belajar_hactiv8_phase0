function ganjilGenap(plat) {
  // your code here

//   let arr = []
//   let text = ""
//   for (let i = 0; i < plat.length + 1; i++) {
//     if (plat[i] === ";" || i === plat.length) {
//       arr.push(text);
//       text = "";
//     } else {
//       text += plat[i];
//     }
//   }
//   let jumlahGanjil = 0;
//   let jumlahGenap = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       jumlahGenap++;
//     } else {
//       jumlahGanjil++;
//     }
//   }
//   if (jumlahGenap === 0) {
//     return `plat ganjil sebanyak ${jumlahGanjil} plat genap tidak ditemukan`;
//   } else if (jumlahGanjil === 0) {
//     return `plat genap sebanyak ${jumlahGanjil} plat genap tidak ditemukan`;
//   } else {
//     return `plat genap sebanyak ${jumlahGenap} dan plat ganjul sebanyak ${jumlahGenap}`;
//   }

      if (rizki === undefined) {
        return "invalid data";
      } else if (rizki === "") {
        return "input yang dimasukkan salah";
      }
      let temp = "";
      let genap = 0;
      let ganjil = 0;

      for (let i = 0; i <= rizki.length; i++) {
        // console.log(rizki[i], temp);
        if (rizki[i] === ";" || i === rizki.length) {
          //Number(temp); //Merubah tipe data string menjadi number
          //tempArr.push(temp); //Nambahin data ke temp.Arr dari belakang
          if (Number(temp) % 2 === 0) {
            console.log(temp, "Genap");
            genap++;
            temp = "";
            continue; //Program dibawahnya nggak dijalanin
          }
          //Hasil lainnya otomatis ganjil
          console.log(temp, "Ganjil");
          temp = "";
          ganjil++; //Untuk menambah angka ganjil
          continue;
        }
        temp += rizki[i];
      }
      return `Plat genap sebanyak ${genap} dan plat ganjnil sebanyak ${ganjil}`;
      // console.log(tempArr);
}

console.log(ganjilGenap("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap("")); //plat tidak ditemukan
console.log(ganjilGenap()); //invalid data

//do not change the code below
//module.exports = {
