const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
const [N] = input.shift().map(Number)
for(let i=0; i<N; i++){
    let myMap = new Map()
   const[m]=input.shift().map(Number)
   input.splice(0, m).forEach(v => {
    const key = v[1];
    const value = v[0];
    
    if (!myMap.has(key)) {
      myMap.set(key, [value]);
    } else {
      const existingValues = myMap.get(key);
      myMap.set(key, [...existingValues, value]);
    }
  });
  const arr=[]
  myMap.forEach((value, key) => {
    arr.push(value.length+1);
  })
  const total = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  console.log(total-1)
}