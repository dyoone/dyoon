   const { info } = require('console');
   const fs = require('fs');
   const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
   let input = fs.readFileSync(filePath).toString().split('\n');
   input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
   const [K,N] = input.shift().map(Number);
   input=input.flat().map(Number).sort((a,b)=>a-b)

   let start=1;
   let end=input[input.length-1];
   let answer=0

   while(start<=end){
   let mid=Math.floor((start+end)/2)
   let total=0;
   input.forEach(v=>{
      total+=Math.floor(v/mid)
   })
   if(total<N){
      end=mid-1
   } else if(total>=N){
      answer<mid ? (answer=mid) : undefined
      start=mid+1
   }
   }

   console.log(answer)
