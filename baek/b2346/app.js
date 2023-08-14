const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat()
const n =input.shift()
input=input.map(Number)
let arr=new Array(+n).fill(1).map((v,i)=>[v+i,false])
ans=[]
class Node {
    constructor(val){
        this.value=val;
        this.next=null;
        this.prev=null;
    }
}

class ballon{
    constructor(){
        this.first=null;
        this.last=null;
        this._size=0;
    }

    add(val){
        const newNode =new Node(val)
        if(this.first===null){
            this.first=newNode
        } else if(this.first){
            this.last.next=newNode
            newNode.prev=this.last
        }
        this.last=newNode
        
    }

    delete(){
        const temp=this.first.value
        if(this.first==this.last){
            this.first=null;
            this.last=null
        } else if(this.first!==this.last){
            this.first=this.first.next
            this.first.prev=null
        }
        this._size--
        return temp
    }

    setSize(){
        this._size++
    }
    getSize(){
        return this._size
    }
}

const my_ballon=new ballon();

my_ballon.add(1);
my_ballon.setSize();
let i = 0;
let j=1;
arr[0][1]=true


while(j!==+n){
    let move=input[i]; 
    j++;
    if(move>0){
        while(move>0){
            if(arr[i+1]){
                if(arr[i+1][1]===false){
                    move--;
                    i++;
                    if(move===0){
                        arr[i][1]=true;
                    }
                } else if(arr[i+1][1]===true){
                    if(i!==n-1){
                        i++
                    }
                }
            }
            if(!arr[i+1]){
                i=-1
            }
        }
    }

    if(move<0){
        while(move<0){
                if(arr[i-1]){
                    if(arr[i-1][1]===false){
                        move++;
                        i--;
                        if(move===0){
                            arr[i][1]=true;
                        }
                    } else if(arr[i-1][1]===true){
                        if(i!==0){
                            i--
                        }
                    }
                }
                if(!arr[i-1]){
                    i=n
                }
        }
    }
    my_ballon.add(arr[i][0])
    my_ballon.setSize()
}

while(my_ballon.getSize()>0){
    console.log(my_ballon.delete())
}