var fileSys = require('fs');

fileSys.readFile('./app/data/friends.json', function(err, data) {
    if (err) throw err;
    console.log(data);
})