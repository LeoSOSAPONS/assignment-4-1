const http = require('http');

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/profile') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the /profile page!\n');
  } else if (req.url === '/products') {
    
    const urlParts = req.url.split('?');
    if (urlParts.length > 1) {
      const queryString = urlParts[1];
      const searchParam = new URLSearchParams(queryString).get('search');

   
      const acceptableProducts = ['Milk', 'Eggs', 'Cheese', 'Pork', 'Shrimp', 'Chicken'];

      if (searchParam && acceptableProducts.includes(searchParam.toLowerCase())) {
        res.end('Product found\n');
      } else {
        res.end('Product not found\n');
      }
    } else {
      res.end('Please provide a search query\n');
    }
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

const port = 1564; 
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
