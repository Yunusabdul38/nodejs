const http = require('http')
const port = 3000, fs = require('fs')

const server = http.createServer(function(req, res){
    // res.write("Hellow world")
    res.writeHead(200, {'content-type':"text/html"})
    fs.readFile('index.html', function(error,data){
        if(error){
            res.writeHead(404)
            res.write("Error: file not found")
        }else{
            res.write(data)
        }
        res.end()
    })
    
})
server.listen(port, function(error){
    if(error){
        console.log(`something went wrong, ${error}`)
    }else{
        console.log(`server is listening on port ${port}`)
    }
})