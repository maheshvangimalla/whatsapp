const http=require("http")
let value=require("fs")
const server=http.createServer((request,response)=>{
    console.log(request.url)
    console.log(request.method)
    if(request.method=="GET"){
        if(request.url=="/"){
            response.write("hello from the backend server")///////// you can give brower http://localhost:4000
            response.end();
        }
        if(request.url=="/about"){
            response.write("this is about us page")////you can  give brower http://localhost:4000/about
            response.end()
        }
        if(request.url=="/contact"){
      let data= value.readFileSync('./mahesh.txt')
            response.write(data)
            response.end();
        }
         
    }
})
server.listen(4000)