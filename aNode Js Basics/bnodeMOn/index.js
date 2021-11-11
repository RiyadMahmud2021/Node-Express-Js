const http = require('http');
const port = 4000;      
const hostName = '127.0.0.1';
// const hostName = 'riyadmahmud.com' // not valid 

const myServer = http.createServer((req, res)=>{
    res.end("<h1> Hello, I am from your server... </h1>")
})

myServer.listen(port, hostName,()=>{ 
    console.log(`Your server is running successfully at http://${hostName}:${port}`);
})