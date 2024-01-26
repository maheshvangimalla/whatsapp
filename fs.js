const FS = require("fs")
  
//sync method for creating

let data = FS.readFileSync("./ex.txt")////////read data from different file
console.log(data .toString())

FS. writeFileSync("./demo.txt","this is text")///// here creating file and giving data
FS.writeFileSync("./demo.html",'<h1>hello</h1>')

FS.appendFileSync("./demo.txt","practice node")///////we are adding data to existing file
// FS.unlinkSync('./demo4.html')/////// we are deleting n file .....

FS.renameSync('./ex.txt',"./mahesh.txt")/////rename file name......

