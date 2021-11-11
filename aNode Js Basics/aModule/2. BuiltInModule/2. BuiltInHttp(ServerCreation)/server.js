// //--------------Rule:1------------------------
// const http = require('http');

// http.createServer((req, res)=>{
//     res.end("Hello, I am from your server.")
// }).listen(3000);
// //--------------Rule:1------------------------

// //--------------Rule:2------------------------
// const http = require('http');

// const myServer = http.createServer((req, res)=>{
//     res.end("Hello, I am from your server.")
// })

// myServer.listen(3000, ()=>{
//     console.log("Your server is running successfully at localhost:3000");
// })
// //--------------Rule:2------------------------

//--------------Rule:3------------------------
const http = require('http');
const port = 4000;      
const hostName = '127.0.0.1';
// const hostName = 'riyadmahmud.com' // not valid 

const myServer = http.createServer((req, res)=>{
    res.end("<h1> Hello, I am from your server. </h1>")
})

myServer.listen(port, hostName,()=>{ 
    console.log(`Your server is running successfully at http://${hostName}:${port}`);
})
//--------------Rule:3-------------------------