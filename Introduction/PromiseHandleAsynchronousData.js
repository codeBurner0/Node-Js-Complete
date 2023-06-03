let a =45;
let b=30;
console.log(a+b)
const data=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(a=40);
    },2000);
})

data.then((item)=>{
    console.log(item+b);
})