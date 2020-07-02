const http = require ('http')

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('Hello JS')
  res.end()
})

server.listen(3000, () => {
  console.log('server is running');
})