const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
[N,K] = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)

// const arr = Array.from({ length: N }, (_, i) => 1 + i);
// let ans =[]
// while(arr.length){
//     for(let i=0; i<K-1; i++){
//         arr.push(arr.shift())
//     }
//     ans.push(arr.shift())
// }
// console.log(`<${ans.join(', ')}>`)
