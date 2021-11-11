const http = require('http');
const fs = require('fs');
const port = 3000; 
const hostName = '127.0.0.1'; 

const createdServer = http.createServer((req,res)=>{ 
    // console.log(req.url); // al url may be visible in console
    if(req.url === "/"){
      fs.readFile("./views/index.html", (err, data) =>{ // left parameter must be "any name" but "error option"
                            // right parameter must be "any name" but "success option"
          res.writeHead(200, {"Content-Type": "text/html"});
          res.write(data);
          res.end();
      })   
    }
    else if(req.url === "/about"){
        fs.readFile("./views/about.html", (err, data) =>{ // left parameter must be "any name" but "error option"
                              // right parameter must be "any name" but "success option"
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })   
    }
    else if(req.url === "/contact"){
        fs.readFile("./views/contact.html", (err, data) =>{ // left parameter must be "any name" but "error option"
                              // right parameter must be "any name" but "success option"
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })   
    }
    else{
        fs.readFile("./views/error.html", (err, data) =>{ // left parameter must be "any name" but "error option"
                              // right parameter must be "any name" but "success option"
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })   
    }
});

createdServer.listen(port, hostName, ()=>{
    console.log(`Your server is running successfully at http://${hostName}:${port}`);
}); 