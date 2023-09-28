const http = require('http');

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/plain');

 
  if (req.url === '/profile') {
    res.end('This is the /profile page!\n');
  } else if (req.url === '/products') {
    res.end('This is the /products page!\n');
  } else if (req.url === '/cart') {
    res.end('This is the /cart page!\n');
  } else if (req.url === '/register') {
    res.end('This is the /register page!\n');
  } else if (req.url === '/login') {
    res.end('This is the /login page!\n');
  } else {

    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

const port = 8080; 
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
