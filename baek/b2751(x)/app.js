const fs = require('fs');
const { it } = require('node:test');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
input.shift()
solution()
function solution() {
    input.sort((a,b)=>a-b)
    console.log(input.join('\n'))
}