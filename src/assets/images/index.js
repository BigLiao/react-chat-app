const fs = require('fs');

fs.readdir('./', function (err, paths) {
  console.log(paths);
})