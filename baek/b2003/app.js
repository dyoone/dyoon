const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
let [a, b]=input
b=b.map(Number)
a=a.map(Number)
solution(a,b)
function solution(a,b) {
    let answer=0
    for(let i=0; i<a[0]; i++){
        let right=i+1;
        let sum=b[i]
        if(sum===a[1]){
            answer++
            continue;
        }
        while(true){
            if(right===a[0]){
                break
            }
            if(sum+b[right]===a[1]){
                answer++
                break;
            }
            if(sum+b[right]>a[1]){
                break;
            }
            if(sum+b[right]<a[1]){
                sum+=b[right]
                right++
            }
        }   
    }
    console.log(answer)
}