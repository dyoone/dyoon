const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input= input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).map(v=>v.map(Number))
const [n,m] = input.shift()
input=input.flat()
let cnt = 0
number = new Array(n).fill(1).map((v,i)=>v+=i)
for(let i=0; i<m;i++){
    const target=input[i]
    const len=number.length
    const index=number.indexOf(target)
    if(number[0]===target){number.shift()}
    else {if(Math.abs(len-index)<index){
        while(true){
            cnt++
            number.unshift(number.pop())
            if(number[0]===target){
                number.shift()
                break
            } 
        }
    } else if(Math.abs(len-index)>=index){
        while(true){
            cnt++
            number.push(number.shift())
            if(number[0]===target){
                number.shift()
                break
            } 
        }
    } 
    }
}
console.log(cnt)
