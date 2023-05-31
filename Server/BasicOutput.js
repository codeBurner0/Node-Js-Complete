const app=require('http');
app.createServer((req,res)=>{
    res.write("Hello");
    res.end()
})

//pass html elements

app.createServer((req,res)=>{
    res.write("<h1>Hello! Ankit Anand</h1>")
    res.end();
})

// pass as a function

const fn=(req,res)=>{
    res.write("HELLO WORLD");
    res.end()
}
app.createServer(fn).listen(3000)