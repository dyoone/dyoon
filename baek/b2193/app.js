const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).map(k=>k.map(Number)).flat()
input=input.map(Number)
let dp=new Array(input[0]+1).fill(0)
dp[1]=1
for(let i=2; i<dp.length; i++){
    dp[i]=BigInt(dp[i-1])+BigInt(dp[i-2])
}
console.log(String(dp[input[0]]))