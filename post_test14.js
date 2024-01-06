
// Soal:
// Cek Apakah pasangan kata berikut adalah anagram atau bukan
// contoh:
// listen --- silent// true
// The Eyes ---- They See// true
// sun --- moon// false

// expected output berdasarkan soal:
// true
// true 
// false
// Tidak boleh langsung print expected output
// Note : Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban:
// write your code here
function isAnagram(str1, str2) {
    // menghapus spasi dan karakter khusus
    str1 = str1.trim('').toLowerCase()
    str2 = str2.trim('').toLowerCase()

    // mengurutkan karakter dalam kedua string dan membandingkannya
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
    
// Output
console.log(isAnagram("listen","silent")) 
console.log(isAnagram("The Eyes","They See")) 
console.log(isAnagram("sun","moon")) 

// Expected output
// true
// true
// false





