const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
const [K,L]=input.shift().map(Number)
const list = new Map()
input=input.flat()
input.forEach(v=>{
    if(list.has(v)){
        list.delete(v);
        list.set(v,true)
    } else list.set(v,true)
})
const order = list.keys();
const ans=Array.from(order).slice(0,K)

console.log(ans.join('\n'))

