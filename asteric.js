let result = ''
let row = 7
let col = 6

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        if (i !== 0 && i !== row - 1) {
            if (j === 0 || j === col - 1) {
                    result += '#'     
            } else {
                result += ' '
            }
        } else {
            result += '#'
        }
        
    }
    result += '\n'
}
console.log(result);