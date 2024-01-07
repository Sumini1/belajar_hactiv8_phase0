/*

Pada array, dapat dilakukan pengambilan sebagian data dari index tertentu  sampai index tertentu
terdapat fungsi kanan javascript "slice" untuk melakukan hal tersebut

cobalah untuk membuat custom function yg seperti slice

*/

const customSlice = (arr, start, end) => {
    // code di sini

    let result= []

    if (start < 0) {
        // jaga2 kalau startnya dimulai dg angka minus
        start = 0;
    }
    // jika end > index tertinggi dari 'arr'
    if (end > arr.length -1 ) {
        end = arr.length -1  // untuk menghitung index tertinggi dari arraynya
    }

    // prosesnya
    for (let i = start; i <= end; i++) {
        result.push(arr[i])
        
    }
    return result;

}

let data = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembialan', 'sepuluh'];
// console.log(customSlice(data, 1, 5));
// console.log(customSlice(data, 3, 20));
// console.log(customSlice(data, 0, 3));




let end = 10;
let data_array = [0,1,2,3,4,5,6,7,8,9]; 
if (end > data_array.length -1) {
    end = data_array - 1
}
console.log(data_array.length - 1);
/*
noted : index dimulai dari 0, seadangkan length dihitung dg jumlahnya yg ada
semua jumlah data ada 10 dan dimulai dari 0, index tertingginya 9
jadi untuk mencari/ mengetahui index tertinggi itu semua jumlah yg ada dikurangi satu. karena indexnya dimulai dari 0
*/