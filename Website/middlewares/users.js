let bcrypt = require('bcrypt');
let password = "...";
let resultado = bcrypt.hashSync(password, 10);

console.log(password)
console.log(resultado)
