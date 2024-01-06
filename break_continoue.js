
// Break
/*
let vocal = "aiueo";
let result = "";

for (let i = 0; i < 10; i++) {
    console.log('ini ', i); 

    for (let j = 0; j < 5; j++) {
      if (j === 3) {
        break
      }
        console.log(j, ' ini j');
    }
}
*/


//  Continoue
/*
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0)  {
        continue
    }
    console.log(i);
}
*/

let text = 'abaacbbad'  //  expected output abcd
//let text = 'zaahijkhukz' // zahijku
let newText = '';

for (let i = 0; i < text.length; i++) {
    let flag = false
   // console.log(text[i]); 
        for (let j = 0; j < newText.length; j++) {
            //console.log(newText[j]);
            if (text[i] === newText[j]) {
                flag = true
            }
        }
    if (!flag) {
        newText += text[i]
    }
}
console.log(newText);