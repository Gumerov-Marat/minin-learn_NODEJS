const http = require ('http')

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('<h1>Hello JS</h1>')
  res.end(`<h2>Text</h2>`)
})

server.listen(3000, () => {
  console.log('server is running');
})