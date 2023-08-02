const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", ""))
let left = input[0].split('');
let right = [];
let cases = Number(input[1])+1;
for(let i =2 ; i <= cases; i++){
        if(input[i] === 'L'){
            if(left.length){
      			right.push(left.pop());
    		}
        }else if(input[i] === 'B'){
            if (left.length) {
      			left.pop();
    		}
        }else if(input[i] === 'D'){
            if(right.length){
      			left.push(right.pop());
    		}
        }else{
        left.push(input[i].split(' ')[1]);
    }
}
while(right.length) {
  	left.push(right.pop());
}
console.log(left.join(''));