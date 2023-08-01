const { info } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
let num=input.flat().map(Number)
class MinHeap{
    constructor(){
        this.heap = [];
    }

    getLength = () =>{
        return this.heap.length
    }

    push = (node) => {
        this.heap.push(node);
        let i =this.heap.length-1;
        let parentI = Math.floor((i-1)/2);
        while(i>0&&this.heap[parentI]>this.heap[i]){
            this.swap(i,parentI);
            i=parentI;
            parentI = Math.floor((i-1)/2)
        }
    }

    pop = () =>{
        if(this.heap.length === 1){
            return this.heap.pop();
        }

        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i=0;
        while(true){
            const leftI = i*2 +1,
                  rightI = i*2 +2;
            if(leftI >=this.heap.size){
                    break;
            }
            let nextI = i;
            if(this.heap[nextI]>this.heap[leftI]){
                nextI = leftI;
            }
            if(rightI < this.heap.length && this.heap[nextI]>this.heap[rightI]){
                nextI = rightI
            }
            if(nextI===i){
                break;
            }
            this.swap(i, nextI);
            i = nextI;
        }
        return result
    };

    swap = (a,b) =>{
        const temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp; 
    }
}

const n = num.shift();
const minHeap=new MinHeap();

for(let i=0;i<n;i++){
    minHeap.push(num[i])
}

let totalCompareCnt=0;
while(minHeap.getLength()>1){
    let aCnt = minHeap.pop();
    let bCnt = minHeap.pop();
    let compareCnt = aCnt + bCnt;
    totalCompareCnt += compareCnt;
    minHeap.push(compareCnt)
}

console.log(totalCompareCnt)