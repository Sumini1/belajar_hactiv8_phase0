/* 

butalah output dari contoh berikut 
manfaatkan perulangan while dan for untuk membuat segitiga
manfaatkan array

contoh tower 3 lantai
      *  
     *** 
    *****
  
  EXPECTED OUTPUT :
       *
      ***
     ***** 
    ******* 
   *********
  ***********
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

function towerBuilder(n) {
  // inisialisasi array kosong
  const menara = [];

  // hitung lebar maksimum dari menara
  const lebarMaksimum = 2 * n - 1;

  // Gunakan loop for untuk meniterasi melalui setiap menara
  for (let i = 0; i < n; i++) {
    // hirtung jumlah asterisk untuk lantai saat ini
    const jumlahAsterisk = 2 * i + 1;

    // Hitung juumlah spasi di setiap sisi asterisk untuk perataan
    const jumlahSpasi = (lebarMaksimum - jumlahAsterisk) / 2;


    // gunakan loop while
    let baris = '';
    let j = 0;

    // tambahkan spasi di sebelah kiri
    while (j < jumlahSpasi) {
      baris += ' ';
      j++;
    }

    // tambahkan asterisk di tengah
    j = 0;
    while (j < jumlahAsterisk) {
      baris += '*';
      j++;
    }
    // tambahkan spasi di sebelah kanan
    j = 0;
    while (j < jumlahSpasi) {
        baris += ' ';
        j++;
    }
    // tambahkan baris saat ini ke array menara
    menara.push(baris);
  }
  // kembalikan menara sebagai string dengan pemisah baris
  return menara.join("\n");
}

console.log(towerBuilder(6));
