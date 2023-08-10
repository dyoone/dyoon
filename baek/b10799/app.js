const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).flat().join(' ').split('')
let stack=[];
let answer = 0;
for(var i in input){
    if(input[i] === '('){
        stack.push(input[i]);
    }else if(input[i] === ')'){
        if(input[i-1] === '('){
            stack.pop();
            answer += stack.length;
        }else{
            stack.pop();
            answer ++;
        }
    }
}
console.log(answer)
