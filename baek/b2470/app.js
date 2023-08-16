const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const n = input.shift()
input.sort((a,b)=>a-b)
let left = 0;
let right = n-1;
let target=Number.MAX_VALUE
let ans = [];
while(true){
    let sum = input[left] + input[right]
        if(sum===0){
            return(console.log(input[left],input[right]))
        }

        if(target>Math.abs(sum)){
            ans[0]=input[left];
            ans[1]=input[right];
            target=Math.abs(sum);
        }
        sum>0 ? right-- : left++
        if(left===right){
            break
        }
    
}
console.log(ans.join(' '))