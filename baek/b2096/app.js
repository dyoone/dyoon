const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).map(v=>v.map(Number))
const [n] = input.shift()

// 각 내부 배열을 복사하여 새로운 배열 생성
let max = input.map(row => [...row]);
let min = input.map(row => [...row]);

for(let i=1; i<n; i++){
    max[i][0] += Math.max(max[i-1][0],max[i-1][1])
    max[i][1] += Math.max(max[i-1][0],max[i-1][1],max[i-1][2])
    max[i][2] += Math.max(max[i-1][1],max[i-1][2])
    
    min[i][0] += Math.min(min[i-1][0],min[i-1][1])
    min[i][1] += Math.min(min[i-1][0],min[i-1][1],min[i-1][2])
    min[i][2] += Math.min(min[i-1][1],min[i-1][2])
}
console.log(Math.max(...max[n-1]), Math.min(...min[n-1]))
