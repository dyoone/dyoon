const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
input=input.flat().map(Number)
const n = input.shift()
const memo = Array.from(Array(41), () => new Array(2).fill(0));

function solution(input){
    for(let i=0; i<n; i++){
        console.log(fibonacci(input[i], memo).join(' '))
    }
}

function fibonacci(n, memo) {
    if(n===0){
        memo[n] = [1,0];
        return memo[n]
    }
    if(n===1){
        memo[n] = [0,1];
        return memo[n]
    }
    if(n===2){
        memo[n]=[1,1];
        return memo[n]
    }

    if(memo[n][0]!==0&&memo[n][1]!==0){
        return memo[n]
    }

    let num1 = fibonacci(n-1, memo)
    let num2 = fibonacci(n-2, memo)

    memo[n] = [num1[0]+num2[0], num1[1]+num2[1]]
    return memo[n]
  }

  solution(input)

