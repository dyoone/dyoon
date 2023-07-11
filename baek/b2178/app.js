const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
const [n,m]=input.shift().map(Number)

let map = input.map(v=>v.map(a=>a.split(''))).flat()

const bfs = (x,y,cnt) =>{
    map[x][y]='0'
    let que = [[x,y,cnt]]
    const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]]; // 인접한 상하좌우 x,y좌표
    while(que.length){
        let [cx,cy,cnt] = que.shift()
        for(let i=0; i<4; i++){
            const nx = cx + dir[i][0];
            const ny = cy + dir[i][1];
            if(nx>=0 && nx<n && ny>=0 &&ny<m && map[nx][ny] ==='1' ){
                map[nx][ny]='0' //방문처리
                cnt++
                que.push([nx,ny,cnt])
                if(nx===n-1&&ny===m-1){
                    console.log(cnt)
                }
            }
        }

    }
}

bfs(0,0,1)
