// Find Any file, there it is or not

const fs = require('fs');

fs.exists('demo2.txt', (result)=>{  
    if(result){
        console.log("Found");
    }
    else{
        console.log("Not found"); 
    } 
})      