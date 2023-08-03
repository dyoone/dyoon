const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const [N, M]=input.shift()
let visited={}
input=input.map(v=>v.map(v=>v.split(''))).flat()
visited[input[0][0]]=true

console.log(visited)