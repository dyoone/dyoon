const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
let [A,B] = input
A=A.map(Number)
let [M,N] = A
B=B.map(Number).sort((a,b)=>a-b)
let plus = B.filter(a=>a>0)
let minus = B.filter(a=>a<0)
let plen=plus.length-1
let mlen=minus.length-1
let count2=0
solution()
function solution() {
    let answer = 0;
    if(plus.length===B.length){
        answer += plus[plen]
        while(true){
            plen=plen-N
            if(plen<0){
                break
            }else if(plen>=0) answer +=2*plus[plen]
        }
    }
    if(minus.length===B.length){
        answer += Math.abs(minus[count2])
        while(true){
            count2=count2+N
            if(count2>=minus.length){
                break
            } else answer +=Math.abs(2*minus[count2])

        }
    }
    if(Math.abs(plus[plen])>Math.abs(minus[0])){
        answer += plus[plen]
        while(true){
            plen=plen-N
            if(plen<0){                
                break
            }else if(plen>=0) {answer +=2*plus[plen]}
        }
        while(true){
            answer +=Math.abs(2*minus[count2])
            count2=count2+N
            if(count2>=minus.length){
                break
            }
        }
    } else if(Math.abs(plus[plen])<Math.abs(minus[0])){
        answer += Math.abs(minus[count2])
        while(true){
            count2=count2+N
            if(count2>=minus.length){
                break
            } else answer +=Math.abs(2*minus[count2])

        }
        while(true){
            if(plen>=0) answer +=2*plus[plen]
            plen=plen-N
            if(plen<0){break}
        }
    }
    console.log(answer)
}