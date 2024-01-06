
// soal

// buatlah program dengan nama function unique_in_order untuk menghilangkan karakter yang berulang menjadi tepat 1 karakter unik namun tetap mempertahankan urutan aslinya
// program ini case sensitive sehingga perbedaan huruf antara huruf kapital dan tidak kapital dianggap karakter yang berbeda

// Contoh :
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Expected Output:
// ['A', 'B', 'C', 'D', 'A', 'B']
// ['A', 'B', 'C', 'c', 'A', 'D']
// [1,2,3]

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban
const uniqueInOrder =  (iterable) => {
    // write your code here
    
    // jika input adalah string, konversi menjaadi array karakter
    if (typeof iterable === 'string') {
        iterable =iterable.split('')
    }
    const uniqueArray = [];

    // loop melalui iterable (array atau string)
    for (let i = 0; i < iterable.length; i++) {
        // jika element saat iniberbeda dg elemen sebelumnya atau ini adalah ellemen pertama
        if (i === 0 || iterable[i]  !== iterable[i - 1]) {
            uniqueArray.push(iterable[i]);
        }
        
    }
    return uniqueArray;
}

// contoh penggunaan
const result1 = uniqueInOrder('AAAABBBCCDAABBB')  
const result2 = uniqueInOrder('ABBCcAD')            
const result3 = uniqueInOrder([1,2,2,3,3])  

console.log(result1);
console.log(result2);
console.log(result3);


