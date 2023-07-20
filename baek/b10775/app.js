const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
input=input.map(v=>v.map(Number)).flat()
const [n,m] = input.splice(0,2)
let arr = new Array(n+1);
let cnt=0;
for(let i=0; i<=n; i++){
    arr[i]=i;
}

function getParent(x){
    if(arr[x] === x ) return x;
    return(arr[x] = getParent(arr[x]))
}

function unionParent(a,b){
     a = getParent(a)
     b = getParent(b)
     arr[a]=b
}

for(let i=0; i<m; i++){
    ai = getParent(input[i]);
    if (ai !==0) {
        unionParent(ai,ai-1)
        cnt++
    }
    else {
        console.log(cnt)
        return
    }
}

console.log(cnt)