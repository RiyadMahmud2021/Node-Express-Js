const fs = require('fs');

fs.unlink('Riyad.txt', (result)=>{
    if(result){
        console.log("successfully deleted");
    }else{
        console.log("successfully not deleted")
    }
})
