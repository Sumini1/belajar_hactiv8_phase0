// let saklarLampu = "01101001100111" // 0 mati, 1 Nyala
//output :
//Ada 5 lampu yang menyala
// totalLampu = 0;
// 
//Code here
// for (let i = 0; i < saklarLampu.length; i++) {
    // console.log(saklarLampu[i]);
    // if (saklarLampu[i] === "1") {
        // totalLampu++;
    // }
    // 
// }
// console.log(`Ada ${totalLampu} lampu yang menyala`);


let saklarLampu = "01101001100111" // 0 mati, 1 Nyala
// output :
// Ada 5 lampu yang menyala
totalLampu = 0;

// Code here
for (let i = 0; i < saklarLampu.length; i++) {
    console.log(saklarLampu[i]);
    
    if (saklarLampu[i] === "1") {
        totalLampu++;
    }
}
console.log(`Ada ${totalLampu} Lampu yang menyala`);