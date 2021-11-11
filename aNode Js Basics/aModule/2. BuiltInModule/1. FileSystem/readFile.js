const fs = require('fs');

fs.readFile('Riyad.md', 'utf-8', (err, data) =>{ // Here, callback desides input error or not. 
                                // In (err) parameter contains any error news, otherwise not error.(callback)
                                // If no error data will pass must.   
    if(err){
        console.log(err);
    }
    else{ 
        console.log(data);
    }
})