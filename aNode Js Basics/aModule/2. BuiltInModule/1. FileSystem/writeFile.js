const fs = require('fs');

fs.writeFile('Riyad.md', "# Hi, I am Riyad Mahmud", (err) =>{ // Here, callback desides input error or not. 
                                // In (err) parameter contains any error news, otherwise not error.(callback)
                                // error থাকলে err paramer হএ আসবে, আর না থাকলে কিছুই pass হবে না  
    if(err){
        console.log(err);
    }
    else{
        console.log("Successful");
    }
})
