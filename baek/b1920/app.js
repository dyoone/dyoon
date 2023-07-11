const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
input=input.map(v=>v.map(Number))
const condition =input[1].sort((a,b)=>a-b)
const target=input[3]
const M=input[0]
answer=[]
target.forEach(v=>{
    let start=0;
    let end=M-1;
    let res=false;
    while(start<=end){
        let mid=(start+end)/2>>0
        if(v<condition[mid]){
            end = mid -1;
        } else if( v > condition[mid]){
            start = mid+1
        } else {
            res = true;
            break
        }
    }
    if(res===true){
        answer.push(1)
    } else {answer.push(0)}
})

console.log(answer.join('\n'))