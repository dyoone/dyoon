const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const n = input.shift();
let list = input
let stack =[];
let answer=[]
let j=0;
let ans =[]
let arr=new Array(n).fill(1).map((v,i)=>v=i+1)
while(true){
    if(stack[stack.length-1]>list[j]){
        return console.log('NO')
    }
    if(stack[stack.length-1]===list[j]){
        answer.push(stack.pop())
        ans.push('-')
        j++
    } else if(stack[stack.length-1]!==list[j]){
        stack.push(arr.shift())
        ans.push('+')
    }
    if(answer.length===n){
        break
    }
}
console.log(ans.join('\n'))