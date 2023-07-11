const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
const [T]=input.shift().map(Number)
const ans=[]
for(let i=0; i<T; i++){
    const note=input.splice(0,4)
    const note1=new Set(note[1])
    const note2=note[3]
    note2.forEach(v=>{
    if(note1.has(v)){
        ans.push(1)
    } else ans.push(0)
})
}

console.log(ans.join('\n'))
