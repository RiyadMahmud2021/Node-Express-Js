
// // ----------------------Ex:1----------------
// const http = require('http');
// const port = 4000;      
// const hostName = '127.0.0.1';
// // const hostName = 'riyadmahmud.com' // not valid 

// const myServer = http.createServer((req, res)=>{
//     res.writeHead(202, {'Content-Type' : 'text/plain'}); // Can define our content type
//     res.write("<h1> Hello, I am from your server. </h1>"); 
//     res.end();
// })

// myServer.listen(port, hostName,()=>{ 
//     console.log(`Your server is running successfully at http://${hostName}:${port}`);
// })
// // ----------------------Ex:1----------------


// ----------------------Ex:2-------------------
const http = require('http');
const port = 4000;      
const hostName = '127.0.0.1';
// const hostName = 'riyadmahmud.com' // not valid 

const myServer = http.createServer((req, res)=>{
    res.writeHead(202, {'Content-Type' : 'text/html'}); // Can define our content type 
                                            // Status code setting 
                                            // Response Heading Part
    res.write("<h1> Hello, I am from your server. </h1>"); // Response Body Part 0 
    res.write("<h1> Hello, I am from your server. (1) </h1>"); // Response Body Part 1 
    res.end();
})

myServer.listen(port, hostName,()=>{ 
    console.log(`Your server is running successfully at http://${hostName}:${port}`);
})
// ----------------------Ex:2-------------------
