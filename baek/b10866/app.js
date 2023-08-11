const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
[N,K] = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat().map(Number)

class Node{
    constructor(val){
        this.value=val;
        this.prev=null;
        this.next=null
    }
}


class Deque{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size = 0
    }

    push_front(){
        const node = new Node(num)
        if(this.head===null){
            this.head = node
            this.tail = node
        } else if( this.head!==null){
            node.next=this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    push_back(){
        const node = new Node(num)
        if(this.size===0){
            this.head=node
            this.tail=node
        } else {
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }

    pop_front(){
        if(this.size()===0){
            return -1
        } else if( this.size()===1){
            const popItem=this.head.val
            this.head=null
            this.tail=null
            this.size --
            return popItem
        } else if( this.size()===2){
            const popItem=this.head.val
            this.head=this.head.next
            this.head.prev=null
            this.size--
            return popItem
        } else if( this.size()>2){
            const popItem=this.head.val
            this.head=this.head.next
            this.size--
            this.head.prev=null
            return popItem
        }
 
    }

    pop_back(){
        if(this.size()===0){ return -1}
        else if(this.size()===1){
            const popItem= this.tail
            this.head=null;
            this.tail=null;
            this.size--
            return popItem
        } else if(this.size()===2){
            const popItem= this.tail
            this.tail=this.tail.prev;
            this.head.next=null;
            this.size--
            return popItem
        } else if(this.size()>2){
            const popItem= this.tail
            this.tail.next=null
            this.tail=this.tail.tail.prev
            this.size--
            return popItem
        }

    }

    size(){
        return this.size;
    }
    
    empty(){
        if(this.size===0){ return 1 }
        if(this.size!==0){ return 0 }
    }

    front(){
        return this.size() ? this.head.value : -1
    }

    back(){
        return this.size() ? this.tail.value : -1
    }
}