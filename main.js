var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");

fs.open('input.txt','r',function(err,fd)){
  if(err){
     return console.error(err);
  }
  var buff = new Buffer(1000);
  fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {

                            if (err) throw err;

                            // Print only read bytes to avoid junk.
                            if (bytes > 0) {
            console.log(buffr.slice(0, bytes).toString());
  }
}
