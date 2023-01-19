const request = require("request");
const url = process.argv.slice(2)[0];
const downloadPath = process.argv.slice(2)[1];
const fs = require("fs");

console.log(`Dowload Path is: ${downloadPath}`);
request(url, (error, response, body) => {
  console.log('error', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body', body);
  fs.writeFile(downloadPath, body, err => {
    if(!err) {
      console.log(`Downloaded and saved ${body.length} bytes to ${downloadPath}`);
    } else {
      console.log (`ERROR`);
    }
  })

});