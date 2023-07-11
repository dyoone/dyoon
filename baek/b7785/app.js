const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
input.shift()
const myMap=new Map()
input.forEach(v=>myMap.set(v[0],v[1]))
arr=[]
myMap.forEach((value,key)=>{
    if(value==='enter'){arr.push(key)}
})
console.log(arr.sort().reverse().join('\n'))