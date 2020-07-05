const express = require ('express')
const path = require('path')
//(1)Создание сервера
const app = express()

/*(1)
 Гет запрос
*/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})










// создаем Порт - занный вручную или по умолчанию 3000
const PORT = process.env.PORT || 3000


/*
  вызываем метод листен
  -порт 3000
  - отчет что сервер запущен
*/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})