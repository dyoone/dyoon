const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = [...input].map(x=>x.replace("\r", "")).map(Number);

solution(input)
function solution() {
    let dp = []
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    
    for(let i=4; i< 11; i++){
        dp[i]=dp[i-3]+dp[i-2]+dp[i-1]
    }
    for(let i=1; i<input[0]+1; i++){
        console.log(dp[input[i]])
    }
}