const fs = require('fs');
const { deprecate } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
input=input.map(v=>v.map(Number))

const n = +input.shift();
const graph = Array.from({ length: n + 1 }).map(() => []);

const [person1, person2] = input.shift()
const m = +input.shift();


for (let i = 0; i < m; i++) {
    const [x, y] = input[i];
    graph[x].push(y);
    graph[y].push(x);
}
arr=[]
const bfs=(start,target,cnt)=>{
    const visited = Array(n + 1).fill(false);
    visited[start] = true;
    const que = [[start, target,cnt]];
    while(que.length){
        let [cr,end,cnt]=que.shift();
        const family=graph[cr]
        if(!family.includes(end)){
            for(let i=0; i<family.length; i++){
                if(!visited[family[i]]){
                    que.push([family[i],end,cnt+1])
                    visited[family[i]] =true
                }
            }
        } else if(family.includes(end)){
            arr.push(cnt)
            break
        }

    }
    arr.length === 0 ? arr.push(-1) : undefined
}

bfs(person1,person2,1)
console.log(arr[0])