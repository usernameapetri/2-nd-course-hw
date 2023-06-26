/*
Задание 1 
let a = 10;
a = 20;
alert(a);

Задание 2
const iphoneRelease = 2007;
alert(iphoneRelease);

Задание 3
const founderJs = "Brendan Eich";
alert(founderJs);

Задание 4
let a = 10;
let b = 2;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
alert(`sum is ${sum}`);
alert(`difference is ${difference}`);
alert(`product is ${product}`);
alert(`quotient is ${quotient}`);

Задание 5
let b = 2;
let result = b ** 5;
alert(result);

Задание 6
let a = 9;
let b = 2;
let result = a % b;
alert(result);

Задание 7 
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

Задание 8
let age = Number(prompt(`Солько вам лет ?`));
alert(age);

Задание 9
const user = {
  name: "Octavian",
  age: 25,
  isAdmin: true,
};
user.cityofResidence = "Chisinau";
user.age = 15;
delete user.cityofResidence;
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

Задание 10
let name = prompt("Как мне к вам обращаться");
alert(`Привет ${name} !`);
*/

//hw 3

//Задание 1

/*
let password = String("скайпро");
let ceck = String(prompt("Введите пароль"));

ceck === password
  ? alert("Пароль введен верно")
  : alert("Пароль введен неправильно");
*/

//Задание 2
/*
const c = 2;

if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Не верно");
}
*/

//Задание 3
/*
const d = 54;
const e = 166;

if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Не верно");
}
*/
//Задание 4
/*
let a = "2";
let b = "3";
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));
*/

//Задание 5
/*
let monthNumber = Number(
  prompt("Введите номер месяца и узнайко к какому сезону он принадлежит")
);

if (monthNumber < 13 && monthNumber > 0) {
  switch (monthNumber) {
    case 1:
      alert("Зима");

      break;
    case 2:
      alert("Зима");

      break;
    case 3:
      alert("Весна");

      break;
    case 4:
      alert("Весна");

      break;
    case 5:
      alert("Весна");

      break;
    case 6:
      alert("Лето");

      break;
    case 7:
      alert("Лето");

      break;
    case 8:
      alert("Лето");

      break;
    case 9:
      alert("Осень");

      break;
    case 10:
      alert("Осень");

      break;
    case 11:
      alert("Осень");

      break;
    case 12:
      alert("Зима");
      break;
  }
} else {
  alert("Вы ввели не правельный номер месяца ");
}
*/

//Задание 7
/*
let a = Number(prompt("Введите чисто"));

if (!isNaN(a)) {
  if (a % 2 === 0) {
    alert("«Число четное»");
  } else {
    alert("«Число нечетное»");
  }
} else {
  console.log(NaN);
}
*/

//Задание 8
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  alert("«Установите версию приложения для iOS по ссылке».");
} else {
  alert("«Установите версию приложения для Android по ссылке».");
}
