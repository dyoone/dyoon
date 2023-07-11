const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const [n,m]=input.shift().map(Number)
const graph = Array.from({ length: n + 1 }).map(() => []);

input=input.map(v=>v.map(Number))

for (let i = 0; i < m; i++) {
    const [x, y] = input[i];
    graph[x].push(y);
    graph[y].push(x);
}

let arr=[]
const bfs=(start,end,cnt)=>{
let visited = Array.from({ length: n + 1 }).map(() => false);
    const que=[[start,end,cnt]];
    while(que.length){
        let [cr,end,cnt]=que.shift();
        const friends=graph[cr]
        if(!friends.includes(end)){
            for(let i=0; i<friends.length; i++){
                if(!visited[friends[i]]){
                    que.push([friends[i],end,cnt+1])
                    visited[friends[i]] =true
                }
            }
        } else if(friends.includes(end)){
            arr.push(cnt)
            break
        }

    }
}
let num=[]
for(let i=1; i<n+1; i++){
    for(let j=1; j<n+1; j++){
        if(i===j){continue}
        bfs(i,j,1)
    }
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if(num.length===0||num[1]>sum){
        num=[i,sum]
    }
    arr=[]
}

console.log(num[0])

