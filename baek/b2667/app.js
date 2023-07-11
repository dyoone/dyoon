const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const N=input.shift()
input=input.map(v=>v.map(a=>a.split(''))).flat()
const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]];
const visited = Array.from(Array(Number(N)), () => Array(Number(N)).fill(false));
let total = 0
let cnt = []
solution()

function solution(){
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
              
              if (nx >= 0 && nx < N && ny >= 0 && ny < N && input[nx][ny] === '1'&&!visited[nx][ny]) {
                visited[nx][ny] = true; // 방문 처리
                queue.push([nx, ny]);
              }
            }
          }
        total++
        cnt.push(num)
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (!visited[i][j]&&input[i][j]==='1') {
            bfs(i, j)
            };
        }
      }
    cnt.sort((a,b)=>a-b)
    cnt.unshift(total)
    cnt.forEach(v=>console.log(v))
}