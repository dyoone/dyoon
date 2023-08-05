const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).map(v=>v.map(Number))
const [C] = input.shift()
let arr=[]
let visited=[]
let cnt=0


const dfs=(r,s,M,N)=>{
    dx=[0,0,1,-1]
    dy=[1,-1,0,0]
    let que=[]
    que.push([r,s])
    while(que.length){
        [cx,cy]=que.pop()
        for(let t=0; t<4; t++){
            nx=cx+dx[t]
            ny=cy+dy[t]
            if(nx>=0&&ny>=0&&nx<M&&ny<N&&arr[nx][ny]===1){
                arr[nx][ny]=0
                que.push([nx,ny])
            }
        }
    }
}

for(let i=0; i<C; i++){
    cnt=0
    let [M,N,K]=input.shift()
    arr=new Array(M).fill([]).map(v=>new Array(N).fill(0))
        for(let j=0; j<K; j++){
            [x,y]=input.shift()
            arr[x][y]=1
        }

        for(let r=0; r<M;   r++){
            for(let s=0; s<N; s++){
                if(arr[r][s]===1){
                    dfs(r,s,M,N)
                    cnt++
                }
            }
        }

    console.log(cnt)
}