
// Soal:
// terdapat list array sebagai berikut [2,7,11,15]
// dari list tersebut cari 2 buah bilangan yang apabila dijumlah mengahasilkan nilai 9
// berikan juga kondisi jika nilai 9 tidak ditemukan dalam array
// contoh [2,7] dan [7,2] akan menghasilkan 9

// expected output:
// [ [ 2, 7 ], [ 7, 2 ], [ 4, 5 ], [ 5, 4 ] ]
// [ [ 2, 5 ], [ 5, 2 ], [ 4, 3 ], [ 3, 4 ], [ 7, 0 ], [ 0, 7 ] ]

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting


// Jawaban
const pairsOfSum=(arr, expectedOutput)=>{
    // write your code here
    const result = [];

    // loop pertama untuk iterasi elemen pertama
    for (let i = 0; i < arr.length; i++) {
        // loop kedua untuk mencocokan elemen pertama dg elemen - elemen berikutnya
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === expectedOutput ){
            result.push([arr[i], arr[j]]);
            result.push([arr[j], arr[i]]);
        }
        
      }
        
    }
    return result;

}

console.log(pairsOfSum([2, 7, 11, 15, 4, 5], 9))
console.log(pairsOfSum([2, 5, 4, 3, 7, 0], 7))

// hint: loop di dalam loop
