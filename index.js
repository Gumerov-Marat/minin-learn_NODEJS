const express = require ('express')
const path = require('path')
const exphbs = require('express-handlebars')
const { extname } = require('path')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/course')
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
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)


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