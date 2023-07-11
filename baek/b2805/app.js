const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
input=input.map(v=>v.map(Number))
const[A,B]=input.shift()
input=input.flat().sort((a,b)=>a-b)
let start=0;
let answer=0;
let end=input[A-1];
while(start<=end){
    mid=Math.floor((start+end)/2);
    let sum=0
    input.forEach(v=>{
        v-mid>0? sum+=v-mid : sum
    })
    if(sum>=B){
        if(mid>answer) answer=mid    
        start=mid+1
    } else if(sum<B){
        end=mid-1        
    }
}   
console.log(answer)