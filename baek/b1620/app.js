const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
const [N,M] = input.shift().map(Number);
const poketmon= input.slice(0,N)
const quiz = input.slice(N).flat().map((item) => {
    if (!isNaN(Number(item))) {
      return Number(item);
    }
    return item;
  });
const num = new Map();
const name = new Map();
poketmon.forEach((v,i)=>{
    num.set(i+1,...v)
    name.set(...v,i+1)    
})
ans=[]
quiz.forEach(v=>{
    if(isNaN(v)){
        ans.push(name.get(v))
    } else if(!isNaN(v)){
        ans.push(num.get(v))
    }
})
console.log(ans.join('\n'))
