const express = require ('express')
const path = require('path')
const exphbs = require('express-handlebars')
const { extname } = require('path')
//(1)Создание сервера
const app = express()


// создание объекта hbs
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
//---------------------------
//регистрируем модуль как движок для рендеринга страниц
app.engine('hbs', hbs.engine)
// конфигурируем опции у экспресса
//указываем какой энджин мы будем использовать
app.set('view engine', 'hbs')
//конфигурируем переменную вьюс а вторым параметром - папка  с шаблонами
app.set('views', 'views')
//---------------------------

//подключили папку паблик ( со стилями)
app.use(express.static('public'))


//гет запросы
app.get('/', (req, res) => {
  /*
  функция сенд файл ненужна после добавления hbs
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
  */
  res.render('index')
})

app.get('/about', (req, res) => {
  /*
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
  */
 res.render('about')
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