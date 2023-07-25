const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const n=input.shift()
const dp=new Array(n).fill(1);
for(let i=0; i<n; i++){
    const values=[1]
    for(let j=0; j<i; j++){
        if(input[i]>input[j]){``
            values.push(dp[j]+1);
        }
    }
    dp[i]=Math.max(...values)
}

console.log(Math.max(...dp))