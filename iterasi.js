//  ITERASI

console.log("Selamat pagii");
console.log("Selamat pagii");
console.log("Selamat pagii");

/*
for (inisialisasi; batasan / kondisi; expression) {
    kode -> aksi / block code -> Tempat kodenya kalau syarat masih sesuai
    mau ngapain
}

1. for itu cek inisialisasi terlebih dahulu, deklarasinya apa
2. kemudian dia akan cek kondisinya, apakah masih true atau tidak
3. kalau dia true, dia akan jalankan apapun apapun yang ada di block kode
4. setelah bolock kode selesai, dia akan jalankan expression (incremen / decremen)
5. dia akan kembali kelangkah 2, menjalankan semua aksi hingga kondisi mencapai false

*/
for (let x = 0; x < 10; x++) {
  // untuk menambahkan sampai kondisi terpenuhi yaitu 9 kali
  console.log("selamat belajar");
}

for (let i = 0; i < 100; i += 5) {
  // mengulang dengan kelipatan 5 (increment)
  console.log(i);
}

for (let b = 10; b >= 2; b--) {
    console.log(b + " jangan menyerah yaa");
}

for (let a = 0; a < 5; a++) {
  // mengulang dg kelipatan 5 kebawah
  console.log("Selamat belajar, cinta " + a);
}


/* Analogi perulangannya ste by stepnya
    x = 0
    x < 5 -> 0 < 5 -> true
        menampilkan x -> 0
        menampilkan Selamat belajar

    x = 1
    x < 5 -> 1 < 5 -> true
        menampilkan x -> 0
        menampilkan Selamat belajar

    x = 2
    x < 5 -> 1 < 5 -> true
    menampilkan x -> 0
    menampilkan Selamat belajar

    x = 3
    x < 5 -> 1 < 5 -> true
    menampilkan x -> 0
    menampilkan Selamat belajar

    x = 3
    x < 5 -> 1 < 5 -> true
    menampilkan x -> 0
    menampilkan Selamat belajar

    x = 4
    x < 5 -> 1 < 5 -> true
    menampilkan x -> 0
    menampilkan Selamat belajar
    
    x = 5
    x < 5 -> 1 < 5 -> false

 */
