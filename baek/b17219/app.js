const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
const [M,N] = input.shift().map(Number)
const url = input.splice(0,M)
const target = input.flat()
let myMap = new Map()
url.forEach(v=>myMap.set(v[0],v[1]))

for(let i=0; i<N; i++){
    console.log(myMap.get(target[i]))
}