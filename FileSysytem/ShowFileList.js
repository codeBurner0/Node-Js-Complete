/* 
make file in a folder
use path module
get file names and print
 */

const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'Files')//c:\Users\Ankit Anand\Desktop\Node Js Complete\FileSysytem\Files
for(let i=1;i<=5;i++){
    fs.writeFileSync(`${dirpath}/hello${i}.txt`,`This is file number ${i}`);//create five files in files folder
}
fs.readdir(dirpath,(err,items)=>{
    console.log(items);
})