
const http=require("http")
const fs=require("fs")
const port=8000
const hostName="127.0.0.1"
const server=http.createServer((req,res)=>{
    const {method,url}=req
    console.log(method,url);
    if(method=="GET"){
     if(url=="/"){
         let data=fs.readFileSync("./public/html/index.html","utf-8")
         res.write(data)
         res.end()
     }
     if(url=="/style"){
         let data=fs.readFileSync("./public/css/index.css","utf-8")
         res.write(data)
         res.end()
     }
     if(url=="/dhoniimage"){
         let data=fs.readFileSync("./public/imges/dhoni1.jpeg")
         res.write(data)
         res.end()
     }
     if(url=="/about"){
         let data=fs.readFileSync("./public/html/sbout.html","utf-8")
         res.write(data)
         res.end()
     }
     if(url=="/contact"){
         let data=fs.readFileSync("./public/html/contact.html","utf-8")
         res.write(data)
         res.end()
     }
     if(url=="/signup"){
         let data=fs.readFileSync("./public/html/signup.html","utf-8")
         res.write(data)
         res.end()
     }
    }
})
// server.listen(4000)
   server.listen(port,hostName,()=>{
    console.log(`server started at http://${hostName}:${port}`);
    console.log("server started at " + " http://" +hostName+":"+port);
   })