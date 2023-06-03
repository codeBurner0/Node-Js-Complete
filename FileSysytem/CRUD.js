const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname);

//create file
fs.writeFileSync(`${dirpath}/Files/Crud1.txt`,"pass any text");//synchronous
fs.writeFile(`${dirpath}/Files/Crud2.txt`,"pass any text",(err,item)=>{
    console.log("file is created");
});

//read file
const a=fs.readFileSync(`${dirpath}/Files/Crud1.txt`,'utf8')
console.log(a)
fs.readFile(`${dirpath}/Files/Crud2.txt`,'utf8',(err,item)=>{
    console.log(item)
})

//update file
fs.appendFileSync(`${dirpath}/Files/Crud1.txt`,"\nThis is Appended data")
fs.appendFile(`${dirpath}/Files/Crud1.txt`,"\nThis is Appended data",()=>{
    console.log("File is appended");
})

//rename file
fs.rename(`${dirpath}/Files/Crud1.txt`,`${dirpath}/Files/CRUDFile1.txt`,()=>{
    console.log("File renamed")
})


//delete a file
fs.unlinkSync(`${dirpath}/Files/Crud2.txt`)