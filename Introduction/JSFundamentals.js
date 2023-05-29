/* 

const a=40;
a=90;  // TypeError: Assignment to constant variable.
console.log(a)



var a='5';
if(a==5){
    console.log("yes")  //yes
}else{
    console.log("NO")
}
if(a===5){
    console.log("Yes")
}else{
    console.log("NO")   //no
}



let arr=[1,2,34,5,6,7]

console.log(arr.filter((e)=>{
    return e>3;
})) //[ 34, 5, 6, 7 ]

console.log(arr.map((e)=>{
    return e>3;
})) //[ false, false, true, true, true, true ]

console.log(arr.map((e)=>{
    return e;
})) //[ 1, 2, 34, 5, 6, 7 ]

console.log(arr.reduce((acc,item)=>{
    return acc+item;
})) //55

const res=arr.reduce(function(acc,item){
    return acc+item;
},100);
console.log(res) //155

*/


