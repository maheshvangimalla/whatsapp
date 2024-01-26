const http=require("http")
const port=8000
const hostName="127.0.0.1"
const server=http.createServer((req,res)=>{
   let {url,method}=req
   if(method=="GET"){
    if(url=="/"){
        res.write("<h1>this is home page</h1>")
        res.end()
    }
    else if(url=="/about"){
        res.write("<h1>about page</h1>")
        res.end()
    }
    else if(url=="/blog"){
        res.write("<h1><marquee>BLOG PAGE</marquee></h1>")
    }
    else(
        res.write("<h1>404 erroe!!!page not pound</h1>")
    )

   }
})
// server.listen(4000)
   server.listen(port,hostName,()=>{
    console.log(`server started at http://${hostName}:${port}`);
    console.log("server started at " + " http://" +hostName+":"+port);
   })