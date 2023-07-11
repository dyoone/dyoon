const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
input=input.map(v=>v.map(Number))
const [N] = input.shift()
solution()
function solution() {
    for(let i=0; i<2*N; i+=2){
        const[total,arr]=input.slice(i,i+2)
        const visited=new Array(total[0]).fill(false)
        let answer=0;
        const dfs =(cicyle,v,i)=>{
            if(!visited[i]){
                    cicyle.push(v)
                    visited[i] = true
                    if(!visited[v-1]){
                        dfs(cicyle,arr[v-1],v-1)
                    } else if(visited[v-1]&&cicyle.includes(arr[v-1])){
                        return answer++
                    }
    
            }
        }
        arr.forEach((v,i)=>{
            let cicyle=[]
            dfs(cicyle,v,i)
        })
        console.log(answer)
    }
}





