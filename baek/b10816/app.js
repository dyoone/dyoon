const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
input=input.map(v=>v.map(Number))
const condition =input[1].sort((a,b)=>a-b)
const target=input[3]
const n=input[0]
const m=input[3]
const cnt={}
let ans=[]
condition.forEach(v=>{
    if(cnt[v]){
        cnt[v]+=1
    } else cnt[v]=1
})
target.forEach(e => {
    star=0;
    end=n-1
    result=0
    while(star<end){
        mid=(star+end)/2>>0
        if(e>condition[mid]){
            star=mid+1
        } else if(e<condition[mid]){
            end=mid-1
        } else if(e===condition[mid]){
            result=1
            break;
        }
    }
    if(result){
        ans.push(cnt[e])
    } else ans.push(0)
});

console.log(ans.join('\n'))
