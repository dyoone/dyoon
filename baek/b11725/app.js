const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).map(v=>v.map(Number))
const [n] = input.shift()
console.log(input)

function solution(arr,n){
    let temp=[];
    let visited = new Array(n).fill(false);
    let answer = new Array(n).fill('');
    let que=[0];
    for(let i=0; i<n; i++){
        temp.push([])
    }
    arr.forEach(element => {
       const [a,b] = element
       temp[a-1].push(b-1)
       temp[b-1].push(a-1) 
    });

    while(que.length>0){
        const index = que.shift()
        visited[index]=true;
        temp[index].forEach(v=>{
            if(!visited[v]){
                que.push(v)
                answer[v] = `${index+1}`
            }
        })
    }
    return answer.join('\n').trim();
}
console.log(solution(input,n));