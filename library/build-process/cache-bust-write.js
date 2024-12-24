var fs = require("fs");

let $filename = "library/build-process/cache-buster.php";
let data = "<?php define( 'CACHE_BUSTER', " + new Date().getTime() + " );\n";
  
fs.writeFile($filename, data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Cache buster written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync($filename, "utf8"));
  }
});