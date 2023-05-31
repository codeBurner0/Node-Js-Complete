/* 
set input from command line
create file with input
delete the file with input
*/

const fs=require('fs');
const operation=process.argv[2]
const fileName=process.argv[3];
const fileData=process.argv[4];
if(operation==='add'){
    fs.writeFileSync(fileName,fileData)
}else if(operation==='remove'){
    fs.unlinkSync(fileName);
}
    