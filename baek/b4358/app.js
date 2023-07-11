const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', ''));
const list = new Map()
const total=input.length
input=input.flat().sort()
input.forEach(v=>{
    if(list.has(v)){
        list.set(v,list.get(v)+1)
    } else list.set(v,1)
})
list.forEach((value,key,map)=>{
    list.set(key, Number((value/total*100).toFixed(4)));
})
const ans=[]
list.forEach((value,key)=>{
    ans.push(`${key} ${value}`)
})

console.log(ans.join('\n'))