const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const N = input.shift()


class MinHeap{
    constructor(){
        this.min_heap=[]
    }

    push(val){
        this.min_heap.push(val);
        let childIdx=this.min_heap.length-1;
        let childNode=this.min_heap[childIdx];

        while(childIdx>0){
            let parentIdx=Math.floor((childIdx-1)/2);
            let parentNode=this.min_heap[parentIdx];
            if(parentNode<childNode) break;
            this.min_heap[parentIdx]=childNode;
            this.min_heap[childIdx]=parentNode;
            childIdx=parentIdx;
        }
    }

    getLen(){
        return this.min_heap.length;
    }

    delete(){
        const min = this.min_heap[0];
        const end = this.min_heap.pop();
        if(this.min_heap.length>0){
            this.min_heap[0] = end;
            let idx=0;
            const length = this.min_heap.length;
            const element = this.min_heap[0];
            while(true){
                let leftIdx =  2*idx+1;
                let rightIdx = 2*idx+2;
                let left, right;
                let swap=null;
                if(leftIdx<length){
                    left= this.min_heap[leftIdx];
                    if(left<element){
                        swap = leftIdx
                    }
                }
                if(rightIdx<length){
                    right = this.min_heap[rightIdx];
                    if(
                        (swap===null&&right<element) ||
                        (swap !== null&&right<left)
                    ) {
                        swap = rightIdx
                    }
                }
                if(swap===null) break;
                this.min_heap[idx] = this.min_heap[swap];
                this.min_heap[swap] = element;
                idx = swap;
            }
        }
        return min
    }
}


class MaxHeap{
    constructor(){
        this.max_heap=[]
    }

    push(val){
        this.max_heap.push(val);
        let childIdx=this.max_heap.length-1;
        let childNode=this.max_heap[childIdx];

        while(childIdx>0){
            let parentIdx=Math.floor((childIdx-1)/2);
            let parentNode=this.max_heap[parentIdx];
            if(parentNode>=childNode) break;
            this.max_heap[parentIdx]=childNode;
            this.max_heap[childIdx]=parentNode;
            childIdx=parentIdx
        }
    }

    getLen(){
        return this.max_heap.length
    }

    delete(){
        const max = this.max_heap[0];
        const end = this.max_heap.pop();
        if(this.max_heap.length>0){
            this.max_heap[0] = end;
            let idx=0;
            const length = this.max_heap.length;
            const element = this.max_heap[0];
            while(true){
                let leftIdx =  2*idx+1;
                let rightIdx = 2*idx+2;
                let left, right;
                let swap=null;
                if(leftIdx<length){
                    left= this.max_heap[leftIdx];
                    if(left>element){
                        swap = leftIdx
                    }
                }
                if(rightIdx<length){
                    right = this.max_heap[rightIdx];
                    if(
                        (swap===null&&right>element) ||
                        (swap !== null&&right>left)
                    ) {
                        swap = rightIdx
                    }
                }
                if(swap===null) break;
                this.max_heap[idx] = this.max_heap[swap];
                this.max_heap[swap] = element;
                idx = swap;
            }
        }
        return max
    }
}

const minHeap = new MinHeap();
const maxHeap = new MaxHeap();
const answer=[input[0]];

maxHeap.push(input[0]);

for(let i=1; i<N; i++){
    if(input[i]>maxHeap.max_heap[0]) minHeap.push(input[i]);
    else maxHeap.push(input[i])


    if(minHeap.getLen()>maxHeap.getLen()){
        maxHeap.push(minHeap.delete());
    } else if (minHeap.getLen() + 1 < maxHeap.getLen()){
        minHeap.push(maxHeap.delete());
    }
    answer.push(maxHeap.max_heap[0]);
}

console.log(answer.join('\n'))

