const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const N = input.shift()
input=input.flat().map(Number)
solution()
function solution() {
    const max = Math.max(...input)
    const count=new Array(max+1).fill(0);
    const sortedArr=[];
    for(let i=0; i<input.length; i++){
        count[input[i]]++;
    }
    for(let i=0; i<count.length; i++){
        while(count[i]>0){
            sortedArr.push(i)
            count[i]--;
        }
    }
    console.log(sortedArr.join('\n'))
}