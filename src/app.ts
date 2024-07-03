import http, { Server } from 'http'

const PORT = process.env.PORT || 8080;

const server : Server = http.createServer((req,res) : void =>{
  if(req.method === 'GET'){
    if(req.url === '/') {
      res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
      res.end(`<h1>Hellow There!</h1>`)
    } else if (req.url === '/favicon.ico') {
      res.writeHead(204,{"Content-Type":"img/ico"});
      res.end();
    } else {
      res.writeHead(404,{"Content-Type":"text/plain"});
      res.end('404 - Not Found');
    }
  } else {
    res.writeHead(405, {"Content-Type":"text/plain"});
    res.end('405 method not allowed');
  }
});

server.listen(PORT,() : void =>{
  console.log(`http://localhost:${PORT}`);
});