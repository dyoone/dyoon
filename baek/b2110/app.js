const { info } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
const [n,c] = input.shift().map(Number);
input=input.flat().map(Number).sort((a,b)=>a-b)

let start=0;
let end=input[n-1]
let answer=0
while(start<=end){
    mid=Math.floor((start+end)/2)
    let prev=input[0]
    let cnt=1
    for(let j=1; j<n; j++){
        if(input[j]-prev>=mid){
            prev=input[j]
            cnt++
        }
    }
    if(cnt<c){
        end=mid-1;
    } else if( cnt>=c){
        start=mid+1
        answer<mid ? answer=mid : undefined
    }
}

console.log(answer)
