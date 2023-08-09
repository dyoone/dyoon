const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).map(v=>v.map(Number))
const [n] = input.shift()
answer=Number.MAX_VALUE
let visited=Array.from({ length:n }, ()=>Array(n).fill(false))
let border=[]
const dx=[0,0,1,-1]
const dy=[1,-1,0,0]

const bfs=(i,j,k)=>{
    que=[]
    que.push([i,j,k])

    while(que.length){
        let [cx,cy,cnt]=que.shift()
        for(let r=0; r<4; r++){
            nx=cx+dx[r]
            ny=cy+dy[r]
            if(nx>=0&&nx<n&&ny>=0&&ny<n&&!visited[nx][ny]&&input[nx][ny]===1){
                visited[nx][ny]=true
                input[nx][ny]=k
                que.push([nx,ny,k])
            }
            if(nx>=0&&nx<n&&ny>=0&&ny<n&&!visited[nx][ny]&&input[nx][ny]===0){
                visited[nx][ny] = true
                border.push([nx,ny,k,1])
            }
        }
    }
}

let k=1
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(input[i][j]===1&&!visited[i][j]){
            bfs(i,j,k)
            input[i][j]=k
            k++
        }
    }
}



const sol = (x, y, num, len) => {
    que = [];
    que.push([x, y, num, len]);
    let visited = Array.from({ length: n }, () => Array(n).fill(false));
    while (que.length) {
        let [cx, cy, num, len] = que.shift();
        for (let r = 0; r < 4; r++) {
            let nx = cx + dx[r];
            let ny = cy + dy[r];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                if (input[nx][ny] === 0) {
                    que.push([nx, ny, num, len + 1]);
                } else if (input[nx][ny] !== num) {
                    answer = Math.min(answer, len);
                    return;
                }
            }
        }
    }
};


while(border.length){
    [x,y,num,len]=border.shift()
    sol(x,y,num,len)
}
console.log(answer)