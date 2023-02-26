//Вызвать console.log

console.log("Я JavaScript!");
//Работа с переменными

let admin;
let name = "Джон";
admin = name;
console.log(admin);
//Придумайте правильные имена

let planet;
let user;
//Создайте страницу, которая спрашивает имя у пользователя и выводит его.

let userName = prompt("Введите ваше имя.");
console.log(userName);
//Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

const value = prompt('Какое "официальное" название JavaScript?');

if (value == "ECMAScript") {
  console.log("Верно!");
} else {
  console.log("Не знаете? ECMAScript!");
}
//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в console.log:

let number = prompt("Введите число.");
if (number > 1) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else if (number === 0) {
  console.log(-1);
} else {
  console.log("Данные не верны!");
}

//Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

const a = 1;
const b = 1;
let result = a + b < 4 ? "Мало" : "Много";

// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
let login = "Сотрудник";
let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";

// Проверка значения из диапазона

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age;
age = age >= 14 && age <= 90;

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// Проверка логина
// важность: 3
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Блок-схема:

let userLogin = prompt("Введите Ваш логин!");

if (userLogin === "Админ") {
  let password = prompt("Введите пароль!");

  if (password === "Я главный") {
    console.log("Здравствуйте!");
  } else if (password === "" || pass === null) {
    console.log("Отменено");
  } else {
    console.log("Неверный пароль");
  }
} else if (userLogin === "" || userLogin === null) {
  console.log("Отменено");
} else {
  console.log("Я вас не знаю");
}

//При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   console.log( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let userNumber;

do {
  userNumber = prompt("Введите число больше 100!", 0);
} while (userNumber <= 100 && userNumber);

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

const c = 7;

if (c && !isNaN(c) && c > 1) {
  next: for (let i = 2; i <= c; i++) {
    if (c % i == 0) continue next;
    console.log(i);
  }
}

// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// Перепишите код с использованием одной конструкции switch:
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

const numberS = +prompt("Введите число между 0 и 3", "");

switch (numberS) {
  case 0:
    alert("Вы ввели число 0");
    break;

  case 1:
    alert("Вы ввели число 1");
    break;

  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}
