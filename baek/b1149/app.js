const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).map(k=>k.map(Number))
const [n] = input.shift()
const cost = input.map(v=>v.map(Number))

for(let i=1; i<n; i++){
    cost[i][0] +=Math.min(cost[i-1][1],cost[i-1][2])
    cost[i][1] +=Math.min(cost[i-1][0],cost[i-1][2])
    cost[i][2] +=Math.min(cost[i-1][0],cost[i-1][1])
}
console.log(Math.min(...cost[n-1]))

