const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const n = input.shift()

for(let i =0; i<n; i++){
    const arr= new Array(input[i]+1).fill(0)
    arr[1]=1
    arr[2]=1
    arr[3]=1
    for(let j=4; j<=input[i]; j++){
        arr[j]=arr[j-2]+arr[j-3]
    }
    console.log(arr[arr.length-1])
}