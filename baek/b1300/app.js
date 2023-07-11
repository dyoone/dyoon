const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' ')).flat().map(Number);
const[n,k]=input;
console.log(n,k)

let start=1;
let end = n*n

while(start<=end){
    mid=Math.floor((start+end)/2)
    let cnt = 0;

    for(let i=1; i<=n; i++){
        if(i>mid) continue;
        let result = Math.floor(mid/i);

        result = result > n ? n : result;

        cnt+=result;
    }

    if(cnt>=k){
        answer= Math.min(answer, mid)
        end=mid-1;
    } else {
        start+1;
    }
}