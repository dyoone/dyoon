const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
solution();

function solution() {
  let n = Number(input[0][0]);
  let m = Number(input[1][0]);
  let graph = [...new Array(n + 1)].map(() => []);
  let visited = new Array(n + 1).fill(false);
  let ans = 0;

  for (let i = 2; i < m + 2; i++) {
    let start = Number(input[i][0]);
    let end = Number(input[i][1]);
    graph[start].push(end);
    graph[end].push(start);
  }

  visited[1] = true;

  function dfs(start) {
    for (let end of graph[start]) {
      if (!visited[end]) {
        visited[end] = true;
        ans++;
        dfs(end);
      }
    }
  }

  dfs(1);
  console.log(ans);
}
