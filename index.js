const express = require ('express')

//(1)Создание сервера
const app = express()

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