/* 
make a server
create header
create api with static data
put data in another file
*/

const data=require('./data')
const http=require('http')
const statuscode=200;

http.createServer((req,res)=>{
    res.writeHead(statuscode,'content-type:application\json');
    res.write(JSON.stringify(data));
    res.end()
}).listen(3000)