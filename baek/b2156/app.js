const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const n = input[0]
const wine = input.slice(1)
const dp = new Array(n+1).fill(0)
const solution=()=>{
    if(n===1) return wine[0]
    else if(n===2) return wine[0]+wine[1]
    else{
        dp[1]=wine[0];
        dp[2]=wine[0]+wine[1];
        for(let i=3; i<n+1;i++){
            dp[i]=Math.max(dp[i-1],dp[i-3]+wine[i-2]+wine[i-1],wine[i-1]+dp[i-2])
        }
        return dp[n]
    } 
}
console.log(solution())
