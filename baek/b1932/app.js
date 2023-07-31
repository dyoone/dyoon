const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const N = parseFloat(input.shift().flat())
input=input.map(v=>v.map(Number))
const solve=(n,triangle)=>{
    if(n===1) return triangle[n][0]
    else if(n===2) return triangle[0][0]+Math.max(...triangle[1]);
    for(let i=n-2; i>=0; i--){
            triangle[i].forEach((v,idx,arr) => {
                arr[idx] = v + Math.max(triangle[i+1][idx], triangle[i+1][idx+1])
            });
        }
    return triangle[0][0]
}
console.log(solve(N,input))