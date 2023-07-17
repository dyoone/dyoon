const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
input=input.map(v=>v.map(Number))
const [n,h] = input.shift()
let heights = input.flat().sort((a,b)=>a-b)

let start = 0;
let end = Math.max(...heights)
let mid = Math.floor((start+end)/2)
heights=heights.map((v,i)=>{
        if(i%2===1){
       return  v=h-v
    } else return v=v
})
let min = m
while(start){
    cnt=0
    heights.forEach((v,i)=>{
        if(i%2===1){
            mid > v ? cnt ++ : cnt 
        }
    })
    if(cnt < min){
        end=mid-1
    } else start=mid+1
}
console.log(heights)
