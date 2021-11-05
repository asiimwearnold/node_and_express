const http = require('http')

const server = http.createServer((req, res) =>
{
    if (req.url === '/')
    {
        res.write('welcome to our home page')
        res.end()
 }
    if (req.url === '/about')
    {
       res.end('here is the about page')
    }
    
})

server.listen(5000)