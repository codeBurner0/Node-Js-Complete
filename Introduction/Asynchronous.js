
//

/* 
 Disadvantage
    when your result depend on some variable
    
*/
var a=45;
console.log(a);
setTimeout(()=>{
    a=40;
    console.log(a);
});
console.log(a);