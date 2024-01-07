let array = [2,3,4,6,7];

for (let i = 0; i < array.length; i++) {
    
    
}


array.forEach((value, index, arrayItuSendiri) => {
    // console.log((value, index, arrayItuSendiri));

})

// fungsi melakukan filter (misal filter bilangan genap)
let resultFiltered = array.filter((val) => {
    return val % 2 === 1;
})
console.log(resultFiltered);

// Map = fungsi memodifikasi data (setiap value + 5)
let resultModified = array.map((val) => {
    return val + 2;
})
console.log(resultModified);