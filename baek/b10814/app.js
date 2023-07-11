const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const N = input.shift()
solution()
function solution() {
    input=input.sort((a,b)=>a[0]-b[0])
    console.log(input.join('\n'))
}