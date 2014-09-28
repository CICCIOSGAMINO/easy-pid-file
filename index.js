module.exports = function(path){

    var fs = require('fs');
    var writed = true;
    try{

        fs.writeFileSync(path, process.pid ,{flag : 'w+'});

    }catch(exception){
        writed = false;
    }

    // method returned (can be used in the main.js file )
    return {
        getPath : function() {return path},
        getState : function() {return writed}
    }

}
