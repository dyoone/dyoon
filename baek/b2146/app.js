const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).map(v=>v.map(Number))
const [n] = input.shift()
answer=Number.MAX_VALUE
let visited=Array.from({ length:n }, ()=>Array(n).fill(false))
let border=[]
const bfs=(i,j,k)=>{
    que=[]
    que.push([i,j,k])
    const dx=[0,0,1,-1]
    const dy=[1,-1,0,0]
    while(que.length){
        let [cx,cy,cnt]=que.pop()
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
            k++
        }
    }
}


const sol=(x,y,num,len)=>{
    que=[]
    que.push([x,y,num,len])
    let visited=Array.from({ length:n }, ()=>Array(n).fill(false))
    const dx=[0,0,1,-1]
    const dy=[1,-1,0,0]
    while(que.length){
        let [cx,cy,num,len]=que.pop()
        for(let r=0; r<4; r++){
            const nx=cx+dx[r]
            const ny=cy+dy[r]
            if(nx>=0&&nx<n&&ny>=0&&ny<n&&!visited[nx][ny]&&input[nx][ny]===0){
                visited[nx][ny]=true
                console.log(nx,ny,len,input[nx][ny])
                que.push([nx,ny,num,len+1])
            }
            if(nx>=0&&nx<n&&ny>=0&&ny<n&&!visited[nx][ny]&&input[nx][ny]!==0&&input[nx][ny]!==num){
                console.log(len)
                answer = Math.min(answer, len);
                return
            }
        }
    }
}

 console.log(sol(3,0,1,1))

