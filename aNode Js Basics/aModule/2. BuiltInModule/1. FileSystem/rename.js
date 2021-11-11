const fs = require('fs');

fs.rename("demo1.txt", 'demo2.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("renamed")
    }
})