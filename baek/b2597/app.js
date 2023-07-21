const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const n = input[0]
const dp = new Array(n+1).fill(0)
dp[1]=input[1]
dp[2]=dp[1]+input[2]
dp[3]=Math.max(input[1],input[2])+input[3]
for(let i=4; i<=n; i++){
    dp[i]= Math.max(dp[i-3]+input[i-1]+input[i],dp[i-2]+input[i])
}
console.log(dp[n])