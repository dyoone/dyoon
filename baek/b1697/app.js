const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const visited = new Array(1000000).fill(false)

const bfs=(start)=>{
    que=[[start,0]]
    while(que.length){
        let [cur, time]=que.shift()
        if (cur === input[1]) return time;
        for (next of [cur - 1, cur + 1, cur * 2]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
              visited[next] = 1;
              que.push([next, time + 1]);
            }
          }
    }
}

console.log(bfs(input[0]))
