const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
input=input.map(v=>v.map(Number))
const N = input.shift()
for(let i=0; i<N; i++){
 const[condition,order]=input.splice(0,2)
 let [num,target] = condition
 let flag=true
 cnt=0
 while(flag){
  if(order[0]===Math.max(...order)){
    if(target!==0){
      order.shift()
      target--
      cnt++
    } else if( target===0){
      cnt++
      flag=false
    }
  }else if(order[0]!==Math.max(...order)){
    if(target===0){
      target=order.length-1
    } else if(target!==0){
      target--
    }    
    order.push(order.shift())
  }
 }
 console.log(cnt)
}