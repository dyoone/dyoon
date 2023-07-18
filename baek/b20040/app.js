const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
input=input.map(v=>v.map(Number))
const [n,m] = input.shift()
let arr = new Array(n);
let list =[]
let flag=[]
for(let i=0; i<n; i++){
    arr[i]=i;
}

function getParent(x){
    if(arr[x] === x ) return x;
    return(arr[x] = getParent(arr[x]))
}

function unionParent(a,b){
     a = getParent(a)
     b = getParent(b)

    if(a<b) arr[b] = a ;
    else arr[a] = b;
}

function findeParent(a,b){
    a = getParent(a);
    b = getParent(b);
    if (a === b) return true;
    else return false;
}

for(let i=0; i<m; i++){
 unionParent(input[i][0],input[i][1])
 if(!list.includes(input[i][0])){
    list.push(input[i][0])
 }
 if(!list.includes(input[i][1])){
    list.push(input[i][1])
 }
}
console.log(arr,list)
