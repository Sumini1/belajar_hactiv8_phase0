/*
    Input :
    Centralia
    Pennsylvania
    Green Lion Antiques

    Output :
    - Text awal adalah centralia, dirubah menjadi C@ntr@l@@, vokal yang berubah 4
    - Text awal adalah Pennsylvania, dirurbah menjadi P@nnsylv@n@@, total vokal yang berubah menjadi 4
    - Tex awal adalah Green Lion Antiques, dirubah menjadi Gr@@ L@@n @nt@q@@s,total vokal yang berubah 8

* String itu sifatnya in new table,
->ga bisa dirubah salah satu hurufnya, jadi harus dirubah semuanya


*/

//let input = 'Centralia'
 let input = "Pennsyivania"
//let input = "Green Lion Antiques"
let result = "";
let totalVocal = 0;



//code here
for (let i = 0; i < input.length; i++) {
   //console.log(input[i]);
    huruf = input[i].toLowerCase();
//console.log(huruf, input[i]);
    if (huruf === "a" || huruf === "i" || huruf === "u" || huruf === "e" || huruf === "o") {
        result += "@";
        totalVocal++;
    } else {
        result += huruf
    }
    //console.log(huruf);
}
console.log(`Text awal adalah ${input}, dirubah menjadi ${result}, total vocal yang berubah ${totalVocal}`);


