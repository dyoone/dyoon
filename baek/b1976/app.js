const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map(x => x.replace('\r', '')).map(v => v.split(' '));
input=input.map(v=>v.map(Number))
const n = input[0][0]
const m = input[1][0]
const city = input.slice(2, 2 + n)
const course=input.slice(n+2).flat()

let arr= new Array(n+1)
for(let i=1; i<=n; i++){
    arr[i] = i
}

// 최상위 부모 노드를 찾는 재귀 함수
function getParent(x) {
    if (arr[x] === x) return x;
  
    return (arr[x] = getParent(arr[x]));
  }
  
  // 두 개의 노드를 같은 부모 노드로 병합하는 함수
function unionParent(a, b) {
    a = getParent(a);
    b = getParent(b);
  
    // 두 노드 중 부모 노드 값이 더 작은 값으로 합친다
    if (a < b) arr[b] = a;
    else arr[a] = b;
  }
  
  // 2개의 노드가 같은 부모 노드를 가졌는지 확인하는 함수
function findeParent(a, b) {
    a = getParent(a);
    b = getParent(b);
  
    if (a === b) return true;
    else return false;
  }

for(let i=0; i<n;i++){
    for(let j=0; j<n;j++){
        if(city[i][j]===1){
            unionParent(i+1,j+1)
        }
    }
}

for(let i=1; i<m; i++){
    if(!findeParent(course[i-1], course[i])){
        console.log('NO')
        return
    }
}

console.log('YES')