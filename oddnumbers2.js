/*
    buatlah sebuah loop untuk mencetak setiap 5 angka dari 50-200,
    lalu cetak angka tsb dan tuliskan apakah bilangan tsb merupakan faktor
    perkalian 3 atau bukan

    //expected output
      195 - faktor 3
      200 - tidaak bisa dibagi 3

*/

// for (let i = 50; i <= 200; i += 5) {
//     if (i % 3 === 0) {
//         console.log(`${i} - faktor 3`);
//     } else {
//         console.log(`${i} - tidak bisa dibagi 3`);
//     }
    
// }

for (let i = 50; i <= 200; i += 5) {
    if (i % 3 === 0) {
        console.log(`${i} - faktor 3`);
    } else {
        console.log(`${i} - tidak bisa dibagi 3`);
    }
    
}