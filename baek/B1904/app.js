const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const n = input[0]
arr = new Array(input[0]).fill(0)
arr[1] = 1;
arr[2] = 2;

for(let i=3; i<=n; i++){
    arr[i] = (arr[i-1] + arr[i-2]) % 15746
}

console.log(arr[n])