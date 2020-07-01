const os = require('os')
//Platform
console.log(os.platform());

//Архитектура
console.log(os.arch());

// Информация
//console.log(os.cpus());


// Свободная память
console.log(os.freemem(),
             os.totalmem() 
);

// Корневая директория
console.log(os.homedir());

// Сколько система работает

console.log(os.uptime());

