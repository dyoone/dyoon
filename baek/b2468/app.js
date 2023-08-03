const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const N = +input[0]
const areas = input.slice(1).map(v=>v.map(a=>+a))

const offsetX = [0, 0, -1, 1];
const offsetY = [-1, 1, 0, 0];

const bfs = (x,y, height, visited)=>{
    offsetX.forEach((dx, i)=> {
        const nx = x + dx;
        const ny = y + offsetY[i];
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
          visited[nx][ny] = true;
          dfs(nx, ny, height, visited);
        }
      });
    }


for (let height = 0; height <=100; height++) {
    let count = 0;
    const visited = [...Array(N)].map((_, x) => [...Array(N)].map((_, y) => areas[x][y] <= height));
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if (!visited[i][j]) {
                visited[i][j] = true;
                bfs(i, j, height, visited);
                count++;
              }
        }
    }
    maxCount = Math.max(maxCount, count);
}
console.log(maxCount)


bfs =(a) =>{
  let  que=[]
  que.push(a)
  while(que.length){
    let node = que.shift()
    if(!visited[node]){
      visited[node]=true
      que.push(node)
    }
  }
}

for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    if(route[i][j]===1&&!visited[i][j]){
      bfs(node)
    }
  }
}