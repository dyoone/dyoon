const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' '))
let [n,arr]=input
n=n.map(Number)
arr=arr.map(Number)

solution(n,arr)

function solution(n,arr){
    let max= arr[0];
    for(let i=1; i<n; i++){
        if(arr[i-1]>0&& arr[i]+arr[i-1]>0){
            arr[i]+=arr[i-1];
        }

        if(max <arr[i]){
            max=arr[i]
        }
    }
    console.log(max)
}