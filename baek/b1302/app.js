const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
    const [N] = input.shift().map(Number)
    input=input.flat().sort()
    const myMap = new Map()
    input.forEach(v=>{
        if(myMap.has(v)){myMap.set(v,myMap.get(v)+1)}
        else if(!myMap.has(v)){myMap.set(v,1)}
    })
    let max=0
    let best=''
    myMap.forEach((value,key) => {
        if (value > max) {
        max = value;
        best=key
        }
    }); 
    console.log(best)