const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(x=>x.replace("\r", "")).map(v=>v.split(' ')).flat()
const n = parseInt(input[0]);
const m = parseInt(input[1]);
const s = input[2].split('');
let result = 0; // 최종 값
let patternCnt = 0; // `IOI` 패턴 연속 횟수
for (let i = 1; i < m - 1; i++) {
    if (s[i - 1] === 'I' && s[i] === 'O' && s[i + 1] === 'I') {
        patternCnt++;
        if (patternCnt === n) {
            patternCnt--;
            result++;
        }
        i++;
    } else {
        patternCnt = 0;
    }
}
console.log(result)