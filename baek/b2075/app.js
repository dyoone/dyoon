const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)
const N = input.shift()
class MinHeap{
    constructor(){
        this.heap=[];
    }

    size(){
        return this.heap.length
    }
    _swap(a,b){
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]] 
    }

    push(v){
        this.heap.push(v);
        let current = this.heap.length-1;
        let parent = Math.floor((current-1)/2);
        while(parent>0&&this.heap[current]<this.heap[parent]){
                this._swap(current,parent);
                current=parent;
                parent=Math.floor((current-1)/2);
        };
    }



    delete(){
        const min = this.heap[0];
        let value = this.heap.pop();
        this.heap[0] = value;
        let lastIdx=this.heap.length-1
        let idx=0;

        while(idx<lastIdx){
            let leftChild = 2*idx+1;
            let rightChild = 2*idx+2;
            if(lastIdx<leftChild) break;
            if(lastIdx<rightChild){
                if(this.heap[leftChild]<this.heap[idx]){
                    this._swap(leftChild,idx);
                    idx=leftChild;
                }
                else break;
            }
            if(rightChild<=lastIdx){
                if(this.heap[leftChild]<this.heap[idx]&&this.heap[rightChild]<this.heap[idx]){
                    if(this.heap[leftChild]<this.heap[rightChild]){
                        this._swap(leftChild,idx);
                        idx=leftChild;
                    }
                    else if( this.heap[rightChild]<this.heap[leftChild]){
                        this._swap(rightChild,idx);
                        idx=rightChild;
                    }
                }
                else if(this.heap[rightChild]<this.heap[idx]){
                    this._swap(rightChild,idx);
                    idx=rightChild;
                }
                else if(this.heap[leftChild]<this.heap[idx]){
                    this._swap(leftChild,idx);
                    idx=leftChild;
                }
                else if(this.heap[leftChild]>=this.heap[idx]&&this.heap[rightChild]>=this.heap[idx]){
                    break;
                }
            }
        }
        return min;
    }    
}
const minHeap = new MinHeap()

for(let i =0; i<input.length; i++){
    minHeap.push(input[i])
    if(minHeap.size()>N){
        minHeap.delete();
    }
}

console.log(minHeap.delete())
