const fs = require('fs');

fs.appendFile('Riyad.md', "# How are you???", (err) =>{ // Here, callback desides input error or not. 
                                // In (err) parameter contains any error news, otherwise not error.(callback)
                                // error থাকলে err paramer হএ আসবে, আর না থাকলে কিছুই pass হবে না  
    if(err){
        console.log(err); 
    }
    else{
        console.log("Successful");
    }
})
