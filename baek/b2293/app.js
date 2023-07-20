const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const [n,k] = input.shift().map(Number)
input=input.flat().map(Number)
let dp = Array(k + 1).fill(0);
dp[0]=1

function solution() {
    for (let i = 0; i < 3; i++) {
      for (let j = input[i]; j <= k; j++) {
        dp[j] += dp[j - input[i]];
      }
    }
    return dp[k];
  }

  console.log(solution())