const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
let N =input.shift()
let target = input.shift()
input.sort((a,b)=>b-a)
let answer = 0
if(input.length===0||target>input[0]) return console.log(0)
while(true){
        input[0]-=1
        target++
        answer++
        if(input[0]<input[1]){
            input.sort((a,b)=>b-a)
        }
        if(input[0]<target) break
}

console.log(answer)