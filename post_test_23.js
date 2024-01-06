
// Soal:
// buatlah fungsi sorting manual bisa menggunakan QuickSort, MergeSort dll
// direkomendasikan menggunakan QuickSort karena sering digunakan drpd metode sorting lainnya
// lalu urutkan array berikut [1, 3, 340, 54, 12, 35]
// ['cat', 'dog', 'elephant', 'bee', 'ant']

// expected output
// [ 1, 3, 12, 35, 54, 340 ]
// [ 'ant', 'bee', 'cat', 'dog', 'elephant' ]

// Tidak boleh langsung print expected output
// NOTE : Berikan comment pada baris kode yang dianggap penting

// Jawaban:
const quicSort = (arr) => {
    if (arr.length <= 1) { 
        return arr;  
    } else {
        // pilih elemen pertama sebagai pivot
const pivot = arr[0];
//bagi array menjadi dua bagian, elemen yg lebih kecil atau sama dg pivot dan elemen yg lebih besar darinpivot
const less = arr.slice(1).filter(item => item <= pivot);
const greater = arr.slice(1).filter(item => item > pivot)

// pengurutan secara rekursif untuk kedua bagian dan gabungkan dg pivot
return [...quicSort(less), pivot, ...quicSort(greater)]
    }
};

// Fungsi manualSort untuk menentukan apakah array numerik atau string dan menerapkan pengurutan yg sesuai
const ManualSort = (arr) => {
    // periksa tipe data elemen pertama array
    if (typeof arr[0] === 'number') {
        return quicSort(arr); 
    } else if (typeof arr[0] === 'string') {
        return quicSort(arr); 
    } else {
        // jikaa tipe array tidak di dukung, lempar error
        throw new Error('Unsupported array type');
    }
    
};
const numericArray = [1, 3, 340, 54, 12, 35];
const stringArray = ['cat', 'dog', 'elephant', 'bee', 'ant'];

console.log(ManualSort([1, 3, 340, 54, 12, 35]))
console.log(ManualSort(['cat', 'dog', 'elephant', 'bee', 'ant']))







