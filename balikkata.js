/*
 Dapat mengakses indeks dari sebuah String dari indeks awal ataupun sebaliknya
 Contoh --> 
 let kata = 'javascript'

 maka output yg dihasilkan adalah 'tpircsavaj'

 */

 let kata = 'Aku Suka Kamu'
 let result = '';
 for (let i = kata.length - 1; i >= 0; i--) {
 result += kata[i]
    
 }
 console.log(result);
