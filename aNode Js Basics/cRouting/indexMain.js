const http = require('http');
const fs = require('fs');
const port = 3000; 
const hostName = '127.0.0.1'; 

const createdServer = http.createServer((req,res)=>{
    // console.log(req.url); // al url may be visible in console
    handleReadFile = (statusCode,fileLocation) =>{
        fs.readFile(fileLocation, (err, data) =>{ // left parameter must be "any name" but "error option"
            // right parameter must be "any name" but "success option"
        res.writeHead(statusCode, {"Content-Type": "text/html"});
        res.write(data);
        res.end(); 
 });
};
      

    if(req.url === "/"){
        handleReadFile(200,"./views/index.html");
      } 
    else if(req.url === "/about"){
        handleReadFile(200,"./views/about.html"); 
    }
    else if(req.url === "/contact"){
        handleReadFile(200,"./views/contact.html");   
    }
    else{
        handleReadFile(200,"./views/error.html");
    }
}); 

createdServer.listen(port, hostName, ()=>{
    console.log(`Your server is running successfully at http://${hostName}:${port}`);
}); 