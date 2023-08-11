const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input= input.map(x=>x.replace("\r", ""))
const n = +input[0]

class Node {
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null
    }
}

class LinkedList {
    constructor(){
        this.head=null
        this.tail=null
        this.size=0;
    }

    add(value){
       const newNode = new Node(value);
       if(!this.head){
            this.head=newNode
       } else if(this.head){
            newNode.prev=this.tail
            this.tail.next=newNode
       }
       this.tail=newNode;
       this.size++;
       return newNode
    }
    
    getHead(){
        return this.head.value
    }

    removeHead(){
        this.head=this.head.next;
        this.prev=null;
        this.size--
    }

    getSize(){
        return this.size
    }
}

const linkedList = new LinkedList();

for(let i=1; i<=n; i++){
    linkedList.add(i)
}


while(true){
    if(linkedList.size === 1) break
    linkedList.removeHead()
    linkedList.add(linkedList.getHead())
    linkedList.removeHead()
}

console.log(linkedList.getHead())