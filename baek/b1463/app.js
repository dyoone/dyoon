const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const n = input[0]
const dp=new Array(n+1).fill(0)
dp[2]=1;
dp[3]=1;

for(let i=4; i<=n; i++){
    if(i%2===0&&i%3===0){dp[i]=Math.min(1+dp[i/3],1+dp[i-1],1+dp[i/2])}
    else if(i%2===0){dp[i]=Math.min(1+dp[i/2],1+dp[i-1])}
    else if(i%3===0){dp[i]=Math.min(1+dp[i/3],1+dp[i-1])}
    else {
        dp[i]=1+dp[i-1]
    }
}

console.log(dp[n])