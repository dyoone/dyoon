const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
input=input.flat()
solution()
function solution() {
    let str = input[0]
    let arr = []
    for(let i=0; i<str.length; i++){
        arr.push(str[i])
    }
    console.log(arr.sort((a,b)=>b-a).join(''))
}