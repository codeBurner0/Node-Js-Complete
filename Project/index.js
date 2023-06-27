const strtoNum = "1,4-6.7>89+3cchc080.9";

// function sumOfNumbers( strofNum ){
  
// }

// const sum = sumofNumbers(strtoNum);
// console.log(sum);
let sum=0;
for(let i=0;i<strtoNum.length;i++){
        sum+=strtoNum.charCodeAt(strtoNum[i]);
}
console.log(sum)