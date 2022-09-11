/*let a = 5;
let b = 7;

console.log(a + ' > ' + b, a > b);*/

/*"let player1 = 6;
let player2 = 3;

if ( player1 > player2) {
    console.log('Победил игрок 1');
} else {
    console.log('Победил игрок 2');
}*/

/*let login = 'admin';
let userLogin = prompt ('Введите логин');

if (login == userLogin) {
    alert(userLogin + ' Добро пожаловать !!!');
} else {
    alert('Пользователь с логином ' + userLogin + ' не найден');
}*/

let login = 'admin';
let userLogin = prompt ('Введите логин');
let password ='123';
let userPassword = prompt ('Введите пароль');



if (login == userLogin && password == userPassword) {
    alert(userLogin + ' Добро пожаловать !!!');
} else {
    alert('Пользователь с логином ' + userLogin + ' не найден');
}