const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const [M,N,K]=input.shift().map(Number)
input=input.map(v=>v.map(Number))
const rectangle = new Array(M)
const visited = Array.from(Array(Number(M)), () => Array(Number(N)).fill(false));

let cnt=0
for (var i = 0; i < M; i++) {
    rectangle[i] = new Array(N).fill(0);
  }

while(input.length!==0){
    const [lx,ly,rx,ry]=input.shift()
    const dx= rx-lx
    const dy=ry-ly
    cnt++
    for(let i=M-ly-1; M-ry-1<i; i--){
        for(let j=lx; j <rx ;j++){
            rectangle[i][j]=1
        }
    }
}


const ans=[]
const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]];
const queue=[]
const bfs=(i,j)=>{
    const queue = [[i, j]];
    visited[i][j]=true
    let num=0
    while (queue.length) {
        const [cx, cy] = queue.shift();
        num++
        for (let k = 0; k < 4; k++) {
          const nx = cx + dir[k][0];
          const ny = cy + dir[k][1];
          if (nx >= 0 && nx < M && ny >= 0 && ny < N && rectangle[nx][ny] ===0 &&!visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    ans.push(num)
}


for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]&&rectangle[i][j]===0) {
        bfs(i, j)
        };
    }
  }
  ans.sort((a,b)=>a-b)
  let answer = ans.length + '\n' + ans.join(' ');
  console.log(answer)

